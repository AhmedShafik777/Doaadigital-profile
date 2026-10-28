// إظهار وإخفاء قائمة التنقل على الهواتف.
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const opened = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(opened));
    menuToggle.setAttribute("aria-label", opened ? "إغلاق القائمة" : "فتح القائمة");
  });
  mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }));
}

// فتح وإغلاق التفاصيل داخل كل بطاقة خدمة.
document.querySelectorAll(".details-toggle").forEach(button => {
  button.addEventListener("click", () => {
    const details = button.nextElementSibling;
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isExpanded));
    details.hidden = isExpanded;
    button.querySelector("span").textContent = isExpanded ? "＋" : "−";
    button.firstChild.textContent = isExpanded ? "تفاصيل الخدمة " : "إخفاء التفاصيل ";
  });
});
