/* =====================================================================
   FAQ.JS — "ENV" FAQ VANZSHOP
   =====================================================================
   Cuma file INI yang perlu lo edit buat nambah / ubah pertanyaan.

   FORMAT:

     ## Nama Kategori | 🛒            ← kategori baru (ikon opsional setelah |)

     ? Pertanyaannya apa? | 💡        ← pertanyaan (ikon opsional setelah |)
     Baris biasa = paragraf jawaban.
     - Baris diawali strip = poin / bullet.
     1. Baris diawali angka = langkah bernomor.

   FORMAT TEKS DI JAWABAN:
     **tebal**                  → teks tebal
     [teks link](garansi.html)  → link
     {wa}                       → otomatis jadi link WhatsApp admin
     {telegram}                 → otomatis jadi link Telegram admin
     {garansi}                  → otomatis jadi link halaman Ketentuan Garansi

   ATURAN:
   • Baris kosong bebas, gak ngaruh.
   • Baris diawali "#" (satu pagar + spasi) = komentar.
   • Link tiap pertanyaan otomatis, misal: faq.html#apa-itu-vanzshop-com
   • JANGAN pakai tanda backtick ( ` ) di teks.
   ===================================================================== */

window.VANZ_FAQ_CONFIG = {
  namaToko: "VanzShop.com",
  tagline: "Solusi Produk Digital Terbaik",
  linkHome: "https://vanzshop.com",
  linkGaransi: "garansi.html",

  // Nomor WA admin format 62xxxx. Kosongkan "" kalau gak dipakai.
  whatsapp: "6281234567890",
  pesanWA: "Halo admin VanzShop, saya mau tanya: ",

  // Username Telegram tanpa @. Kosongkan "" kalau gak dipakai.
  telegram: "vanzshop",

  // Jam operasional admin (tampil di kotak kontak)
  jamOperasional: "Setiap hari, 08.00 – 23.00 WIB"
};


window.VANZ_FAQ = `

## Tentang VanzShop.com | ✨

? Apa itu VanzShop.com? | 💡
VanzShop.com adalah toko digital yang menyediakan berbagai layanan premium seperti ChatGPT, Canva, CapCut, Spotify, YouTube Premium, dan produk digital lainnya dengan harga terjangkau.
Semua proses dibuat sesimpel mungkin: **pilih produk → bayar → pesanan diproses** otomatis atau fast respon.

? Kenapa harus beli di VanzShop.com? | ⚡
- **Harga bersaing**, cocok untuk pengguna pribadi maupun reseller.
- **Proses cepat**, banyak produk aktif otomatis setelah pembayaran.
- **Garansi jelas** sesuai ketentuan tiap produk.
- **Support ramah** via WhatsApp & Telegram.

? Apakah VanzShop.com aman dan terpercaya? | 🔒
InsyaAllah aman. Akun dan layanan yang dijual mengikuti ketentuan platform masing-masing. Data pelanggan hanya digunakan untuk keperluan aktivasi dan **tidak dijual ke pihak lain**.
Selama mengikuti aturan penggunaan di halaman {garansi}, pesanan kamu tetap terlindungi.


## Pemesanan & Pembayaran | 🛒

? Bagaimana cara order di VanzShop.com? | 🛍️
1. Buka halaman utama VanzShop.com.
2. Pilih tombol **Order Sekarang (24/7)**, lalu pilih via Bot Telegram atau Webstore.
3. Pilih produk, isi data yang diminta, lalu lanjut ke pembayaran.
4. Setelah pembayaran terkonfirmasi, sistem/admin akan memproses pesanan kamu.

? Metode pembayaran apa saja yang tersedia? | 💳
Metode pembayaran bisa berbeda tergantung channel order, namun umumnya tersedia:
- Transfer bank & virtual account.
- **QRIS** (semua e-wallet + mobile banking).
- E-wallet tertentu (jika sedang aktif promo).
Detail metode pembayaran muncul otomatis di halaman checkout atau di bot saat kamu order.

? Berapa lama pesanan saya diproses? | ⏱️
- **Produk otomatis:** biasanya diproses dalam hitungan detik sampai menit setelah pembayaran terdeteksi.
- **Produk manual:** estimasi 5–30 menit pada jam operasional.
Kalau ada kendala, langsung chat admin via {wa}.


## Garansi & After-Sales | 🛡️

? Apakah semua produk bergaransi? | 🛡️
Sebagian besar produk di VanzShop.com sudah termasuk garansi, namun **masa dan jenis garansi berbeda-beda**.
Cek detail lengkapnya di halaman {garansi}, lalu pilih produk yang ingin kamu lihat aturannya.

? Bagaimana jika akun saya tiba-tiba tidak bisa login? | 📩
Jangan panik. Screenshot / rekam pesan error-nya, lalu hubungi admin via {wa} atau {telegram} dengan menyertakan:
- Nomor invoice / bukti pembayaran.
- Nama produk yang bermasalah.
- Deskripsi singkat kendalanya + bukti **SS / video**.
Selama masih dalam masa garansi dan mengikuti ketentuan, kami bantu cek dan perbaiki / ganti akses.

? Kapan garansi bisa hangus? | ⚠️
Beberapa contoh kondisi yang bisa menghanguskan garansi:
- Mengubah email / password / keamanan akun tanpa izin admin.
- Membagikan akun ke publik atau menjual kembali tanpa perjanjian.
- Menggunakan akun untuk spam, phising, atau aktivitas yang melanggar ToS platform.
- Melebihi batas login device yang sudah ditentukan.
Selalu baca ketentuan produk sebelum membeli agar garansi tetap aman.

`;
