function night() {
    document.getElementById("topofpage").style.borderColor = "rgb(107, 68, 36)";
    document.getElementById("topofpage").style.backgroundColor = "rgb(61, 37, 18)";
    
    document.getElementById("todasrecetas").style.borderColor = "rgb(107, 68, 36)";
    document.getElementById("todasrecetas").style.backgroundColor = "rgb(61, 37, 18)";
    
    document.getElementById("startop").style.borderColor = "rgb(107, 68, 36)";
    document.getElementById("startop").style.backgroundColor = "rgb(61, 37, 18)";
    document.getElementById("miLogoPro").src = "miLogoProOscuro.png";
    document.body.style.backgroundImage = "linear-gradient(to right bottom, rgb(141, 94, 55), rgb(61, 37, 18))";
    document.getElementById("startop").style.color = "rgb(255, 174, 53)";
    document.querySelectorAll('.receta').forEach(div => {
        div.style.borderColor = "rgb(128, 83, 47)";
        div.style.backgroundColor = "rgb(99, 60, 29)";
        div.style.color = "rgb(255, 174, 53)";
    });
    
    const buttons = document.querySelectorAll("button:not(#filterOptions button)");
    buttons.forEach(button => {
        button.style.backgroundColor = "rgb(99, 60, 29)";
        button.style.borderColor = "rgb(128, 83, 47)";
    });
}

function day() {
    document.getElementById("topofpage").style.borderColor = "antiquewhite";
    document.getElementById("topofpage").style.backgroundColor = "burlywood";
    
    document.getElementById("todasrecetas").style.borderColor = "antiquewhite";
    document.getElementById("todasrecetas").style.backgroundColor = "burlywood";
    document.getElementById("startop").style.color = "rgb(53, 35, 8)";
    document.getElementById("startop").style.borderColor = "antiquewhite";
    document.getElementById("startop").style.backgroundColor = "burlywood";
    document.getElementById("miLogoPro").src = "miLogoPro.png";
    document.querySelectorAll('.receta').forEach(div => {
        div.style.borderColor = "antiquewhite";
        div.style.backgroundColor = "burlywood";
        div.style.color = "rgb(53, 35, 8)";
        document.body.style.backgroundImage = "linear-gradient(to right bottom, rgb(238, 199, 140), rgb(141, 94, 55))";
    });
    
    const buttons = document.querySelectorAll("button:not(#filterOptions button)");
    buttons.forEach(button => {
        button.style.backgroundColor = "burlywood";
        button.style.borderColor = "antiquewhite";
    });
}