import * as kurnaz from "./canvas"
import { MapEntities } from "./MapEntities"
import { Line } from "./Line";

export let object: MapEntities;
export var myLine = new Line(300, 300, 400, 400, 'rgb(255,255,255)');
export class Engine {
    private _canvas: HTMLCanvasElement | null = null;
    private _ctx: CanvasRenderingContext2D | null = null;
    public constructor() {

        console.log("constructor of Engine")
    }
    static getctx(): any {
        let canvas = kurnaz.Canvas.initialize('myCanvas');
        let ctx = canvas.getContext('2d');
        return ctx;
    }
    public init(): void {
        object = new MapEntities(99, 99, 10, 'rgb(255,255,255)');
        this._canvas = kurnaz.Canvas.initialize('myCanvas');
        this._ctx = this._canvas.getContext('2d');
        let self = this;
        object.drawRDMWalls(this._ctx, 5);
        setInterval(() => { self.loop() }, 1000 / 30);

    }

    public update(): void {
        if (object !== null) {
            object.update();

        } else {
            throw new Error('object is null');

        }
    }
    public draw(): void {
        if (this._ctx !== null) {
            if (this._canvas !== null) {
                this._ctx.canvas.width = window.innerWidth;
                this._ctx.canvas.height = window.innerHeight;
                this._ctx.fillStyle = 'rgb(0,0,0)'
                this._ctx.fillRect(0, 0, this._ctx.canvas.width, this._ctx.canvas.height);
                myLine.draw(this._ctx);
                object.draw(this._ctx);

            }
            else {
                throw new Error("_canvas is null!");
            }
        }
        else {
            throw new Error("_ctx is null!");
        }
    }

    private loop(): void {
        this.update();
        this.draw();
    }
}