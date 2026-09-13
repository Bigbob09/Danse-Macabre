//window.alert("This page contains sensetive content (such as blood, death, and suicide)")

//-----'What is Danse Macabre?' drop-down
var whdm_state = false

function whdm_act(){
    whdm_state = !(whdm_state)

    if (whdm_state == true){ //-----If the drop-down should be open
        document.getElementById("whdm-inset").style.display = "block";
        document.getElementById("whdm-btn").innerHTML = "<img src='i/Uarrow.png'>";
    } else{ //-----If the drop-down should be closed
        document.getElementById("whdm-inset").style.display = "none";
        document.getElementById("whdm-btn").innerHTML = "<img src='i/Darrow.png'>";
    }
}

//-----'characters' drop-down
var char_state = false

function char_act(){
    char_state = !(char_state)

    if (char_state == true){ //-----If the drop-down should be open
        document.getElementById("char-inset").style.display = "block";
        document.getElementById("char-btn").innerHTML = "<img src='i/Uarrow.png'>";
    } else{ //If the drop-down should be closed
        document.getElementById("char-inset").style.display = "none";
        document.getElementById("char-btn").innerHTML = "<img src='i/Darrow.png'>";
    }
}

//-----'lore pages' drop-down
var lor_state = false

function lor_act(){
    lor_state = !(lor_state)

    if (lor_state == true){
        document.getElementById("lor-inset").style.display = "block";
        document.getElementById("lor-btn").innerHTML = "<img src='i/Uarrow.png'>";
    } else{
        document.getElementById("lor-inset").style.display = "none";
        document.getElementById("lor-btn").innerHTML = "<img src='i/Darrow.png'>";
    }
}

//Test function for the buttons !!Remove before release!!
function test(){
    window.alert("Pressed");
}