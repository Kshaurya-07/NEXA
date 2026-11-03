# NEXA

A mobile-first student assistant platform for academic life, powered by NIA (Nexa Intelligent Assistance).

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

University students often manage academic information across many places: group chats, university portal notices, schedule screenshots, drive folders, and note apps. NEXA is intended to bring schedules, syllabi, finances, and institutional notices into one student-facing platform, with the aim of reducing the time spent remembering, searching, and switching between tools.

The original README describes NEXA with the tagline: "Less remembering. Less searching. Less switching. More doing."

## NEXA and NIA

- **NIA** is described in the original README as the intelligence layer: it reads syllabi and notices, helps track attendance and tasks, and suggests schedule adjustments.
- **NEXA** is the platform and interface where NIA is presented: a mobile-first interface, calendar, finance tools, and a cockpit-style overview.

The original README describes two operating modes:

- **Connected mode:** cloud-based reasoning and document extraction when a network connection is available.
- **On-device mode:** local timetable lookups, schedule queries, and an offline action queue when connectivity is limited.

Performance figures mentioned in the original README, such as sub-10ms local execution, are presented here as design goals described in that README, not as independently verified measurements.

## Features

The original README lists 14 areas of student life that NEXA aims to cover:

1. University email and notice summaries
2. Timetable and schedule tracking, including room and professor details
3. Attendance tracking, including calculations for remaining safe absences under a 75% rule
4. Task management and deadlines
5. Exam countdown and hall ticket information
6. Assignment and lab report tracking
7. Academic calendar sync
8. Campus spend logging
9. Monthly budget pacing
10. Borrow and lend ledger
11. Shared bill splitting
12. Document and notes storage
13. Search across emails, notes, tasks, and timetables
14. Proactive notifications

Additional interface elements described in the original README include a 3D-style cockpit presentation, timetable OCR simulation, a bill splitter, task completion views, and a canvas-based background environment.

## Tech Stack

| Category | Technology |
| --- | --- |
| Frontend framework | React 18 |
| Build tool | Vite 5 |
| Styling | Tailwind CSS 3.4 |
| Graphics | HTML5 Canvas 2D, with custom 3D projection as described in the original README |
| Icons | Lucide React |
| Typography | Syncopate, JetBrains Mono / Space Mono, as described in the original README |

NEXA was built by Team Glitchers, as described in the original README. The team organisation link from the original README is: https://github.com/kunal4060/GLITCHERS

## Project Structure

The project is a Vite and React application. The structure below is a condensed summary of the layout described in the original README.

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

Components described in the original README include shared canvas and card components, feature showcases, architecture views, contact and download sections, and navigation and footer components.

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

The original README describes deployment as a static site, including Render, Vercel, and Netlify options. In each case, the standard build output is used:

- Build command: `npm run build`
- Publish directory: `dist`

For Render, the original README names the service `nexa-assistant-ai` and the `main` branch. For Vercel and Netlify, use the platform's import flow for this repository and the same build and publish settings.

## Contributing

Issues and pull requests are welcome. Please keep changes focused, and avoid adding unverified claims about performance, accuracy, or third-party integrations.

## License

This project is licensed under the MIT License. See the LICENSE file in the repository for details.

## Author

Kumar Shaurya — https://github.com/Kshaurya-07
