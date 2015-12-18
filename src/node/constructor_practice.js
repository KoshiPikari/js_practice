/**
 * @fileOverview
 */

function User() {
    this.initialized = {};
    // ↓ NG????
    this.notInitialized;
}

var u = new User();

u.initialized = {x: 1};
u.notInitialized = {y: 2};

console.log(JSON.stringify(u, null, 2));

function User2() {
    this.initialized = {};
}

var u2 = new User2();

u2.initialized = {x: 1};
u2.notInitialized = {y: 2};

console.log(JSON.stringify(u2, null, 2));
