/* وظائف التفاعل: قائمة الهاتف، بطاقات الخدمات، وروابط البيانات. */
(() => {
  const data = window.PROFILE_DATA || {};
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
      menuToggle.setAttribute("aria-label", "فتح القائمة");
    }));
  }

  document.querySelectorAll(".details-toggle").forEach(button => {
    button.addEventListener("click", () => {
      const details = button.nextElementSibling;
      if (!details || !details.classList.contains("service-details")) return;
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      details.hidden = expanded;
      const sign = button.querySelector("span");
      if (sign) sign.textContent = expanded ? "＋" : "−";
      button.firstChild.textContent = expanded ? "تفاصيل الخدمة " : "إخفاء التفاصيل ";
    });
  });

  document.querySelectorAll("[data-profile-link]").forEach(link => {
    const key = link.dataset.profileLink;
    const value = data[key];
    if (typeof value === "string" && value.trim()) {
      link.href = value;
      link.removeAttribute("aria-disabled");
      link.removeAttribute("title");
    } else if (key === "facebook") {
      link.href = "#facebook";
      link.removeAttribute("target");
      link.setAttribute("aria-disabled", "true");
      link.title = "أضف رابط صفحة فيسبوك في js/data.js لتفعيل الزر";
      link.addEventListener("click", event => {
        event.preventDefault();
        alert("أضف رابط صفحة فيسبوك الحقيقي داخل الملف js/data.js في خانة facebook.");
      });
    }
  });

  document.querySelectorAll("[data-profile-text]").forEach(element => {
    const key = element.dataset.profileText;
    if (typeof data[key] === "string") element.textContent = data[key];
  });
})();
