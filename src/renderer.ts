import * as kurnaz from "./engine"
import { MapEntities } from "./MapEntities";
window.onload = function () {
    let myengine = new kurnaz.Engine();
    myengine.init();
}
window.addEventListener('mousemove',function(e){ kurnaz.object.update(e)});

