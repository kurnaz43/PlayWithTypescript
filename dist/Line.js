"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Line = /** @class */ (function () {
    function Line(xBeginPos, yBeginPos, _xEndPos, _yEndPos, color, angle) {
        if (angle !== undefined) {
            this._xBeginPos = xBeginPos;
            this._yBeginPos = yBeginPos;
            this._xEndPos = _xEndPos;
            this._yEndPos = _yEndPos;
            this._color = color;
            this._angle = angle;
        }
        else {
            this._xBeginPos = xBeginPos;
            this._yBeginPos = yBeginPos;
            this._xEndPos = _xEndPos;
            this._yEndPos = _yEndPos;
            this._color = color;
        }
    }
    Object.defineProperty(Line.prototype, "setXBeginPos", {
        set: function (xBeginPos) {
            this._xBeginPos = xBeginPos;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Line.prototype, "setYBeginPos", {
        set: function (YBeginPos) {
            this._yBeginPos = YBeginPos;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Line.prototype, "setXEndPos", {
        set: function (XEndPos) {
            this._xEndPos = XEndPos;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Line.prototype, "setYEndPos", {
        set: function (YEndPos) {
            this._yEndPos = YEndPos;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Line.prototype, "getXBeginPos", {
        get: function () {
            return this._xBeginPos;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Line.prototype, "getYBeginPos", {
        get: function () {
            return this._yBeginPos;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Line.prototype, "getXEndPos", {
        get: function () {
            return this._xEndPos;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Line.prototype, "getYEndPos", {
        get: function () {
            return this._yEndPos;
        },
        enumerable: true,
        configurable: true
    });
    Line.drawRandomLine = function (ctx) {
        var xBegin = Math.floor(Math.random() * Math.floor(window.innerWidth));
        var yBegin = Math.floor(Math.random() * Math.floor(window.innerHeight));
        var XEnd = Math.floor(Math.random() * Math.floor(window.innerWidth));
        var yEnd = Math.floor(Math.random() * Math.floor(window.innerHeight));
        var color = "rgb(" +
            Math.floor(Math.random() * Math.floor(255)) +
            "," +
            Math.floor(Math.random() * Math.floor(255)) +
            "," +
            Math.floor(Math.random() * Math.floor(255)) +
            ")";
        ctx.moveTo(xBegin, yBegin);
        ctx.lineTo(XEnd, yEnd);
        ctx.strokeStyle = color;
        ctx.stroke();
        debugger;
        return new Line(xBegin, yBegin, XEnd, yEnd, color);
        ;
    };
    Line.prototype.draw = function (ctx) {
        ctx.moveTo(this._xBeginPos, this._yBeginPos);
        ctx.lineTo(this._xEndPos, this._yEndPos);
        ctx.strokeStyle = this._color;
        ctx.stroke();
    };
    /**
     * checkKollison
     */
    Line.prototype.checkKollison = function (checkLine) {
        var x1 = this._xBeginPos;
        var x2 = this._xEndPos;
        var x3 = checkLine._xBeginPos;
        var x4 = checkLine._xEndPos;
        var y1 = this._yBeginPos;
        var y2 = this._yEndPos;
        var y3 = checkLine._yBeginPos;
        var y4 = checkLine._xEndPos;
        var x = ((x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4)) / ((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4));
        var y = ((x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4)) / ((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4));
        var numb = [x, y];
        var numb2 = [9999];
        if (isNaN(x) || isNaN(y)) {
            return numb2;
        }
        else {
            if (x1 >= x2) {
                if (!(x2 <= x && x <= x1)) {
                    return numb2;
                }
            }
            else {
                if (!(x1 <= x && x <= x2)) {
                    return numb2;
                }
            }
            if (y1 >= y2) {
                if (!(y2 <= y && y <= y1)) {
                    return numb2;
                }
            }
            else {
                if (!(y1 <= y && y <= y2)) {
                    return numb2;
                }
            }
            if (x3 >= x4) {
                if (!(x4 <= x && x <= x3)) {
                    return numb2;
                }
            }
            else {
                if (!(x3 <= x && x <= x4)) {
                    return numb2;
                }
            }
            if (y3 >= y4) {
                if (!(y4 <= y && y <= y3)) {
                    return numb2;
                }
            }
            else {
                if (!(y3 <= y && y <= y4)) {
                    return numb2;
                }
            }
        }
        return numb;
    };
    return Line;
}());
exports.Line = Line;
