# Canvet Veteriner Kliniği — İçerik & Marka Envanteri

Mevcut Angular sitesinden çıkarıldı. Stitch / görsel arayüz üretiminde referans olarak kullanılmak üzere hazırlanmıştır.

## 1. Kurum Kimliği

- **Marka adı:** Canvet Veteriner Kliniği (tabela/logo: **CAN-VET**)
- **Sektör:** Veteriner kliniği — küçükbaş/büyükbaş hayvan, evcil hayvan, arıcılık danışmanlığı
- **Konum:** Namık Kemal Mahallesi, Arap İbrahim Paşa Cd. No:98/A, 17010 Çanakkale Merkez / Çanakkale
- **Hizmet bölgesi:** Çanakkale Merkez, Lapseki, Ezine, Biga, Bayramiç, Çardak
- **Telefon:** `0286 212 78 77` (tel: +90 286 212 78 77) — ayrıca tabelada `0533 550 70 72` görünüyor (mobil/ikincil hat olabilir, teyit edilmeli)
- **Veteriner hekim:** Atanar Çelik
- **Instagram:** instagram.com/canvetveterinerklinigi
- **Facebook:** facebook.com/CAN.VETveteriner
- **Google Profili / Harita:** share.google/O31fc6nVx3KN56NcL
- **Google Maps embed:** place_id `0x14b1a9fc6714d461:0x820fce80b85e0868` — 4.5★ (22 değerlendirme)

## 2. Logo

Logo **kırmızı/siyah/beyaz** renk şemasında; site tasarımı bilinçli olarak logodan ayrışıp premium yeşil/krem/turuncu paletine gitmiş durumda (marka logosu değişmedi, sadece site teması farklı yön aldı).

- `canvetlogo.png` — Ana logo, beyaz zemin üstünde, kırmızı "CAN-VET" tipografisi + 4 kutulu piktogram (kuş ayak izi, pati izi, nal, çift tırnak izi)
- `canvetlogobeyaz.png` — Logo'nun beyaz/şeffaf versiyonu, koyu (footer) zeminlerde kullanım için

Piktogram seti: kanatlı ayak izi · pati izi (kedi/köpek) · at nalı · çatal tırnak izi (büyükbaş/küçükbaş) — kliniğin "her tür hayvana bakıyoruz" mesajını simgesel olarak taşıyor.

## 3. Renk Paleti (mevcut site teması)

> Not: Bunlar logonun kırmızı/siyahından bilinçli ayrışan, "premium sağlık + sıcak pet care" hedefiyle seçilmiş site temasıdır.

| Token | Hex | Kullanım |
|---|---|---|
| bg | `#f6f1e8` | Sayfa zemini (krem) |
| surface | `#fffdf9` | Kart yüzeyi |
| surface-strong | `#f1e6d5` | Vurgulu kart yüzeyi |
| surface-dark | `#18352f` | Koyu yeşil blok/CTA zemini |
| surface-dark-alt | `#24453d` | Koyu yeşil gradient ikinci ton |
| text | `#16302a` | Ana metin |
| muted | `#5f6f68` | İkincil metin |
| accent | `#d97b3f` | Turuncu/terracotta — CTA, vurgu |
| accent-soft | `#f3d2bc` | Açık turuncu — arka plan vurgusu |
| logo kırmızısı | `~#cc1418` | Sadece logoda, site temasında kullanılmıyor |

## 4. Tipografi

- **Başlık fontu:** Fraunces (serif, display) — weight 500/600/700
- **Gövde fontu:** Manrope (sans-serif) — weight 400/500/600/700/800
- **İkon seti:** Font Awesome 7 (solid) — syringe, heart-pulse, cow, stethoscope, clipboard-check, comments, phone, location-dot, share-nodes

## 5. Sayfa Yapısı / Routing

- `/anasayfa` — Ana sayfa (Hero, Hizmetler, Galeri, Uzmanlık alanları, İletişim CTA, Harita)
- `/iletisim` — İletişim sayfası (Telefon, Adres, Sosyal kanallar kartları + Harita)

Site tek sayfa tipi mimaride: Anasayfa + İletişim. Blog / kampanya / ekip / SSS gibi ayrı sayfa yok.

## 6. Ana Sayfa İçerik Metinleri (birebir)

### Hero

- **Eyebrow:** Canvet Veteriner Kliniği · Çanakkale
- **H1:** Evcil dostlar ve çiftlik hayvanları için sakin, güvenli ve modern bakım.
- **Alt metin:** Çanakkale merkezde; klinik muayene, koruyucu hekimlik, saha desteği ve arıcılık danışmanlığını aynı çatı altında buluşturuyoruz.
- **CTA 1 (primary):** Randevu Planla → /iletisim
- **CTA 2 (secondary):** Hemen Ara → tel:+902862127877

