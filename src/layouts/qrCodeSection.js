import canvas, { downloadQrcode } from "../components/canvas";

const container = document.createElement("div");
const button = document.createElement("button");

container.className = "container";
container.appendChild(canvas);

button.className = "btn btn--primary";
button.textContent = "Download";
button.onclick = downloadQrcode;

export default [container, button];
