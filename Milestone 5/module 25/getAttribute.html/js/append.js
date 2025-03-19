//where do it
const firstContainer = document.getElementById("conatiner")
// what do it
const newLi = document.createElement("li")
newLi.innerText="new gojaribon"
//jevabe add (append) korbo
firstContainer.appendChild(newLi)

const mainContainerParent = document.getElementById("mainContainer")


//what do it
const section =document.createElement("section")
mainContainerParent.appendChild(section)

const h1 =document.createElement("h1")
h1.innerText="My favourite fruits"
section.appendChild(h1)

const ul =document.createElement("ul")
section.appendChild(ul)

const li1 =document.createElement("li")
li1.innerText="Mango"
ul.appendChild(li1)

const li2 =document.createElement("li")
li2.innerText="Banana"
ul.appendChild(li2)

const li3 =document.createElement("li")
li3.innerText="Mango"
ul.appendChild(li3)
