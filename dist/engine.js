"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var kurnaz = __importStar(require("./canvas"));
var MapEntities_1 = require("./MapEntities");
var Line_1 = require("./Line");
exports.myLine = new Line_1.Line(300, 300, 400, 400, 'rgb(255,255,255)');
var Engine = /** @class */ (function () {
    function Engine() {
        this._canvas = null;
        this._ctx = null;
        console.log("constructor of Engine");
    }
    Engine.getctx = function () {
        var canvas = kurnaz.Canvas.initialize('myCanvas');
        var ctx = canvas.getContext('2d');
        return ctx;
    };
    Engine.prototype.init = function () {
        exports.object = new MapEntities_1.MapEntities(99, 99, 10, 'rgb(255,255,255)');
        this._canvas = kurnaz.Canvas.initialize('myCanvas');
        this._ctx = this._canvas.getContext('2d');
        var self = this;
        exports.object.drawRDMWalls(this._ctx, 5);
        setInterval(function () { self.loop(); }, 1000 / 30);
    };
    Engine.prototype.update = function () {
        if (exports.object !== null) {
            exports.object.update();
        }
        else {
            throw new Error('object is null');
        }
    };
    Engine.prototype.draw = function () {
        if (this._ctx !== null) {
            if (this._canvas !== null) {
                this._ctx.canvas.width = window.innerWidth;
                this._ctx.canvas.height = window.innerHeight;
                this._ctx.fillStyle = 'rgb(0,0,0)';
                this._ctx.fillRect(0, 0, this._ctx.canvas.width, this._ctx.canvas.height);
                exports.myLine.draw(this._ctx);
                exports.object.draw(this._ctx);
            }
            else {
                throw new Error("_canvas is null!");
            }
        }
        else {
            throw new Error("_ctx is null!");
        }
    };
    Engine.prototype.loop = function () {
        this.update();
        this.draw();
    };
    return Engine;
}());
exports.Engine = Engine;
