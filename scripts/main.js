// Language translations
const translations = {
    ja: {
        'meta.title': '入佐啓士 | ポートフォリオ',
        'meta.description': '東京大学工学部化学生命工学科3年生のポートフォリオサイト',
        'nav.name': '入佐啓士',
        'nav.about': '私について',
        'nav.projects': 'プロジェクト',
        'nav.experience': '経験',
        'nav.certifications': '資格',
        'hero.name': '入佐啓士',
        'hero.title': '化学生命工学科',
        'hero.subtitle': '東京大学工学部 3年',
        'hero.cta': '詳しく見る',
        'about.title': '私について',
        'about.description': '東京大学工学部化学生命工学科で学ぶ3年生です。AI技術とバックエンド開発に情熱を注いでおり、これまでに複数のスタートアップや大手企業でのインターンシップを通じて実践的な経験を積んできました。',
        'projects.title': 'プロジェクト',
        'projects.project1.title': 'PDF Quiz Maker',
        'projects.project1.description': 'PDF教科書から質問、回答、説明を自動生成するAI駆動の学習ツール',
        'projects.project2.title': 'Auto Press Release and Podcasts Generator',
        'projects.project2.description': 'SNS投稿から自動でプレスリリースとポッドキャストを生成するアプリ',
        'experience.title': 'インターンシップ経験',
        'experience.emuni.period': '2025年1月 - 現在',
        'experience.emuni.role': 'ソフトウェアエンジニア インターン',
        'experience.emuni.description': '16万人向け教育機関用生成AIチャットアプリの開発',
        'experience.cookpad.period': '2025年2月 - 2025年3月',
        'experience.cookpad.role': 'サーチエンジニア インターン',
        'experience.cookpad.description': '検索システムの改良により不適切クエリ検出率を10%向上',
        'experience.line.period': '2024年8月',
        'experience.line.role': 'ソフトウェアエンジニア インターン',
        'experience.line.description': '広告管理ツールの新機能開発とスクラム開発の実践',
        'experience.kotonoha.period': '2023年7月 - 2024年4月',
        'experience.kotonoha.role': '共同創業者 | 営業・モバイルアプリ開発',
        'experience.kotonoha.description': '英語学習アプリ開発・1000+ダウンロード・100人有料ユーザー獲得',
        'certifications.title': '資格・認定',
        'certifications.english.title': '英語能力',
        'certifications.technical.title': '技術資格',
        'certifications.technical.fundamental': '基本情報技術者',
        'certifications.technical.applied': '応用情報技術者',
        'footer.rights': 'All rights reserved.'
    },
    en: {
        'meta.title': 'Keishi Irisa | Portfolio',
        'meta.description': 'Portfolio website of Keishi Irisa, 3rd year Chemical and Biological Engineering student at The University of Tokyo',
        'nav.name': 'Keishi Irisa',
        'nav.about': 'About',
        'nav.projects': 'Projects',
        'nav.experience': 'Experience',
        'nav.certifications': 'Certifications',
        'hero.name': 'Keishi Irisa',
        'hero.title': 'Chemical and Biological Engineering Student',
        'hero.subtitle': 'The University of Tokyo, 3rd Year',
        'hero.cta': 'Learn More',
        'about.title': 'About Me',
        'about.description': "I'm a 3rd year Chemical and Biological Engineering student at The University of Tokyo. I'm passionate about AI technology and backend development, having gained practical experience through internships at multiple startups and major companies.",
        'projects.title': 'Projects',
        'projects.project1.title': 'PDF Quiz Maker',
        'projects.project1.description': 'AI-driven learning tool that automatically generates questions, answers, and explanations from PDF textbooks',
        'projects.project2.title': 'Auto Press Release and Podcasts Generator',
        'projects.project2.description': 'App that automatically generates press releases and podcasts from social media posts',
        'experience.title': 'Internship Experience',
        'experience.line2025.period': 'August 2025 - Present',
        'experience.line2025.role': 'Backend Engineer Intern',
        'experience.line2025.achievement1': 'LINE Stickers, Themes, and Emoji backend development',
        'experience.emuni.period': 'January 2025 - Present',
        'experience.emuni.role': 'Software Engineer Intern',
        'experience.emuni.achievement1': 'Backend and frontend development for generative AI chat app for educational institutions with high-traffic multi-tenant architecture',
        'experience.cookpad.period': 'February 2025 - March 2025',
        'experience.cookpad.role': 'Search Engineer Intern',
        'experience.cookpad.achievement3': 'Enhanced autocomplete functionality by improving search API and optimizing Cron tasks',
        'experience.line2024.period': 'August 2024',
        'experience.line2024.role': 'Software Engineer Intern',
        'experience.line2024.achievement1': 'Implemented new features in advertising management tools based on internal marketer feedback',
        'experience.kotonoha.period': 'July 2023 - April 2024',
        'experience.kotonoha.role': 'Co-founder | Sales & Mobile App Development',
        'experience.kotonoha.achievement1': 'Developed and marketed automated grading/correction tools and English correction app',
        'certifications.title': 'Certifications',
        'certifications.english.title': 'English Proficiency',
        'certifications.technical.title': 'Technical Certifications',
        'certifications.technical.fundamental': 'Fundamental Information Technology Engineer',
        'certifications.technical.applied': 'Applied Information Technology Engineer',
        'footer.rights': 'All rights reserved.'
    }
};

