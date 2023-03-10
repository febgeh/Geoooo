
let cookies = localStorage.getItem("cookies")
let cursor1= localStorage.getItem("cursor")
let grandma1 = localStorage.getItem("grandma")
let priceGrandma = localStorage.getItem("priceGrandma")
let price = localStorage.getItem("price")
let magicPrice = localStorage.getItem("magic")
let start = true
//finner de lagrede verdiene i local storage ved refresh

//skriver verdiene
document.getElementById("cookies").innerHTML = "cookies ="+ cookies;
document.getElementById("cursor").innerHTML = "cursor =" + cursor1
document.getElementById("grandma").innerHTML = "grandma =" + grandma1 
document.getElementById("price").innerHTML = "cursor price is =" + price
document.getElementById("priceGrandma").innerHTML = "grandma price is =" + priceGrandma
document.getElementById("magic").innerHTML = "MagicCookie price is =" + magicPrice



//ganger cookies etter cursors kjøpt og skriver det ut
setInterval(function(){
    cookies = Number(cookies) + Number(cursor1*3);
    document.getElementById("cookies").innerHTML = "cookies =" + cookies;
    document.getElementById("price").innerHTML = "cursor price is =" + price;
    document.getElementById("priceGrandma").innerHTML = "grandam price is =" + priceGrandma;
    document.getElementById("magic").innerHTML = "MagicCookie price is =" + magicPrice
}, 1000)

//ganger cookies etter grandmas kjøpt og skriver det ut
setInterval(function(){
    cookies = Number(cookies) + Number(grandma1*300);
    document.getElementById("cookies").innerHTML = "cookies =" + cookies;
    background()
}, 4000)


//save
function save(){
    localStorage.setItem("cookies", cookies)
    localStorage.setItem("cursor", cursor1)
    localStorage.setItem("grandma", grandma1)
    localStorage.setItem("price", price)
    localStorage.setItem("priceGrandma", priceGrandma)
    localStorage.setItem("magic", magicPrice)
}

// lagerer automatisk hvert minutt
setInterval(function(){
    localStorage.setItem("cookies", cookies)
    localStorage.setItem("cursor", cursor1)
    localStorage.setItem("grandma", grandma1)
    localStorage.setItem("price", price)
    localStorage.setItem("priceGrandma", priceGrandma)
    localStorage.setItem("magic", magicPrice)

    document.getElementById("gameSaved-container").style.display = "block";
    document.getElementById("gameSavedText").style.display = "block";
    setTimeout(() => {
        document.getElementById("gameSaved-container").style.display = "none";
        document.getElementById("gameSavedText").style.display = "none";
    }, 2000);
}, 60000)

//sletter verdiene og setter de nye i local storage
function reset(){
    cookies = 0;
    cursor1 = 0;
    grandma1= 0;
    priceGrandma = 200
    price = 3
    magicPrice = 500
    start = true
    back.classList.remove("body2");
    back.classList.add("body1");
    localStorage.setItem("start", start)
    document.getElementById("cookies").innerHTML = "cookies ="+cookies 
    localStorage.setItem("cookies", cookies)
    document.getElementById("cursor").innerHTML = "cursor =" +cursor1 
    localStorage.setItem("cursor", cursor1)
    document.getElementById("grandma").innerHTML = "grandma ="+grandma1
    localStorage.setItem("grandma", grandma1)
    document.getElementById("price").innerHTML = "cursor price is="+price
    localStorage.setItem("price", price)
    document.getElementById("priceGrandma").innerHTML = "grandma price is="+priceGrandma
    localStorage.setItem("priceGrandma", priceGrandma)
    document.getElementById("magic").innerHTML = "MagicCookie price is =" + magicPrice
    localStorage.setItem("magic", magicPrice)
}


//henter veriden (onloade="getItem()")
function getItem(){
    cookies = localStorage.getItem("cookies")
    cursor1 = localStorage.getItem("cursor")
    grandma1 = localStorage.getItem("grandma")
    price = localStorage.getItem("price")
    priceGrandma =localStorage.getItem("priceGrandma")
    magicPrice =localStorage.getItem("magic")

}

