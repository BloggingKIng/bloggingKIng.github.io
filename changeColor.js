const button = document.querySelector("button.btn")
const nav = document.querySelector("nav")
function changeColorScheme(){
    
    const body = document.querySelector("body")
    if (body.classList.contains('DARK')){
        console.log('lightmode')


        body.style.backgroundColor = "#6adaff"
        body.style.boxShadow = "none"
        body.style.border = "1px solid #565656"
        nav.style.border = "1px solid #565656"
        button.innerHTML = '<span class="material-symbols-outlined">dark_mode</span>'
        body.classList.remove('DARK')
        body.classList.add('light')

    }
    else if (body.classList.contains('light')) {


        body.style.backgroundColor = "#f2f2f2"
        body.style.border = "none"
        nav.style.border = "none"
        body.style.boxShadow = "15px 15px 15px #d6d6d6"
        button.innerHTML = '<span class="material-symbols-outlined">light_mode</span>'
        body.classList.remove("light")
        body.classList.add("DARK")
    }
}

button.addEventListener('click',changeColorScheme)