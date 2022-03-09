// Models are usually prototypes (similar to classes if you are familiar with those)

import {LibraryItem} from "@/models/LibraryItems";

export default function LibraryCollection() {
    // composition would work, but would be a lot of work
    // this.items = [];
    // this.push = function(){
    //
    // }

    // inherit functionality from arrays (ES6+)
    this.__proto__ = [];

    this.addItem = function (item) {
        // this. push works here because LibraryCollection extends an array
        //this.push(new LibraryItem(item, (item) => this.removeItem(item)));
        //this.push(new LibraryItem(item, this.removeItem2));
        this.push(new LibraryItem(item, (function (collection) {
                return function () {
                    // in here, this refers to the item, because it's an
                    // anonymous function and is called from LibraryItem
                    collection.removeItem(this);
                }
            })(this) // this refers to the collection, because it's executed before the argument is passed
        ));

        // let six = (function(a){return a + 1})(5)

        // return "this" to utilize chaining
        return this;
    }

    this.removeItem = function (item) {
        this.splice(this.indexOf(item), 1);
        return this;
    }
    this.removeItem2 = (item) => {
        this.splice(this.indexOf(item), 1);
        return this;
    }

    // somewhere in the collection
    // item.remove()
}