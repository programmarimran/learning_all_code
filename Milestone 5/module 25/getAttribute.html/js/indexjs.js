const allSection =document.querySelectorAll("section")
// console.log(allSection)
for( const section of allSection){
    section.style.backgroundColor="lightgrey"
    section.style.border="2px solid green"
    section.style.marginBottom ="5px"
    section.style.borderRadius="15px"
    section.style.paddingLeft="50px"
    section.style.color="green"
    // section.style.textAlign="left"
}
// const thirdSection =document.getElementById("thirc-container")
// thirdSection.style.backgroundColor="black"
// thirdSection.style.color="white"

// const addedTheClass =document.getElementById('thirc-container')
// addedTheClass.classList.add("text-center")
// addedTheClass.classList.remove("third_container")
// addedTheClass.getAttribute("class")
// console.log(addedTheClass)


const addWithClassAddClass = document.getElementById("thirc-container")
addWithClassAddClass.classList.add("text-center")
addWithClassAddClass.classList.remove("third_container")