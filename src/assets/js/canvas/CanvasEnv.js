document.addEventListener("DOMContentLoaded", () => {
    function data(canvas, ctx) {
        this.canvas = document.querySelector('#CanvasWrapper canvas');
        this.ctx = this.canvas.getContext('2d');
        return this;
    }

    function draw() {
        console.log(data().canvas);
        data().ctx.fillStyle = 'red';
        data().ctx.fillRect(100, 50, 70, 20);


    }

    (function run() {
        draw();
    })();
});