import { Point } from "./Point";

export var _myWalls = new Array();
export class Line {

    private _color: string;

    private _pointA: Point;
    private _pointB: Point;
    private _pointC: Point;
    private _pointD: Point;
    constructor(pointA: Point, pointB: Point, color: string) {
        this._pointA = pointA;
        this._pointB = pointB;
        this._color = color;
    }

    set setPointA(pointA: Point) {
        this._pointA = pointA;
    }
    set setPointB(pointB: Point) {
        this._pointB = pointB;
    }
    get getPointA(): Point {
        return this._pointA;
    }
    get getPointB(): Point {
        return this._pointB;
    }

    static drawRandomLine(ctx: any): void {
        var randomPointA: Point = new Point(
            Math.floor(Math.random() * Math.floor(window.innerWidth)),
            Math.floor(Math.random() * Math.floor(window.innerHeight)));
        var randomPointB: Point = new Point(
            Math.floor(Math.random() * Math.floor(window.innerWidth)),
            Math.floor(Math.random() * Math.floor(window.innerHeight)));
        var color: string =
            "rgb(" +
            Math.floor(Math.random() * Math.floor(255)) +
            "," +
            Math.floor(Math.random() * Math.floor(255)) +
            "," +
            Math.floor(Math.random() * Math.floor(255)) +
            ")";
        _myWalls.push(new Line(randomPointA, randomPointB, color));
    }

    public draw(ctx: any): void {
        ctx.moveTo(this._pointA.get_x, this._pointA.get_y);
        ctx.lineTo(this._pointB.get_x, this._pointB.get_y);
        ctx.strokeStyle = this._color;
        ctx.stroke();
    }

    /**
     * checkKollison
     */
    public lineIntersection(lineToCheck: Line) {
        this._pointC = lineToCheck.getPointA;
        this._pointD = lineToCheck.getPointB;
        var z1 = (this._pointA.get_x - this._pointB.get_x);
        var z2 = (this._pointC.get_x - this._pointD.get_x);
        var z3 = (this._pointA.get_y - this._pointB.get_y);
        var z4 = (this._pointC.get_y - this._pointD.get_y);
        var dist = z1 * z4 - z3 * z2;
        if (dist == 0) {
            return null;
        }
        var tempA = (this._pointA.get_x * this._pointB.get_y - this._pointA.get_y * this._pointB.get_x);
        var tempB = (this._pointC.get_x * this._pointD.get_y - this._pointC.get_y * this._pointD.get_x);
        var xCoor = (tempA * z2 - z1 * tempB) / dist;
        var yCoor = (tempA * z4 - z3 * tempB) / dist;

        if (xCoor < Math.min(this._pointA.get_x, this._pointB.get_x) || xCoor > Math.max(this._pointA.get_x, this._pointB.get_x) ||
            xCoor < Math.min(this._pointC.get_x, this._pointD.get_x) || xCoor > Math.max(this._pointC.get_x, this._pointD.get_x)) {
            return null;
        }
        if (yCoor < Math.min(this._pointA.get_y, this._pointB.get_y) || yCoor > Math.max(this._pointA.get_y, this._pointB.get_y) ||
            yCoor < Math.min(this._pointC.get_y, this._pointD.get_y) || yCoor > Math.max(this._pointC.get_y, this._pointD.get_y)) {
            return null;
        }

        return new Point(xCoor, yCoor);
    }

}