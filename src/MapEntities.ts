import { Line } from "./Line";
import { myLine } from "./engine";

export class MapEntities {

    private _x: number;
    private _y: number;
    private _r: number;
    private _color: string;
    private i: number = 0;
    private _myarray: any;
    private _myList = new Array();
    private _myWalls = new Array();

    constructor(x: number, y: number, r: number, color: string) {
        this._x = x;
        this._y = y;
        this._r = r;
        this._color = color;
    }

    set setX(x: any) {
        this._x = x;
    }
    set setY(x: any) {
        this._x = x;
    }
    get getX(): number {
        return this._x;
    }
    get getY(): number {
        return this._y;
    }


    public update(e?: MouseEvent): void {
        if (e !== undefined) {
            this._x = e.x;
            this._y = e.y;
        }
        //this.clacRDMWalls(5);
        this.clacLight(200, 0.5, 0);
    }

    public draw(ctx: any): void {
        //this.drawRDMWalls(ctx);
        this.drawlight(ctx);
        this.drawCircle(ctx);
    }

    public drawCircle(ctx: any): void {
        ctx.beginPath();
        ctx.arc(this._x, this._y, this._r, 0, 2 * Math.PI);
        ctx.fillStyle = this._color;
        ctx.fill();
    }

    public drawRDMWalls(ctx: any, number: number): void {
        for (let i = 0; i < number; i++) {
            this._myWalls.push(Line.drawRandomLine(ctx));
        }
    }
    private drawlight(ctx: any): void {

        for (var i = 0; i < this._myList.length; i++) {
            this._myList[i].draw(ctx);
        }
        this._myList = [];
    }
    private clacLight(r: number, theta: number, uberspring: number): void {
        let that = this;
        let x = 1;
        while (x <= 360) {
            theta = x + uberspring;
            let lightLine = new Line(
                that._x,
                that._y,
                that._x + r * Math.cos(Math.PI * theta / 180.0),
                that._y + r * Math.sin(Math.PI * theta / 180.0),
                that._color,
                theta);

            for (let i = 0; i < this._myWalls.length; i++) {
                this._myarray = lightLine.checkKollison(this._myWalls[i])
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
    }
}
