const form = document.querySelector(".frm-group");
const list = document.querySelector(".list");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    list.innerHTML += `<li>${form.input.value.trim()}<i class="delete fas fa-trash"></i></li>`;
    form.input.value = "";
})


list.addEventListener("click", e => {
    if(e.target.classList.contains("delete")){
        e.target.parentElement.remove()
    }
})
