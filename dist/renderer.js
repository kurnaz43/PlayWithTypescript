"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var kurnaz = __importStar(require("./engine"));
window.onload = function () {
    var myengine = new kurnaz.Engine();
    myengine.init();
};
window.addEventListener('mousemove', function (e) { kurnaz.object.update(e); });
