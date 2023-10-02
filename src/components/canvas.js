import QRCode from "qrcode";

const canvas = document.createElement("canvas");
canvas.id = "canvas";
canvas.height = "200";
canvas.width = "200";

export function generateQrcode(text) {
  const canvas = document.getElementById("canvas");

  QRCode.toCanvas(canvas, text, (error) => {
    if (error) console.error(error);
    console.log("success!");
  });
}

export function downloadQrcode() {
  const link = document.createElement("a");
  link.download = "qrcode.png";
  link.href = document.getElementById("canvas").toDataURL();
  link.click();
}

export default canvas;
