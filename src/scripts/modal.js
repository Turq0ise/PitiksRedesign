const openModalBtn = document.getElementsByClassName("open-modal-btn");
const closeModalBtn = document.getElementById("close-modal-btn");
const modal = document.getElementById("modal");

for(let i = 0; i < openModalBtn.length; i++) {
    openModalBtn[i].addEventListener("click", () => {
        modal.showModal();
    })
}

closeModalBtn.addEventListener("click", () => {
    modal.close();
})