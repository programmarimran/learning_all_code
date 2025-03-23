function statustrue (){console.log("ami sotto ")}
function statusfalse (){console.log("ami mitta")}

const isAlert =false;

// // if(isAlert){statustrue()}
// // else{statusfalse()}

isAlert?statustrue():statusfalse()//sadaron ternary

// isAlert && statustrue() //sudu sotto hole && use korte hobe ..jodi mitta hole dorker na pore


// isAlert || statusfalse() //sudu mitta hole || use korte hobe .. jodi sotto hole dorker na pore.



// overall  &&==true;
//overall ||==false;
//************************************* */
// const first ="amar desher mati ";
// const second =5
// console.log(typeof -first)
// console.log(typeof -second)
// console.log(second +first )

const item ="imran"
const handleAdd=()=>{
    localStorage.setItem("name",item )
}
const handleClear=()=>{
    localStorage.removeItem("name")
}