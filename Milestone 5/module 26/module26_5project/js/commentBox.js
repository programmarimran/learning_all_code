const pageTitle =document.getElementById('page-title')
pageTitle.style.textAlign='center'


const inputBtnSend =document.getElementById('btn-send');
const textArea =document.getElementById('text-area');
const commentContainer =document.getElementById('comment-container');

textArea.addEventListener('keyup',function(){
    if(textArea.value){
       inputBtnSend.removeAttribute('disabled')
    }
    else{
        inputBtnSend.setAttribute('disabled',true)
        
    }
   
})

inputBtnSend.addEventListener('click',function(){
    const userNewComment =document.createElement('p');
    userNewComment.classList.add('comment');
    userNewComment.innerText=textArea.value;
    commentContainer.appendChild(userNewComment);
    textArea.value='';
    inputBtnSend.setAttribute('disabled',true)
})