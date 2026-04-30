// 1. Navbar Giriş Uyarı Sistemi
function girisUyarisi() {
    alert("Giriş sistemi şu an yapım aşamasındadır. Lütfen ilanlara üye olmadan göz atın.");
}

// 2. Ürün Detay Sayfası - Satın Alma Simülasyonu
function satinAl() {
    let onay = confirm("Bu ürünü satın almak istediğinize emin misiniz?");
    if(onay) {
        alert("HATA: Cüzdanınızda yeterli bakiye bulunmuyor. Lütfen Cüzdanım sayfasından bakiye yükleyiniz.");
    } else {
        alert("İşlem iptal edildi.");
    }
}

// 3. Pazar Yeri Sayfası - Kategori Filtreleme Sistemi
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

// 4. Cüzdan Sayfası - Bakiye Yükleme Mantığı
let mevcutBakiye = 0.00;

function bakiyeYukle() {
    let miktar = prompt("Yüklemek istediğiniz tutarı giriniz (TL):");
    
    // Geçerli bir sayı girilip girilmediğinin kontrolü
    if (miktar !== null && miktar.trim() !== "" && !isNaN(miktar) && miktar > 0) {
        mevcutBakiye += parseFloat(miktar);
        // HTML'deki bakiye ekranını bul ve güncelle
        let bakiyeEkrani = document.getElementById('bakiye-ekrani');
        if (bakiyeEkrani) {
            bakiyeEkrani.innerText = mevcutBakiye.toFixed(2) + " TL";
        }
        alert(miktar + " TL başarıyla cüzdanınıza eklendi!");
    } else {
        alert("Geçersiz bir tutar girdiniz. Lütfen geçerli bir sayı girin.");
    }
}