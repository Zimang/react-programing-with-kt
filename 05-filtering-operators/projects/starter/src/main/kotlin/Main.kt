import io.reactivex.rxjava3.core.Observable
import io.reactivex.rxjava3.disposables.CompositeDisposable
import io.reactivex.rxjava3.kotlin.subscribeBy
import io.reactivex.rxjava3.subjects.PublishSubject

fun main(args: Array<String>) {

    // ignoring operator
    exampleOf("ignoreElements") {

        val subscriptions = CompositeDisposable()

        val strikes = PublishSubject.create<String>()

        subscriptions.add(
            strikes.ignoreElements()
                // Returns a Completable, so no onNext in subscribeBy
                .subscribeBy {
                    println("You're out!")
                })

        strikes.onNext("X")
        strikes.onNext("X")
        strikes.onNext("X")

        strikes.onComplete()
        // Disposing of after use
        subscriptions.dispose()
    }

    exampleOf("elementAt") {

        val subscriptions = CompositeDisposable()

        val strikes = PublishSubject.create<String>()

        subscriptions.add(
            strikes.elementAt(3)
                // Returns a Maybe, subscribe with onSuccess instead of onNext
                .subscribeBy(
                    onSuccess = { t -> println("You're out! $t") }
                ))

        strikes.onNext("ge")
        strikes.onNext("joy")
        strikes.onNext("kim")

        // Disposing of after use
        subscriptions.dispose()
        strikes.onNext("peter")
    }

    exampleOf("filter") {

        val subscriptions = CompositeDisposable()

        subscriptions.add(
            Observable.fromIterable(listOf(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
                .filter { number ->
                    number > 5
                }.subscribe {
                    println(it)
                })

        // Disposing of after use
        subscriptions.dispose()
    }

    exampleOf("skip") {
        val subscriptions = CompositeDisposable()

        subscriptions.add(
            Observable.just("A", "B", "C", "D", "E", "F")
                .skip(3)
                .filter { t ->
                    t.get(0).toInt() > 20
                }.subscribe {
                    println("$it to  ${it.get(0).toInt()}")
                })

        // Disposing of after use
        subscriptions.dispose()
    }

    //skip until no skip
    exampleOf("skipWhile") {

        val subscriptions = CompositeDisposable()

        subscriptions.add(
            Observable.just(2, 2, 3, 4)
                .skipWhile { number ->
                    number % 2 == 0
                }.subscribe {
                    println(it)
                })

        // Disposing of after use
        subscriptions.dispose()
    }

    exampleOf("skipUntil") {
        val subscriptions = CompositeDisposable()
        val subject = PublishSubject.create<String>()
        val trigger = PublishSubject.create<String>()

        subscriptions.add(
            subject.skipUntil(trigger)
                .subscribe {
                    println(it)
                })

        subject.onNext("A")
        subject.onNext("B")

        trigger.onNext("X")

        subject.onNext("C")

        // Disposing of after use
        subscriptions.dispose()
    }

    exampleOf("take") {
        val subscriptions = CompositeDisposable()

        subscriptions.add(
            Observable.just(1, 2, 3, 4, 5, 6)
                .take(3)
                .subscribe {
                    println(it)
                })

        // Disposing of after use
        subscriptions.dispose()
    }

    exampleOf("takeWhile") {
        val subscriptions = CompositeDisposable()

        subscriptions.add(
            Observable.fromIterable(listOf(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1))
                .takeWhile { number ->
                    number < 5
                }.subscribe {
                    println(it)
                })

        // Disposing of after use
        subscriptions.dispose()
    }

    exampleOf("takeUntil") {
        val subscriptions = CompositeDisposable()

        val subject = PublishSubject.create<String>()
        val trigger = PublishSubject.create<String>()

        subscriptions.add(
            subject.takeUntil(trigger)
                .subscribe {
                    println(it)
                })

        subject.onNext("1")
        subject.onNext("2")

        trigger.onNext("X")

        subject.onNext("3")

        // Disposing of after use
        subscriptions.dispose()
    }

    exampleOf("distinctUntilChanged") {

        val subscriptions = CompositeDisposable()

        subscriptions.add(
            Observable.just("Dog", "Cat", "Cat", "Dog")
                .distinctUntilChanged()
                .subscribe {
                    println(it)
                })

        // Disposing of after use
        subscriptions.dispose()
    }

    exampleOf("distinctUntilChangedPredicate") {

        val subscriptions = CompositeDisposable()

        subscriptions.add(
            Observable.just("ABC", "BCD", "CDE", "FGH", "IJK", "JKL", "LMN")
                .distinctUntilChanged { first, second ->
                    second.any { it in first }
                }
                .subscribe {
                    println(it)
                }
        )
        // Disposing of after use
        subscriptions.dispose()
    }
}