### Güven Kutuları (3'lü)

- **Koruyucu yaklaşım** — Aşılama, rutin takip ve erken teşhis planlaması.
- **Saha tecrübesi** — Büyükbaş, küçükbaş ve neonatal süreçlerde aktif destek.
- **Hızlı erişim** — Randevu, telefonla ön görüşme ve konum bilgisi tek akışta.

### Metrics / Değerler bandı (koyu şerit)

- **Tek merkez** — Evcil hayvan, çiftlik hayvanı ve arıcılık desteği aynı yaklaşım içinde.
- **Planlı iletişim** — Telefonla hızlı ulaşım, konum bilgisi ve net randevu akışı.
- **Yerel güven** — Çanakkale merkezde ailelerin ve üreticilerin tekrar tercih ettiği klinik deneyimi.

### Hizmet Alanları

Bölüm başlığı: "Klinik güvenini, saha deneyimiyle tamamlayan bakım planları"

- **Aşılama ve koruyucu hekimlik** — Bölgesel risklere ve yaş grubuna göre planlanan düzenli bağışıklama programları.
- **Doğum ve jinekolojik takip** — Gebelik kontrolü, reprodüksiyon yönetimi ve postpartum değerlendirmeler.
- **Buzağı ve neonatal bakım** — Doğum sonrası ilk kontrol, gelişim takibi ve kritik dönem desteği.
- **Teşhis ve tedavi uygulamaları** — Klinik muayene ile semptoma özel, hızlı ve kontrollü tedavi planlaması.
- **Rutin sağlık taramaları** — İştah, davranış, kilo ve genel kondisyon üzerinden düzenli sağlık kontrolleri.
- **Danışmanlık ve yönlendirme** — Bakım, beslenme ve süreç yönetimi için açık, uygulanabilir öneriler.

### Uzmanlık Panelleri

**Veterinerlik paneli:**
> "Koruyucu bakım kadar, doğru anda müdahale de önemli."

Her vakada önce sakin değerlendirme, sonra uygulanabilir tedavi planı oluşturuyoruz. Bu yaklaşım hem evcil dostlarda hem de çiftlik hayvanlarında daha öngörülebilir bir bakım süreci sağlıyor.

- Klinik muayene ve laboratuvar destekli teşhis
- Büyükbaş ve küçükbaş hayvanlarda saha müdahalesi
- Neonatal bakım ve doğum sonrası takip

**Arıcılık paneli:**
> "Koloni sağlığı için sezonluk ve sürdürülebilir takip."

- Koloni genel sağlık kontrolü ve kovan değerlendirmesi
- Varroa ve benzeri riskler için yönlendirme
- Sezonluk bakım planlaması ve üretim danışmanlığı
- Temel ekipman ve ihtiyaç planı hakkında destek

### Ziyaret / İletişim CTA bloğu

> "Kliniğe kolayca ulaşın, bakım sürecini vakit kaybetmeden başlatın."

Namık Kemal Mahallesi, Arap İbrahim Paşa Cd. No:98/A, 17010 Çanakkale Merkez / Çanakkale

Çanakkale merkez dışında Lapseki, Ezine, Biga, Bayramiç ve Çardak bölgelerinden gelen danışanlar için de erişilebilir veteriner kliniği desteği sunuyoruz.

CTA: İletişim Sayfası · CTA: Yol Tarifi

## 7. İletişim Sayfası İçerik Metinleri

- **Eyebrow:** İletişim
- **H1:** Can Vet ile hızlıca bağlantı kurun.
- **Alt metin:** Randevu planlamak, yol tarifi almak veya bakım süreci hakkında ön bilgi edinmek için bize doğrudan ulaşabilirsiniz.

**Kartlar:**

- **Telefon** — 0286 212 78 77 — Muayene, kontrol ve danışmanlık için çalışma saatleri içinde doğrudan ulaşabilirsiniz. (CTA: Hemen Ara)
- **Adres** — Namık Kemal Mahallesi — Arap İbrahim Paşa Cd. No:98/A, 17010 Çanakkale Merkez / Çanakkale (CTA: Yol Tarifi Al)
- **Sosyal Kanallar** — Güncel paylaşımlar — Klinik yaşamı ve duyurular için sosyal medya hesaplarımızı ziyaret edebilirsiniz. (Instagram / Facebook / Google)

## 8. Footer İçeriği

