<p align="center">
  <img src="school-logo.png" alt="Dr. Alfredo Pio De Roda Elementary School" width="160"/>
</p>

<h1 align="center">Dr. Alfredo Pio De Roda Elementary School</h1>
<h3 align="center">Official Digital Infrastructure</h3>

<p align="center">
  <img src="https://img.shields.io/badge/🏫%20Official%20School%20Platform-Dr.%20APDR%20ES-1d4ed8?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Built%20by-ATStudios-6d28d9?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0xMiAyTDIgN2wxMCA1IDEwLTV6TTIgMTdsOSA0LjkgMS0uNVY5LjFMMiAxNHpNMjIgMTdMMTMgMjJ2LTguNGw5LTV6Ii8+PC9zdmc+"/>
  <img src="https://img.shields.io/badge/Code-100%25%20Human%20Written-16a34a?style=for-the-badge&logo=visualstudiocode&logoColor=white"/>
</p>
<p align="center">
  <img src="https://img.shields.io/badge/Platform-Web-3b82f6?style=flat-square"/>
  <img src="https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20JS%20ES6+-f97316?style=flat-square"/>
  <img src="https://img.shields.io/badge/Database-Firebase%20Realtime-fbbf24?style=flat-square"/>
  <img src="https://img.shields.io/badge/Framework-Tailwind%20CSS%203-38bdf8?style=flat-square"/>
  <img src="https://img.shields.io/badge/Charts-Chart.js-ff6384?style=flat-square"/>
  <img src="https://img.shields.io/badge/Hosted-GitHub%20Pages-181717?style=flat-square&logo=github"/>
  <img src="https://img.shields.io/badge/Country-🇵🇭%20Philippines-0038a8?style=flat-square"/>
  <img src="https://img.shields.io/badge/Standard-DepEd%20Aligned-dc2626?style=flat-square"/>
  <img src="https://img.shields.io/badge/License-ATStudios%20%C2%A9-6d28d9?style=flat-square"/>
</p>

<p align="center">
A fully integrated, real-time digital school platform built for <strong>Dr. Alfredo Pio De Roda Elementary School</strong>. Designed to replace fragmented tools with a single cohesive ecosystem — covering academic records, student elections, class performance analytics, and public communication.
</p>

<p align="center">
  <strong>Developed and Designed by ATStudios</strong>
