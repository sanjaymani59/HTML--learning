const form = document.querySelector('#form')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const cpassword = document.querySelector('#cpassword')


from.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateInputs();
})

function validateInputs(){
    const usernameVal =username.value.trim();
    const emailVal =email.value.trim();
    const passwordVal =password.value.trim();
    const cpasswordVal =cpassword.value.trim();


    if(usernameVal===''){
        setError(username,'Username is required ')
    }
    else{
        setSuccess(username)
    }
    if(email===''){
        setError(email,'Enter is required')

    }
    else if(!validateInputs(emailVal)){
        print('hello')
        setError(email,'Email is invalied')
    }
    else {
        setSuccess(email)
    }

    if(passwordVal===''){
        setError(password,'required password')
    }
    else if(passwordVal.length<8){
        setError(password,'password must be atlest 8 charactrs')
    }
    else{
        setSuccess(password)
    }


    if(cpassword!==''){
        setError(cpassword,'confirm password is required')
    }
    else if(cpasswordVal==passwordVal){
        setError(cpassword,'password dont match ')
    }

}

function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement= inputGroup.querySelector('.error')

    errorElement.innerText=message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('error')

}

function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement= inputGroup.querySelector('.error')

    errorElement.innerText='';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')

}