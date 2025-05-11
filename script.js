const translations = {
  az: {
    nav: ["Ana səhifə", "Əlaqə", "Konsept", "Modullar", "Səviyyələr", "Layihə"],
    intro: "Giriş",
    register: "Qeydiyyat",
    heroTitle: ["Simo", "Ldrise Kids"],
    heroSubtitle: "Uşaqlar üçün şahmat hekayəsi",
    heroDesc: "Əgər siz uşaqlar üçün nəsə axtarırsınızsa və ya öyrənmək istəyirsinizsə, KidChess-də uşaqlara şahmat öyrədin. Burada əsas taktika və strategiyaları öyrənəcəksiniz.",
    startNow: "Başla",
    learnMore: "Daha ətraflı",
    cards: [
      {
        title: "Uşaqlarımızı inkişaf etdiririk",
        desc: "Bütün yaşlar üçün əyləncəli fəaliyyətlər və şahmat. Məntiq, yaddaş və yaradıcılığı inkişaf etdirin."
      },
      {
        title: "Şahmatın imkanları",
        desc: "Təcrübəli məşqçilərdən dəstək və dost mühitdə şahmat öyrənin."
      },
      {
        title: "Uşaqlarımızı təqdim edirik",
        desc: "Tələbələrimiz turnirlərdə və əyləncəli tədbirlərdə iştirak edirlər."
      }
    ],
    chessTitle: "Uşaqlar üçün şahmatın faydaları",
    chessDesc: "Ən böyük macəra burada başlayır. Uşaqlar üçün tənqidi düşüncə, səbr və strateji bacarıqlar inkişaf etdirin!",
    copyright: "© 2024 KidChess. Bütün hüquqlar qorunur."
  },
  ru: {
    nav: ["Главная", "Контакт", "Концепт", "Модули", "Уровни", "Проект"],
    intro: "Вход",
    register: "Регистрация",
    heroTitle: ["Симо", "Ldrise Kids"],
    heroSubtitle: "История шахмат для детей",
    heroDesc: "Если вы ищете что-то для детей или хотите научиться, обучайте детей шахматам в KidChess. Здесь вы освоите основные тактики и стратегии.",
    startNow: "Начать",
    learnMore: "Подробнее",
    cards: [
      {
        title: "Развиваем наших детей",
        desc: "Весёлые занятия и шахматы для всех возрастов. Развивайте логику, память и креативность."
      },
      {
        title: "Возможности шахмат",
        desc: "Учитесь шахматам у опытных тренеров в дружелюбной атмосфере."
      },
      {
        title: "Наши дети выступают",
        desc: "Наши ученики участвуют в турнирах и весёлых мероприятиях."
      }
    ],
    chessTitle: "Преимущества шахмат для детей",
    chessDesc: "Великое приключение начинается здесь. Развивайте критическое мышление, терпение и стратегические навыки у детей!",
    copyright: "© 2024 KidChess. Все права защищены."
  }
};

const langBtns = document.querySelectorAll('.lang-btn');
let currentLang = 'az';

function setLang(lang) {
  currentLang = lang;
  // Nav
  document.querySelectorAll('.nav-link').forEach((el, i) => {
    el.textContent = translations[lang].nav[i];
  });
  // Header buttons
  document.querySelector('.header-btn').textContent = translations[lang].intro;
  document.querySelector('.header-btn.primary').textContent = translations[lang].register;
  // Hero
  document.querySelector('.hero-title .accent-green').textContent = translations[lang].heroTitle[0];
  document.querySelector('.hero-title .accent-black').textContent = translations[lang].heroTitle[1];
  document.querySelector('.hero-subtitle').textContent = translations[lang].heroSubtitle;
  document.querySelector('.hero-desc').textContent = translations[lang].heroDesc;
  document.querySelector('.btn.primary').textContent = translations[lang].startNow;
  document.querySelector('.btn.secondary').textContent = translations[lang].learnMore;
  // Cards
  document.querySelectorAll('.info-cards .card').forEach((card, i) => {
    card.querySelector('.card-title').textContent = translations[lang].cards[i].title;
    card.querySelector('.card-desc').textContent = translations[lang].cards[i].desc;
  });
  // Chess mid section
  document.querySelector('.chess-title').textContent = translations[lang].chessTitle;
  document.querySelector('.chess-desc').textContent = translations[lang].chessDesc;
  // Footer copyright
  document.querySelector('.footer-copy').textContent = translations[lang].copyright;
  // Highlight active button
  langBtns.forEach(btn => btn.classList.remove('active'));
  document.querySelector(`.lang-btn[data-lang="${lang}"]`).classList.add('active');
}

langBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    setLang(btn.getAttribute('data-lang'));
  });
});

// Set default language
setLang(currentLang); 