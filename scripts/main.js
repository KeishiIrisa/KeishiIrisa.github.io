// Language translations
const translations = {
    ja: {
        'meta.title': '入佐啓士 | ポートフォリオ',
        'meta.description': '東京大学工学部化学生命工学科3年生のポートフォリオサイト',
        'nav.name': '入佐啓士',
        'nav.about': '私について',
        'nav.projects': 'プロジェクト',
        'nav.research': '研究',
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
        'research.title': '研究活動',
        'research.riken.organization': '理化学研究所 生命機能科学研究センター',
        'research.riken.period': '2025年8月 - 現在',
        'research.riken.role': 'マルチモーダルAI基盤技術研究チーム',
        'research.riken.achievement1': 'タンパク質言語モデルの研究',
        'research.neuro.organization': '神経細胞細胞生物学研究室',
        'research.neuro.period': '2025年7月 - 現在',
        'research.neuro.role': 'B3配属生',
        'research.neuro.achievement1': '神経細胞セグメンテーションAIのオープンソース開発',
        'experience.title': 'インターンシップ経験',
        'experience.line2025.company': 'LINEヤフー',
        'experience.emuni.company': 'EMUNI',
        'experience.emuni.period': '2025年1月 - 現在',
        'experience.emuni.role': 'ソフトウェアエンジニア インターン',
        'experience.emuni.description': '16万人向け教育機関用生成AIチャットアプリの開発',
        'experience.cookpad.company': 'Cookpad',
        'experience.cookpad.period': '2025年2月 - 2025年3月',
        'experience.cookpad.role': 'サーチエンジニア インターン',
        'experience.cookpad.description': '検索システムの改良により不適切クエリ検出率を10%向上',
        'experience.line2024.company': 'LINEヤフー',
        'experience.line.period': '2024年8月',
        'experience.line.role': 'ソフトウェアエンジニア インターン',
        'experience.line.description': '広告管理ツールの新機能開発とスクラム開発の実践',
        'experience.kotonoha.company': 'Kotonoha AI',
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
        'nav.research': 'Research',
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
        'research.title': 'Research Activities',
        'research.riken.organization': 'RIKEN Center for Biosystems Dynamics Research',
        'research.riken.period': 'August 2025 - Present',
        'research.riken.role': 'Multimodal AI Foundation Technology Research Team',
        'research.riken.achievement1': 'Research and development of protein language models',
        'research.neuro.organization': 'Neurobiology Laboratory',
        'research.neuro.period': 'July 2025 - Present',
        'research.neuro.role': 'B3 Student',
        'research.neuro.achievement1': 'Open source development of neural cell segmentation AI',
        'experience.title': 'Internship Experience',
        'experience.line2025.company': 'LY Corporation',
        'experience.line2025.period': 'August 2025 - Present',
        'experience.line2025.role': 'Backend Engineer Intern',
        'experience.line2025.achievement1': 'LINE Stickers, Themes, and Emoji backend development',
        'experience.emuni.company': 'EMUNI',
        'experience.emuni.period': 'January 2025 - Present',
        'experience.emuni.role': 'Software Engineer Intern',
        'experience.emuni.achievement1': 'Backend and frontend development for generative AI chat app for educational institutions with high-traffic multi-tenant architecture',
        'experience.cookpad.company': 'Cookpad',
        'experience.cookpad.period': 'February 2025 - March 2025',
        'experience.cookpad.role': 'Search Engineer Intern',
        'experience.cookpad.achievement3': 'Enhanced autocomplete functionality by improving search API and optimizing Cron tasks',
        'experience.line2024.company': 'LY Corporation',
        'experience.line2024.period': 'August 2024',
        'experience.line2024.role': 'Software Engineer Intern',
        'experience.line2024.achievement1': 'Implemented new features in advertising management tools based on internal marketer feedback',
        'experience.kotonoha.company': 'Kotonoha AI',
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
    if (typeof resetTerminal === 'function') {
        resetTerminal();
    }
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
        navbar.style.background = '#0a0a0a';
        navbar.style.boxShadow = '0 2px 10px rgba(77, 212, 212, 0.4)';
    } else {
        navbar.style.background = '#0a0a0a';
        navbar.style.boxShadow = '0 2px 10px rgba(77, 212, 212, 0.3)';
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

// Sticky Terminal Animation
const terminalCommands = {
    ja: {
        'hero': {
            command: 'whoami',
            output: '入佐啓士'
        },
        'about': {
            command: 'cat about.txt',
            output: '化学生命工学科\n東京大学工学部 3年\nBackend Engineer & AI Enthusiast'
        },
        'projects': {
            command: 'history',
            output: 'PDF-Quiz-Maker\nAuto-Press-Release-and-Podcasts-Generator'
        },
        'research': {
            command: 'ls research/',
            output: 'RIKEN-BDR/\nNeurobiology-Lab/'
        },
        'experience': {
            command: 'ls experience/',
            output: 'LINEヤフー/\nEMUNI/\nCookpad/\nKotonoha-AI/'
        },
        'certifications': {
            command: "grep -r 'skills'",
            output: 'Python, Java, TypeScript\nFastAPI, Spring Boot, Nuxt.js\nPostgreSQL, MongoDB, Redis\nDocker, Kubernetes, AWS'
        }
    },
    en: {
        'hero': {
            command: 'whoami',
            output: 'Keishi Irisa'
        },
        'about': {
            command: 'cat about.txt',
            output: 'Chemical & Biological Engineering\nUniversity of Tokyo, 3rd year\nBackend Engineer & AI Enthusiast'
        },
        'projects': {
            command: 'history',
            output: 'PDF-Quiz-Maker\nAuto-Press-Release-and-Podcasts-Generator'
        },
        'research': {
            command: 'ls research/',
            output: 'RIKEN-BDR/\nNeurobiology-Lab/'
        },
        'experience': {
            command: 'ls experience/',
            output: 'LY-Corp/\nEMUNI/\nCookpad/\nKotonoha-AI/'
        },
        'certifications': {
            command: "grep -r 'skills'",
            output: 'Python, Java, TypeScript\nFastAPI, Spring Boot, Nuxt.js\nPostgreSQL, MongoDB, Redis\nDocker, Kubernetes, AWS'
        }
    }
};

let terminalContent;
let terminalCursor;
let stickyTerminal;
let isTyping = false;
let commandHistory = [];
let currentSection = '';
let terminalLines = []; // Track all terminal lines for height management
let maxTerminalHeight = 300; // Will be updated based on screen size
let lastExecutedCommand = ''; // Track last command to prevent duplicates
let isTerminalMinimized = false; // Track terminal minimization state
let isMobile = false; // Track if device is mobile
let mobileTerminalShown = {}; // Track which sections have shown on mobile
let mobileTerminalTimeout = null; // Timeout for mobile terminal fade out

// Check if device is mobile
function checkIfMobile() {
    return window.innerWidth <= 768;
}

// Update max terminal height based on screen size
function updateMaxTerminalHeight() {
    const viewportHeight = window.innerHeight;
    if (window.innerWidth <= 768) {
        maxTerminalHeight = Math.min(viewportHeight * 0.4, 300); // 40vh or 300px max for mobile
    } else {
        maxTerminalHeight = Math.min(viewportHeight * 0.6, 500); // 60vh or 500px max for desktop
    }
}

// Initialize terminal (mobile or desktop)
function initializeTerminal() {
    terminalContent = document.getElementById('terminal-content');
    terminalCursor = document.getElementById('terminal-cursor');
    stickyTerminal = document.getElementById('sticky-terminal');
    
    if (terminalContent && terminalCursor && stickyTerminal) {
        // Check if mobile
        isMobile = checkIfMobile();
        
        // Update max height based on screen size
        updateMaxTerminalHeight();
        
        if (!isMobile) {
            // Desktop: Show sticky terminal after hero section
            setTimeout(() => {
                showTerminal();
                executeCommand('hero');
            }, 1000);
            
            window.addEventListener('scroll', handleTerminalScroll);
        } else {
            // Mobile: Hide terminal initially, show on section reach
            stickyTerminal.style.display = 'none';
            window.addEventListener('scroll', handleMobileTerminalScroll);
        }
        
        // Update height on window resize and manage terminal content
        window.addEventListener('resize', () => {
            const wasMobile = isMobile;
            isMobile = checkIfMobile();
            
            // If switching between mobile and desktop
            if (wasMobile !== isMobile) {
                resetTerminalForDeviceChange();
            }
            
            updateMaxTerminalHeight();
            if (!isMobile) {
                manageTerminalHeight();
            }
        });
    }
}

// Show terminal with animation
function showTerminal() {
    if (stickyTerminal) {
        stickyTerminal.classList.add('visible');
    }
}

// Smooth scroll terminal to bottom
function scrollTerminalToBottom() {
    if (terminalContent) {
        // Use requestAnimationFrame for better timing
        requestAnimationFrame(() => {
            // Force scroll to bottom
            terminalContent.scrollTop = terminalContent.scrollHeight;
            
            // Double-check with another frame
            requestAnimationFrame(() => {
                terminalContent.scrollTop = terminalContent.scrollHeight;
            });
        });
    }
}

// Manage terminal height by removing oldest commands when limit is reached
function manageTerminalHeight() {
    if (!terminalContent) return;
    
    const terminalBody = terminalContent.parentElement;
    if (!terminalBody) return;
    
    // Use actual terminal body height
    while (terminalContent.scrollHeight > maxTerminalHeight && terminalContent.children.length > 2) {
        // Find the first command line (not the current-line)
        const firstCommandLine = Array.from(terminalContent.children).find(child => 
            child.classList.contains('terminal-line') && !child.classList.contains('current-line')
        );
        
        if (firstCommandLine) {
            // Remove the command line
            const nextElement = firstCommandLine.nextElementSibling;
            firstCommandLine.remove();
            
            // Remove corresponding entry from terminalLines if it exists
            const lineIndex = terminalLines.indexOf(firstCommandLine);
            if (lineIndex !== -1) {
                terminalLines.splice(lineIndex, 1);
            }
            
            // Remove the output that follows (if it exists and is a terminal-output)
            if (nextElement && nextElement.classList.contains('terminal-output')) {
                nextElement.remove();
                // Remove corresponding entry from terminalLines if it exists  
                const outputIndex = terminalLines.indexOf(nextElement);
                if (outputIndex !== -1) {
                    terminalLines.splice(outputIndex, 1);
                }
            }
        } else {
            break; // No more command lines to remove
        }
    }
    
    // Scroll to bottom after cleanup
    scrollTerminalToBottom();
}

// Execute terminal command with typing animation
function executeCommand(section) {
    if (isTyping) return;
    
    const commandData = terminalCommands[currentLanguage][section];
    if (!commandData) return;
    
    // Prevent duplicate consecutive commands
    if (lastExecutedCommand === commandData.command) return;
    
    isTyping = true;
    commandHistory.push(section);
    lastExecutedCommand = commandData.command;
    
    // Remove existing empty prompt lines
    const currentLines = terminalContent.querySelectorAll('.terminal-line.current-line');
    currentLines.forEach(line => line.remove());
    
    // Create command line
    const line = document.createElement('div');
    line.className = 'terminal-line';
    line.dataset.section = section;
    
    const prompt = document.createElement('span');
    prompt.className = 'terminal-prompt';
    prompt.textContent = 'keishi@portfolio:~$ ';
    
    const command = document.createElement('span');
    command.className = 'terminal-command';
    
    line.appendChild(prompt);
    line.appendChild(command);
    terminalContent.appendChild(line);
    
    // Track the command line
    terminalLines.push(line);
    
    // Check and manage terminal height after adding command line
    manageTerminalHeight();
    
    // Initial scroll when command line is added
    scrollTerminalToBottom();
    
    // Type command text with animation
    let i = 0;
    const typeInterval = setInterval(() => {
        if (i < commandData.command.length) {
            command.textContent += commandData.command[i];
            i++;
            // Scroll during typing
            scrollTerminalToBottom();
        } else {
            clearInterval(typeInterval);
            
            // Add output after command
            setTimeout(() => {
                const output = document.createElement('div');
                output.className = 'terminal-output';
                output.textContent = commandData.output;
                terminalContent.appendChild(output);
                
                // Track the output line
                terminalLines.push(output);
                
                // Add new prompt line for cursor
                const newPromptLine = document.createElement('div');
                newPromptLine.className = 'terminal-line current-line';
                const newPrompt = document.createElement('span');
                newPrompt.className = 'terminal-prompt';
                newPrompt.textContent = 'keishi@portfolio:~$ ';
                newPromptLine.appendChild(newPrompt);
                terminalContent.appendChild(newPromptLine);
                
                // Check and manage terminal height
                manageTerminalHeight();
                
                // Multiple scroll attempts for reliability
                scrollTerminalToBottom();
                setTimeout(scrollTerminalToBottom, 100);
                setTimeout(scrollTerminalToBottom, 300);
                
                isTyping = false;
            }, 500);
        }
    }, 80);
}

// Handle scroll-based terminal commands
function handleTerminalScroll() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    
    // Check which section is currently visible
    const sections = ['hero', 'about', 'projects', 'research', 'experience', 'certifications'];
    
    for (const sectionName of sections) {
        const section = document.getElementById(sectionName);
        if (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            // If section is in viewport
            if (scrollPosition >= sectionTop - windowHeight / 2 && 
                scrollPosition < sectionTop + sectionHeight - windowHeight / 2) {
                
                if (currentSection !== sectionName) {
                    currentSection = sectionName;
                    executeCommand(sectionName);
                }
                break;
            }
        }
    }
}

// Reset terminal when language changes
function resetTerminal() {
    if (terminalContent) {
        terminalContent.innerHTML = '';
        commandHistory = [];
        currentSection = '';
        isTyping = false;
        terminalLines = []; // Reset terminal lines array
        lastExecutedCommand = ''; // Reset last executed command
        
        // Re-execute current section command
        setTimeout(() => {
            executeCommand('hero');
            
            // Re-execute based on current scroll position
            setTimeout(() => {
                handleTerminalScroll();
            }, 1500);
        }, 300);
    }
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

// Mobile terminal functions
function handleMobileTerminalScroll() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    
    // Check which section is currently visible
    const sections = ['hero', 'about', 'projects', 'research', 'experience', 'certifications'];
    
    for (const sectionName of sections) {
        const section = document.getElementById(sectionName);
        if (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            // If section is in viewport and hasn't been shown yet
            if (scrollPosition >= sectionTop - windowHeight / 2 && 
                scrollPosition < sectionTop + sectionHeight - windowHeight / 2) {
                
                if (!mobileTerminalShown[sectionName]) {
                    mobileTerminalShown[sectionName] = true;
                    showMobileTerminal(sectionName);
                }
                break;
            }
        }
    }
}

function showMobileTerminal(sectionName) {
    if (isTyping) return;
    
    // Clear any existing timeout
    if (mobileTerminalTimeout) {
        clearTimeout(mobileTerminalTimeout);
    }
    
    // Clear terminal content
    if (terminalContent) {
        terminalContent.innerHTML = '';
    }
    
    // Show terminal from bottom
    stickyTerminal.style.display = 'block';
    stickyTerminal.classList.remove('mobile-fade-out');
    stickyTerminal.classList.add('mobile-slide-up');
    
    // Execute single command for the section
    setTimeout(() => {
        executeMobileCommand(sectionName);
    }, 300);
}

function executeMobileCommand(sectionName) {
    const commandData = terminalCommands[currentLanguage][sectionName];
    if (!commandData) return;
    
    isTyping = true;
    
    // Create command line
    const line = document.createElement('div');
    line.className = 'terminal-line';
    
    const prompt = document.createElement('span');
    prompt.className = 'terminal-prompt';
    prompt.textContent = 'keishi@portfolio:~$ ';
    
    const command = document.createElement('span');
    command.className = 'terminal-command';
    
    line.appendChild(prompt);
    line.appendChild(command);
    terminalContent.appendChild(line);
    
    // Type command text with animation
    let i = 0;
    const typeInterval = setInterval(() => {
        if (i < commandData.command.length) {
            command.textContent += commandData.command[i];
            i++;
        } else {
            clearInterval(typeInterval);
            
            // Add output after command
            setTimeout(() => {
                const output = document.createElement('div');
                output.className = 'terminal-output';
                output.textContent = commandData.output;
                terminalContent.appendChild(output);
                
                isTyping = false;
                
                // Set timeout to fade out
                mobileTerminalTimeout = setTimeout(() => {
                    hideMobileTerminal();
                }, 3000); // Show for 3 seconds
                
            }, 500);
        }
    }, 80);
}

function hideMobileTerminal() {
    if (stickyTerminal) {
        stickyTerminal.classList.remove('mobile-slide-up');
        stickyTerminal.classList.add('mobile-fade-out');
        
        setTimeout(() => {
            stickyTerminal.style.display = 'none';
            stickyTerminal.classList.remove('mobile-fade-out');
        }, 500);
    }
}

function resetTerminalForDeviceChange() {
    // Reset mobile tracking
    mobileTerminalShown = {};
    
    if (mobileTerminalTimeout) {
        clearTimeout(mobileTerminalTimeout);
        mobileTerminalTimeout = null;
    }
    
    // Reset terminal state
    if (terminalContent) {
        terminalContent.innerHTML = '';
    }
    
    if (stickyTerminal) {
        stickyTerminal.className = 'sticky-terminal';
        stickyTerminal.style.display = isMobile ? 'none' : 'block';
        
        if (!isMobile) {
            // Reinitialize for desktop
            setTimeout(() => {
                showTerminal();
                executeCommand('hero');
            }, 500);
        }
    }
    
    // Reset variables
    currentSection = '';
    isTyping = false;
    terminalLines = [];
    lastExecutedCommand = '';
}

// Initialize terminal on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeTerminal();
});