- **Marka açıklaması:** Can Vet, Çanakkale'de koruyucu bakım, klinik değerlendirme ve saha desteğini aynı güven diliyle sunar.
- **Konum bloğu:** Namık Kemal Mahallesi, Arap İbrahim Paşa Cd. No:98/A, 17010 Çanakkale Merkez / Çanakkale (link: Haritada Aç)
- **Hızlı erişim:** Anasayfa · İletişim · 0286 212 78 77
- **Sosyal:** Instagram · Facebook · Google Profili
- **Alt bilgi (bottom bar):** Can Vet Veteriner Kliniği — Koruyucu bakım, saha desteği ve danışmanlık

## 9. Ekip Bilgisi

**Atanar Çelik** — Veteriner Hekim (site içinde "Veteriner Hekim Atanar Çelik" olarak tek isim geçiyor; başka ekip üyesi/kadro bilgisi mevcut değil).

> Not: Sitede kullanılan `atanarresim.png` görseli düşük kaliteli/kötü kesilmiş bir stok görsel izlenimi veriyor — gerçek hekim fotoğrafı olup olmadığı teyit edilmeli. Stitch'e ekip görseli olarak vermeden önce kontrol edilmesi önerilir.

## 10. Görsel Envanteri (public/ klasörü)

### Kullanılabilir — yüksek/orta kalite, gerçek/editöryal fotoğraflar

| Dosya | Açıklama |
|---|---|
| `card1.jpg` | Büyükbaş hayvana saha koşullarında aşı/enjeksiyon uygulaması (yakın çekim, el+şırınga) |
| `card2.jpg` | Anne inek yeni doğmuş buzağıyı samanlıkta yalıyor — duygusal, güçlü kare |
| `card3.jpg` | İki benekli buzağı, kulak küpeli, samanlık ortamında ayakta/yatarken |
| `card4.jpg` | Stetoskopla büyükbaş hayvan muayenesi, yakın çekim el+stetoskop |
| `card5.jpg` | Arıcı, ayçiçeği tarlasında bal peteği çerçevesini kontrol ediyor |
| `card6.jpg` | Arıcı geniş planda, tütsü/duman aletiyle kovan bakımı yapıyor |
| `card7.jpg` | Mor çiçek üzerinde bal arısı makro fotoğrafı |
| `card8.jpg` | Arıcı, renkli kovan sırasında çalışırken (yeşil kıyafet, geniş plan) |
| `A.jpg` | Klinik vitrin/tabela fotoğrafı — "CAN-VET" logosu, "Veteriner Hekim Atanar Çelik", telefon numarası cam üzerinde |
| `B.jpg` | Klinik içi — kırmızı/siyah CAN-VET forması giyen kişi, müşteriye ilaç/ürün veriyor |

### Kullanımı tartışmalı / önerilmeyen görseller

| Dosya | Açıklama |
|---|---|
| `atanarresim.png` | Beyaz önlüklü doktor — arka planı kötü/posterize kesilmiş, muhtemelen düşük çözünürlüklü stok/AI görsel. Kişiselleştirme amacıyla küçük rozette kullanılabilir ama hero'da önerilmez. |
| `arkaplan.jpg` | Açık gri çizgi-illüstrasyon "pet care" deseni (mama kutusu, tablet, pati, dükkan ikonu) — çocuksu/klişe template hissi veriyor, premium konumlandırmayla uyumsuz. |
| `C.jpg` | Elde tutulan köpek maması konservesi (Paw Paw marka) — ürün/market çekimi, marka kimliğiyle doğrudan ilgisi zayıf. |
| `D.jpg` | Raftaki arıcılık kıyafetleri (depo/dolap içi) — atmosfer/kalite düşük. |
| `slide1.jpg` | At/büyükbaş hayvana enjeksiyon — geniş plan, profesyonel kalite. Kullanılabilir ama card1 ile içerik olarak örtüşüyor. |

### İkon/illüstrasyon PNG'leri (tıbbi temalı, kullanım amacı belirsiz)

| Dosya | Açıklama |
|---|---|
| `Bee Hive.png` | Kovan illüstrasyonu/ikon (şeffaf arka plan) |
| `Bees.png` | Arı sürüsü illüstrasyonu/ikon |
| `Heartbearth.png` | Kalp atışı / EKG temalı ikon-görsel |
| `Lungs.png` | Akciğer temalı ikon-görsel |
| `Virus.png` | Virüs temalı ikon-görsel |

