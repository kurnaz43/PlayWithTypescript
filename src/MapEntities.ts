import { Line, _myWalls } from "./Line";
import { myLine } from "./engine";
import { Point } from "./Point";

export class MapEntities {

    private _actPos: Point;
    private _r: number;
    private _color: string;
    private i: number = 0;
    private _intersectionPoint: any;
    private _myLightLines = new Array();

    constructor(actPos: Point, r: number, color: string) {
        this._actPos = actPos;
        this._r = r;
        this._color = color;
    }

    set setX(x: any) {
        this._actPos.set_x = x;
    }
    set setY(y: any) {
        this._actPos.set_y = y;
    }
    get getX(): number {
        return this._actPos.get_x;
    }
    get getY(): number {
        return this._actPos.get_y;
    }


    public update(e?: MouseEvent): void {
        if (e !== undefined) {
            this._actPos.set_x = e.x;
            this._actPos.set_y = e.y;
        }
        //this.clacRDMWalls(5);
        this.clacLight(2000, 0.5, 0);
    }

    public draw(ctx: any): void {
        this.drawWalls(ctx);
        this.drawlight(ctx);
        this.drawCircle(ctx);
    }

    public drawCircle(ctx: any): void {
        ctx.beginPath();
        ctx.arc(this._actPos.get_x, this._actPos.get_y, this._r, 0, 2 * Math.PI);
        ctx.fillStyle = this._color;
        ctx.fill();
    }

    public initialdrawRDMWalls(ctx: any, number: number): void {
        for (let i: number = 0; i < number; i++) {
            Line.drawRandomLine(ctx);
        }
    }
    public drawWalls(ctx: any): void {
        for (let i: number = 0; i < _myWalls.length; i++) {
            _myWalls[i].draw(ctx);
        }
    }
    private drawlight(ctx: any): void {

        for (var i: number = 0; i < this._myLightLines.length; i++) {
            this._myLightLines[i].draw(ctx);
        }
        this._myLightLines = [];
    }
    private clacLight(r: number, theta: number, uberspring: number): void {
        let that = this;
        let x: number = 1;
        while (x <= 360) {
            theta = x + uberspring;
            var lightLine: Line = new Line(
                new Point(
                    that._actPos.get_x,
                    that._actPos.get_y),
                new Point(
                    that._actPos.get_x + r * Math.cos(Math.PI * theta / 180.0),
                    that._actPos.get_y + r * Math.sin(Math.PI * theta / 180.0)),
                that._color);
            // console.log(this._myWalls);

            let rekord: number = Infinity;
            let closest;
            for (let wall of _myWalls) {
                that._intersectionPoint = lightLine.lineIntersection(wall);
                //console.log(lightLine.lineIntersection(_myWalls[i]));
                if (that._intersectionPoint) {
                    let d = that._actPos.distanceTo(that._intersectionPoint);
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
    }
}
