//lager variabler
let hei = document.getElementById("hei"); 
let random = 0
let ganger = 0
//ser hvis det er allerede utført eller ikke(ganger == 0). Random tall fra 1 til 2.  Bytter classe.
function bytt(){
    if (ganger == 0){
        random = Math.floor( Math.random() * 2 )
        if (random == 0){
            hei.classList.remove("bilde");
            hei.classList.add("bilde1");
        }else{
            hei.classList.remove("bilde");
            hei.classList.add("bilde2");
        }
        ganger += 1
    }

}




