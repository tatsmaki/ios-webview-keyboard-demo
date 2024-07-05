import { openDialog } from "./dialog";
import "./style.css";

const dialogButton = document.getElementById("open-dialog")!;

dialogButton.onclick = openDialog;

/* Opacity hack */

const pageInput = document.getElementById("page-input")!;

pageInput.onfocus = () => {
  pageInput.style.opacity = "0";
  setTimeout(() => (pageInput.style.opacity = "1"), 100);
};
