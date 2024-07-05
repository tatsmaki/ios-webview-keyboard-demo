const app = document.getElementById("app")!;
const dialog = document.createElement("dialog");
const input = document.createElement("input");
const close = document.createElement("button");

input.placeholder = "Input";
close.textContent = "Close";
dialog.append(input, close);

export const openDialog = () => {
  app.append(dialog);
};

export const closeDialog = () => {
  dialog.remove();
};

close.onclick = closeDialog;
