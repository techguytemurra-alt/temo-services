const serviceItems = document.querySelectorAll(".service-item");

serviceItems.forEach((item) => {
  item.addEventListener("click", () => {
    const detailId = item.getAttribute("data-detail");
    const detail = document.getElementById(detailId);

    // თუ უკვე ღიაა -> დახურე
    if (detail.style.display === "block") {
      detail.style.display = "none";
    } else {
      // ყველა detail-ი დახურე
      document
        .querySelectorAll(".service-detail")
        .forEach((d) => (d.style.display = "none"));
      // ამ service-ის detail გახსენი
      detail.style.display = "block";
      // scroll-ით მიიტანე ელემენტამდე
      detail.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

document.querySelectorAll(".close-detail").forEach((btn) => {
  btn.addEventListener("click", () => {
    const detail = btn.parentElement;
    detail.style.display = "none";
  });
});
