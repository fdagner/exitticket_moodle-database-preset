document.addEventListener("DOMContentLoaded", () => {
  const els = document.querySelectorAll(".field-content.section-feedback");
  els.forEach(el => {
    el.innerHTML = el.innerHTML.replace(/#/g, "&nbsp;&nbsp;").trim();
  });
});
