"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Line_1 = require("./Line");
var Point_1 = require("./Point");
var MapEntities = /** @class */ (function () {
    function MapEntities(actPos, r, color) {
        this.i = 0;
        this._myLightLines = new Array();
        this._actPos = actPos;
        this._r = r;
        this._color = color;
    }
    Object.defineProperty(MapEntities.prototype, "setX", {
        set: function (x) {
            this._actPos.set_x = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapEntities.prototype, "setY", {
        set: function (y) {
            this._actPos.set_y = y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapEntities.prototype, "getX", {
        get: function () {
            return this._actPos.get_x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapEntities.prototype, "getY", {
        get: function () {
            return this._actPos.get_y;
        },
        enumerable: true,
        configurable: true
    });
    MapEntities.prototype.update = function (e) {
        if (e !== undefined) {
            this._actPos.set_x = e.x;
            this._actPos.set_y = e.y;
        }
        //this.clacRDMWalls(5);
        this.clacLight(2000, 0.5, 0);
    };
    MapEntities.prototype.draw = function (ctx) {
        this.drawWalls(ctx);
        this.drawlight(ctx);
        this.drawCircle(ctx);
    };
    MapEntities.prototype.drawCircle = function (ctx) {
        ctx.beginPath();
        ctx.arc(this._actPos.get_x, this._actPos.get_y, this._r, 0, 2 * Math.PI);
        ctx.fillStyle = this._color;
        ctx.fill();
    };
    MapEntities.prototype.initialdrawRDMWalls = function (ctx, number) {
        for (var i = 0; i < number; i++) {
            Line_1.Line.drawRandomLine(ctx);
        }
    };
    MapEntities.prototype.drawWalls = function (ctx) {
        for (var i = 0; i < Line_1._myWalls.length; i++) {
            Line_1._myWalls[i].draw(ctx);
        }
    };
    MapEntities.prototype.drawlight = function (ctx) {
        for (var i = 0; i < this._myLightLines.length; i++) {
            this._myLightLines[i].draw(ctx);
        }
        this._myLightLines = [];
    };
    MapEntities.prototype.clacLight = function (r, theta, uberspring) {
        var that = this;
        var x = 1;
        while (x <= 360) {
            theta = x + uberspring;
            var lightLine = new Line_1.Line(new Point_1.Point(that._actPos.get_x, that._actPos.get_y), new Point_1.Point(that._actPos.get_x + r * Math.cos(Math.PI * theta / 180.0), that._actPos.get_y + r * Math.sin(Math.PI * theta / 180.0)), that._color);
            // console.log(this._myWalls);
            var rekord = Infinity;
            var closest = void 0;
            for (var _i = 0, _myWalls_1 = Line_1._myWalls; _i < _myWalls_1.length; _i++) {
                var wall = _myWalls_1[_i];
                that._intersectionPoint = lightLine.lineIntersection(wall);
                //console.log(lightLine.lineIntersection(_myWalls[i]));
                if (that._intersectionPoint) {
                    var d = that._actPos.distanceTo(that._intersectionPoint);
                    if (d < rekord) {
                        rekord = d;
                        closest = this._intersectionPoint;
                    }
                }
                if (closest !== undefined) {
                    lightLine.setPointB = closest;
                }
            }
            that._myLightLines.push(lightLine);
            x++;
        }
    };
    return MapEntities;
}());
exports.MapEntities = MapEntities;
