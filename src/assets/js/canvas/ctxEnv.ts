interface Canva {
    CanvaData?: JSON,
    CanvaFrame: object,
    RoofTile: Array<number>;
}

class CanvaData {
    private tile: number;
    private offset: Array<Number>;
    private textSize: string;
    
    constructor(tile: number, offset: Array<number>, textSize: string) {
        this.tile = tile;
        this.offset = offset;
        this.textSize = textSize;
    }
}

class CanvaFrame extends CanvaData {
    private canvas: HTMLCanvasElement;
    private ctx: any;

    constructor(tile: number, offset: Array<number>, textSize: string, canvas: HTMLCanvasElement, ctx: any) {
        super(tile, offset, textSize);
        this.canvas = canvas;
        this.ctx = ctx;
    }
    
    CreateWindow(canvas: HTMLCanvasElement, ctx: any) {
        this.canvas  = document.querySelector('#CanvasWrapper canvas');
        this.ctx = this.canvas.getContext('2d');
        return this;
    }

    Draw() {
        let window = new CreateWindow();

        window.ctx.fillStyle = 'red';
        window.ctx.fillRect(100, 50, 70, 20);
    }
}

// document.addEventListener("DOMContentLoaded", () => {
//     function data(canvas, ctx) {
//         this.canvas = document.querySelector('#CanvasWrapper canvas');
//         this.ctx = this.canvas.getContext('2d');
//         return this;
//     }



//     (function run() {
//         draw();
//     })();
// });