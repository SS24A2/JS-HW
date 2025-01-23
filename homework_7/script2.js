const firstNameElement=document.getElementById('first-name')
const lastNameElement=document.getElementById('last-name')
const emailElement=document.getElementById('email')
const passwordElement=document.getElementById('password')
const confPasswordElement=document.getElementById('confirm-password')
const registerBtnElement=document.getElementById('register-btn')

const allInputElements=document.getElementsByTagName('input')
const allInputElementsArray = Array.from(allInputElements)

registerBtnElement.addEventListener('click', ()=>{
    if (allInputElementsArray.every((input)=>input.value !== "")){
        if (passwordElement.value===confPasswordElement.value){
            alert(`Registration Successful! First name: ${firstNameElement.value} Last name:${lastNameElement.value} Email:${emailElement.value}`)
        } else {
            alert('Passwords do not match. Please try again.')
        }
    } else {
        alert('Incomplete user information. Please try again.')
    }
})