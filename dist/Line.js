"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Point_1 = require("./Point");
exports._myWalls = new Array();
var Line = /** @class */ (function () {
    function Line(pointA, pointB, color) {
        this._pointA = pointA;
        this._pointB = pointB;
        this._color = color;
    }
    Object.defineProperty(Line.prototype, "setPointA", {
        set: function (pointA) {
            this._pointA = pointA;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Line.prototype, "setPointB", {
        set: function (pointB) {
            this._pointB = pointB;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Line.prototype, "getPointA", {
        get: function () {
            return this._pointA;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Line.prototype, "getPointB", {
        get: function () {
            return this._pointB;
        },
        enumerable: true,
        configurable: true
    });
    Line.drawRandomLine = function (ctx) {
        var randomPointA = new Point_1.Point(Math.floor(Math.random() * Math.floor(window.innerWidth)), Math.floor(Math.random() * Math.floor(window.innerHeight)));
        var randomPointB = new Point_1.Point(Math.floor(Math.random() * Math.floor(window.innerWidth)), Math.floor(Math.random() * Math.floor(window.innerHeight)));
        var color = "rgb(" +
            Math.floor(Math.random() * Math.floor(255)) +
            "," +
            Math.floor(Math.random() * Math.floor(255)) +
            "," +
            Math.floor(Math.random() * Math.floor(255)) +
            ")";
        exports._myWalls.push(new Line(randomPointA, randomPointB, color));
    };
    Line.prototype.draw = function (ctx) {
        ctx.moveTo(this._pointA.get_x, this._pointA.get_y);
        ctx.lineTo(this._pointB.get_x, this._pointB.get_y);
        ctx.strokeStyle = this._color;
        ctx.stroke();
    };
    /**
     * checkKollison
     */
    Line.prototype.lineIntersection = function (lineToCheck) {
        this._pointC = lineToCheck.getPointA;
        this._pointD = lineToCheck.getPointB;
        var z1 = (this._pointA.get_x - this._pointB.get_x);
        var z2 = (this._pointC.get_x - this._pointD.get_x);
        var z3 = (this._pointA.get_y - this._pointB.get_y);
        var z4 = (this._pointC.get_y - this._pointD.get_y);
        var dist = z1 * z4 - z3 * z2;
        if (dist == 0) {
            return null;
        }
        var tempA = (this._pointA.get_x * this._pointB.get_y - this._pointA.get_y * this._pointB.get_x);
        var tempB = (this._pointC.get_x * this._pointD.get_y - this._pointC.get_y * this._pointD.get_x);
        var xCoor = (tempA * z2 - z1 * tempB) / dist;
        var yCoor = (tempA * z4 - z3 * tempB) / dist;
        if (xCoor < Math.min(this._pointA.get_x, this._pointB.get_x) || xCoor > Math.max(this._pointA.get_x, this._pointB.get_x) ||
            xCoor < Math.min(this._pointC.get_x, this._pointD.get_x) || xCoor > Math.max(this._pointC.get_x, this._pointD.get_x)) {
            return null;
        }
        if (yCoor < Math.min(this._pointA.get_y, this._pointB.get_y) || yCoor > Math.max(this._pointA.get_y, this._pointB.get_y) ||
            yCoor < Math.min(this._pointC.get_y, this._pointD.get_y) || yCoor > Math.max(this._pointC.get_y, this._pointD.get_y)) {
            return null;
        }
        return new Point_1.Point(xCoor, yCoor);
    };
    return Line;
}());
exports.Line = Line;
