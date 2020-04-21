export class Line {
    private _xBeginPos: number;
    private _yBeginPos: number;
    private _xEndPos: number;
    private _yEndPos: number;
    private _color: string;
    private _angle: any;

    constructor(xBeginPos: number, yBeginPos: number, _xEndPos: number, _yEndPos: number, color: string, angle?: number) {
        if (angle !== undefined) {
            this._xBeginPos = xBeginPos;
            this._yBeginPos = yBeginPos;
            this._xEndPos = _xEndPos;
            this._yEndPos = _yEndPos;
            this._color = color;
            this._angle = angle;
        }
        else {
            this._xBeginPos = xBeginPos;
            this._yBeginPos = yBeginPos;
            this._xEndPos = _xEndPos;
            this._yEndPos = _yEndPos;
            this._color = color;
        }
    }
    set setXBeginPos(xBeginPos: any) {
        this._xBeginPos = xBeginPos;
    }
    set setYBeginPos(YBeginPos: any) {
        this._yBeginPos = YBeginPos;
    }
    set setXEndPos(XEndPos: any) {
        this._xEndPos = XEndPos;
    }
    set setYEndPos(YEndPos: any) {
        this._yEndPos = YEndPos;
    }
    get getXBeginPos(): number {
        return this._xBeginPos;
    }
    get getYBeginPos(): number {
        return this._yBeginPos;
    }
    get getXEndPos(): number {
        return this._xEndPos;
    }
    get getYEndPos(): number {
        return this._yEndPos;
    }

    static drawRandomLine(ctx: any): Line {
        var xBegin: number = Math.floor(Math.random() * Math.floor(window.innerWidth));
        var yBegin: number = Math.floor(Math.random() * Math.floor(window.innerHeight));
        var XEnd: number = Math.floor(Math.random() * Math.floor(window.innerWidth));
        var yEnd: number = Math.floor(Math.random() * Math.floor(window.innerHeight));
        var color: string =
            "rgb(" +
            Math.floor(Math.random() * Math.floor(255)) +
            "," +
            Math.floor(Math.random() * Math.floor(255)) +
            "," +
            Math.floor(Math.random() * Math.floor(255)) +
            ")";

        ctx.moveTo(xBegin, yBegin);
        ctx.lineTo(XEnd, yEnd);
        ctx.strokeStyle = color;
        ctx.stroke();
        debugger;
        return new Line(xBegin, yBegin, XEnd, yEnd, color);;
    }

    public draw(ctx: any): void {
        ctx.moveTo(this._xBeginPos, this._yBeginPos);
        ctx.lineTo(this._xEndPos, this._yEndPos);
        ctx.strokeStyle = this._color;
        ctx.stroke();
    }

    /**
     * checkKollison
     */
    public checkKollison(checkLine: Line): Array<number> {
        let x1 = this._xBeginPos
        let x2 = this._xEndPos
        let x3 = checkLine._xBeginPos
        let x4 = checkLine._xEndPos
        let y1 = this._yBeginPos
        let y2 = this._yEndPos
        let y3 = checkLine._yBeginPos
        let y4 = checkLine._xEndPos

        var x: number = ((x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4)) / ((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4));
        var y: number = ((x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4)) / ((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4));
        let numb: number[] = [x, y]
        let numb2: number[] = [9999]
        if (isNaN(x) || isNaN(y)) {
            return numb2;
        } else {
            if (x1 >= x2) {
                if (!(x2 <= x && x <= x1)) { return numb2; }
            } else {
                if (!(x1 <= x && x <= x2)) { return numb2; }
            }
            if (y1 >= y2) {
                if (!(y2 <= y && y <= y1)) { return numb2; }
            } else {
                if (!(y1 <= y && y <= y2)) { return numb2; }
            }
            if (x3 >= x4) {
                if (!(x4 <= x && x <= x3)) { return numb2; }
            } else {
                if (!(x3 <= x && x <= x4)) { return numb2; }
            }
            if (y3 >= y4) {
                if (!(y4 <= y && y <= y3)) { return numb2 }
            } else {
                if (!(y3 <= y && y <= y4)) { return numb2; }
            }
        }
        return numb;
    }
}