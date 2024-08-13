let inputElement = document.querySelector('input')
let btns = document.querySelectorAll('button')


for(let button of btns){
    button.addEventListener('click',function(e){
        let btnText = e.target.innerText;
        // console.log(btnText)
        if(btnText === 'C'){
            inputElement.value = ''
        }
        else if(btnText === '='){
            // inputElement.value = eval(inputElement.value);
            try{
                inputElement.value = eval(inputElement.value);
            }
            catch(e){
                inputElement.value = "invalid";
            }
            
        }
        else{
            inputElement.value += btnText;
        }
    })
}