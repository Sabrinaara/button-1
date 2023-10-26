const btnCheck = document.querySelector("#button");

const clear = () => {
    setTimeout(() => {
        btnCheck.classList.remove("effect2")
    },1000)
}



btnCheck.addEventListener('click', ()=> {
    btnCheck.classList.add("effect1");
    setTimeout(() => {
        btnCheck.classList.remove("effect1");
        btnCheck.classList.add("effect2");
        clear()
    },2000)
})