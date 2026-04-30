// 1. GİRİŞ VE KAYIT EKRANI SİMÜLASYONU (index.html)
function sahteGiris(event) {
    event.preventDefault(); // Sayfanın yenilenmesini durdurur
    alert("Sunucu ile bağlantı kurulamadı. Lütfen daha sonra tekrar deneyiniz.");
}

// 2. PAZAR YERİ İLAN FİLTRELEME (marketplace.html)
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

// 3. ÜRÜN SATIN ALMA UYARISI (product-detail.html)
function satinAl() {
    alert("İşlem Başarısız: Cüzdanınızda yeterli bakiye bulunmamaktadır.");
}

// 4. CÜZDAN BAKİYE YÜKLEME (wallet.html)
function bakiyeYukle() {
    let miktar = prompt("Yüklemek istediğiniz tutarı girin (TL):");
    if (miktar !== null && miktar !== "" && !isNaN(miktar) && Number(miktar) > 0) {
        document.getElementById('bakiye-ekrani').innerText = Number(miktar).toFixed(2) + " TL";
        alert("İşlem Başarılı! Bakiyeniz güncellendi.");
    } else {
        alert("Hata: Lütfen geçerli bir sayı giriniz.");
    }
}