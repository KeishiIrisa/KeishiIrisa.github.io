# Portfolio Website Requirements

## Project Overview

Modern, professional GitHub Pages portfolio website for **Keishi Irisa** (入佐啓士), a 3rd-year Chemical and Biological Engineering student at The University of Tokyo.

## Design Principles

### Visual Identity
- **Color Scheme**: Monochromatic design using black, white, and shades of gray
- **Style**: Modern, minimalist, clean, and professional
- **Typography**: Sans-serif fonts for modern appearance
- **Layout**: Responsive design with smooth animations and transitions
- **Trust Factor**: Clean, organized layout that conveys reliability and professionalism

### Technical Requirements
- **Platform**: GitHub Pages (static site generation)
- **Responsive**: Mobile-first design approach
- **Performance**: Fast loading times with optimized assets
- **SEO**: Proper meta tags and semantic HTML structure
- **Accessibility**: WCAG 2.1 compliant

## Content Structure

### 1. Hero Section
- **Profile Image**: `casual.jpg` (professional circular crop with subtle shadow)
- **Name**: Keishi Irisa (入佐啓士)
- **Title**: Chemical and Biological Engineering Student
- **Subtitle**: The University of Tokyo, 3rd Year
- **CTA**: Scroll down or navigation to sections

### 2. About Section
- Brief professional introduction
- Current academic status
- Career interests and goals
- Personal philosophy or mission statement