> Bu 5 PNG şu anda hiçbir component'te kullanılmıyor (kod içinde referans yok) — ileride "hizmetler" veya "sağlık" bölümü için düşünülmüş olabilir ama üslup olarak siteyle (fotoğraf ağırlıklı, ikon değil) uyumsuz.

### Logo dosyaları

| Dosya | Açıklama |
|---|---|
| `canvetlogo.png` | Ana logo, açık zemin için |
| `canvetlogobeyaz.png` | Logo beyaz versiyon, koyu zemin için |
| `favicon.ico` | Favicon |

## 11. Mevcut SEO İçerikleri

- **Title:** Canvet Veteriner Kliniği \| Çanakkale Veteriner Kliniği
- **Meta description:** Canvet Veteriner Kliniği, Çanakkale veteriner kliniği arayanlar için klinik muayene, koruyucu hekimlik, saha hizmeti ve danışmanlık sunar. Çanakkale merkez, Lapseki, Ezine, Biga, Bayramiç ve Çardak bölgelerine hizmet verir.
- **Meta keywords:** Çanakkale veteriner kliniği, Canvet Veteriner Kliniği, Çanakkale veteriner, Lapseki veteriner, Ezine veteriner, Biga veteriner, Bayramiç veteriner, Çardak veteriner, veteriner kliniği Çanakkale
- **OG title:** Canvet Veteriner Kliniği \| Çanakkale Veteriner Kliniği
- **OG description:** Çanakkale merkez, Lapseki, Ezine, Biga, Bayramiç ve Çardak için veteriner kliniği hizmeti. Canvet Veteriner Kliniği ile klinik bakım, saha desteği ve danışmanlık.
- **OG image:** /canvetlogo.png
- **Twitter card:** summary_large_image — aynı title/description, image: /canvetlogo.png
- **theme-color:** #18352f
- **geo meta:** region: TR-17, placename: Çanakkale
- **robots:** index, follow

**Structured data (JSON-LD):**

```json
{
  "@context": "https://schema.org",
  "@type": "VeterinaryCare",
  "name": "Canvet Veteriner Kliniği",
  "telephone": "+90 286 212 78 77",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Namık Kemal Mahallesi, Arap İbrahim Paşa Cd. No:98/A",
    "addressLocality": "Çanakkale Merkez",
    "addressRegion": "Çanakkale",
    "postalCode": "17010",
    "addressCountry": "TR"
  },
  "areaServed": ["Çanakkale", "Çanakkale Merkez", "Lapseki", "Ezine", "Biga", "Bayramiç", "Çardak"],
  "serviceType": ["Veteriner kliniği", "Klinik muayene", "Koruyucu hekimlik", "Saha hizmeti"]
}
```

## 12. Blog İçerikleri

Sitede blog/haber/duyuru bölümü **bulunmuyor**. Yalnızca Anasayfa ve İletişim sayfaları var.

## 13. Stitch İçin Hızlı Özet Notlar

- **Ton:** Premium, sakin, güven veren sağlık markası — klişe "pati ikonlu" veteriner sitesi görünümünden kaçınılmalı.
- **Görsel ağırlık:** Editöryal/gerçek fotoğraf (aşılama, buzağı, arıcılık, muayene) — illüstrasyon/clipart değil.
- **Renk yönü:** Krem/bej zemin + koyu orman yeşili (vurgu blokları) + terracotta turuncu (CTA/accent). Logo kırmızısı sadece logoda kalıyor.
- **Tipografi:** Serif başlık (Fraunces benzeri) + sans gövde (Manrope benzeri) — sağlık + editoryal karışımı.
- **Hizmet eksenleri:** (1) Küçük evcil hayvan kliniği, (2) Büyükbaş/küçükbaş saha hizmeti, (3) Arıcılık danışmanlığı — üç ayrı ama eşit ağırlıklı iş kolu.
- **Coğrafi kapsam:** Çanakkale merkez + 5 ilçe (Lapseki, Ezine, Biga, Bayramiç, Çardak) — local SEO için önemli.
- **Eksik/dikkat:** Tek hekim ismi var (ekip sayfası yok), blog yok, atanarresim.png ve arkaplan.jpg kalite/uyum sorunlu, tıbbi ikon PNG'leri (Lungs/Virus/Heartbearth) kullanılmıyor ve muhtemelen dahil edilmemeli.

---

*Bu belge, mevcut Angular kod tabanının (src/app/component/\*, src/index.html, public/\*) statik analiziyle oluşturulmuştur. İçerik/telefon/adres bilgileri koddan birebir alınmıştır; iş sahibiyle teyit edilmesi önerilir (özellikle ikinci telefon numarası 0533 550 70 72).*
