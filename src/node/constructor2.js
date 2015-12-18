/**
 * @fileOverview
 */

function User(firstName, lastName) {
    this.init(firstName, lastName);
}

User.prototype.init = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

User.prototype.print = function() {
    console.log(this.firstName, this.lastName);
};

var u = new User('John', 'doe');
u.print();

function User2(firstName, lastName) {
    init.call(this, firstName, lastName);
    // Also ↓ OK
    //init.apply(this, [firstName, lastName]);
}

User2.prototype.print = function() {
    console.log(this.firstName, this.lastName);
};

function init() {
    this.firstName = arguments[0];
    this.lastName = arguments[1];
}

var u2 = new User2('John', 'doe');
u2.print();
