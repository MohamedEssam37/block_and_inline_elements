function hide_or_show(){
    const text = document.getElementById("simple_text")
    const button = document.getElementById("button")

    if(text.style.visibility == "hidden"){
        text.style.visibility = "visible"
        button.innerText = "click me to hide text"
    }else{
        text.style.visibility = "hidden"
        button.innerText = "click me to show text"
    }
}
