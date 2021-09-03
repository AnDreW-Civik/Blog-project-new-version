let btnSendMessage = document.querySelector(".modal-send-btn");
let modal = document.querySelector(".modal");
let close = document.querySelector(".close-btn");

btnSendMessage.addEventListener("click", showModal);
close.addEventListener("click", closeModal);

function showModal(e) {
  e.preventDefault();
  modal.classList.add("block");
  modal.classList.remove("hide");
}

function closeModal() {
  modal.classList.add("hide");
  modal.classList.remove("block");
}

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    closeModal();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide", {
    type: "loop",
    perPage: 1,
    autoplay: true,
    Infinity: true,
    pauseOnHover: false,
  }).mount();
});
