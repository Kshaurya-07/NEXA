# NEXA

A mobile-first student assistant platform for academic life, powered by NIA (Nexa Intelligent Assistance).

> Less remembering. Less searching. Less switching. More doing.

## Table of Contents

- [Overview](#overview)
- [NEXA and NIA](#nexa-and-nia)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

## Overview

University students manage academic information across many places: group chats, university portal notices, schedule screenshots, drive folders, and note apps. Deadlines get missed, attendance slips, and group finances create unnecessary friction.

NEXA brings schedules, syllabi, finances, and institutional notices into one student-facing platform. The goal is simple: spend less time remembering, searching, and switching between tools, and more time doing the work that matters.

## NEXA and NIA

NEXA and NIA are two parts of the same product:

- **NIA (Nexa Intelligent Assistance)** is the intelligence layer. It reads syllabi and notices, distils long circulars into clear actions, tracks attendance and tasks, and suggests schedule adjustments.
- **NEXA** is the platform and interface where NIA lives: a mobile-first interface with a calendar, finance tools, and a cockpit-style overview of academic life.

### Two modes

NIA is designed to work in two modes, depending on connectivity:

- **Connected mode:** cloud-based reasoning and document extraction when a network connection is available, including multimodal reasoning, OCR for timetables and syllabi, and structured action tools.
- **On-device mode:** local timetable lookups, schedule queries, and an offline action queue when connectivity is limited, so core academic information remains available without internet access.

Performance figures such as sub-10 ms local execution are design goals for the on-device mode, not independently verified measurements.

## Features

NEXA covers 14 areas of student life in one platform:

1. **University email and notice summaries** — long administrative circulars distilled into short, actionable points.
2. **Timetable and schedule tracking** — class schedules with room numbers, professor details, and next-class countdowns.
3. **Attendance tracking** — live attendance percentages, including calculations for remaining safe absences under a 75% rule.
4. **Task management and deadlines** — priority-ranked tasks with study planning around free periods.
5. **Exam countdown and hall ticket information** — exam dates, guidelines, and seat allocation details in one place.
6. **Assignment and lab report tracking** — multi-course assignments with deadline countdowns and submission reminders.
7. **Academic calendar sync** — semester breaks, holidays, and assessment dates.
8. **Campus spend logging** — natural-language expense logging with automatic categorisation.
9. **Monthly budget pacing** — a visual view of spending against a daily allowance.
10. **Borrow and lend ledger** — a clear record of who owes what, to avoid awkward conversations about money.
11. **Shared bill splitting** — group dining and room expenses split per person, with UPI settlement.
12. **Document and notes storage** — central storage for ID cards, hall tickets, and syllabus PDFs.
13. **Search across emails, notes, tasks, and timetables** — one search across the whole platform.
14. **Proactive notifications** — timely, non-intrusive alerts, such as a class starting in ten minutes.

The interface also includes a 3D-style cockpit presentation, a timetable OCR simulator, a live bill splitter, task completion views, and a canvas-based background environment.

## Tech Stack

| Category | Technology |
| --- | --- |
| Frontend framework | React 18 |
| Build tool | Vite 5 |
| Styling | Tailwind CSS 3.4 |
| Graphics | HTML5 Canvas 2D, with custom 3D projection |
| Icons | Lucide React |
| Typography | Syncopate, JetBrains Mono / Space Mono |

NEXA was built by Team Glitchers: https://github.com/kunal4060/GLITCHERS

## Project Structure

The project is a Vite and React application.

```text
NEXA/
├── public/
│   ├── favicon.ico
│   └── logo.png
├── src/
│   ├── components/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

Components include shared canvas and card components, feature showcases, architecture views, contact and download sections, and navigation and footer components.

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

```bash
git clone https://github.com/Kshaurya-07/NEXA.git
cd NEXA
npm install
npm run dev
```

Follow the terminal output for the local development address.

### Production build and preview

```bash
npm run build
npm run preview
```

## Deployment

NEXA deploys as a static site. The standard build output is used on Render, Vercel, and Netlify:

- Build command: `npm run build`
- Publish directory: `dist`

For Render, the service is named `nexa-assistant-ai` and uses the `main` branch. For Vercel and Netlify, use the platform's import flow for this repository with the same build and publish settings.

## Contributing

Issues and pull requests are welcome. Please keep changes focused, and avoid adding unverified claims about performance, accuracy, or third-party integrations.

## License

This project is licensed under the MIT License. See the LICENSE file in the repository for details.

## Author

Kumar Shaurya — https://github.com/Kshaurya-07
