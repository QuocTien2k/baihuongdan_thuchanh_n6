// Chặn chuột phải
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

// Chặn phím DevTools & copy
document.addEventListener("keydown", function (e) {
  // F12
  if (e.keyCode === 123) {
    e.preventDefault();
  }

  // Ctrl + Shift + I / J / C
  if (
    e.ctrlKey &&
    e.shiftKey &&
    ["I", "J", "C"].includes(e.key.toUpperCase())
  ) {
    e.preventDefault();
  }

  // Ctrl + U, Ctrl + S, Ctrl + C
  if (e.ctrlKey && ["U", "S", "C"].includes(e.key.toUpperCase())) {
    e.preventDefault();
  }
});

// Chặn kéo thả ảnh
document.querySelectorAll("img").forEach((img) => {
  img.setAttribute("draggable", "false");
  img.addEventListener("mousedown", (e) => e.preventDefault());
});

// Chặn select toàn trang
document.addEventListener("selectstart", function (e) {
  if (e.target.closest(".cmd")) {
    return; // cho phép chọn text trong CMD
  }
  e.preventDefault();
});

document.querySelectorAll(".copy-email").forEach((el) => {
  el.addEventListener("click", () => {
    const email = el.dataset.email;
    navigator.clipboard.writeText(email);
    alert("Đã copy email: " + email);
  });
});
