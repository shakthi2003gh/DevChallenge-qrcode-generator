import LandingSection from "./layouts/landingSection";
import QrCodeSection from "./layouts/qrCodeSection";
import BG from "./assets/bg-illustration.svg";
import "./styles/index.scss";

export function navigateToLanding() {
  document.body.innerHTML = "";
  document.body.append(...LandingSection);
}

export function navigateToQrcode() {
  document.body.innerHTML = "";
  document.body.append(...QrCodeSection);
}

document.body.style.backgroundImage = `url('${BG}')`;

navigateToLanding();
