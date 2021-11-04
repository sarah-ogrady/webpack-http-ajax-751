import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["button", "reset"]
  connect() {
    console.log("Hello from your first Stimulus controller");
  }

  disable() {
    this.buttonTarget.innerText = "Please wait...";
    this.buttonTarget.setAttribute("disabled", "");
  }

  reset() {
    this.buttonTarget.innerText = "Click me!";
    this.buttonTarget.removeAttribute("disabled", "");
  }
}
