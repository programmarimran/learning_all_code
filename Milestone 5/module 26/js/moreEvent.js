//********************************************* */
document.getElementById('page-title')
.addEventListener('dblclick',function(){
    console.log('event triger try to access')
})
//*************************************** */

document.getElementById('user-input')
.addEventListener('focus',function(){
    console.log('focus your name')
})
document.getElementById('user-input2')
.addEventListener('focus',function(){
    console.log('focus your email')
})
document.getElementById('user-input')
.addEventListener('blur',function(){
    console.log('blur your name')
})
document.getElementById('user-input2')
.addEventListener('blur',function(){
    console.log('blur your email')
})
document.getElementById('user-input')
.addEventListener('keyup',function(){
    console.log('keyup your name')
})
document.getElementById('user-input2')
.addEventListener('keyup',function(){
    console.log('keyop your email')
})
//******************************************************
