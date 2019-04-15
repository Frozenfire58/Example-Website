// addContentToDiv = () => {
//     // finds element that has the id of "addedWithJS"
//     document.getElementById("addedWithJS").innerHTML = "This was added with JavaScript."
// }


alertClick = () => {
    alert("You have clicked this paragraph");
}

// finds element with the id of "clickedPara"
// then sends an alert to the browser
let element = document.getElementById("clickedPara");
element.addEventListener("click", alertClick)


// window.onload = addContentToDiv;