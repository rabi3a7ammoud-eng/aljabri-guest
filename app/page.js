"use client";

import { useState } from "react";

const serviceIcons = [
  <svg key="cafe" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#C5A059" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
    <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
    <line x1="6" y1="2" x2="6" y2="4" />
    <line x1="10" y1="2" x2="10" y2="4" />
    <line x1="14" y1="2" x2="14" y2="4" />
  </svg>,
  <svg key="room" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#C5A059" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 4v16" />
    <path d="M2 8h18a2 2 0 0 1 2 2v10" />
    <path d="M2 17h20" />
    <path d="M6 8v9" />
  </svg>,
  <svg key="laundry" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#C5A059" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 7a2 2 0 1 0-2-2" />
    <path d="M12 7v2l8.5 5.5a1.5 1.5 0 0 1-.8 2.8H4.3a1.5 1.5 0 0 1-.8-2.8L12 9" />
  </svg>,
  <svg key="reception" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#C5A059" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
  </svg>,
  <svg key="rating" width="84" height="48" viewBox="0 0 72 24" fill="none" stroke="#C5A059" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 3 14.5 8.5 20.5 9.2 16 13.3 17.2 19.2 12 16.3 6.8 19.2 8 13.3 3.5 9.2 9.5 8.5 12 3" />
    <polygon points="36 2 38.8 7.8 45.2 8.6 40.5 13 41.7 19.3 36 16.2 30.3 19.3 31.5 13 26.8 8.6 33.2 7.8 36 2" />
    <polygon points="60 3 62.5 8.5 68.5 9.2 64 13.3 65.2 19.2 60 16.3 54.8 19.2 56 13.3 51.5 9.2 57.5 8.5 60 3" />
  </svg>,
  <svg key="wifi" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#C5A059" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12.55a11 11 0 0 1 14.08 0" />
    <path d="M1.42 9a16 16 0 0 1 21.16 0" />
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
    <line x1="12" y1="20" x2="12.01" y2="20" />
  </svg>
];

