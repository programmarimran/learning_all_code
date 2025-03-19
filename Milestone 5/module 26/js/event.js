//onclick option 2
function makeYellow (){
    document.body.style.backgroundColor="yellow"
}
//Onclick option 3
const btnMakeRed =document.getElementById("btn-red")
        btnMakeRed.onclick=function makeRed () {
            document.body.style.backgroundColor="Red"
        }

        const btnMakePurple =document.getElementById("btn-purple")
        btnMakePurple.onclick=makePurple;
        function makePurple (){
            document.body.style.backgroundColor="purple"
        }

        document.getElementById('btn-mouse-in').addEventListener('dblclick',function(){
            document.body.style.backgroundColor='red'
        })

        const btnOthers =document.querySelector('#btn-thers');
// console.log(btnOthers)
        btnOthers.addEventListener('event.type:',function(){
            document.body.style.backgroundColor='yellow'
        })
z



//************************************chatgpt others practice**************************************** */
        // btnOthers.addEventListener("keydown", function (event) {
        //     console.log(event.key); // Outputs the key pressed (e.g., "Enter", "a", "ArrowUp")
        // });
        
        // // btnOthers.addEventListener("keydown", function (event) {
        // //     console.log(`Event Type: ${event.type}`);
        // //     console.log(`Target Element: ${event.target.tagName}`);
        // //     console.log(`Key Pressed: ${event.key}`);
        // // });
        