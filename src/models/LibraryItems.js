function LibraryItem(media, removeMethod) {

    // list of possible statuses (enum)
    // prevent code smell (too many literals)
    const STATUSES = {CHECKED_IN: 'in', CHECKED_OUT: 'out'}

    // keeps track of checked-in or out
    // DECORATE media object with "LibraryItem" functionality
    media._status = STATUSES.CHECKED_IN;

    // methods
    media.checkIn = function () {
        this._status = STATUSES.CHECKED_IN;
    }

    media.checkOut = function () {
        this._status = STATUSES.CHECKED_OUT;
    }

    media.isAvailable = function () {
        return this._status === STATUSES.CHECKED_IN;
    }

    // media.remove = function(){
    //     return removeMethod(this);
    // }

    media.remove = removeMethod;

    // return the decorated object
    return media;
}

function Book(title, pages) {
    //this.title = title || '';
    this.title = title ?? ''; // will allow anything except null/undefined
    // ?? is the coalesce operator
    this.pages = pages || 0;
}


// or ES6 syntactic sugar (these are not really classes in the traditional sense)
class Movie {
    title = '';
    runtime;

    constructor(title, runtime) {
        if (title) {
            this.title = title;
        }
        this.runtime = runtime || 0;
    }
}

// let tyler = {name: "tyler", age: 12};
// LibraryItem(tyler);
//
// let book = new Book('Learn Vue', 234);
// LibraryItem(book);
// let movie = new LibraryItem(new Movie('Italian Job', 129));
// movie.price = 45;
//console.log(book, movie, tyler);


export {LibraryItem, Book, Movie}