//cookies +1 for each click
cookies = 0
function Click() {
    cookies = isNaN(cookies) ? 0 : cookies;
    cookies++;
    document.getElementById("cookies").innerHTML = "cookies =" + cookies; 
}

//cursor +1 for each click, checks price, changes price, saves new price in local storage and wtites it on the page
cursor1= 0
price = 3
function cursor(){
    if (cookies >= price){
        cookies -= price
        document.getElementById("cookies").innerHTML = "cookies =" + cookies ;
        price = price * 1.9;
        price = Math.round(price);
        localStorage.setItem("cookies", cookies)
        cursor1 = isNaN(cursor1) ? 0 : cursor1;
        cursor1++;
        localStorage.setItem("cursor", cursor1)
        document.getElementById("cursor").innerHTML = "cursor =" + cursor1

    }
}

//grandms +1 for each click, checks price, changes price, saves new price in local storage and wtites it on the page
grandma1 = 0
priceGrandma = 200
function grandma(){
    if (cookies >= priceGrandma){
        cookies -= priceGrandma;
        document.getElementById("cookies").innerHTML = "cookies =" + cookies ;
        priceGrandma = priceGrandma * 1.9;
        priceGrandma = Math.round(priceGrandma);
        localStorage.setItem("cookies", cookies)
        grandma1 = isNaN(grandma1) ? 0 : grandma1;
        grandma1++;
        localStorage.setItem("grandma", grandma1)
        document.getElementById("grandma").innerHTML = "grandma =" + grandma1 

    }
}

//Makes array with 4 variables that change each second. also generates a random number by the length of the array.
let magicCookie1 = 0
let magicCookie2 = 0
let magicCookie3 = 0
let magicCookie4 = 0
let random = 0
let magic = [magicCookie1, magicCookie2, magicCookie3, magicCookie4];
setInterval(function (){
    magicCookie1 = Math.floor(Math.random()* ((grandma1 * cursor1))*1000)
    magicCookie2 = Math.floor(Math.random()* ((grandma1 * cursor1))*1000)
    magicCookie3 = Math.floor(Math.random()* ((grandma1 * cursor1))*1000)
    magicCookie4 = Math.floor(Math.random()* ((grandma1 * cursor1))*1000)
    random = Math.floor(Math.random() * magic.length);
    document.getElementById("magic").innerHTML = "MagicCookie price is =" + magicPrice
    magic = [magicCookie1, magicCookie2 , magicCookie3, magicCookie4];
}, 1000)

//ser om personen har grandman og cursors. Trekker prisen og adder vunnet cookies. Skriver vedsiden av cookien hvormye du vant eller mast.
let winnings = 0;
function magicCookies(){
    if (cursor1 > 0 || grandma1 > 0){
        if (cookies> magicPrice){
            cookies -= magicPrice
            magicPrice = magicPrice * 3
            cookies += magic[random]
            winnings = magic[random] - (magicPrice/3)
            document.getElementById("magicMinus").style.display="block";
            document.getElementById("magicMinus").innerHTML = "You just won " + winnings
            setTimeout(() => {
                document.getElementById("magicMinus").innerHTML = "You just won " + winnings
                document.getElementById("magicMinus").style.display="none";
            }, 1000);
        }else{
            alert('not enought cookies')
        }
    }else{
        alert('not enough cursors and grandmas')
    }
}


let back = document.getElementById("body");
let con = document.getElementById("congrats");

//bytter backgrund en gang på 10000 cookies.
function background(){
    if (start == true){
        if(Number(cookies) > Number(10000)){
            back.classList.remove("body1");
            back.classList.add("body2");
            con.classList.remove("con");
            con.classList.add("con1");
            start = false
            setTimeout(() => {
                con.classList.remove("con1");
                con.classList.add("con");
            }, 3000);
        }
    }
    
}

