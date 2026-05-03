# DropDeal - Dijital İtem ve Oyun Eşyası Pazarı

DropDeal, oyuncuların oyun içi eşyalarını (skin, bıçak, VP, GB vb.) güvenle inceleyebileceği ve yönetim simülasyonu yapabileceği modern, kullanıcı dostu bir pazar yeri arayüzü (UI) prototipidir. Bu proje, e-ticaret dinamiklerini oyuncu estetiğiyle birleştiren bir "Front-end" çalışmasıdır.

## 🚀 Özellikler

* **Modern Karanlık Tema (Dark Mode):** Oyuncu kitlesine hitap eden, göz yormayan, Bootstrap 5 tabanlı modern siyah ve sarı renk paleti.
* **Dinamik Sepet Sistemi:** Sayfa yenilenmeden çalışan, "Offcanvas" (yandan açılır menü) entegreli ve anlık fiyat hesaplaması yapan JavaScript tabanlı sepet modülü.
* **Gelişmiş Pazar Yeri Filtrelemesi:** CS2, Valorant ve Knight Online kategorilerine veya fiyat aralığına göre anında sonuç veren filtreleme sistemi.
* **Bento Grid Tasarımı:** Ana sayfada popüler kategorileri şık ve güncel trendlere uygun şekilde sergileyen ızgara (bento box) düzeni.
* **Kullanıcı Paneli Simülasyonu:** Cüzdan bakiyesi yükleme, aktif ilanları yönetme ve geçmiş satın alımları listeleyen sekmeli profil sayfası tasarımı.
* **Responsive (Mobil Uyumlu) Tasarım:** Mobil cihazlar, tabletler ve masaüstü bilgisayarlarda kusursuz çalışan esnek yapı.

## 🛠️ Kullanılan Teknolojiler

* **HTML5 & CSS3:** Sayfa iskeleti ve özel stillendirmeler (bento grid, hover animasyonları, backdrop-filter blur efektleri).
* **JavaScript (Vanilla):** DOM manipülasyonu, sepet dizisi işlemleri, dinamik ürün filtreleme ve etkileşimli bakiye güncellemeleri.
* **Bootstrap 5.3:** Grid sistemi, modallar (giriş/kayıt), offcanvas bileşenleri ve carousel (kampanya sliderı).
* **FontAwesome 6.4:** Modern ve anlaşılır vektörel ikon seti.

## 📂 Proje Yapısı

* `index.html`: Kampanya slider'ı ve bentobox kategorilerin bulunduğu giriş sayfası.
* `marketplace.html`: Ürünlerin listelendiği, detaylı filtreleme yapılabilen pazar yeri.
* `detail.html` / `detailawp.html`: Ürün açıklamaları, satıcı puanları ve teslimat bilgilerini içeren özel ürün sayfaları.
* `profile.html`: Cüzdan yönetimi, aktif ilanlar ve işlem geçmişinin bulunduğu kullanıcı merkezi.
* `style.css`: Projeye özgü karanlık tema ayarları, özel animasyonlar ve responsive düzenlemeler.
* `script.js`: Sepet mantığı, filtreleme algoritması ve UI etkileşimlerini yöneten temel dosya.

## 💻 Kurulum ve Çalıştırma

Bu proje tamamen istemci tarafında (client-side) çalıştığı için herhangi bir sunucu kurulumuna gerek duymaz.

1.  Projeyi bilgisayarınıza indirin.
2.  `index.html` dosyasını herhangi bir web tarayıcısı (Chrome, Edge, Firefox vb.) ile açın.
3.  Geliştirme aşamasındaysanız, VS Code "Live Server" eklentisi ile anlık değişiklikleri takip ederek çalıştırabilirsiniz.

---
*Not: Bu proje bir UI (Kullanıcı Arayüzü) prototipidir. Giriş yapma, kayıt olma veya bakiye yükleme gibi işlemler şu an için simülasyon amaçlıdır ve bir veri tabanına bağlı değildir.*
