import { Line } from "./Line";

export class Point {
    private _x: number;

    private _y: number;
    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }


    public get get_x(): number {
        return this._x;
    }
    public get get_y(): number {
        return this._y;
    }

    public set set_x(x: number) {
        this._x = x;
    }
    public set set_y(y: number) {
        this._y = y;
    }

    public distanceTo(pointB: Point): number {
        let distance: number;
        let thisPoint: Point = new Point(pointB.get_x - this._x, pointB.get_y - this._y);
        let lineBetweenPoints: Line = new Line(thisPoint, pointB)
        distance = Math.sqrt(
            (thisPoint.get_x * thisPoint.get_x) + 
            (thisPoint.get_y * thisPoint.get_y)
        );
        return distance;
    }

}