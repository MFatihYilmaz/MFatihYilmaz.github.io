let dizi=[];
let index=0
let input=document.querySelector("input")
let small=document.querySelector("#colors")
document.querySelector("button").addEventListener("click",()=>{
    dizi.push(input.value);
    document.querySelector("#main").style.backgroundColor = input.value;
    small.textContent="Girdiğiniz renkler "+dizi
    console.log("Girilen renk sayısı "+dizi.length);
    for(const x of dizi){
        console.log("Girdiğimiz renkler "+ x);
    }
})

alert("Konsol kısmında diğer işlemler gözükmekte")





