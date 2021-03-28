"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var TypeScript = /** @class */ (function () {
    function TypeScript(version) {
        this.version = version;
    }
    TypeScript.prototype.info = function (name) {
        return name + " - " + this.version;
    };
    return TypeScript;
}());
var Car = /** @class */ (function () {
    function Car(idNum, model) {
        this.idNum = idNum;
        this.model = model;
        this.countOfWheels = 4;
    }
    Car.prototype.printCar = function () {
        return this.model + " - " + this.idNum + " - countOfWheels: " + this.countOfWheels;
    };
    return Car;
}());
var Modificators = /** @class */ (function () {
    function Modificators() {
        this.name = 'Kirill';
        this.security = true;
    }
    Modificators.prototype.print = function () {
        return this.name + " - " + this.security;
    };
    return Modificators;
}());
var modificators = new Modificators;
console.log(modificators.print());
var toyota = new Car(1234, 'Toyota');
console.log(toyota.printCar());
var Component = /** @class */ (function () {
    function Component() {
    }
    return Component;
}());
var TestComponent = /** @class */ (function (_super) {
    __extends(TestComponent, _super);
    function TestComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TestComponent.prototype.render = function () {
        console.log('render');
    };
    TestComponent.prototype.print = function () {
        return 'print';
    };
    TestComponent.prototype.summary = function () {
        return 23;
    };
    return TestComponent;
}(Component));
console.log(TestComponent.prototype.print());
