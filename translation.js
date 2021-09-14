const url2 = "https://api.funtranslations.com/translate/pirate.json";

const input=document.querySelector(".inputbar");
const button=document.querySelector(".submitBtn");
const div=document.querySelector(".display");

button.addEventListener("click", function display(){
    const inputvalue=input.value

    fetch(url2+"?"+"text="+inputvalue).then (response=> response.json()).then(data=> {
        div.innerText=data.contents.translated
        console.log(data)
    })
})