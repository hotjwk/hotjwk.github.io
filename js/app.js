document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");
  const modalCaption = document.getElementById("modal-caption");
  const closeBtn = document.querySelector(".close-btn");

  document.querySelectorAll(".gallery figure").forEach((figure) => {
    figure.style.cursor = "pointer"; // Ensures mouse cursor shows pointer
    
    figure.addEventListener("click", () => {
      const img = figure.querySelector("img");
      const caption = figure.querySelector("figcaption");

      if (img) {
        // Use currentSrc or src attribute
        modalImg.src = img.currentSrc || img.src;
        modalImg.alt = img.alt || "Enlarged Image";
        modalCaption.textContent = caption ? caption.textContent : "";
        
        modal.classList.add("active");
      }
    });
  });

  const closeModal = () => {
    modal.classList.remove("active");
  };

  closeBtn.addEventListener("click", closeModal);

  // Close when clicking dark overlay background
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Close on Escape key press
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });
});