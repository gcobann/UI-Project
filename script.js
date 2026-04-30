// 1. GİRİŞ VE KAYIT SİMÜLASYONU
function sahteGiris(event) {
    event.preventDefault();
    alert("Sunucu ile bağlantı kurulamadı. Lütfen daha sonra tekrar deneyiniz.");
}

// 2. PAZAR YERİ İLAN FİLTRELEME
function filtrele(kategori) {
    let ilanlar = document.querySelectorAll('.ilan-karti');
    ilanlar.forEach(function(ilan) {
        if (kategori === 'hepsi' || ilan.getAttribute('data-kategori') === kategori) {
            ilan.style.display = 'block';
        } else {
            ilan.style.display = 'none';
        }
    });
}

// 3. ÜRÜN SATIN ALMA VE CÜZDAN İŞLEMLERİ
function satinAl() {
    alert("İşlem Başarısız: Cüzdanınızda yeterli bakiye bulunmamaktadır.");
}

function bakiyeYukle() {
    let miktar = prompt("Yüklemek istediğiniz tutarı girin (TL):");
    if (miktar !== null && miktar !== "" && !isNaN(miktar) && Number(miktar) > 0) {
        document.getElementById('bakiye-ekrani').innerText = Number(miktar).toFixed(2) + " TL";
        alert("İşlem Başarılı! Bakiyeniz güncellendi.");
    } else {
        alert("Hata: Lütfen geçerli bir sayı giriniz.");
    }
}

// 4. SAYFA YÜKLENDİĞİNDE ÇALIŞAN SİSTEM
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    
    // A. Ana Sayfadan Gelen Filtreleme
    const filterCat = urlParams.get('filter');
    if (filterCat && document.getElementById('ilanlar-kutusu')) {
        filtrele(filterCat);
    }

    // B. Dinamik Ürün Detayı ve Satıcı Nickleri
    const itemType = urlParams.get('item');
    if (document.getElementById('urun-baslik') && itemType) {
        const urunler = {
            'ak47': { ad: 'AK-47 | Redline', fiyat: '450.00 TL', resim: 'img/ak47redline-ilan.png', oyun: 'CS2 Item', renk: 'bg-warning', satici: 'ProGamer99' },
            'vandal': { ad: 'Asil Vandal', fiyat: '850.00 TL', resim: 'img/asilvandal-ilan.png', oyun: 'Valorant Item', renk: 'bg-danger', satici: 'SkinMaster_X' },
            'awp': { ad: 'AWP | Asiimov', fiyat: '1,250.00 TL', resim: 'img/awpasiimov-ilan.png', oyun: 'CS2 Item', renk: 'bg-warning', satici: 'ProGamer99' },
            'raptor': { ad: 'Raptor +8', fiyat: '3,000.00 TL', resim: 'img/raptor-ilan.png', oyun: 'Knight Online Item', renk: 'bg-info', satici: 'SkinMaster_X' }
        };

        const secilen = urunler[itemType];
        if (secilen) {
            document.getElementById('urun-baslik').innerText = secilen.ad;
            document.getElementById('urun-fiyat').innerText = secilen.fiyat;
            document.getElementById('urun-resim').src = secilen.resim;
            document.getElementById('satici-nick').innerText = secilen.satici;
            document.getElementById('urun-oyun-etiket').innerText = secilen.oyun;
            document.getElementById('urun-oyun-etiket').className = 'badge mb-2 px-3 py-2 ' + secilen.renk + ' text-dark';
        }
    }
}