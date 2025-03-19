//*********************************************************** */

document.querySelector('#page-btn-title')
.addEventListener('click',function(){
    const pageTitle =document.getElementById('page-title');
    pageTitle.innerText='Change the current page'
})

//*********************************************** */
document.getElementById('btn-submit')
.addEventListener('click',function(){
   const inputName =document.getElementById('input-name')
   
   const loginChecker =document.querySelector('#login-checker')
   loginChecker.innerText='Login Successfully'
})
//************************************************* */
document.getElementById('btn-name-input')
.addEventListener('click',function(){
    const inputName =document.getElementById('input-name');
    const name =inputName.value;
    const nameOutput =document.getElementById('name');
    if(name){
       
    nameOutput.innerText=name;
    }
    else{
        nameOutput.innerText='empty'
    }
    
})
//**************************************************************** */