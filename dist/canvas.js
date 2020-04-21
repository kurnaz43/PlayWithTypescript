"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Canvas = /** @class */ (function () {
    function Canvas() {
    }
    Canvas.initialize = function (elementID) {
        var canvas;
        var ctx;
        if (elementID !== undefined) {
            canvas = document.getElementById(elementID);
            if (canvas === undefined) {
                throw new Error('Cannot find a canvas element named:' + elementID);
            }
        }
        else {
            canvas = document.createElement("canvas");
            document.body.appendChild(canvas);
        }
        return canvas;
    };
    return Canvas;
}());
exports.Canvas = Canvas;
