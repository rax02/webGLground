

thanos();
console.log("script running");
function thanos() {
    const canvas = document.querySelector("#glCanvas");
    const gl = canvas.getContext("webgl");
    if (gl == null) {
        alert("webGL not supported");
        return;
    }

    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
}
