document.querySelector(".buttonDiv button").onclick = function(){
    getAdvice();
}
async function getAdvice(){
    let response = await fetch('https://api.chucknorris.io/jokes/random');
    let data = await response.json();

    document.querySelector(".advice").innerHTML = data.value;
    document.querySelector(".digits").innerHTML = Math.floor(Math.random() * 200) + "#";
}
document.querySelector("body").onload = function(){
    getAdvice();
}