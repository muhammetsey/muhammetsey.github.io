/* ==========================================================================
   Muhammed Übeyd Seyhan — Kişisel Web Sitesi Betiği (assets/js/main.js)
   Tema Döngüsü (4 Palet), TR/EN Çift Dil Desteği ve Dinamik mailto Üretici
   ========================================================================== */

(function () {
  'use strict';

  var EMAIL_ADDRESS = 'm.syhn7@gmail.com';
  var currentLang = 'tr';

  // --- Dil Sözlüğü (TR & EN) ---
  var I18N = {
    tr: {
      page_title: 'Muhammed Übeyd Seyhan | Bilgisayar Mühendisi & Teknoloji Çözüm Ortağı',
      skip_link: 'Ana içeriğe atla',
      nav_home: 'Ana Sayfa',
      nav_about: 'Hakkımda',
      nav_services: 'Neler Yapabilirim',
      nav_projects: 'Projeler',
      nav_idea: 'Fikir Paylaşımı',
      nav_contact: 'İletişim',
      mobile_menu_btn: 'MENÜ',
      hero_badge: 'Bilgisayar Mühendisi • Teknoloji Çözüm Ortağı',
      hero_title: 'Karmaşık teknik problemleri ve yeni fikirleri, yüksek mühendislik standartlarıyla hayata geçirelim.',
      hero_p1: 'Merhaba, ben <strong id="hero-greeting-name">Muhammed Übeyd Seyhan</strong>. Bilgisayar mühendisiyim. Şirketlerin ve girişimlerin karşılaştığı teknik darboğazları çözmek, operasyonel süreçleri hızlandırmak ve uçtan uca güvenilir sistemler inşa etmek üzerine çalışıyorum.',
      hero_p2: 'Web sistemleri, veri işleme, gömülü sistemler, biyoteknoloji uygulamaları ve otomasyon disiplinlerini bir araya getirerek; doğrudan iletişim kurabileceğiniz, sonuç odaklı ve şeffaf bir mühendislik ortaklığı sunuyorum.',
      hero_cta_primary: 'Fikir veya Sorun Paylaş',
      meta_email_label: 'E-posta:',
      meta_work_label: 'Çalışma Modeli:',
      meta_work_val: 'Şirketlere ve Bireylere Doğrudan Mühendislik Çözümleri',
      about_tag: '01 / Hakkımda',
      about_title: 'Mühendislik Yaklaşımım ve Profesyonel Deneyimim',
      about_lead: 'Teknolojiyi yalnızca kod üretmek olarak değil; işletmelerin ve ekiplerin sahada karşılaştığı gerçek problemleri ölçülebilir, ölçeklenebilir ve uzun ömürlü sistemlerle çözme disiplini olarak ele alıyorum.',
      exp_badge: 'PROFESYONEL DENEYİM & MÜHENDİSLİK ODAK ALANLARI',
      exp_title: 'Şirketler İçin Uçtan Uca Teknik Çözümler ve Disiplinlerarası Mühendislik',
      exp_p1: 'Profesyonel çalışma deneyimim boyunca farklı ölçekteki şirketlere mühendislik danışmanlığı ve özel yazılım/sistem geliştirme hizmetleri sundum. Kurumların operasyonel darboğazlarını analiz ederek, karmaşık iş problemlerini yüksek performanslı ve güvenilir teknoloji mimarilerine dönüştürdüm.',
      exp_p2: 'Yazılım ile donanımın kesiştiği kritik alanlarda derinleşerek; ölçeklenebilir web sistemlerinden büyük hacimli veri işleme hatlarına, mikrodenetleyici tabanlı gömülü sistemlerden biyoteknoloji uygulamalarına ve uçtan uca endüstriyel/yazılımsal otomasyon çözümlerine kadar geniş bir yelpazede aktif üretim yapıyorum.',
      pill_web: 'Web Sistemleri ve Mimarileri',
      pill_data: 'Veri İşleme ve Mühendisliği',
      pill_embedded: 'Gömülü Sistemler (Embedded)',
      pill_biotech: 'Biyoteknoloji Sistemleri',
      pill_automation: 'Süreç ve Sistem Otomasyonu',
      prin_1_title: 'Doğrudan ve Şeffaf Muhataplık',
      prin_1_desc: 'Aracı katmanlar olmadan doğrudan benimle iletişim kurarsınız. İhtiyaç analizinden mimari tasarıma ve canlıya geçişe kadar her aşama şeffaf biçimde yürütülür.',
      prin_2_title: 'Sonuç Odaklı Problem Çözümü',
      prin_2_desc: 'Şirketlerin mevcut altyapısına ve iş hedeflerine en uygun, gereksiz karmaşıklıktan arındırılmış, doğrudan verimlilik ve hız kazandıran çözümler geliştiririm.',
      prin_3_title: 'Disiplinlerarası Entegrasyon',
      prin_3_desc: 'Sensör ve gömülü donanım katmanından veri işleme motorlarına ve modern web arayüzlerine kadar tüm katmanların birbiriyle kusursuz konuşmasını sağlarım.',
      serv_tag: '02 / Neler Yapabilirim & Yetkinlikler',
      serv_title: 'Çözüm Alanlarım ve Teknik Uzmanlıklarım',
      serv_lead: 'Şirketlerin teknik ihtiyaçlarını, yeni ürün fikirlerini veya sahadaki mühendislik problemlerini birlikte ele alabileceğimiz temel çalışma başlıkları:',
      s1_title: 'Kurumsal Sorun Analizi ve Mimari Tasarım',
      s1_desc: 'İşletmenizde zaman ve kaynak kaybına yol açan süreçleri analiz ederek, yüksek erişilebilirlikli ve güvenli sistem mimarileri tasarlıyorum.',
      s2_title: 'Web Sistemleri ve Veri İşleme Platformları',
      s2_desc: 'Modern web uygulamaları, API servisleri, gerçek zamanlı veri toplama/işleme hatları (data pipelines) ve karar destek panelleri geliştiriyorum.',
      s3_title: 'Gömülü Sistemler ve Biyoteknoloji Çözümleri',
      s3_desc: 'Donanım-yazılım entegrasyonu, sensör ağları, mikrodenetleyici tabanlı kontrol sistemleri ve biyoteknoloji/laboratuvar veri analitiği çözümleri üretiyorum.',
      s4_title: 'Akıllı Otomasyon ve Süreç İyileştirme',
      s4_desc: 'Tekrarlayan operasyonları, veri aktarımlarını ve cihaz kontrol süreçlerini uçtan uca otomatikleştirerek hata payını en aza indiriyorum.',
      tech_matrix_tag: 'TEKNİK YETKİNLİK ALANLARI',
      tech_matrix_title: 'Uzmanlık Alanlarım ve Mühendislik Yetkinliklerim',
      tech_matrix_desc: 'Projelerde aktif olarak kullandığım ve şirketlere profesyonel çözümler sunduğum temel mühendislik disiplinleri:',
      dom_web_title: 'Web Sistemleri',
      dom_web_desc: 'Ölçeklenebilir arka uç mimarileri, yüksek performanslı web uygulamaları ve güvenli API tasarımı.',
      chip_web_arch: 'Mikroservis Mimarisi',
      chip_web_perf: 'Yüksek Performanslı UI',
      dom_data_title: 'Veri İşleme & Analitik',
      dom_data_desc: 'Büyük hacimli yapısal ve sensör verilerinin temizlenmesi, modellenmesi ve gerçek zamanlı işlenmesi.',
      chip_data_stream: 'Gerçek Zamanlı Veri Akışı',
      chip_data_vis: 'Veri Analitiği',
      dom_emb_title: 'Gömülü Sistemler',
      dom_emb_desc: 'Mikrodenetleyici programlama, gerçek zamanlı saha donanımları ve haberleşme protokolleri.',
      dom_bio_title: 'Biyoteknoloji Uygulamaları',
      dom_bio_desc: 'Biyomedikal/biyoteknolojik veri işleme, laboratuvar otomasyonu ve biyosensör entegrasyonu.',
      chip_bio_data: 'Biyoinformatik Veri İşleme',
      chip_bio_sensor: 'Biyosensör & Sinyal Analizi',
      chip_bio_lab: 'Laboratuvar Sistemleri',
      chip_bio_alg: 'Algoritmik Modelleme',
      dom_auto_title: 'Otomasyon Sistemleri',
      dom_auto_desc: 'Donanım kontrol döngüleri, iş akışı otomasyonu ve sistemler arası otonom entegrasyon.',
      chip_auto_proc: 'Süreç Otomasyonu',
      chip_auto_ctrl: 'Kontrol & İzleme (Telemetry)',
      chip_auto_int: 'Sistem Entegrasyonu',
      dom_eng_title: 'Sistem Mimarisi & Danışmanlık',
      dom_eng_desc: 'Teknik darboğaz giderme, performans optimizasyonu ve uçtan uca ürün geliştirme.',
      chip_eng_1: 'Teknik Problem Çözümü',
      chip_eng_2: 'Uçtan Uca Mimari',
      proj_tag: '03 / Projeler ve Kod Depoları',
      proj_title: 'Açık Kaynak Çalışmalarım ve GitHub Profilim',
      proj_lead: 'Geliştirdiğim açık kaynak projelere, kod depolarına ve teknik çalışmalarıma doğrudan GitHub profilim üzerinden ulaşabilirsiniz.',
      proj_verified_badge: 'DOĞRULANMIŞ GITHUB PROFİLİ',
      proj_card_title: 'Muhammed Übeyd Seyhan — GitHub (@muhammetsey)',
      proj_card_desc: 'Web sistemleri, veri işleme, gömülü sistemler, biyoteknoloji ve otomasyon alanlarındaki açık kaynak kod depolarımı, prototiplerimi ve güncel mühendislik çalışmalarımı GitHub profilimden inceleyebilirsiniz.',
      proj_btn: 'GitHub Profilini İncele',
      proj_footer_note: 'Kurumsal projeler gizlilik sözleşmeleri (NDA) kapsamında korunmaktadır.',
      share_tag: '04 / Fikir ve Sorun Paylaşımı',
      share_quote: '“Çevrende çözülmesini istediğin bir sorun ya da geliştirilmesini düşündüğün bir fikir mi var? Kısaca anlat; birlikte değerlendirelim.”',
      share_desc: 'Şirketinizde karşılaştığınız teknik bir darboğaz, otomatikleştirmek istediğiniz bir süreç ya da hayata geçirmeyi planladığınız yeni bir teknoloji fikri olabilir. Durumu kısaca paylaşmanız yeterlidir; teknik yol haritasını birlikte şekillendirebiliriz.',
      share_quick_label: 'Hızlı Konu Seçimi (Taslağı Günceller):',
      cat_problem: 'Çözülmesini İstediğim Bir Sorun',
      cat_idea: 'Geliştirilmesini Düşündüğüm Bir Fikir',
      cat_process: 'Kurumsal Süreç / Otomasyon İyileştirmesi',
      cat_general: 'Kurumsal Hizmet ve Teknik Danışmanlık',
      privacy_title: 'Veri Saklama Yok • Doğrudan Google Gmail veya E-posta Uygulaması',
      privacy_desc: 'Bu sayfada yazdıklarınız hiçbir sunucuya veya veritabanına kaydedilmez. Alanları doldurup düğmeye tıkladığınızda, kendi cihazınızdaki e-posta uygulaması hazır konu satırı ve düzenlenebilir taslakla açılır; mesajı son kez kontrol edip kendi e-posta hesabınızdan gönderirsiniz.',
      comp_title: 'E-posta Taslağı Oluşturucu',
      comp_to: 'Alıcı:',
      comp_badge: 'Gmail & mailto',
      label_category: 'Paylaşım Türü',
      label_title: 'Kısa Konu Başlığı (İsteğe bağlı)',
      ph_title: 'Örn: Üretim hattı veri takibi ve otomasyon sistemi',
      label_details: 'Sorun veya Fikrin Özeti (E-posta uygulamasında da düzenleyebilirsiniz)',
      ph_details: 'Karşılaştığınız teknik sorunu, hedeflenen iyileştirmeyi veya aklınızdaki fikri kısaca yazabilirsiniz...',
      label_sender: 'Adınız / Şirketiniz (İsteğe bağlı)',
      ph_sender: 'İsterseniz adınızı veya kurum bilginizi ekleyebilirsiniz',
      preview_header: 'Açılacak E-posta Taslağı Önizlemesi',
      preview_subj_prefix: 'Konu:',
      btn_open_gmail: 'Gmail ile Tarayıcıda Aç',
      btn_open_mail: 'E-posta Uygulaması',
      btn_copy_draft: 'Taslağı Kopyala',
      contact_tag: '05 / İletişim',
      contact_title: 'Doğrudan İletişim',
      contact_lead: 'Kurumsal projeleriniz, teknik danışmanlık talepleriniz veya paylaşmak istediğiniz fikirler için bana doğrudan e-posta adresim üzerinden ulaşabilirsiniz.',
      contact_email_label: 'E-posta Adresim',
      btn_send_gmail: 'Gmail ile E-posta Gönder',
      btn_send_mail: 'E-posta Uygulaması',
      btn_copy_email: 'E-posta Adresini Kopyala',
      contact_gh_label: 'GitHub Profilim: ',
      footer_role: 'Bilgisayar Mühendisi'
    },
    en: {
      page_title: 'Muhammed Übeyd Seyhan | Computer Engineer & Technology Partner',
      skip_link: 'Skip to main content',
      nav_home: 'Home',
      nav_about: 'About',
      nav_services: 'Capabilities',
      nav_projects: 'Projects',
      nav_idea: 'Share an Idea',
      nav_contact: 'Contact',
      mobile_menu_btn: 'MENU',
      hero_badge: 'Computer Engineer • Technology & Engineering Partner',
      hero_title: 'Let’s solve complex technical challenges and turn ambitious ideas into reliable systems.',
      hero_p1: 'Hello, I’m <strong id="hero-greeting-name">Muhammed Übeyd Seyhan</strong>, a Computer Engineer. I partner with companies and teams to resolve technical bottlenecks, streamline operations, and build resilient end-to-end engineering solutions.',
      hero_p2: 'Bridging web architectures, data processing, embedded systems, biotechnology applications, and automation, I offer a direct, transparent, and results-driven engineering partnership.',
      hero_cta_primary: 'Share a Problem or Idea',
      meta_email_label: 'Email:',
      meta_work_label: 'Engagement Model:',
      meta_work_val: 'Direct Engineering Solutions for Companies & Individuals',
      about_tag: '01 / About Me',
      about_title: 'Engineering Philosophy & Professional Experience',
      about_lead: 'I approach technology not merely as writing code, but as a rigorous discipline for solving real-world operational challenges through measurable, scalable, and maintainable systems.',
      exp_badge: 'PROFESSIONAL EXPERIENCE & CORE FOCUS AREAS',
      exp_title: 'End-to-End Technical Solutions for Companies & Cross-Disciplinary Engineering',
      exp_p1: 'Throughout my professional career, I have delivered engineering consultancy and custom software/system solutions to companies across diverse operational scales. By diagnosing technical and workflow bottlenecks, I transform complex business problems into high-performance, dependable architectures.',
      exp_p2: 'Operating at the intersection of software and hardware, I actively architect and build across scalable web systems, high-throughput data processing pipelines, microcontroller-based embedded systems, biotechnology applications, and end-to-end automation workflows.',
      pill_web: 'Web Systems & Architectures',
      pill_data: 'Data Processing & Engineering',
      pill_embedded: 'Embedded Systems',
      pill_biotech: 'Biotechnology Systems',
      pill_automation: 'Process & System Automation',
      prin_1_title: 'Direct & Transparent Collaboration',
      prin_1_desc: 'You communicate and work directly with me without agency overhead. Every phase—from technical discovery to architecture and deployment—is handled transparently.',
      prin_2_title: 'Outcome-Oriented Problem Solving',
      prin_2_desc: 'I design pragmatic solutions tailored to your existing infrastructure and business goals, eliminating unnecessary complexity while maximizing speed and reliability.',
      prin_3_title: 'Full-Stack Hardware-to-Cloud Integration',
      prin_3_desc: 'From embedded sensors and field hardware to real-time data processing engines and modern web interfaces, I ensure every layer works in seamless harmony.',
      serv_tag: '02 / Capabilities & Expertise',
      serv_title: 'How We Can Work Together & Core Competencies',
      serv_lead: 'Key areas where we can address your company’s technical challenges, new product initiatives, or engineering bottlenecks:',
      s1_title: 'Enterprise Problem Analysis & System Architecture',
      s1_desc: 'Analyzing operational bottlenecks that cost time and resources, and designing secure, high-availability software and hardware architectures.',
      s2_title: 'Web Systems & Data Processing Platforms',
      s2_desc: 'Building modern full-stack web applications, robust APIs, real-time data ingestion/processing pipelines, and analytical dashboards.',
      s3_title: 'Embedded Systems & Biotechnology Solutions',
      s3_desc: 'Developing hardware-software integration, sensor networks, microcontroller firmware, and specialized biotechnology/laboratory data systems.',
      s4_title: 'Intelligent Automation & Workflow Optimization',
      s4_desc: 'Automating repetitive industrial and software workflows, data synchronization, and device control loops to minimize human error.',
      tech_matrix_tag: 'TECHNICAL EXPERTISE DOMAINS',
      tech_matrix_title: 'Core Engineering Domains & Technical Stack',
      tech_matrix_desc: 'Primary engineering disciplines in which I specialize and deliver production-grade solutions for organizations:',
      dom_web_title: 'Web Systems',
      dom_web_desc: 'Scalable backend architectures, responsive web applications, and secure API design.',
      chip_web_arch: 'Microservices & APIs',
      chip_web_perf: 'High-Performance UI',
      dom_data_title: 'Data Processing & Analytics',
      dom_data_desc: 'Cleaning, modeling, and real-time processing of high-volume structured and sensor data.',
      chip_data_stream: 'Real-Time Data Streams',
      chip_data_vis: 'Data Analytics',
      dom_emb_title: 'Embedded Systems',
      dom_emb_desc: 'Microcontroller programming, real-time field hardware, and low-level communication protocols.',
      dom_bio_title: 'Biotechnology Applications',
      dom_bio_desc: 'Biomedical/biotech data pipelines, laboratory automation, and biosensor signal integration.',
      chip_bio_data: 'Bioinformatics Pipelines',
      chip_bio_sensor: 'Biosensor & Signal Analysis',
      chip_bio_lab: 'Lab Automation Systems',
      chip_bio_alg: 'Algorithmic Modeling',
      dom_auto_title: 'Automation Systems',
      dom_auto_desc: 'Hardware control loops, workflow automation, and autonomous cross-system integration.',
      chip_auto_proc: 'Process Automation',
      chip_auto_ctrl: 'Telemetry & Control',
      chip_auto_int: 'System Integration',
      dom_eng_title: 'System Architecture & Advisory',
      dom_eng_desc: 'Bottleneck resolution, performance optimization, and end-to-end product engineering.',
      chip_eng_1: 'Technical Problem Solving',
      chip_eng_2: 'End-to-End Architecture',
      proj_tag: '03 / Projects & Repositories',
      proj_title: 'Open-Source Work & GitHub Profile',
      proj_lead: 'Explore my open-source repositories, technical prototypes, and ongoing engineering work directly on GitHub.',
      proj_verified_badge: 'VERIFIED GITHUB PROFILE',
      proj_card_title: 'Muhammed Übeyd Seyhan — GitHub (@muhammetsey)',
      proj_card_desc: 'Browse my public code repositories, prototypes, and technical contributions across web systems, data processing, embedded systems, biotechnology, and automation on GitHub.',
      proj_btn: 'Visit GitHub Profile',
      proj_footer_note: 'Enterprise client projects are protected under non-disclosure agreements (NDAs).',
      share_tag: '04 / Idea & Problem Sharing',
      share_quote: '“Do you have a problem you want solved or an idea you’re thinking of building? Tell me briefly; let’s evaluate it together.”',
      share_desc: 'Whether it is a technical bottleneck in your company, a workflow you want to automate, or a new product concept, share a brief overview and we can map out the right engineering approach together.',
      share_quick_label: 'Quick Topic Selection (Updates Draft):',
      cat_problem: 'A Technical Problem to Solve',
      cat_idea: 'A New Idea or Product Concept',
      cat_process: 'Enterprise Process / Automation Improvement',
      cat_general: 'Enterprise Engineering & Consultancy Inquiry',
      privacy_title: 'Zero Data Storage • Direct Google Gmail or Email App',
      privacy_desc: 'Nothing you type here is stored on any server or database. Clicking the button opens your device’s default email client with a pre-filled subject and editable draft addressed to m.syhn7@gmail.com so you can review and send it yourself.',
      comp_title: 'Email Draft Composer',
      comp_to: 'Recipient:',
      comp_badge: 'Gmail & mailto',
      label_category: 'Inquiry Type',
      label_title: 'Short Subject Title (Optional)',
      ph_title: 'e.g., Production line data tracking & automation system',
      label_details: 'Summary of the Problem or Idea (Editable in your email app)',
      ph_details: 'Briefly describe the technical problem, desired improvement, or idea you have in mind...',
      label_sender: 'Your Name / Company (Optional)',
      ph_sender: 'Optionally add your name or organization',
      preview_header: 'Live Email Draft Preview',
      preview_subj_prefix: 'Subject:',
      btn_open_gmail: 'Open in Gmail (Browser)',
      btn_open_mail: 'Email App',
      btn_copy_draft: 'Copy Draft Text',
      contact_tag: '05 / Contact',
      contact_title: 'Direct Contact',
      contact_lead: 'For enterprise projects, technical consultancy, or sharing ideas, reach out to me directly via email.',
      contact_email_label: 'My Email Address',
      btn_send_gmail: 'Send via Gmail',
      btn_send_mail: 'Email App',
      btn_copy_email: 'Copy Email Address',
      contact_gh_label: 'My GitHub Profile: ',
      footer_role: 'Computer Engineer'
    }
  };

  // --- 1. Tema Yönetimi (Sağ Üst Düğmeyle 4 Palet Arasında Geçiş) ---
  var themeToggleBtn = document.getElementById('theme-toggle');
  var themeToggleMobileBtn = document.getElementById('theme-toggle-mobile');
  var htmlEl = document.documentElement;

  var THEME_LABELS = {
    tr: {
      obsidian: 'Tema: Obsidyen & İndigo',
      ivory: 'Tema: Fildişi & Kobalt',
      graphite: 'Tema: Grafit & Bakır',
      nordic: 'Tema: Kuzey Mavisi'
    },
    en: {
      obsidian: 'Theme: Obsidian & Indigo',
      ivory: 'Theme: Ivory & Cobalt',
      graphite: 'Theme: Graphite & Copper',
      nordic: 'Theme: Nordic Slate'
    }
  };
  var THEME_ORDER = ['obsidian', 'ivory', 'graphite', 'nordic'];

  function getSavedTheme() {
    try {
      return localStorage.getItem('site_theme_v2');
    } catch (e) {
      return null;
    }
  }

  function setSavedTheme(theme) {
    try {
      localStorage.setItem('site_theme_v2', theme);
    } catch (e) {}
  }

  function applyTheme(theme) {
    if (!THEME_LABELS.tr[theme]) theme = 'obsidian';
    htmlEl.setAttribute('data-theme', theme);
    var isDark = (theme === 'obsidian' || theme === 'graphite');
    if (isDark) {
      htmlEl.classList.add('dark');
      htmlEl.classList.remove('light');
    } else {
      htmlEl.classList.add('light');
      htmlEl.classList.remove('dark');
    }

    var statusText = THEME_LABELS[currentLang][theme];
    [themeToggleBtn, themeToggleMobileBtn].forEach(function (btn) {
      if (!btn) return;
      btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
      btn.setAttribute('aria-label', statusText);
      var textSpan = btn.querySelector('.theme-label');
      if (textSpan) textSpan.textContent = statusText;
    });
  }

  function handleThemeToggle() {
    var current = htmlEl.getAttribute('data-theme') || 'obsidian';
    var nextIdx = (THEME_ORDER.indexOf(current) + 1) % THEME_ORDER.length;
    var nextTheme = THEME_ORDER[nextIdx];
    applyTheme(nextTheme);
    setSavedTheme(nextTheme);
  }

  if (themeToggleBtn) themeToggleBtn.addEventListener('click', handleThemeToggle);
  if (themeToggleMobileBtn) themeToggleMobileBtn.addEventListener('click', handleThemeToggle);

  // --- 2. Dil Yönetimi (TR / EN Geçişi) ---
  var langToggleBtn = document.getElementById('lang-toggle');
  var langToggleMobileBtn = document.getElementById('lang-toggle-mobile');

  function getSavedLang() {
    try {
      return localStorage.getItem('site_lang');
    } catch (e) {
      return null;
    }
  }

  function setSavedLang(lang) {
    try {
      localStorage.setItem('site_lang', lang);
    } catch (e) {}
  }

  function applyLanguage(lang) {
    currentLang = (lang === 'en') ? 'en' : 'tr';
    htmlEl.setAttribute('lang', currentLang);
    var dict = I18N[currentLang];
    document.title = dict.page_title;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (dict[key]) el.innerHTML = dict[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (dict[key]) el.setAttribute('placeholder', dict[key]);
    });

    if (langToggleBtn) {
      var lbl = langToggleBtn.querySelector('.lang-label');
      if (lbl) lbl.textContent = currentLang === 'tr' ? 'EN' : 'TR';
      langToggleBtn.setAttribute('aria-label', currentLang === 'tr' ? 'Switch language to English' : 'Dili Türkçeye çevir');
    }

    if (langToggleMobileBtn) {
      var mlbl = langToggleMobileBtn.querySelector('.lang-label');
      if (mlbl) mlbl.textContent = currentLang === 'tr' ? 'Dil: TR → EN' : 'Lang: EN → TR';
    }

    applyTheme(htmlEl.getAttribute('data-theme') || 'obsidian');
    updateMailtoPreview();
  }

  function handleLangToggle() {
    var nextLang = currentLang === 'tr' ? 'en' : 'tr';
    applyLanguage(nextLang);
    setSavedLang(nextLang);
  }

  if (langToggleBtn) langToggleBtn.addEventListener('click', handleLangToggle);
  if (langToggleMobileBtn) langToggleMobileBtn.addEventListener('click', handleLangToggle);

  // --- 3. Mobil Menü Kontrolü ---
  var mobileMenuBtn = document.getElementById('mobile-menu-btn');
  var mobileMenuPanel = document.getElementById('mobile-menu-panel');
  var mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function setMobileMenuOpen(isOpen) {
    if (!mobileMenuBtn || !mobileMenuPanel) return;
    mobileMenuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    if (isOpen) {
      mobileMenuPanel.classList.remove('hidden');
    } else {
      mobileMenuPanel.classList.add('hidden');
    }
  }

  if (mobileMenuBtn && mobileMenuPanel) {
    mobileMenuBtn.addEventListener('click', function () {
      var expanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      setMobileMenuOpen(!expanded);
    });
  }

  mobileNavLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      setMobileMenuOpen(false);
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileMenuBtn && mobileMenuBtn.getAttribute('aria-expanded') === 'true') {
      setMobileMenuOpen(false);
      mobileMenuBtn.focus();
    }
  });

  // --- 4. Dinamik mailto: Fikir ve Sorun Paylaşım Aracı (TR & EN Uyumlu) ---
  var categorySelect = document.getElementById('share-category');
  var titleInput = document.getElementById('share-title');
  var detailsInput = document.getElementById('share-details');
  var senderInput = document.getElementById('share-sender');
  var gmailActionLink = document.getElementById('gmail-action-link');
  var mailtoActionLink = document.getElementById('mailto-action-link');
  var previewSubjectEl = document.getElementById('preview-subject');
  var previewBodyEl = document.getElementById('preview-body');
  var copyDraftBtn = document.getElementById('copy-draft-btn');
  var copyEmailBtn = document.getElementById('copy-email-btn');
  var statusFeedbackEl = document.getElementById('share-status-feedback');
  var quickCategoryBtns = document.querySelectorAll('.quick-category-btn');

  var CATEGORY_MAP = {
    tr: {
      problem: 'Çözülmesini İstediğim Bir Sorun',
      idea: 'Geliştirilmesini Düşündüğüm Bir Fikir',
      process: 'Kurumsal Süreç / Otomasyon İyileştirmesi',
      general: 'Kurumsal Hizmet ve Teknik Danışmanlık'
    },
    en: {
      problem: 'A Technical Problem to Solve',
      idea: 'A New Idea or Product Concept',
      process: 'Enterprise Process / Automation Improvement',
      general: 'Enterprise Engineering & Consultancy Inquiry'
    }
  };

  function buildEmailContent() {
    var catKey = categorySelect ? categorySelect.value : 'problem';
    var categoryLabel = (CATEGORY_MAP[currentLang] && CATEGORY_MAP[currentLang][catKey])
      ? CATEGORY_MAP[currentLang][catKey]
      : CATEGORY_MAP.tr.problem;

    var customTitle = titleInput && titleInput.value.trim() ? titleInput.value.trim() : '';
    var sender = senderInput && senderInput.value.trim() ? senderInput.value.trim() : '';

    if (currentLang === 'en') {
      var detailsEn = detailsInput && detailsInput.value.trim()
        ? detailsInput.value.trim()
        : '[Hello Muhammed Übeyd, I would like to briefly share the technical problem or idea I have in mind...]';
      var subjectEn = customTitle
        ? categoryLabel + ': ' + customTitle
        : categoryLabel + ' — Website Inquiry';
      var bodyLinesEn = [
        'Hello Muhammed Übeyd,',
        '',
        'I am reaching out via your website regarding: ' + categoryLabel + '.',
        '',
        '--- Topic / Summary ---',
        customTitle ? customTitle : '(You can edit the subject/topic in your email client)',
        '',
        '--- Details & Notes ---',
        detailsEn,
        ''
      ];
      if (sender) {
        bodyLinesEn.push('--- Sender / Organization ---');
        bodyLinesEn.push(sender);
        bodyLinesEn.push('');
      }
      bodyLinesEn.push('Best regards.');
      var bodyTextEn = bodyLinesEn.join('\r\n');
      return {
        subject: subjectEn,
        bodyText: bodyLinesEn.join('\n'),
        gmailHref: 'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(EMAIL_ADDRESS) + '&su=' + encodeURIComponent(subjectEn) + '&body=' + encodeURIComponent(bodyTextEn),
        mailtoHref: 'mailto:' + EMAIL_ADDRESS + '?subject=' + encodeURIComponent(subjectEn) + '&body=' + encodeURIComponent(bodyTextEn)
      };
    }

    var detailsTr = detailsInput && detailsInput.value.trim()
      ? detailsInput.value.trim()
      : '[Merhaba Muhammed Übeyd Bey, çözülmesini istediğim sorunu veya geliştirmeyi düşündüğüm fikri buraya kısaca yazıyorum...]';

    var subjectTr = customTitle
      ? categoryLabel + ': ' + customTitle
      : categoryLabel + ' — Web Sitesi Üzerinden İletişim';

    var bodyLinesTr = [
      'Merhaba Muhammed Übeyd Bey,',
      '',
      'Web siteniz üzerinden "' + categoryLabel + '" başlığıyla iletişime geçiyorum.',
      '',
      '--- Konu / Özet ---',
      customTitle ? customTitle : '(E-posta uygulamasında başlığı düzenleyebilirsiniz)',
      '',
      '--- Detaylar ve Değerlendirme Notu ---',
      detailsTr,
      ''
    ];

    if (sender) {
      bodyLinesTr.push('--- İletişim / Kurum ---');
      bodyLinesTr.push(sender);
      bodyLinesTr.push('');
    }

    bodyLinesTr.push('İyi çalışmalar dilerim.');

    var bodyTextTr = bodyLinesTr.join('\r\n');
    return {
      subject: subjectTr,
      bodyText: bodyLinesTr.join('\n'),
      gmailHref: 'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(EMAIL_ADDRESS) + '&su=' + encodeURIComponent(subjectTr) + '&body=' + encodeURIComponent(bodyTextTr),
      mailtoHref: 'mailto:' + EMAIL_ADDRESS + '?subject=' + encodeURIComponent(subjectTr) + '&body=' + encodeURIComponent(bodyTextTr)
    };
  }

  function updateMailtoPreview() {
    var data = buildEmailContent();
    if (previewSubjectEl) previewSubjectEl.textContent = data.subject;
    if (previewBodyEl) previewBodyEl.textContent = data.bodyText;
    if (gmailActionLink) gmailActionLink.setAttribute('href', data.gmailHref);
    if (mailtoActionLink) mailtoActionLink.setAttribute('href', data.mailtoHref);
  }

  [categorySelect, titleInput, detailsInput, senderInput].forEach(function (el) {
    if (!el) return;
    el.addEventListener('input', updateMailtoPreview);
    el.addEventListener('change', updateMailtoPreview);
  });

  quickCategoryBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var targetKey = btn.getAttribute('data-category-key');
      if (categorySelect && targetKey) {
        categorySelect.value = targetKey;
        updateMailtoPreview();
      }
      quickCategoryBtns.forEach(function (b) {
        b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
      });
      if (detailsInput) detailsInput.focus();
    });
  });

  function showFeedback(message) {
    if (!statusFeedbackEl) return;
    statusFeedbackEl.textContent = message;
    statusFeedbackEl.classList.remove('hidden');
    statusFeedbackEl.setAttribute('role', 'status');
  }

  if (gmailActionLink) {
    gmailActionLink.addEventListener('click', function () {
      updateMailtoPreview();
      var msgG = currentLang === 'en'
        ? 'Info: Google Gmail compose screen was opened in a new browser tab with recipient m.syhn7@gmail.com and your draft ready. You can review and click Send in Gmail.'
        : 'Bilgi: Google Gmail mesaj oluşturma ekranı (m.syhn7@gmail.com alıcısı, konu başlığı ve taslak metniniz hazır olarak) yeni sekmede açıldı. Mesajınızı Gmail ekranında kontrol edip gönderebilirsiniz.';
      showFeedback(msgG);
    });
  }

  if (mailtoActionLink) {
    mailtoActionLink.addEventListener('click', function () {
      updateMailtoPreview();
      var msg = currentLang === 'en'
        ? 'Info: Your default email client was triggered with the recipient (m.syhn7@gmail.com) and your draft pre-filled. This site does not send emails automatically in the background; please review and send it from your email app.'
        : 'Bilgi: Cihazınızdaki varsayılan e-posta uygulaması (m.syhn7@gmail.com alıcısı ve taslak metninizle) açılmak üzere tetiklendi. Bu site arka planda otomatik e-posta göndermez; mesajınızı e-posta uygulamanızda kontrol edip gönderebilirsiniz.';
      showFeedback(msg);
    });
  }

  function copyTextToClipboard(text, onSuccess) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(onSuccess).catch(function () {
        fallbackCopy(text, onSuccess);
      });
    } else {
      fallbackCopy(text, onSuccess);
    }
  }

  function fallbackCopy(text, onSuccess) {
    try {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.top = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      onSuccess();
    } catch (err) {
      showFeedback(
        currentLang === 'en'
          ? 'Copy could not be completed due to browser restrictions. Please select and copy the text manually.'
          : 'Kopyalama işlemi tarayıcı kısıtlaması nedeniyle tamamlanamadı. Lütfen metni seçerek kopyalayın.'
      );
    }
  }

  if (copyDraftBtn) {
    copyDraftBtn.addEventListener('click', function () {
      var data = buildEmailContent();
      var prefixTo = currentLang === 'en' ? 'To: ' : 'Alıcı: ';
      var prefixSubj = currentLang === 'en' ? 'Subject: ' : 'Konu: ';
      var fullCopy = prefixTo + EMAIL_ADDRESS + '\n' + prefixSubj + data.subject + '\n\n' + data.bodyText;
      copyTextToClipboard(fullCopy, function () {
        showFeedback(
          currentLang === 'en'
            ? 'Draft text and recipient address (m.syhn7@gmail.com) copied to clipboard.'
            : 'Taslak metni ve alıcı adresi (m.syhn7@gmail.com) panoya kopyalandı. İstediğiniz e-posta uygulamasına yapıştırarak gönderebilirsiniz.'
        );
      });
    });
  }

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', function () {
      copyTextToClipboard(EMAIL_ADDRESS, function () {
        showFeedback(
          currentLang === 'en'
            ? 'Email address (m.syhn7@gmail.com) copied to clipboard.'
            : 'E-posta adresi (m.syhn7@gmail.com) panoya kopyalandı.'
        );
      });
    });
  }

  // Başlangıç tema ve dil ayarlarını yükle
  var savedTheme = getSavedTheme() || 'obsidian';
  var savedLang = getSavedLang() || 'tr';
  applyTheme(savedTheme);
  applyLanguage(savedLang);
})();
