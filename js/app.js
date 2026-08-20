document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");
  const modalCaption = document.getElementById("modal-caption");
  const closeBtn = document.querySelector(".close-btn");

  // Add click listener to all figures in the gallery
  document.querySelectorAll(".lightbox-trigger").forEach((figure) => {
    figure.addEventListener("click", () => {
      const img = figure.querySelector("img");
      const caption = figure.querySelector("figcaption");

      modal.style.display = "flex";
      modalImg.src = img.src;
      modalImg.alt = img.alt;
      modalCaption.textContent = caption ? caption.textContent : "";
    });
  });

  // Close modal when clicking the close button
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close modal when clicking anywhere outside the image
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Close modal on Pressing Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "flex") {
      modal.style.display = "none";
    }
  });
});