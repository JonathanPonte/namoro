
function mudarDeNome(){
    const element = document.getElementById("nao");

        element.style.position = "absolute";
        var num = Math.floor(Math.random() * 11);
        var nump = Math.floor(Math.random() * 4);

        console.log(nump);

        if(nump == 0){
            element.style.right = num + "%";
            element.style.left = "unset";
            element.style.top = "unset";
            element.style.bottom = "unset";
        }else if(nump == 1){
            element.style.left = num + "%";
            element.style.right = "unset";
            element.style.top = "unset";
            element.style.bottom = "unset";
        }else if(nump == 2){
            element.style.top = num + "%";
            element.style.left = "unset";
            element.style.right = "unset";
            element.style.bottom = "unset";
        }else if(nump == 3){
            element.style.bottom = num + "%";
            element.style.left = "unset";
            element.style.top = "unset";
            element.style.right = "unset";
        }
    

}


function muitoBem(){
    alert("Muito bem!! Essa é a resposta mais sensata 😌")
}