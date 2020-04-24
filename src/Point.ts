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


}