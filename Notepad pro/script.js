import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
let submitbtn = document.getElementById('inout')
let form = document.getElementById('signIn')
let onsubmit1 = document.getElementById('ssmit')
let body = document.getElementsByTagName('body')[0]
submitbtn.addEventListener('click', () => {
    // e.preventDefault()
    if (form.style.display === 'none') {
        body.children[0].style.display = "none"
        body.children[1].style.display = "none"
        body.children[2].style.display = "none"
        body.children[3].style.display = "none"
        body.children[4].style.display = "flex"
    } else {
        form.style.display = 'none'
    }
})
onsubmit1.addEventListener('click', async (e) => {
    e.preventDefault()
    let inputs = document.getElementById('signIn')
    let email = inputs.children[0].lastElementChild
    let name = inputs.children[1].lastElementChild
    let phone = inputs.children[2].lastElementChild
    let password = inputs.children[3].lastElementChild
    let dataObj = {
        mail: email.value,
        userName: name.value,
        Phone: phone.value,
        Password: password.value
    }
    const auth = getAuth();
    try {
        await createUserWithEmailAndPassword(auth, email.value, password.value)
        email.value = ""
        name.value = ""
        phone.value = ""
        password.value = ""
    } catch (e) {
        alert(e.message)
    }


})