### 3. Social Links (Header/Footer)
- **LinkedIn**: [https://www.linkedin.com/in/keishi-irisa/](https://www.linkedin.com/in/keishi-irisa/)
  - Use official LinkedIn icon in modern style
- **GitHub**: [https://github.com/KeishiIrisa](https://github.com/KeishiIrisa)
  - Use official GitHub icon in modern style
- Icons should be monochromatic (black/white) with hover effects

### 4. Projects Section

#### Project 1: PDF Quiz Maker
- **Repository**: [https://github.com/KeishiIrisa/pdf-quiz-maker-backend](https://github.com/KeishiIrisa/pdf-quiz-maker-backend)
- **Description**: "PDF Quiz Maker generates questions, answers, explanations, and sources based on a provided PDF textbook and specified content to learn. It transforms local resources into digital powerhouses for AI-driven learning."
- **Tech Stack**: Python, MongoDB, FastAPI, LlamaIndex, OpenAI Embeddings, OpenAI GPT-4o Mini
- **Features**: 
  - AI-powered question generation
  - PDF textbook processing
  - Educational content optimization

#### Project 2: PR Times Hackathon Auto Press Release and Podcasts Generator
- **Repository**: [https://github.com/KeishiIrisa/prtimes-hackathon-be-podcast](https://github.com/KeishiIrisa/prtimes-hackathon-be-podcast)
- **Description**: "This app helps local businesses create and share content easily. It automatically generates press releases from social media posts and converts them into podcasts, boosting visibility and audience reach."
- **Features**:
  - Social media to press release automation
  - Podcast generation capabilities
  - Business visibility enhancement

### 5. Experience Section (Internships)

#### EMUNI (Current)
- **Period**: January 2025 - Present
- **Frequency**: 3 days per week
- **Role**: Software Engineer Intern
- **Achievements**:
  - Backend and frontend development for generative AI chat app for educational institutions (160,000 expected users)
  - UX optimization based on user roles and group affiliations
  - AI model and system prompt switching mechanism for improved response accuracy
- **Tech Stack**: Python, FastAPI, PostgreSQL, Docker, Azure, Bedrock

#### Cookpad
- **Period**: February 2025 - March 2025 (2 months)
- **Frequency**: 4 days per week, full-time
- **Role**: Search Engineer Intern
- **Achievements**:
  - Rebuilt search blocking pipeline, improving inappropriate query detection by 10%
  - Fixed dictionary app bugs based on Bangladesh community manager feedback
  - Enhanced search API and optimized Cron tasks for autocomplete functionality
  - Led project advancement through English discussions with UK team
- **Tech Stack**: Python, FastAPI, Django, Elasticsearch, PostgreSQL, Kubernetes, Apache Kafka, AWS

#### LINEヤフー (LINE Yahoo)
- **Period**: August 2025 - October 2025 (2 months)
- **Role**: Backend Developer
- **Focus**: LINE Stickers, Themes, and Emoji backend development

#### LINEヤフー (LINE Yahoo) - Summer Internship
- **Period**: August 2024 (2 weeks)
- **Frequency**: Full-time
- **Role**: Software Engineer Intern
- **Achievements**:
  - Implemented new features in advertising management tools based on marketer feedback
  - Acquired project management and leadership skills through 1on1 meetings
  - Completed sprints in Scrum development environment
- **Tech Stack**: Java, TypeScript, Spring Boot, Nuxt, Docker

#### Kotonoha AI
- **Period**: July 2023 - April 2024
- **Frequency**: Full-time
- **Role**: Co-founder | Sales & Mobile App Development
- **Achievements**:
  - Developed and marketed automated grading/correction tools and English correction app
  - Negotiated with 5 major companies and 10+ cram schools
  - Successfully implemented 2-month classroom deployment for ~150 middle/high school students
  - Developed and published mobile app: 1,000+ downloads and ~100 paid users in 6 months
- **Tech Stack**: FlutterFlow, Python, FastAPI, Cloud Vision API, OpenAI API, Docker, GCP

### 6. Certifications Section

#### English Proficiency
- **TOEIC Listening & Reading Test**: 840
- **iTEP Academic-Plus**: FFA Level 4.5

#### Technical Certifications
- **基本情報技術者** (Fundamental Information Technology Engineer)
- **応用情報技術者** (Applied Information Technology Engineer)

## UI/UX Specifications

### Layout Structure
1. **Navigation**: Fixed header with smooth scroll navigation
2. **Hero**: Full viewport height with centered content
3. **Sections**: Alternating background colors (white/light gray)
4. **Cards**: Consistent card design for projects and experiences
5. **Footer**: Contact information and social links

### Interactive Elements
- **Hover Effects**: Subtle animations on buttons and links
- **Scroll Animations**: Fade-in effects as content enters viewport
- **Loading States**: Smooth transitions between sections
- **Mobile Menu**: Hamburger menu for mobile navigation

### Typography Scale
- **H1**: Large, bold for name and main headings
- **H2**: Section headings
- **H3**: Subsection headings (company names, project titles)
- **Body**: Readable paragraph text
- **Caption**: Small text for dates and technical details

### Color Palette
- **Primary Black**: #000000
- **Primary White**: #FFFFFF
- **Dark Gray**: #333333
- **Medium Gray**: #666666
- **Light Gray**: #F5F5F5
- **Accent**: Subtle gray gradient for depth

### Component Design
- **Cards**: White background with subtle shadow
- **Buttons**: Black background with white text, hover effects
- **Icons**: Monochromatic with consistent sizing
- **Images**: Circular profile image with professional treatment

## Technical Implementation

### File Structure
```
/
├── index.html
├── styles/
│   ├── main.css
│   ├── components/
│   └── responsive.css
├── scripts/
│   ├── main.js
│   └── animations.js
├── assets/
│   ├── images/
│   │   └── casual.jpg
│   └── icons/
├── favicon.ico
└── README.md
```

### Performance Requirements
- **Page Load**: < 3 seconds
- **Image Optimization**: WebP format with fallbacks
- **Minification**: CSS and JS minification
- **Caching**: Proper cache headers for static assets

### SEO Requirements
- **Meta Tags**: Proper title, description, keywords
- **Open Graph**: Social media sharing optimization
- **Schema Markup**: Structured data for person/professional
- **Sitemap**: XML sitemap for search engines

## Deployment
- **Platform**: GitHub Pages
- **Domain**: keishiirisa.github.io (or custom domain if desired)
- **SSL**: HTTPS enabled
- **Analytics**: Google Analytics integration (optional)

## Success Metrics
- **Professional Appearance**: Clean, trustworthy design
- **User Engagement**: Easy navigation and content discovery
- **Mobile Experience**: Seamless responsive design
- **Load Performance**: Fast loading across devices
- **Accessibility**: Screen reader compatible and keyboard navigable 
