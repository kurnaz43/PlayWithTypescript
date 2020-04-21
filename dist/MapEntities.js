"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Line_1 = require("./Line");
var MapEntities = /** @class */ (function () {
    function MapEntities(x, y, r, color) {
        this.i = 0;
        this._myList = new Array();
        this._myWalls = new Array();
        this._x = x;
        this._y = y;
        this._r = r;
        this._color = color;
    }
    Object.defineProperty(MapEntities.prototype, "setX", {
        set: function (x) {
            this._x = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapEntities.prototype, "setY", {
        set: function (x) {
            this._x = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapEntities.prototype, "getX", {
        get: function () {
            return this._x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapEntities.prototype, "getY", {
        get: function () {
            return this._y;
        },
        enumerable: true,
        configurable: true
    });
    MapEntities.prototype.update = function (e) {
        if (e !== undefined) {
            this._x = e.x;
            this._y = e.y;
        }
        //this.clacRDMWalls(5);
        this.clacLight(200, 0.5, 0);
    };
    MapEntities.prototype.draw = function (ctx) {
        //this.drawRDMWalls(ctx);
        this.drawlight(ctx);
        this.drawCircle(ctx);
    };
    MapEntities.prototype.drawCircle = function (ctx) {
        ctx.beginPath();
        ctx.arc(this._x, this._y, this._r, 0, 2 * Math.PI);
        ctx.fillStyle = this._color;
        ctx.fill();
    };
    MapEntities.prototype.drawRDMWalls = function (ctx, number) {
        for (var i = 0; i < number; i++) {
            this._myWalls.push(Line_1.Line.drawRandomLine(ctx));
        }
    };
    MapEntities.prototype.drawlight = function (ctx) {
        for (var i = 0; i < this._myList.length; i++) {
            this._myList[i].draw(ctx);
        }
        this._myList = [];
    };
    MapEntities.prototype.clacLight = function (r, theta, uberspring) {
        var that = this;
        var x = 1;
        while (x <= 360) {
            theta = x + uberspring;
            var lightLine = new Line_1.Line(that._x, that._y, that._x + r * Math.cos(Math.PI * theta / 180.0), that._y + r * Math.sin(Math.PI * theta / 180.0), that._color, theta);
            for (var i = 0; i < this._myWalls.length; i++) {
                this._myarray = lightLine.checkKollison(this._myWalls[i]);
                if (this._myarray[0] !== 9999) {
                    lightLine.setXEndPos = this._myarray[0];
                    lightLine.setYEndPos = this._myarray[1];
                    //console.log("geschnitten")
                    break;
                }
            }
            this._myList.push(lightLine);
            x++;
        }
    };
    return MapEntities;
}());
exports.MapEntities = MapEntities;
