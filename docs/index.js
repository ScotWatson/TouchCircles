/*
(c) 2022 Scot Watson  All Rights Reserved
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

let width;
let height;
let myCanvas;
let myCtx;
window.addEventListener("load", function () {
  document.body.style.backgroundColor = "black";
  myCanvas = document.createElement("canvas");
  document.body.appendChild(myCanvas);
  myCtx = myCanvas.getContext("2d");
  myCtx.clearRect(0, 0, width, height);
  window.addEventListener("resize", resize);
  myCanvas.addEventListener("touchstart", updateCanvas);
  myCanvas.addEventListener("touchmove", updateCanvas);
  myCanvas.addEventListener("touchend", updateCanvas);
  resize();
});

function resize() {
  width = window.innerWidth;
  height = window.innerHeight;
  myCanvas.width = width;
  myCanvas.height = height;
  myCanvas.style.width = width + "px";
  myCanvas.style.height = height + "px";
}

function updateCanvas(evt) {
  myCtx.clearRect(0, 0, width, height);
  for (let touch of evt.touches) {
    if (touch.force) {
      if (touch.force == 0) {
        force = 255;
      } else {
        force = Math.floor(255 * touch.force);
      }
    } else {
      force = 255;
    }
    myCtx.fillStyle = "rgb(" + force + ", " + force + ", " + force + ")";
    console.log(myCtx.fillStyle);
    myCtx.beginPath();
    myCtx.ellipse(touch.clientX, touch.clientX, 250, 250, 0, 0, 2 * Math.PI);
    myCtx.fill();
  }
}
