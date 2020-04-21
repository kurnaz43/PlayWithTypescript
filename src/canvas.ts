export class Canvas {

    private _ctx: any;

    static initialize(elementID?: string): HTMLCanvasElement {
        let canvas: HTMLCanvasElement;
        let ctx: any;

        if (elementID !== undefined) {
            canvas = document.getElementById(elementID) as HTMLCanvasElement;
            if (canvas === undefined) {
                throw new Error('Cannot find a canvas element named:' + elementID);
            }
        }
        else {
            canvas = document.createElement("canvas") as HTMLCanvasElement;
            document.body.appendChild(canvas);
        }
        return canvas;
    }
}
