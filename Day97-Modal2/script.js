const openModal = document.querySelector("#openModal");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal_content");

openModal.addEventListener("click", function () {
  modal.classList.add("open");
});

modalContent.addEventListener("click", function () {
  modal.classList.remove("open");
});