const translations = {
  "العربية": {
    dir: "rtl",
    arrow: "←",
    hotelName: "فندق الجابري",
    roomLabel: "غرفتك: 305",
    welcomeSmall: "مرحباً بك في",
    welcomeText: "نسعد بإقامتك، كيف يمكننا خدمتك اليوم؟",
    servicesTag: "خدماتنا",
    servicesHeading: "Services & Amenities",
    servicesSub: "كل ما تحتاجه أثناء إقامتك في مكان واحد",
    requestsTitle: "طلباتي الأخيرة",
    requestsSub: "ستظهر طلباتك هنا لمتابعة حالتها.",
    noRequests: "لا توجد طلبات",
    footerBrand: "فندق الجابري - AL-JABRI HOTEL",
    footerText: "نسعد بخدمتكم وننتمنى لكم إقامة سعيدة",
    continueBtn: "متابعة",
    alertMsg: "سيتم تفعيل هذه الخدمة بعد ربط النظام.",
    services: [
      {
        title: "خدمات الكافيه",
        description: "تصفح المنتجات والأسعار وأرسل طلبك.",
        detail: "اطلب مشروبك أو وجبتك المفضلة إلى غرفتك."
      },
      {
        title: "خدمات الغرف",
        description: "التنظيف والمناشف والمستلزمات.",
        detail: "اختر الخدمة التي تحتاجها وأضف ملاحظاتك."
      },
      {
        title: "خدمات المغسلة",
        description: "خدمات الغسيل والكي.",
        detail: "اختر نوع الخدمة والكمية المطلوبة."
      },
      {
        title: "التواصل مع الاستقبال",
        description: "نحن هنا لمساعدتك.",
        detail: "تواصل مع الاستقبال للحصول على المساعدة."
      },
      {
        title: "تقييم الإقامة",
        description: "شاركنا رأيك في تجربتك.",
        detail: "سيتم توجيهك إلى صفحة تقييم الفندق."
      },
      {
        title: "خدمات الواي فاي",
        description: "بيانات الاتصال بالشبكة.",
        detail: "اسم الشبكة: ALJABRI_GUEST\nكلمة المرور: 12345678"
      }
    ]
  },
  "English": {
    dir: "ltr",
    arrow: "→",
    hotelName: "AL-JABRI HOTEL",
    roomLabel: "Your Room: 305",
    welcomeSmall: "Welcome to",
    welcomeText: "We are delighted with your stay, how can we serve you today?",
    servicesTag: "Our Services",
    servicesHeading: "Services & Amenities",
    servicesSub: "Everything you need during your stay in one place",
    requestsTitle: "My Recent Requests",
    requestsSub: "Your requests will appear here to track their status.",
    noRequests: "No requests",
    footerBrand: "فندق الجابري - AL-JABRI HOTEL",
    footerText: "We are pleased to serve you and wish you a pleasant stay",
    continueBtn: "Continue",
    alertMsg: "This service will be activated once connected to the system.",
    services: [
      {
        title: "Cafe Services",
        description: "Browse products, prices, and send your order.",
        detail: "Order your favorite drink or meal to your room."
      },
      {
        title: "Room Services",
        description: "Housekeeping, towels, and amenities.",
        detail: "Select the service you need and add your notes."
      },
      {
        title: "Laundry Services",
        description: "Washing and ironing services.",
        detail: "Choose the service type and required quantity."
      },
      {
        title: "Contact Reception",
        description: "We are here to help you.",
        detail: "Contact reception for immediate assistance."
      },
      {
        title: "Rate Your Stay",
        description: "Share your feedback on your experience.",
        detail: "You will be directed to the hotel review page."
      },
      {
        title: "Wi-Fi Services",
        description: "Network connection details.",
        detail: "Network Name: ALJABRI_GUEST\nPassword: 12345678"
      }
    ]
  },
  "Français": {
    dir: "ltr",
    arrow: "→",
    hotelName: "HÔTEL AL-JABRI",
    roomLabel: "Votre Chambre : 305",
    welcomeSmall: "Bienvenue à",
    welcomeText: "Ravis de votre séjour, comment pouvons-nous vous aider aujourd'hui ?",
    servicesTag: "Nos Services",
    servicesHeading: "Services & Équipements",
    servicesSub: "Tout ce dont vous avez besoin pendant votre séjour au même endroit",
    requestsTitle: "Mes Demandes Récentes",
    requestsSub: "Vos demandes apparaîtront ici pour suivre leur statut.",
    noRequests: "Aucune demande",
    footerBrand: "فندق الجابري - AL-JABRI HOTEL",
    footerText: "Nous sommes heureux de vous servir et vous souhaitons un agréable séjour",
    continueBtn: "Continuer",
    alertMsg: "Ce service sera activé une fois connecté au système.",
    services: [
      {
        title: "Services Café",
        description: "Parcourez les produits, les prix et commandez.",
        detail: "Commandez votre boisson ou repas préféré en chambre."
      },
      {
        title: "Service en Chambre",
        description: "Ménage, serviettes et articles de toilette.",
        detail: "Choisissez le service souhaité et ajoutez vos remarques."
      },
      {
        title: "Blanchisserie",
        description: "Services de lavage et de repassage.",
        detail: "Choisissez le type de service et la quantité souhaitée."
      },
      {
        title: "Contacter la Réception",
        description: "Nous sommes là pour vous aider.",
        detail: "Contactez la réception pour toute assistance."
      },
      {
        title: "Évaluer le Séjour",
        description: "Partagez votre avis sur votre expérience.",
        detail: "Vous serez redirigé vers la page d'évaluation de l'hôtel."
      },
      {
        title: "Services Wi-Fi",
        description: "Informations de connexion réseau.",
        detail: "Nom du réseau : ALJABRI_GUEST\nMot de passe : 12345678"
      }
    ]
  },
  "Bahasa Indonesia": {
    dir: "ltr",
    arrow: "→",
    hotelName: "HOTEL AL-JABRI",
    roomLabel: "Kamar Anda: 305",
    welcomeSmall: "Selamat datang di",
    welcomeText: "Kami senang atas kunjungan Anda, ada yang bisa kami bantu hari ini?",
    servicesTag: "Layanan Kami",
    servicesHeading: "Layanan & Fasilitas",
    servicesSub: "Semua yang Anda butuhkan selama menginap di satu tempat",
    requestsTitle: "Permintaan Terakhir Saya",
    requestsSub: "Permintaan Anda akan muncul di sini untuk melacak statusnya.",
    noRequests: "Tidak ada permintaan",
    footerBrand: "فندق الجابري - AL-JABRI HOTEL",
    footerText: "Kami senang melayani Anda dan semoga masa inap Anda menyenangkan",
    continueBtn: "Lanjutkan",
    alertMsg: "Layanan ini akan diaktifkan setelah terhubung ke sistem.",
    services: [
      {
        title: "Layanan Kafe",
        description: "Lihat produk, harga, dan kirim pesanan Anda.",
        detail: "Pesan minuman atau makanan favorit ke kamar Anda."
      },
      {
        title: "Layanan Kamar",
        description: "Pembersihan kamar, handuk, dan perlengkapan.",
        detail: "Pilih layanan yang Anda butuhkan dan tambahkan catatan."
      },
      {
        title: "Layanan Binatu",
        description: "Layanan cuci dan setrika.",
        detail: "Pilih jenis layanan dan jumlah yang diperlukan."
      },
      {
        title: "Hubungi Resepsionis",
        description: "Kami siap membantu Anda.",
        detail: "Hubungi resepsionis untuk mendapatkan bantuan."
      },
      {
        title: "Beri Penilaian",
        description: "Bagikan pendapat Anda tentang pengalaman menginap.",
        detail: "Anda akan diarahkan ke halaman ulasan hotel."
      },
      {
        title: "Layanan Wi-Fi",
        description: "Detail koneksi jaringan.",
        detail: "Nama Jaringan: ALJABRI_GUEST\nKata Sandi: 12345678"
      }
    ]
  },
  "Türkçe": {
    dir: "ltr",
    arrow: "→",
    hotelName: "AL-JABRI OTEL",
    roomLabel: "Odanız: 305",
    welcomeSmall: "Hoş geldiniz",
    welcomeText: "Konaklamanızdan mutluluk duyuyoruz, bugün size nasıl yardımcı olabiliriz?",
    servicesTag: "Hizmetlerimiz",
    servicesHeading: "Hizmetler ve Olanaklar",
    servicesSub: "Konaklamanız boyunca ihtiyacınız olan her şey tek bir yerde",
    requestsTitle: "Son Taleplerim",
    requestsSub: "Durumlarını takip etmek için talepleriniz burada görünecektir.",
    noRequests: "Talep yok",
    footerBrand: "فندق الجابري - AL-JABRI HOTEL",
    footerText: "Size hizmet vermekten mutluluk duyar, iyi konaklamalar dileriz",
    continueBtn: "Devam Et",
    alertMsg: "Bu hizmet sisteme bağlandıktan sonra aktif edilecektir.",
    services: [
      {
        title: "Kafe Hizmetleri",
        description: "Ürünleri ve fiyatları inceleyin, siparişinizi gönderin.",
        detail: "En sevdiğiniz içeceği veya yemeği odanıza sipariş edin."
      },
      {
        title: "Oda Servisi",
        description: "Temizlik, havlu ve oda malzemeleri.",
        detail: "İhtiyacınız olan hizmeti seçin ve notunuzu ekleyin."
      },
      {
        title: "Çamaşırhane Hizmetleri",
        description: "Yıkama ve ütüleme hizmetleri.",
        detail: "Hizmet türünü ve istenen miktarı seçin."
      },
      {
        title: "Resepsiyon ile İletişim",
        description: "Size yardımcı olmak için buradayız.",
        detail: "Yardım almak için resepsiyonla iletişime geçin."
      },
      {
        title: "Konaklamayı Değerlendir",
        description: "Deneyiminiz hakkındaki görüşlerinizi paylaşın.",
        detail: "Otel değerlendirme sayfasına yönlendirileceksiniz."
      },
      {
        title: "Wi-Fi Hizmetleri",
        description: "Ağ bağlantı bilgileri.",
        detail: "Ağ Adı: ALJABRI_GUEST\nŞifre: 12345678"
      }
    ]
  },
  "O‘zbek": {
    dir: "ltr",
    arrow: "→",
    hotelName: "AL-JABRI MEHMONXONASI",
    roomLabel: "Xonangiz: 305",
    welcomeSmall: "Xush kelibsiz",
    welcomeText: "Tashrifingizdan mamnunmiz, bugun sizga qanday yordam bera olamiz?",
    servicesTag: "Xizmatlarimiz",
    servicesHeading: "Xizmatlar va Qulayliklar",
    servicesSub: "Mehmonxonada bo‘lishingiz davomida kerak bo‘ladigan barcha narsa bir joyda",
    requestsTitle: "So‘nggi So‘rovlarim",
    requestsSub: "Holatini kuzatish uchun so‘rovlaringiz shu yerda ko‘rinadi.",
    noRequests: "So‘rovlar yo‘q",
    footerBrand: "فندق الجابري - AL-JABRI HOTEL",
    footerText: "Sizga xizmat ko‘rsatishdan mamnunmiz va maroqli hordiq tilaymiz",
    continueBtn: "Davom etish",
    alertMsg: "Ushbu xizmat tizimga ulangandan so‘ng faollashtiriladi.",
    services: [
      {
        title: "Kafe Xizmatlari",
        description: "Mahsulotlar va narxlarni ko‘ring hamda buyurtma bering.",
        detail: "Sevimli ichimlik yoki taomingizni xonangizga buyurtma qiling."
      },
      {
        title: "Xona Xizmatlari",
        description: "Tozalash, sochiqlar va zarur jihozlar.",
        detail: "Kerakli xizmatni tanlang va izohingizni qo‘shing."
      },
      {
        title: "Kir Yuvish Xizmati",
        description: "Kir yuvish va dazmollash xizmatlari.",
        detail: "Xizmat turini va kerakli miqdorni tanlang."
      },
      {
        title: "Qabulxona bilan Aloqa",
        description: "Biz sizga yordam berishga tayyormiz.",
        detail: "Yordam olish uchun qabulxona bilan bog‘laning."
      },
      {
        title: "Tashrifni Baholash",
        description: "Taassurotlaringiz haqida fikringizni bildiring.",
        detail: "Siz mehmonxonani baholash sahifasiga yo‘naltirilasiz."
      },
      {
        title: "Wi-Fi Xizmatlari",
        description: "Tarmoqqa ulanish ma’lumotlari.",
        detail: "Tarmoq nomi: ALJABRI_GUEST\nParol: 12345678"
      }
    ]
  }
};

