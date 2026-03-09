# Campanella Coffee & Eatery — Website

Demo website profesional untuk Campanella Coffee & Eatery, Metro Lampung.
Dibangun dengan Next.js 14 + Tailwind CSS + TypeScript.

---

## 🚀 Cara Menjalankan Lokal

### Prasyarat
- Node.js 18+ → https://nodejs.org
- npm (sudah include dengan Node.js)

### Langkah

```bash
# 1. Masuk ke folder project
cd campanella

# 2. Install dependencies
npm install

# 3. Jalankan development server
npm run dev
```

Buka browser → http://localhost:3000

---

## 🌐 Deploy ke Vercel (Gratis)

### Opsi A — Via Vercel CLI (paling cepat)

```bash
# Install Vercel CLI
npm install -g vercel

# Login ke akun Vercel
vercel login

# Deploy dari folder project
vercel

# Ikuti prompt:
# - Set up and deploy? → Y
# - Which scope? → pilih akun kamu
# - Link to existing project? → N
# - Project name? → campanella (atau nama lain)
# - Directory? → ./
# - Override settings? → N

# Untuk production deploy:
vercel --prod
```

### Opsi B — Via GitHub + Vercel Dashboard

1. Push project ke GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial campanella website"
   git remote add origin https://github.com/username/campanella.git
   git push -u origin main
   ```
2. Buka https://vercel.com → New Project
3. Import GitHub repo
4. Klik Deploy → selesai! URL live langsung tersedia.

---

## 📁 Struktur Project

```
campanella/
├── src/
│   ├── app/
│   │   ├── globals.css      # Base styles, font import, animasi
│   │   ├── layout.tsx       # Root layout + metadata SEO
│   │   └── page.tsx         # Halaman utama (assembles semua section)
│   ├── components/
│   │   ├── Navbar.tsx       # Navigasi fixed + mobile drawer
│   │   ├── Hero.tsx         # Hero section full-height
│   │   ├── Ticker.tsx       # Marquee ticker band
│   │   ├── About.tsx        # Tentang + quote card + stats
│   │   ├── Spaces.tsx       # Tiga zona ruang
│   │   ├── Menu.tsx         # Menu highlight + promo block
│   │   ├── Features.tsx     # Fasilitas 8-grid
│   │   ├── Visit.tsx        # CTA + info cells
│   │   ├── Footer.tsx       # Footer minimalis
│   │   └── SectionLabel.tsx # Reusable eyebrow label
│   └── lib/
│       └── data.ts          # ← EDIT INI untuk update konten
├── public/                  # Taruh foto/aset di sini
├── tailwind.config.ts       # Konfigurasi tema (warna, font, animasi)
├── next.config.js
├── package.json
└── vercel.json
```

---

## ✏️ Cara Update Konten

Semua konten website ada di **satu file**: `src/lib/data.ts`

- Ganti nomor WA, alamat, jam buka → ubah `BRAND`
- Tambah/hapus menu → edit `MENU_ITEMS`
- Ganti promo → edit `PROMO`
- Tambah fasilitas → edit `FEATURES`

Tidak perlu sentuh komponen sama sekali.

---

## 🎨 Brand Colors

| Token          | Hex       | Penggunaan              |
|----------------|-----------|-------------------------|
| `forest`       | `#0d1f14` | Background utama        |
| `forest-2`     | `#122019` | Background seksi alt    |
| `gold`         | `#c9a84c` | Accent utama            |
| `gold-light`   | `#e2c47a` | Text italic/highlight   |
| `cream`        | `#f5edd8` | Text utama              |
| `moss`         | `#7a9180` | Text muted/subtitle     |

---

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v3
- **Language**: TypeScript
- **Deploy**: Vercel (gratis tier)
- **Font**: Playfair Display + DM Sans (Google Fonts)
