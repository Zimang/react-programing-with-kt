/*
 * Copyright (c) 2020 Razeware LLC
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * Notwithstanding the foregoing, you may not use, copy, modify, merge, publish, 
 * distribute, sublicense, create a derivative work, and/or sell copies of the 
 * Software in any work that is designed, intended, or marketed for pedagogical or 
 * instructional purposes related to programming, coding, application development, 
 * or information technology.  Permission for such use, copying, modification,
 * merger, publication, distribution, sublicensing, creation of derivative works, 
 * or sale is expressly withheld.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

package com.raywenderlich.android.ourplanet.model

import com.raywenderlich.android.ourplanet.EONETApi
import io.reactivex.rxjava3.core.Observable
import java.text.SimpleDateFormat
import java.util.Locale

object EONET {

    const val API = "https://eonet.gsfc.nasa.gov/api/v2.1/"
    private const val DATE_FORMAT = "yyyy-MM-dd'T'HH:mm:ss'Z'"
    private const val DISPLAY_DATE_FORMAT = "MM/dd/YY"
    const val CATEGORIES_ENDPOINT = "categories"
    const val EVENTS_ENDPOINT = "events"

    val formatter = SimpleDateFormat(DATE_FORMAT, Locale.CHINESE)
    val displayFormatter = SimpleDateFormat(DISPLAY_DATE_FORMAT, Locale.CHINESE)

    private val eonet by lazy {
        EONETApi.create()
    }

    /**
     * TODO 获取Cats
     * Category filed
     * id             :Unique id for this category (integer).
     * title          :The title of the category.
     * description    :The full link to the API endpoint for this specific category
     * link           :A service endpoint that points to the Layers API
     *                 endpoint filtered to
     *                 return only layers from this category.
     * @return
     */
    fun fetchCategories(): Observable<EOCategoriesResponse> {
        return eonet.fetchCategories()
    }

//  fun fetchEvents(category: EOCategory, forLastDays: Int = 360): Observable<List<EOEvent>> {
//    val openEvents = events(forLastDays, false, category.endpoint)
//    val closedEvents = events(forLastDays, true, category.endpoint)
//
//    return Observable.merge(openEvents, closedEvents)
//  }

    /**
     * TODO 获取Events
     * Event fields
     * id            :Unique id for this event.
     * title         :The title of the event.
     * description   :Optional longer description of the event.
     *                Most likely only a sentence or two.
     * link          :The full link to the API endpoint for this specific event.
     * categories    :One or more categories assigned to the event.
     * sources       :One or more sources that refer to more information about the event.
     * geometries    :The geometry will be a GeoJSON object of
     *                either type "Point" or "Polygon."
     * closed        :An event is deemed “closed” when it has ended.
     *                he closed field will include a date/time when
     *                the event has ended.
     *
     * @param forLastDays 默认为1年
     * @return
     */
    fun fetchEvents(forLastDays: Int = 360): Observable<List<EOEvent>> {
        val openEvents = events(forLastDays, false)
        val closedEvents = events(forLastDays, true)

        return Observable.merge(openEvents, closedEvents)
    }

    fun fetchEvents(category: EOCategory, forLastDays: Int = 360): Observable<List<EOEvent>> {
        val openEvents = events(forLastDays, false, category.endpoint)
        val closedEvents = events(forLastDays, true, category.endpoint)

        return Observable.merge(openEvents, closedEvents)
    }


    private fun events(forLastDays: Int, closed: Boolean, endpoint: String): Observable<List<EOEvent>> {
        val status = if (closed) "closed" else "open"
        return eonet.fetchEvents(endpoint, forLastDays, status)
            .map { response ->
                val events = response.events
                events.mapNotNull { EOEvent.fromJson(it) }
            }
    }

    private fun events(forLastDays: Int, closed: Boolean): Observable<List<EOEvent>> {
        val status = if (closed) "closed" else "open"
        return eonet.fetchEvents(forLastDays, status)
            .map { response ->
                val events = response.events
                events.mapNotNull { EOEvent.fromJson(it) }
            }
    }

    /**
     * TODO 1.exclude other cat events   2.sort  by date
     *
     * @param events
     * @param category
     * @return
     */
    fun filterEventsForCategory(events: List<EOEvent>, category: EOCategory): List<EOEvent> {
        return events.filter { event ->
            event.categories.contains(category.id) &&
                    !category.events.map { it.id }.contains(event.id)
        }.sortedWith(EOEvent.compareByDates)
    }
}
