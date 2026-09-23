/* =====================================================================
   FAQ.JS — "ENV" FAQ VANZSHOP
   =====================================================================
   Cuma file INI yang perlu lo edit buat nambah / ubah pertanyaan.

   FORMAT:

     ## Nama Kategori | ikon          ← kategori baru
     ? Pertanyaannya apa? | ikon      ← pertanyaan
     Baris biasa = paragraf jawaban.
     - Baris diawali strip = poin / bullet.
     1. Baris diawali angka = langkah bernomor.

   NAMA IKON YANG BISA DIPAKAI (tulis setelah tanda | ):
     sparkles  bulb     bolt     shield   shield-check  lock    key
     cart      bag      card     wallet   receipt       clock   mail
     alert     help     chat     headset  rocket        gift    user
     refresh   box      star     globe    tag           check   link
     heart     phone    download  device
   (Kalau kosong / salah tulis, otomatis pakai ikon "help")

   FORMAT TEKS DI JAWABAN:
     **tebal**                  → teks tebal
     [teks link](https://...)   → link
     {wa}                       → otomatis jadi link WhatsApp admin
     {telegram}                 → otomatis jadi link Telegram admin
     {garansi}                  → otomatis jadi link halaman Ketentuan Garansi

   ATURAN:
   • Baris kosong bebas, gak ngaruh.
   • Baris diawali "# " (pagar + spasi) = komentar.
   • Link tiap pertanyaan otomatis, misal: faq.html#kapan-garansi-bisa-hangus
   • JANGAN pakai tanda backtick ( ` ) di teks.
   ===================================================================== */

window.VANZ_FAQ_CONFIG = {
  namaToko: "VanzShop.com",
  tagline: "Solusi Produk Digital Terbaik",

  linkHome: "https://vanzshop.com",
  linkGaransi: "https://ketentuan-garansi.vanzshop.com",
  linkOrder: "https://direct-order.vanzshop.com",

  // Nomor WA admin format 62xxxx. Kosongkan "" kalau gak dipakai.
  whatsapp: "62895415204928",
  pesanWA: "Halo admin VanzShop, saya mau tanya: ",

  // Username Telegram tanpa @. Kosongkan "" kalau gak dipakai.
  telegram: "VanzzSkyyID",

  // Jam operasional admin (tampil di kotak kontak)
  jamOperasional: "Admin online setiap hari",

  // Tombol cepat di bawah kolom search
  pencarianPopuler: ["Garansi", "Pembayaran", "Login", "Cara order"],

  // 3 kartu keunggulan di bawah hero (ikon pakai nama dari daftar di atas)
  keunggulan: [
    { ikon: "bolt",         judul: "Proses Cepat",   teks: "Banyak produk aktif otomatis setelah bayar." },
    { ikon: "shield-check", judul: "Garansi Jelas",  teks: "Aturan garansi terbuka untuk tiap produk." },
    { ikon: "headset",      judul: "Support Ramah",  teks: "Admin siap bantu via WhatsApp & Telegram." }
  ]
};


window.VANZ_FAQ = `

## Tentang VanzShop.com | sparkles

? Apa itu VanzShop.com? | bulb
VanzShop.com adalah toko digital yang menyediakan berbagai layanan premium seperti ChatGPT, Canva, CapCut, Spotify, YouTube Premium, dan produk digital lainnya dengan harga terjangkau.
Semua proses dibuat sesimpel mungkin: **pilih produk → bayar → pesanan diproses** otomatis atau fast respon.

? Kenapa harus beli di VanzShop.com? | star
- **Harga bersaing**, cocok untuk pengguna pribadi maupun reseller.
- **Proses cepat**, banyak produk aktif otomatis setelah pembayaran.
- **Garansi jelas** sesuai ketentuan tiap produk.
- **Support ramah** via WhatsApp & Telegram.

? Apakah VanzShop.com aman dan terpercaya? | lock
InsyaAllah aman. Akun dan layanan yang dijual mengikuti ketentuan platform masing-masing. Data pelanggan hanya digunakan untuk keperluan aktivasi dan **tidak dijual ke pihak lain**.
Selama mengikuti aturan penggunaan di halaman {garansi}, pesanan kamu tetap terlindungi.


## Pemesanan & Pembayaran | cart

? Bagaimana cara order di VanzShop.com? | bag
1. Buka halaman utama VanzShop.com.
2. Pilih tombol **Order Sekarang (24/7)**, lalu pilih via Bot Telegram atau Webstore.
3. Pilih produk, isi data yang diminta, lalu lanjut ke pembayaran.
4. Setelah pembayaran terkonfirmasi, sistem/admin akan memproses pesanan kamu.

? Metode pembayaran apa saja yang tersedia? | card
Metode pembayaran bisa berbeda tergantung channel order, namun umumnya tersedia:
- Transfer bank & virtual account.
- **QRIS** (semua e-wallet + mobile banking).
- E-wallet tertentu (jika sedang aktif promo).
Detail metode pembayaran muncul otomatis di halaman checkout atau di bot saat kamu order.

? Berapa lama pesanan saya diproses? | clock
- **Produk otomatis:** biasanya diproses dalam hitungan detik sampai menit setelah pembayaran terdeteksi.
- **Produk manual:** estimasi 5–30 menit pada jam operasional.
Kalau ada kendala, langsung chat admin via {wa}.


## Garansi & After-Sales | shield

? Apakah semua produk bergaransi? | shield-check
Sebagian besar produk di VanzShop.com sudah termasuk garansi, namun **masa dan jenis garansi berbeda-beda**.
Cek detail lengkapnya di halaman {garansi}, lalu pilih produk yang ingin kamu lihat aturannya.

? Bagaimana jika akun saya tiba-tiba tidak bisa login? | key
Jangan panik. Screenshot / rekam pesan error-nya, lalu hubungi admin via {wa} atau {telegram} dengan menyertakan:
- Nomor invoice / bukti pembayaran.
- Nama produk yang bermasalah.
- Deskripsi singkat kendalanya + bukti **SS / video**.
Selama masih dalam masa garansi dan mengikuti ketentuan, kami bantu cek dan perbaiki / ganti akses.

? Kapan garansi bisa hangus? | alert
Beberapa contoh kondisi yang bisa menghanguskan garansi:
- Mengubah email / password / keamanan akun tanpa izin admin.
- Membagikan akun ke publik atau menjual kembali tanpa perjanjian.
- Menggunakan akun untuk spam, phising, atau aktivitas yang melanggar ToS platform.
- Melebihi batas login device yang sudah ditentukan.
Selalu baca ketentuan produk sebelum membeli agar garansi tetap aman.

`;
