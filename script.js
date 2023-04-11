let dizi=[];
let index=0
let input=document.querySelector("input")
let small=document.querySelector("#colors")
let aud=document.querySelector("audio")
document.querySelector(".btn").addEventListener("click",()=>{
    dizi.push(input.value);
    document.querySelector("#main").style.backgroundColor = input.value;
    small.textContent="Girdiğiniz renkler "+dizi
    console.log("Girilen renk sayısı "+dizi.length);
    for(const x of dizi){
        console.log("Girdiğimiz renkler "+ x);
    }
   
})
function reveal() {
    var reveals = document.querySelectorAll(".effect-3");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 100;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].children[0].classList.add("animate")
        
      } else {
        reveals[i].children[0].classList.remove("animate")
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

document.querySelector("#msc").addEventListener("click",()=>{
    aud.load()
    aud.volume=0.5
    aud.play()
})
window.addEventListener("load",()=>{
  
    alert("Asagidaki background işleminden sonra Konsola bakınız")
})





