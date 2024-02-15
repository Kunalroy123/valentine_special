function toggleCard(){
    const text = document.getElementById("text");
    if(text.style.display === "none" || text.style.display === ""){
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}