</p>

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Live Portal](#-live-portal)
- [Module Breakdown](#-module-breakdown)
  - [School Homepage](#️-school-homepage--indexhtml)
  - [Grading & Analytics System](#-grading--analytics-system--gradehtml)
  - [SF2 Records Viewer](#-sf2-records-viewer)
  - [Student Election System](#️-student-election-system--kioskhtml--resultshtml)
  - [Downloads Hub](#-downloads-hub--downloadhtml)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [Design Philosophy](#-design-philosophy)
- [License](#-license)

---

## 🏫 Overview

This repository contains the complete frontend infrastructure for Dr. Alfredo Pio De Roda Elementary School (Dr. APDR ES), a public elementary school in Tanza, Cavite, Philippines. The platform is built entirely with vanilla web technologies and hosted via GitHub Pages with a custom domain, making it lightweight, fast, and zero-cost to operate.

The system is designed around three core user groups:

- **Faculty** — access grading tools, analytics dashboards, and SF2 submission records
- **Students** — participate in secure school elections through dedicated kiosk terminals
- **Parents & Community** — stay informed via the public school portal, announcements, and the activity gallery

All data-driven features sync in real time via **Firebase Realtime Database**, meaning changes made on one device are instantly reflected across all connected sessions — no page refreshes required.

---

## 🌐 Live Portal

The school's public-facing portal is live at:

**[dapres.dpdns.org](https://dapres.dpdns.org)**

> Hosted on GitHub Pages with a custom domain via CNAME.

---

## 🗂 Module Breakdown

---

### 🏛️ School Homepage — `index.html`

The primary public gateway for the entire school community. This is the first page parents, students, and visitors see.

**Design System**

Built with the **Tailwind CSS 3.0** utility framework paired with the **Inter** typeface, the homepage adopts a "Premium Dark" visual language — deep navy backgrounds, subtle gradients, and high-contrast text — making it highly legible on both mobile screens and classroom projectors. All color tokens, spacing, and typography follow a strict design system for visual consistency across all pages.

**Real-Time Announcements**

The announcement board is wired directly to **Firebase Realtime Database**. When school staff post a new announcement, it appears on the homepage instantly for all visitors — no rebuild or redeploy needed. Each announcement card shows the title, date, and a brief description, with newer posts surfacing automatically at the top.

**Event Gallery**

A visual gallery section showcases school events, activities, and milestones. Images are served as static assets from the repository, keeping load times fast without requiring a CDN.

**Mobile-First Architecture**

Every layout, component, and interaction is built mobile-first using Tailwind's responsive breakpoint system (`sm:`, `md:`, `lg:`). Navigation collapses into a clean hamburger menu on small screens, and all card grids reflow gracefully from 3-column desktop layouts down to single-column mobile stacks.

**Scroll Animations & Micro-Interactions**

`script.js` handles intersection-observer-based scroll animations that trigger as sections enter the viewport, giving the homepage a polished, modern feel without heavy JavaScript libraries.

---

### 📊 Grading & Analytics System — `grade.html`

A comprehensive digital grade ledger purpose-built for Filipino elementary school teachers following **DepEd (Department of Education) grading standards**.

**DepEd-Aligned Grade Computation**

The system automatically calculates final grades using the official DepEd weighting formula:

| Component | Weight |
|---|---|
| Written Work | 25% |
| Performance Tasks | 50% |
| Quarterly Assessment | 25% |

Teachers input raw scores per component and the system handles all weighted average calculations in real time. Grades are then mapped against DepEd's descriptor scale (Outstanding, Very Satisfactory, Satisfactory, Fairly Satisfactory, Did Not Meet Expectations).

**Firebase Real-Time Sync**

Every grade entry is persisted to **Firebase Realtime Database** the moment it's recorded. Multiple teachers on different devices can work simultaneously — updates propagate with sub-second latency. There is no "Save" button; the database is always in sync with what's on screen.

**Performance Visualization with Chart.js**

The system uses **Chart.js** to render live performance charts at the class level:

- **Bar Charts** — show per-student score distribution across components
- **Class Mastery Heatmaps** — highlight which students are at risk vs. performing well, color-coded by DepEd descriptor
- **Quarterly Progress Tracking** — teachers can compare Q1 through Q4 performance on a single view

All charts update automatically as scores are modified, giving teachers an at-a-glance diagnostic of their class without manual spreadsheet work.

**Grade Export**

Computed grades can be exported for use in official DepEd reports and school form submissions.

---

### 📁 SF2 Records Viewer

A dedicated read-only dashboard for viewing and tracking submitted **SF2 (School Form 2 — Daily Attendance Record)** files uploaded by teachers.

**File Browser**

Files are organized hierarchically by Grade → Section → Month, displayed as a navigable folder tree in the sidebar. Clicking into any grade reveals all its sections; clicking a section reveals all monthly submission files.

**Submission Tracker**

A monthly tracker table shows every grade-section pair and whether a teacher has submitted their SF2 for the selected month. Each row shows:

- Submission status (green dot = submitted, red = missing)
- File name with a direct link
- Date and time of upload

**By Month View**

An alternative flat view groups all submitted files by month with filter pills, useful for quickly auditing which months have complete school-wide submissions.

**Live Stats**

Four stat cards at the top always show:
- Total files received
- Number of active grades
- Sections submitted this month
- Sections still missing this month

All data is pulled live from Firebase and updates in real time whenever a teacher submits a new file.

---

### 🗳️ Student Election System — `kiosk.html` + `results.html`

A purpose-built, tamper-resistant digital voting platform for **Student Government (SG) elections** at Dr. APDR ES.

**Kiosk Terminal (`kiosk.html`)**

Designed to run on a dedicated school PC or tablet set up as a voting station. The UI is intentionally minimal and locked down:

- Full-screen mode is encouraged to eliminate browser UI distractions
- Only one vote can be cast per student session; the interface resets cleanly after each vote
- Candidate profiles (name, position running for, photo) are displayed clearly for easy selection
- Touch-friendly large tap targets work well on both mouse-driven desktops and tablet touchscreens
- Confirmation dialogs prevent accidental or double submissions

All votes are written to **Firebase Realtime Database** as immutable records with a timestamp, preventing duplicate entries.

**Live Results Dashboard (`results.html`)**

The results page is designed to be displayed publicly — on a classroom projector or the school's homepage — while voting is still in progress or after polls close.

- **Real-time vote tallying** — the count updates live as votes are cast, with no need to refresh
- **Percentage bars** — animated progress bars show each candidate's share of total votes
- **Winner-Predictive highlighting** — the leading candidate's card is dynamically highlighted as results come in
- **Position grouping** — results are organized by SG position (President, Vice President, Secretary, etc.) for clarity

---

### 📥 Downloads Hub — `download.html`

A centralized repository for downloadable school documents, forms, and materials made available to parents, students, and faculty.

Documents are categorized and displayed as styled download cards. Files are linked directly from cloud storage, keeping the repository lean. The page is fully responsive so parents can download forms from their phones without needing to visit the school physically.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 (semantic, accessible) |
| Styling | Tailwind CSS 3.0, Bootstrap 5 (context-specific), custom CSS |
| Logic | JavaScript ES6+ (vanilla, no build step required) |
| Database | Firebase Realtime Database (NoSQL, real-time sync) |
| Charts | Chart.js |
| Icons | FontAwesome 6, Lucide Icons |
| Fonts | Inter (Google Fonts) |
| Hosting | GitHub Pages + Custom Domain (CNAME) |
| Analytics | Custom `analytics.js` |

---

## 📂 Project Structure

```
Dr.Alfredo-Pio-De-Roda/
│
├── index.html               # Public school homepage & announcements
├── grade.html               # Faculty grading ledger & analytics
├── kiosk.html               # Student election voting terminal
├── results.html             # Live election results dashboard
├── download.html            # Public document downloads hub
├── 404.html                 # Custom error page
│
├── script.js                # Global scroll animations & interactions
├── analytics.js             # Usage analytics
├── style.css                # Global stylesheet
│
├── school-logo.png          # Official school logo
├── school-bg1.jpg           # Homepage background
├── school2.jpg              # Gallery asset
├── school3.jpg              # Gallery asset
├── gallery1.jpg             # Event photo
├── gallery2.jpg             # Event photo
├── gallery3.jpg             # Event photo
├── favicon.ico              # Browser tab icon
│
├── images/                  # Additional image assets
└── CNAME                    # Custom domain configuration
```

---

## 🎨 Design Philosophy

The entire platform follows four core design principles:

**1. Zero Friction for Teachers**
Teachers interact with these systems daily. Every data entry flow — grading, attendance tracking — is optimized to require the fewest clicks possible. Real-time saving means there's nothing to forget.

**2. Readable on Any Screen**
School computers, teacher phones, parent tablets — the platform has to work on all of them. Every page is built mobile-first and tested from 320px through 1440px widths.

**3. Live Data, Always**
Static pages with stale data breed distrust. By anchoring every dynamic feature to Firebase Realtime Database, the platform guarantees that what you see is always the current truth.

**4. DepEd-Native Logic**
The grading system doesn't just store numbers — it understands DepEd's specific computation rules, descriptor scales, and reporting formats. It was built for Philippine public school teachers, not adapted from a generic gradebook template.

---

## 📄 License

```
© ATStudios — All Rights Reserved

This digital infrastructure was developed exclusively for
Dr. Alfredo Pio De Roda Elementary School.
Unauthorized reproduction, redistribution, or reverse engineering
of this codebase is strictly prohibited.
```

---

<p align="center">
  <i>Official Digital Infrastructure — Dr. Alfredo Pio De Roda Elementary School, Tanza, Cavite</i><br/>
  <strong>Built with ❤️ by ATStudios</strong>
</p>
