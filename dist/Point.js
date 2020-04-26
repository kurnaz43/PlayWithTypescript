"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Line_1 = require("./Line");
var Point = /** @class */ (function () {
    function Point(x, y) {
        this._x = x;
        this._y = y;
    }
    Object.defineProperty(Point.prototype, "get_x", {
        get: function () {
            return this._x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "get_y", {
        get: function () {
            return this._y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "set_x", {
        set: function (x) {
            this._x = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "set_y", {
        set: function (y) {
            this._y = y;
        },
        enumerable: true,
        configurable: true
    });
    Point.prototype.distanceTo = function (pointB) {
        var distance;
        var thisPoint = new Point(pointB.get_x - this._x, pointB.get_y - this._y);
        var lineBetweenPoints = new Line_1.Line(thisPoint, pointB);
        distance = Math.sqrt((thisPoint.get_x * thisPoint.get_x) +
            (thisPoint.get_y * thisPoint.get_y));
        return distance;
    };
    return Point;
}());
exports.Point = Point;