// Current language state
let currentLanguage = localStorage.getItem('language') || 'ja';

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    updateLanguage(currentLanguage);
    updateLanguageButton();
    setupEventListeners();
    initializeAnimations();
    updateMetaData();
});

// Language switching functionality
function switchLanguage() {
    currentLanguage = currentLanguage === 'ja' ? 'en' : 'ja';
    localStorage.setItem('language', currentLanguage);
    updateLanguage(currentLanguage);
    updateLanguageButton();
    updateMetaData();
}

// Update all text content based on current language
function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    document.documentElement.lang = lang;
}

// Update language button text
function updateLanguageButton() {
    const langText = document.getElementById('lang-text');
    if (langText) {
        langText.textContent = currentLanguage === 'ja' ? 'EN' : 'JA';
    }
}

// Update meta data
function updateMetaData() {
    const title = document.querySelector('title');
    const description = document.querySelector('meta[name="description"]');
    
    if (title && translations[currentLanguage]['meta.title']) {
        title.textContent = translations[currentLanguage]['meta.title'];
    }
    
    if (description && translations[currentLanguage]['meta.description']) {
        description.setAttribute('content', translations[currentLanguage]['meta.description']);
    }
}

// Set up all event listeners
function setupEventListeners() {
    const langBtn = document.getElementById('lang-btn');
    if (langBtn) {
        langBtn.addEventListener('click', switchLanguage);
    }
    
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', toggleMobileMenu);
    }
    
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            closeMobileMenu();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    const ctaBtn = document.querySelector('.cta-btn');
    if (ctaBtn) {
        ctaBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const targetElement = document.querySelector('#about');
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
    
    window.addEventListener('scroll', handleNavbarScroll);
    window.addEventListener('scroll', handleScrollAnimations);
}

// Toggle mobile menu
function toggleMobileMenu() {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
}

// Close mobile menu
function closeMobileMenu() {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
}

// Handle navbar scroll effect
function handleNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
}

// Initialize scroll animations
function initializeAnimations() {
    const animatedElements = document.querySelectorAll('.project-card, .experience-item, .cert-category');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
}

// Handle scroll animations
function handleScrollAnimations() {
    const animatedElements = document.querySelectorAll('.project-card, .experience-item, .cert-category');
    
    animatedElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
        e.preventDefault();
        switchLanguage();
    }
    
    if (e.key === 'Escape') {
        closeMobileMenu();
    }
});
