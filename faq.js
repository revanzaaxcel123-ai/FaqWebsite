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
     users     refresh  box      star     globe         tag     check
     crown     trending percent
   (Kalau kosong / salah tulis, otomatis pakai ikon "help")

   FORMAT TEKS DI JAWABAN:
     **tebal**                  → teks tebal
     [teks link](https://...)   → link
     {wa}                       → link WhatsApp admin
     {telegram}                 → link Telegram admin
     {garansi}                  → link halaman Ketentuan Garansi
     {reseller}                 → link WA "join reseller"
     {order}                    → link halaman order

   ATURAN:
   • Baris kosong bebas, gak ngaruh.
   • Baris diawali "# " (pagar + spasi) = komentar.
   • JANGAN pakai tanda backtick ( ` ) di teks.
   ===================================================================== */

window.VANZ_FAQ_CONFIG = {
  namaToko: "VanzShop.com",
  tagline: "Pusat App Premium Termurah",

  linkHome: "https://vanzshop.com",
  linkGaransi: "https://ketentuan-garansi.vanzshop.com",
  linkOrder: "https://direct-order.vanzshop.com",

  whatsapp: "62895415204928",
  pesanWA: "Halo admin VanzShop, saya mau tanya: ",
  telegram: "VanzzSkyyID",
  jamOperasional: "Admin online setiap hari",

  // Tombol cepat di bawah kolom search
  pencarianPopuler: ["Reseller", "Garansi", "Pembayaran", "Cara order"],

  // ---------- BANNER "PUSAT APP PREMIUM TERMURAH" ----------
  banner: {
    label: "Pusat App Premium",
    judul: "App Premium Termurah,",
    judulSorot: "Resmi & Bergaransi",
    teks: "Semua aplikasi premium favoritmu ada di satu tempat — harga paling bersahabat, proses cepat, dan bergaransi.",
    // angka ringkas di bawah banner
    statistik: [
      { angka: "30+", label: "App premium" },
      { angka: "24/7", label: "Order otomatis" },
      { angka: "100%", label: "Bergaransi" }
    ],
    // nama app yang jalan di banner
    produk: ["ChatGPT", "Canva", "CapCut", "Spotify", "YouTube Premium", "Alight Motion", "Apple Music", "Claude AI",
             "Gemini AI", "Microsoft 365", "Duolingo", "HBO Max", "Prime Video", "Zoom", "Perplexity AI", "Discord Nitro", "VPN", "Scribd"]
  },

  // ---------- PROGRAM RESELLER ----------
  reseller: {
    label: "Program Reseller",
    judul: "Join Reseller Sekarang",
    teks: "Dapatkan harga lebih murah dan jual lagi dengan untung kamu sendiri.",
    keuntungan: [
      "Harga khusus reseller, lebih murah dari harga biasa",
      "Bebas jual lagi dengan harga kamu sendiri",
      "Info stok & produk baru lebih dulu",
      "Dibantu admin sampai lancar jualan"
    ],
    tombol: "Join Reseller via WhatsApp",
    pesanWA: "Halo admin VanzShop, saya mau join reseller. Boleh minta info harga & caranya?"
  },

  // 3 kartu keunggulan (ikon pakai nama dari daftar di atas)
  keunggulan: [
    { ikon: "tag",          judul: "Harga Termurah", teks: "Harga app premium paling bersahabat di kantong." },
    { ikon: "bolt",         judul: "Proses Cepat",   teks: "Banyak produk aktif otomatis setelah bayar." },
    { ikon: "shield-check", judul: "Garansi Jelas",  teks: "Aturan garansi terbuka untuk tiap produk." }
  ]
};


window.VANZ_FAQ = `

## Tentang VanzShop.com | sparkles

? Apa itu VanzShop.com? | bulb
VanzShop.com adalah **pusat aplikasi premium termurah** — ChatGPT, Canva, CapCut, Spotify, YouTube Premium, dan 30+ aplikasi premium lainnya ada di satu tempat.
Semua proses dibuat sesimpel mungkin: **pilih produk → bayar → pesanan diproses** otomatis atau fast respon.

? Kenapa harus beli di VanzShop.com? | star
- **Harga termurah**, cocok untuk pengguna pribadi maupun reseller.
- **Proses cepat**, banyak produk aktif otomatis setelah pembayaran.
- **Garansi jelas** sesuai ketentuan tiap produk.
- **Support ramah** via WhatsApp & Telegram.

? Apakah VanzShop.com aman dan terpercaya? | lock
InsyaAllah aman. Akun dan layanan yang dijual mengikuti ketentuan platform masing-masing. Data pelanggan hanya digunakan untuk keperluan aktivasi dan **tidak dijual ke pihak lain**.
Selama mengikuti aturan penggunaan di halaman {garansi}, pesanan kamu tetap terlindungi.


## Reseller | crown

? Apa itu program reseller VanzShop? | crown
Program reseller memberi kamu **harga khusus yang lebih murah** untuk semua aplikasi premium, jadi kamu bisa menjualnya lagi dengan harga kamu sendiri.

? Apa keuntungan jadi reseller? | trending
- **Harga lebih murah** dari harga biasa.
- **Bebas atur harga jual** dan ambil untung sendiri.
- **Info stok & produk baru** lebih dulu.
- Dibantu admin sampai lancar jualan.

? Bagaimana cara join reseller? | users
1. Klik tombol {reseller}.
2. Kirim pesan ke admin untuk minta info harga & syarat reseller.
3. Ikuti arahan admin untuk aktivasi akun reseller.
4. Mulai order dengan harga reseller dan jual lagi.


## Pemesanan & Pembayaran | cart

? Bagaimana cara order di VanzShop.com? | bag
1. Buka halaman {order}.
2. Pilih order via **Bot Telegram**, **Bot WhatsApp**, atau **Webstore**.
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
