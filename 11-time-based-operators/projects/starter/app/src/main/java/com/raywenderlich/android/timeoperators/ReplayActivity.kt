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
import androidx.appcompat.app.AppCompatActivity
import com.raywenderlich.android.timeoperators.utils.dispatchAfter
import com.raywenderlich.android.timeoperators.utils.timer
import io.reactivex.rxjava3.android.schedulers.AndroidSchedulers
import io.reactivex.rxjava3.core.Observable
import io.reactivex.rxjava3.disposables.CompositeDisposable
import kotlinx.android.synthetic.main.activity_replay.replay_1
import kotlinx.android.synthetic.main.activity_replay.replay_2
import java.util.concurrent.TimeUnit

class ReplayActivity : AppCompatActivity() {
    private var disposables = CompositeDisposable()
    private val elementsPerSecond = 1L
    private val replayedElements = 2
    private val replayDelayInMs = 3200L
    private val maxElements = 10

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_replay)

        /** 每一秒钟有elementsPerSecond个Disposable
         * 眼睛看到的就是{括号返回的}
         * 不会做出任何动作
         *
         * value作为计数器限制最多接收5个
         * 5个Observable --replay--> 5个ConnectableObservable
         */
        val sourceObservable = Observable.create<Int> { emitter ->
            var value = 1
            val disposable = timer(elementsPerSecond.toInt()) {
                if (value <= maxElements) {
                    emitter.onNext(value)
                    value++
                }
            }
//    }.replay(replayedElements)
        }.replay()

//    val sourceObservable = Observable.interval(1/elementsPerSecond,
//      TimeUnit.SECONDS, AndroidSchedulers.mainThread()).replay(replayedElements)

        sourceObservable.subscribe(replay_1)
        /**
         * this display elements received by the second subscription in
         * another  marble view
         */
        dispatchAfter(replayDelayInMs) {
            sourceObservable.subscribe(replay_2)
        }

        sourceObservable.connect()
    }

    override fun onDestroy() {
        super.onDestroy()
        disposables.dispose()
    }
}
