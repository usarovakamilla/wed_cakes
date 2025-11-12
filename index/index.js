let btn = document.querySelector(".main_button");
btn.addEventListener("click", btn_click);

function btn_click() {
    document.querySelector("body").classList.toggle("body_style");
}

let modal = document.querySelector(".reg-modal");
let btn_reg = document.querySelector(".btn-reg");
let span = document.querySelector(".reg-modal__close");
btn_reg.addEventListener("click", () => {
    modal.classList.add("block");
});
span.addEventListener("click", () => {
    modal.classList.remove("block");
});

