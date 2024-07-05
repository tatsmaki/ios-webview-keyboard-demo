const app = document.getElementById("app")!;
const dialog = document.createElement("dialog");
const dialogInput = document.createElement("input");
const close = document.createElement("button");

dialogInput.placeholder = "Input";
close.textContent = "Close";
dialog.append(dialogInput, close);

export const openDialog = () => {
  app.append(dialog);
};

export const closeDialog = () => {
  dialog.remove();
};

close.onclick = closeDialog;

/* Opacity hack */

dialogInput.onfocus = () => {
  dialogInput.style.opacity = "0";
  setTimeout(() => (dialogInput.style.opacity = "1"), 100);
};

/* Visual viewport test */

const initialHeight = window.innerHeight;

visualViewport?.addEventListener("resize", () => {
  const viewportHeight = visualViewport?.height || 0;
  const isKeyboardOpen = viewportHeight < initialHeight;

  if (isKeyboardOpen) {
    // const { bottom } = dialogInput.getBoundingClientRect();
    // const padding = 8;
    // dialog.style.top = `calc(50% - ${bottom - viewportHeight / 2}px)`;
    // dialogInput.value = String(dialog.style.top);
    // dialogInput.value = String(bottom);
  } else {
    // dialog.style.top = "50%";
  }
});
