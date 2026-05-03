function bakiyeGuncelle()
{
    let girilenDeger = document.getElementById('yukleInput').value;
    if(girilenDeger > 0)
    {
        document.getElementById('mevcutBakiye').innerText = parseFloat(girilenDeger).toFixed(2) + " TL";
        document.getElementById('yukleInput').value = "";
    }
    else
    {
        alert("Lütfen geçerli bir tutar girin!");
    }
}

let sepet = [];

function sepeteEkle(event)
{
    event.stopPropagation();
    
    let buton = event.target;
    let sutun = buton.closest('.ilan-sutun');
    let kart = buton.closest('.ilan-kart') || buton.closest('.ko-kart');

    let fiyat = parseFloat(sutun.getAttribute('data-fiyat'));
    let resim = kart.querySelector('img').src;
    
    let isim = "";
    if(kart.querySelector('h5')) isim = kart.querySelector('h5').innerText;
    else if(kart.querySelector('.ko-baslik')) isim = kart.querySelector('.ko-baslik').innerText;
    else if(kart.querySelector('h3')) isim = kart.querySelector('h3').innerText;

    sepet.push({ isim: isim, fiyat: fiyat, resim: resim });

    sepetiGuncelle();
    
    let sepetOffcanvas = new bootstrap.Offcanvas(document.getElementById('sepetOffcanvas'));
    sepetOffcanvas.show();
}

function sepetiGuncelle()
{
    document.getElementById('sepetSayaci').innerText = sepet.length;
    
    let icerik = document.getElementById('sepetIcerik');
    let toplamAlan = document.getElementById('sepetToplam');
    
    if (sepet.length === 0)
    {
        icerik.innerHTML = `
        <div class="text-center text-secondary mt-5">
            <i class="fas fa-box-open fs-1 mb-3"></i>
            <p>Sepetiniz şu an boş.</p>
        </div>`;
        toplamAlan.innerText = "0 TL";
        return;
    }

    let html = '';
    let toplamTutar = 0;

    sepet.forEach((urun, index) => 
    {
        toplamTutar += urun.fiyat;
        html += `
        <div class="d-flex align-items-center mb-3 bg-black p-2 rounded-3 border border-secondary position-relative">
            <img src="${urun.resim}" width="60" height="60" class="object-fit-contain rounded me-3 bg-dark">
            <div class="flex-grow-1">
                <h6 class="text-white mb-1" style="font-size: 14px;">${urun.isim}</h6>
                <h6 class="text-success fw-bold mb-0">${urun.fiyat.toLocaleString('tr-TR')} TL</h6>
            </div>
            <!-- Silme Butonu -->
            <button class="btn btn-sm btn-outline-danger border-0 position-absolute top-50 end-0 translate-middle-y me-2" onclick="sepettenCikar(${index})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
        `;
    });

    icerik.innerHTML = html;
    toplamAlan.innerText = toplamTutar.toLocaleString('tr-TR') + " TL";
}

function sepettenCikar(index)
{
    sepet.splice(index, 1);
    sepetiGuncelle();
}

function filtrele()
{
    let csSecili = document.getElementById('oyunCS').checked;
    let valoSecili = document.getElementById('oyunValo').checked;
    let koSecili = document.getElementById('oyunKO').checked;

    let minInput = document.getElementById('minFiyat').value;
    let maxInput = document.getElementById('maxFiyat').value;
    
    let minFiyat = minInput === "" ? 0 : parseFloat(minInput);
    let maxFiyat = maxInput === "" ? Infinity : parseFloat(maxInput);

    let tumIlanlar = document.querySelectorAll('.ilan-sutun');

    tumIlanlar.forEach(ilan =>
    {
        let oyun = ilan.getAttribute('data-oyun');
        let fiyat = parseFloat(ilan.getAttribute('data-fiyat'));
        
        let oyunaUygun = false;
        let fiyataUygun = false;

        if
        (
            (oyun === 'cs2' && csSecili) || 
            (oyun === 'valo' && valoSecili) || 
            (oyun === 'ko' && koSecili)
        )
        {
            oyunaUygun = true;
        }

        if (fiyat >= minFiyat && fiyat <= maxFiyat)
        {
            fiyataUygun = true;
        }

        if (oyunaUygun && fiyataUygun)
        {
            ilan.style.display = '';
        }
        else
        {
            ilan.style.display = 'none';
        }
    });
}

function detaydanSepeteEkle(isim, fiyat, resim)
{
    sepet.push({ isim: isim, fiyat: fiyat, resim: resim });

    sepetiGuncelle();

    alert(isim + " başarıyla sepete eklendi knk!");
}

function gelistiriliyorUyarisi()
{
    alert("🛠️ Bu özellik şu an geliştirilme aşamasındadır knk! Sunucu bağlantıları yakında eklenecek.");
}

document.addEventListener('DOMContentLoaded', () =>
{
    const hedefHash = window.location.hash;

    if (hedefHash)
    {
        document.getElementById('oyunCS').checked = false;
        document.getElementById('oyunValo').checked = false;
        document.getElementById('oyunKO').checked = false;

        if (hedefHash === '#cs2') document.getElementById('oyunCS').checked = true;
        if (hedefHash === '#valo') document.getElementById('oyunValo').checked = true;
        if (hedefHash === '#ko') document.getElementById('oyunKO').checked = true;

        if (typeof filtrele === "function")
        {
            filtrele();
        }
    }
});