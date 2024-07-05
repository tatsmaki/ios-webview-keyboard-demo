import { openDialog } from "./dialog";
import "./style.css";

const dialogButton = document.getElementById("open-dialog")!;
// const viewportText = document.getElementById("viewport")!;

dialogButton.onclick = openDialog;

visualViewport?.addEventListener("resize", () => {
  console.log(visualViewport?.height);
  //   viewportText.textContent = String(
  //     visualViewport?.height || window.innerHeight
  //   );
});
