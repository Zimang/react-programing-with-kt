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

package com.raywenderlich.android.timeoperators

import android.os.Bundle
import android.util.Log
import androidx.appcompat.app.AppCompatActivity
import com.raywenderlich.android.timeoperators.utils.timer
import io.reactivex.rxjava3.android.schedulers.AndroidSchedulers
import io.reactivex.rxjava3.core.Observable
import io.reactivex.rxjava3.disposables.CompositeDisposable
import io.reactivex.rxjava3.kotlin.Observables
import io.reactivex.rxjava3.kotlin.addTo
import io.reactivex.rxjava3.subjects.PublishSubject
import kotlinx.android.synthetic.main.activity_window.*
import java.util.concurrent.TimeUnit

class WindowActivity : AppCompatActivity() {
    private val elementsPerSecond = 1
    private val windowTimeSpan = 1000L
    private val windowMaxCount = 10L

    private val compositeDisposable = CompositeDisposable()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_window)

        val sourceObservable = PublishSubject.create<String>()

        timer(elementsPerSecond) {
            sourceObservable.onNext("🐱")
        }.addTo(compositeDisposable)

        sourceObservable.subscribe(windowSource)

        val sour = sourceObservable.window(
            windowTimeSpan,
            TimeUnit.SECONDS,
            AndroidSchedulers.mainThread(),
            windowMaxCount
        )
//        val obob=sour.flatMap { windowedObservable ->
//            windowedObservable
//                .map { it }
//              .concatWith(Observable.just(""))
//        }

        val mar = sour
            .doOnNext {
                Log.i("Love", "marble creaet")
                val marbleView = MarbleView(this)
                marble_views.addView(marbleView)
            }
//            .map {
//            Log.i("LoveAndPeace","new mar")
//            var mar=MarbleView(this)
//            marble_views.addView(mar)
//            mar
            .map {
                marble_views.getChildAt(marble_views.childCount - 1) as MarbleView
            }



        Observables.zip(sour, mar) { ob, mar ->
            ob to mar
        }.flatMap { (ob, mar) ->
            ob.map { str ->
                Log.i("Love", "ob map")
                mar to str
            }.concatWith(Observable.just(mar to ""))
//            }.concatWith(Observable.just( mar to ""))
        }
            .subscribe { (marbleView, value) ->
                if (value == "") {
                    Log.i("Love", "complete")
                    marbleView.onNext("Q")
                    marbleView.onComplete()
                } else {
                    Log.i("Love", "B")
                    marbleView.onNext(value)
                }
            }
            .addTo(compositeDisposable)
    }

    override fun onDestroy() {
        super.onDestroy()
        compositeDisposable.dispose()
    }
}