export default function Home() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [language, setLanguage] = useState("العربية");

  const t = translations[language] || translations["العربية"];
  const selectedService = selectedIndex !== null ? t.services[selectedIndex] : null;

  return (
    <main dir={t.dir}>
      <header className="topbar">
        <div className="brand">
          <div className="brand-icon">♛</div>
          <div>
            <h2>{t.hotelName}</h2>
            <span>AL-JABRI HOTEL</span>
          </div>
        </div>

        <div className="header-left">
          <span className="room-number">{t.roomLabel}</span>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            aria-label="اختيار اللغة"
          >
            <option value="العربية">العربية</option>
            <option value="English">English</option>
            <option value="Français">Français</option>
            <option value="Bahasa Indonesia">Bahasa Indonesia</option>
            <option value="Türkçe">Türkçe</option>
            <option value="O‘zbek">O‘zbek</option>
          </select>
        </div>
      </header>

      <section className="welcome">
        <div className="welcome-content">
          <span className="welcome-small">{t.welcomeSmall}</span>
          <h1>{t.hotelName}</h1>
          <p>{t.welcomeText}</p>
          <div className="gold-line"></div>
        </div>
      </section>

      <section className="services-section">
        <div className="section-heading">
          <span>{t.servicesTag}</span>
          <h2>{t.servicesHeading}</h2>
          <p>{t.servicesSub}</p>
        </div>

        <div className="services-grid">
          {t.services.map((service, index) => (
            <button
              className="service-card"
              key={index}
              onClick={() => setSelectedIndex(index)}
            >
              <span className="service-icon">{serviceIcons[index]}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="card-arrow">{t.arrow}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="requests">
        <div>
          <h3>{t.requestsTitle}</h3>
          <p>{t.requestsSub}</p>
        </div>
        <span className="request-status">{t.noRequests}</span>
      </section>

      <footer>
        <div className="footer-brand">{t.footerBrand}</div>
        <p>{t.footerText}</p>
      </footer>

      {selectedService && (
        <div className="modal-overlay" onClick={() => setSelectedIndex(null)}>
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-button"
              onClick={() => setSelectedIndex(null)}
            >
              ✕
            </button>

            <div className="modal-icon">{serviceIcons[selectedIndex]}</div>
            <h2>{selectedService.title}</h2>
            <p style={{ whiteSpace: "pre-line" }}>{selectedService.detail}</p>

            <button
              className="main-button"
              onClick={() => alert(t.alertMsg)}
            >
              {t.continueBtn}
            </button>
          </div>
        </div>
      )}
    </main>
  );
}