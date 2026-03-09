// ─────────────────────────────────────────────
//  Campanella Coffee & Eatery — Site Data
//  Edit this file to update content globally
// ─────────────────────────────────────────────

export const BRAND = {
  name: "Campanella",
  full: "Campanella Coffee & Eatery",
  tagline: "Tempat Terbaik untuk Setiap Momen",
  subTagline:
    "Tiga zona — indoor mewah, outdoor sawah, rooftop semi-terbuka. Satu tujuan: membuat setiap kunjungan terasa istimewa.",
  city: "Metro, Lampung",
  address:
    "Jl. Letjend Alamsyah Ratu Prawira Negara, Metro Pusat, Kota Metro, Lampung 34111",
  phone: "0851-6626-5757",
  wa: "6285166265757",
  instagram: "campanellacoffeeandeatery",
  mapsUrl: "https://maps.google.com/?cid=1350385904117482547",
  hours: "Setiap Hari, 11.00 – 22.00",
  priceRange: "Rp 50.000 – 75.000 / orang",
} as const;

export const TICKER_ITEMS = [
  "Coffee & Eatery",
  "View Sawah",
  "Live Music",
  "Rooftop Seating",
  "Free Wi-Fi",
  "Ramadhan Package",
  "Private Dining Room",
  "Women-Owned",
  "Metro, Lampung",
];

export const HERO_BADGES = [
  { icon: "GenderFemale", title: "Women-Owned", sub: "Bisnis Perempuan Metro" },
  { icon: "MusicNote",    title: "Live Music",   sub: "Setiap Malam"          },
  { icon: "WifiHigh",     title: "Free Wi-Fi",   sub: "Laptop-Friendly"       },
] as const;

export const SPACES = [
  {
    num: "01",
    name: "Indoor",
    nameItalic: "Mewah",
    desc: "Pencahayaan warm-tone, furnitur premium, dan atmosfer eksklusif yang terasa intim. Ideal untuk dinner romantis, gathering keluarga, atau private event yang tak terlupakan.",
    tag: "Private Dining Tersedia",
    featured: true,
  },
  {
    num: "02",
    name: "Outdoor",
    nameItalic: "Sawah",
    desc: "Meja dan kursi besi elegan menghadap hamparan hijau Metro. Angin sore, kopi hangat, dan percakapan yang tak perlu tergesa.",
    tag: "Most Instagramable",
    featured: false,
  },
  {
    num: "03",
    name: "Rooftop",
    nameItalic: "Semi-Outdoor",
    desc: "Lantai dua dengan pandangan 180° ke sawah dan kota Metro. Tempat terbaik untuk menikmati golden hour bersama matcha yang sempurna.",
    tag: "Sunset Spot",
    featured: false,
  },
];

export const MENU_ITEMS = [
  {
    category: "Western · Pasta",
    name: "Spaghetti Bolognese",
    desc: "Pasta al dente dengan saus daging sapi kaya rempah, disajikan hangat dengan taburan keju.",
    price: "Rp 35.000",
  },
  {
    category: "Oriental · Mie",
    name: "Kwetiau Goreng Seafood",
    desc: "Kwetiau lebar dimasak dengan cumi, udang, dan sayuran segar dalam wok panas.",
    price: "Rp 30.000",
  },
  {
    category: "Grill · Street Food",
    name: "Sate Taichan",
    desc: "Tusukan ayam bakar pedas segar dengan sambal kacang dan perasan jeruk nipis.",
    price: "Rp 28.000",
  },
  {
    category: "Nasi · Asian Fusion",
    name: "Nasi Chicken Katsu",
    desc: "Ayam crispy berlapis panko dengan nasi pulen dan saus katsu original.",
    price: "Rp 32.000",
  },
  {
    category: "Minuman · Mocktail",
    name: "Es Mojito Leci",
    desc: "Segar, fruity, sedikit mint — teman sempurna sore hari di outdoor sawah.",
    price: "Rp 22.000",
  },
  {
    category: "Coffee · Specialty",
    name: "Matcha Cream",
    desc: "Matcha premium berlapis krim ringan yang mengambang sempurna di atas susu dingin.",
    price: "Rp 25.000",
  },
];

export const PROMO = {
  label: "Ramadhan Package",
  desc: "Nasi Sapi Lada Hitam · Beef Bulgogi · Ayam Bakar Madu · Ayam Sambal Rica-Rica\n+ Gratis Iced Tea & Takjil · Menu Nusantara & Asia pilihan",
  price: "42K",
  priceSub: "per paket",
};

export const FEATURES = [
  { icon: "MusicNotes",  name: "Live Music",         desc: "Pertunjukan langsung setiap malam mempermanis suasana."              },
  { icon: "WifiHigh",    name: "Free Wi-Fi",          desc: "Koneksi stabil — cocok untuk kerja, kuliah, atau sekadar scroll."    },
  { icon: "Car",         name: "Parkir Luas",         desc: "Area parkir on-site yang nyaman untuk motor dan mobil."              },
  { icon: "Door",        name: "Private Dining",      desc: "Ruang khusus tersedia untuk acara privat dan gathering."             },
  { icon: "Coffee",      name: "Great Coffee",        desc: "Kopi pilihan berkualitas, dari biji terbaik, diseduh dengan tepat."  },
  { icon: "Basket",      name: "Dine-in & Delivery",  desc: "Makan di tempat, takeaway, atau pesan antar — semua tersedia."       },
  { icon: "CreditCard",  name: "Cashless Payment",    desc: "Terima kartu kredit, debit, dan pembayaran digital."                 },
  { icon: "Baby",        name: "Family Friendly",     desc: "Ramah anak dan keluarga — semua usia nyaman di sini."               },
] as const;

export const INFO_CELLS = [
  { icon: "Clock",    label: "Jam Buka",  value: "Setiap Hari\n11.00 – 22.00"       },
  { icon: "MapPin",   label: "Lokasi",    value: "Jl. Letjend Alamsyah\nMetro Pusat" },
  { icon: "Tag",      label: "Rata-rata", value: "Rp 50.000–\n75.000 / orang"        },
  { icon: "Phone",    label: "Telepon",   value: "0851-6626-5757"                    },
] as const;
