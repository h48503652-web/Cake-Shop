<div align="center" dir="rtl">

# 🍰 Sweet Moments

### **חנות קונדיטוריה דיגיטלית מודרנית**

[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?logo=react&logoColor=white&style=for-the-badge)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript&logoColor=white&style=for-the-badge)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.0.1-646CFF?logo=vite&logoColor=white&style=for-the-badge)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.38.0-EA4C89?logo=framer&logoColor=white&style=for-the-badge)](https://www.framer.com/motion/)

**אתר תדמית פרימיום עם עיצוב Dark Mode, אנימציות מתקדמות וחווית משתמש מרהיבה**

[🌐 צפייה באתר](https://cake-shop-vbq9.onrender.com/) • [📖 תכונות](#תכונות-עיקריות) • [🚀 הרצה מהירה](#הרצה-מהירה) • [🏗️ ארכיטקטורה](#ארכיטקטורה)

</div>

---

## 🎯 סקירה כללית

פרויקט **Full-Stack Frontend** המדגים מומחיות בבניית אפליקציות React מודרניות ברמה גבוהה. הפרויקט משלב עיצוב UI/UX מתקדם, אנימציות מורכבות, וארכיטקטורת קוד נקייה ומודולרית.

### נקודות החוזקה הטכניות:
- 🎨 **עיצוב Glassmorphism** עם CSS מודרני ו-CSS Variables
- 🎬 **אנימציות מתקדמות** עם Framer Motion (Parallax, Scroll-triggered, Stagger)
- 📱 **Responsive Design** מושלם לכל המכשירים
- 🧩 **קוד מודולרי** עם TypeScript ו-Architecture נכון
- ⚡ **ביצועים מיטביים** עם Vite ו-Code Splitting

---

## 📋 תכונות עיקריות

### 🎨 עיצוב Dark Mode פרימיום
- פלטת צבעים מותאמת עם ניאון (ורוד, סגול, זהב, ציאן)
- **Glassmorphism** עם `backdrop-filter: blur()` ושכבות שקיפות
- טיפוגרפיה מותאמת לעברית (פונט Rubik)
- מערכת CSS Variables מלאה לניהול עיצוב

### 🎬 אנימציות מתקדמות (Framer Motion)
```typescript
// Parallax scroll-linked animations
const imageY = useTransform(scrollYProgress, [0, 1], [0, 150]);
const contentY = useTransform(scrollYProgress, [0, 1], [0, -50]);

// Staggered entrance animations
const staggerContainer = {
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } }
};

// Custom easing functions
const easeCustom = [0.25, 0.1, 0.25, 1];
```

### 📱 רספונסיביות מלאה
- **Mobile-First** approach עם breakpoints מדויקים
- Grid layouts מתקדמים (CSS Grid + Flexbox)
- טאץ׳ interactions אופטימליים
- אנימציות מותאמות למובייל

### 🖼️ גלריה אינטראקטיבית
- סינון קטגוריות דינמי
- **Lightbox מודל** עם ניווג ומחוות (Gestures)
- Hover effects מורכבים עם CSS Transforms
- ניהול State מתקדם עם React Hooks

---

## 🏗️ ארכיטקטורה

### Stack טכנולוגי

| שכבה | טכנולוגיה | תיאור |
|------|-----------|--------|
| **Framework** | React 19 + TypeScript | קומפוננטות Functional עם Hooks |
| **Build** | Vite 8 | HMR מהיר, Code Splitting, Optimized builds |
| **Animations** | Framer Motion | Declarative animations, Gestures, Layout |
| **Routing** | React Router DOM v7 | SPA navigation עם lazy loading |
| **Styling** | Pure CSS | CSS Variables, Grid, Flexbox, Container Queries |

### מבנה הפרויקט

```
src/
├── components/
│   └── ui/
│       ├── Button.tsx          # CTA עם variants ו-animations
│       ├── Navbar.tsx          # Navigation עם glassmorphism
│       └── Footer.tsx          # Footer רספונסיבי
├── pages/
│   ├── Home.tsx               # Hero + Parallax + Sections
│   └── Gallery.tsx            # Gallery + Lightbox + Filtering
├── data/
│   └── cakes.ts               # Type-safe data layer
├── styles/
│   └── global.css             # Design System מלא
└── App.tsx                    # Routing + Layout
```

### Design System

```css
:root {
  /* Colors */
  --bg-primary: #0a0a0c;
  --bg-secondary: #111114;
  --accent-pink: #ff75a8;
  --accent-purple: #c988fd;
  --accent-gold: #ffd166;
  
  /* Shadows */
  --shadow-glow: 0 0 50px rgba(255, 117, 168, 0.3);
  
  /* Transitions */
  --transition-base: 400ms cubic-bezier(0.25, 0.1, 0.25, 1);
}
```

---

## 🚀 הרצה מהירה

### דרישות
- Node.js 20+
- npm/pnpm

### התקנה והרצה

```bash
# Clone
git clone https://github.com/h48503652-web/Cake-Shop.git
cd Cake-Shop

# Install
npm install

# Dev server
npm run dev

# Production build
npm run build
```

### Deploy
האתר מופיע ב-Render:
**https://cake-shop-vbq9.onrender.com/**

---

## 💡 היישומים הטכניים המתקדמים

### 1. CSS Architecture
- **CSS Variables** לניהול עקבי של עיצוב
- **Container Queries** לרספונסיביות מודולרית
- **CSS Grid** עם `auto-fit` ו-`minmax()`
- **Custom Easing Functions** לאנימציות טבעיות

### 2. React Patterns
- **Custom Hooks** ללוגיקה משותפת
- **Compound Components** ל-UI מורכב
- **Render Props** לגמישות מקסימלית
- **Forward Refs** לקומפוזיציה נכונה

### 3. Performance Optimizations
- **Code Splitting** עם dynamic imports
- **Memoization** עם `React.memo` ו-`useMemo`
- **CSS Containment** ל-repaint מינימלי
- **Image Optimization** עם lazy loading

### 4. TypeScript Best Practices
- **Strict Mode** מלא
- **Interface Segregation** ל-Props
- **Generic Components** לגמישות טיפוסים
- **Type Guards** לטיפול ב-edge cases

---

## 🎯 מטרות הפרויקט

הפרויקט מדגים יכולות ב:
- ✅ בניית UI/UX מודרני ומתקדם
- ✅ יישום אנימציות מורכבות בצורה performant
- ✅ ארכיטקטורת קוד נקייה ומתחזקת
- ✅ עבודה עם TypeScript ברמה גבוהה
- ✅ התמחות ב-CSS מודרני

---

<div align="center" dir="rtl">

**נבנה עם 💜, TypeScript, ושפע של קפה**

[🌐 צפייה באתר](https://cake-shop-vbq9.onrender.com/)

</div>
