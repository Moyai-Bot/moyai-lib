"use strict";
class Collection extends Map {
    constructor() {
        super();
    }
    /**
    * Find first element who pass the function.
    * @param func function to pass.
    */
    find(func) {
        for (const item of this.values()) {
            if (func(item)) {
                return item;
            }
        }
        return undefined;
    }
    /**
    * Get all elements who pass the function.
    * @param func function to pass.
    */
    filter(func) {
        const arr = [];
        for (const item of this.values()) {
            if (func(item)) {
                arr.push(item);
            }
        }
        return arr;
    }
    /**
    * Get elements but every have if pass the function or not.
    * @param func function to pass.
    */
    map(func) {
        const arr = [];
        for (const item of this.values()) {
            arr.push(func(item));
        }
        return arr;
    }
    /**
    * Check for every item pass the function.
    * @param func function to pass.
    */
    every(func) {
        for (const item of this.values()) {
            if (!func(item)) {
                return false;
            }
        }
        return true;
    }
    /**
    * Check if some item pass the function.
    * @param func function to pass.
    */
    some(func) {
        for (const item of this.values()) {
            if (func(item)) {
                return true;
            }
        }
        return false;
    }
    toString() {
        return "[Collection]";
    }
    toJSON() {
        const json = {};
        for (const item of this.values()) {
            json[item.id] = item;
        }
        return json;
    }
}
module.exports = Collection;
