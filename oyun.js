const meyveSayaci = document.getElementById('meyveSayisi');
let meyveSayisi = 0;
const oyunAlani = document.querySelector('.oyun-alani');

function rastgelePozisyon() {
    let x = Math.random() * (oyunAlani.clientWidth - 60);
    let y = Math.random() * (oyunAlani.clientHeight - 60);
    return {x: x, y: y};
}

function meyveOlustur() {
    let meyve = document.createElement('img');
    meyve.src = '/images/muz.jpg'; // Meyve resminizin kaynağı
    meyve.classList.add('meyve');
    let pozisyon = rastgelePozisyon();
    meyve.style.left = pozisyon.x + 'px';
    meyve.style.top = pozisyon.y + 'px';

    meyve.addEventListener('click', meyveTiklama);
    oyunAlani.appendChild(meyve); 
}

function meyveTiklama(e) {
    e.preventDefault(); 
    e.stopPropagation(); 

    this.remove(); 
    meyveOlustur(); 

    meyveSayisi++;
    meyveSayaci.innerText = meyveSayisi;

    if (meyveSayisi == 20) {
        setTimeout(() => {
            alert("Kazandınız!");
            window.location.reload(); 
        }, 100);
    }
}

setTimeout(() => {
        alert("Kaybettiniz!");
        window.location.reload(); 
}, 20000);

meyveOlustur();