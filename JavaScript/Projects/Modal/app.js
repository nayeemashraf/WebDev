const modalBtns = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".close-modal");

// displays the modal with the button click.
const displayModal = () => {
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");
};

// closes the modal with the button click.
const closeModal = () => {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
};

// closes the modal with Escape key.
const closeWithkeydown = (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
};

// Event handler for displaying the modal.
modalBtns.forEach((modal) => modal.addEventListener("click", displayModal));
// Event handler for closing the modal on clicking the close button.
closeModalBtn.addEventListener("click", closeModal);
// Event handler for closing the modal if the click is on the overlay element.
overlay.addEventListener("click", closeModal);
// Event handler to close the modal if the keypress is Escape key.
document.addEventListener("keydown", closeWithkeydown);
