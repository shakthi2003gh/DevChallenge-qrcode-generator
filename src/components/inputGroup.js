import { navigateToQrcode } from "../index";
import { generateQrcode } from "./canvas";

const inputGroup = document.createElement("div");
const input = document.createElement("input");
const button = document.createElement("button");

input.type = "text";
input.placeholder = "Enter an url";
input.oninput = () => {
  const text = input.value.trim();
  if (text.length === 0) button.disabled = true;
  else button.disabled = false;
};

button.className = "btn btn--primary";
button.textContent = "QR code";
button.disabled = true;
button.onclick = () => {
  const text = input.value.trim();
  if (text.length === 0) return;

  navigateToQrcode();
  generateQrcode(text);
};

inputGroup.className = "input-group";
inputGroup.append(input, button);

export default inputGroup;
