import io.reactivex.rxjava3.core.*
import io.reactivex.rxjava3.disposables.CompositeDisposable
import io.reactivex.rxjava3.kotlin.*
import io.reactivex.rxjava3.subjects.*

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

fun main(args: Array<String>) {

    //map
    //brain(eye) -> eye map
    exampleOf("map") {

        val subscriptions = CompositeDisposable()

        subscriptions.add(
            Observable.just("M", "C", "V", "I")
                .map {
                    it.romanNumeralIntValue()
                }
                .subscribeBy {
                    println(it)
                })
    }

    //brain(brain(eye)) -> brain(eye) & brain(brain(eye)) both  无序的二位数组
    exampleOf("flatMap") {

        val subscriptions = CompositeDisposable()

        val ryan = Student(BehaviorSubject.createDefault(80))
        val charlotte = Student(BehaviorSubject.createDefault(90))

        val stuMap = PublishSubject.create<Student>()
        val student = PublishSubject.create<Student>()

        // Observable<BehaviorSubject<Int>!>!
        val tec = stuMap.map { it.score }

        student
            .flatMap { it.score }
            .subscribe { println(it) }
            .addTo(subscriptions)

        student.onNext(ryan)
        ryan.score.onNext(95)

        student.onNext(charlotte)
        ryan.score.onNext(5)

        charlotte.score.onNext(100)
    }

//有序的二维数组
    exampleOf("switchMap") {

        val ryan = Student(BehaviorSubject.createDefault(80))
        val charlotte = Student(BehaviorSubject.createDefault(90))

        val student = PublishSubject.create<Student>()

        student
            .switchMap { it.score }
            .subscribe { println(it) }

        student.onNext(ryan)

        ryan.score.onNext(85)

        student.onNext(charlotte)

        ryan.score.onNext(95)

        charlotte.score.onNext(100)
    }

    exampleOf("toList") {

        val subscriptions = CompositeDisposable()

        val items = PublishSubject.create<Int>()

        subscriptions.add(
            items
                .take(4)
                .toList()
                .subscribeBy {
                    println(it)
                }
        )
        items.onNext(1)
        items.onNext(1)
        items.onNext(1)
//        items.onNext(1)
    }

    //无法控制ob(ob)，用ma&dema处理ob(ob)里面的ob出现onError的情况
    //materialize to deal with outter ob
    //dematerialize to deal open inner ob
    exampleOf("materialize/dematerialize") {

        val subscriptions = CompositeDisposable()

        val ryan = Student(BehaviorSubject.createDefault(80))
        val charlotte = Student(BehaviorSubject.createDefault(90))

        val student = BehaviorSubject.createDefault<Student>(ryan)

        val studentScore = student
            .switchMap {
//                it.score
                it.score.materialize()
            }

        studentScore
            .filter {
                if (it.error != null) {
                    println(it.error)
                    false
                } else {
                    true
                }
            }
            .dematerialize {
                it
            }
            .subscribe {
                println(it)
            }
            .addTo(subscriptions)

        ryan.score.onNext(85)

        ryan.score.onError(RuntimeException("Error!"))

        //onError stop rayan
        ryan.score.onNext(1000)

        student.onNext(charlotte)
    }
}
