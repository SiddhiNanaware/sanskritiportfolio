# Sanskruti Kale – Premium Personal Portfolio Website

A modern, responsive, and professional personal portfolio website designed for **Sanskruti Kale**, Computer Engineering student at Dr. D. Y. Patil College of Engineering and Innovation, Varale, Pune.

---

## 🌟 Key Features

1. **Hero Section**:
   - Compelling introductory headline with authentic branding.
   - Verified B.Tech SY & First Year CGPA (7.27) badges.
   - High-resolution professional portrait photo in college blazer.
   - Quick action buttons: *Explore Projects*, *View Certifications*, and *Resume*.
   - Direct connection links to LinkedIn, GitHub, and Email.

2. **About Me**:
   - Natural, confident, and professional narrative based on Sanskruti's personal vision.
   - Core value pillars: Dedication, Continuous Learning, and Goal-Driven Ambition.
   - Key strengths grid: Responsible, Adaptable, Eager to Learn, and Industry Goal-Oriented.

3. **Education**:
   - **Degree**: Bachelor of Technology (B.Tech) – Second Year (SY)
   - **Branch**: Computer Engineering
   - **Institution**: Dr. D. Y. Patil College of Engineering and Innovation, Varale, Talegaon, Pune
   - **Academic Performance**: First Year CGPA: **7.27 / 10.0**
   - Highlights of engineering coursework and active technical community involvement.

4. **Technical Skills**:
   - Honest proficiency representation (technologies actively learning, practicing, and developing).
   - Core languages: **C Programming**, **C++ Programming** (Grade A+ Certified).
   - Problem solving: **Data Structures and Algorithms (DSA)**.
   - Frontend stack: **HTML5**, **CSS3**, **JavaScript**.
   - Project-applied technologies: **Python** and **Claude AI Integration**.

5. **Projects Showcase**:
   - **AI Loan Eligibility Checker**:
     - AI-powered BFSI web platform featuring 4 tools: Loan Eligibility Checker, Credit Score Analyzer, EMI Calculator, and Claude AI Financial Tips.
     - Includes a **Live Interactive Simulation Demo Modal** with real-time sliders and AI insight generators!
   - **Di Plant Care**:
     - Responsive botanical landing page and plant scanner design created in Figma.
     - Viewfinder scanner UI (`/scanner`), real-time plant diagnostics (moisture, sunlight, health rate), and direct link to the Figma project.

6. **Certifications & Achievements (Verified)**:
   - High-resolution interactive certificate cards with a **View Certificate Lightbox Modal** featuring full credential IDs, dates, and issuing bodies:
     - **Imarticus Learning & NSDC Skill India**: Certificate of Proficiency in C & C++ (Grade A+, ID: `21SVA3LP4E48J`, Issued: 19 May 2026).
     - **Bajaj Auto Ltd. (BMS)**: Certificate of Appreciation – Certification Program (CSR Initiative, ID: `552199-36-2026-09-10`).
     - **PMS Robotics Research Center & DYPCOEI**: 3-Day Hands-on Industrial Training on Industrial Automation, Robotics with IIoT (`UDYAM-MH-26-63666`).
     - **PromptWars x BRAIN DYPCOEI**: Certificate of Participation – One-Day Vibe-Coding Hackathon deploying AI prototype using Google Antigravity (09-10-2026).
     - **MyCaptain**: Certificate of Achievement in C & C++ (ID: `177918306363329D`, Issued: 19 May 2026).

7. **Contact Me**:
   - Interactive message form with client-side feedback and toast alerts.
   - Direct verified LinkedIn link.
   - One-click copy email button (`sanskrutikale.dy@gmail.com`).
   - Location details (Varale / Pune, Maharashtra).

---

## 📁 Project Structure

```
sanskruti-kale-portfolio/
├── index.html                   # Main semantic HTML5 webpage
├── README.md                    # Project documentation & guide
└── assets/
    ├── css/
    │   ├── style.css            # Core responsive styling & design system
    │   └── animations.css       # Keyframe animations & scroll transitions
    ├── js/
    │   └── main.js              # Interactivity, modals, calculators, scrollspy
    └── images/
        ├── profile.png          # High-resolution portrait photo
        ├── cert-imarticus-c-cpp.png
        ├── cert-bajaj-bms.png
        ├── cert-pms-robotics-iiot.png
        ├── cert-promptwars-antigravity.png
        ├── cert-mycaptain-c-cpp.png
        ├── mahadbt-status.png
        ├── project-ai-loan.svg  # Visual preview for Project 1
        └── project-di-plant.svg # Visual preview for Project 2
```

---

## 🚀 How to Run Locally

1. Open your terminal in the portfolio directory:
   ```bash
   cd C:\Users\Siddhi\.gemini\antigravity\scratch\sanskruti-kale-portfolio
   ```

2. Start a local server:
   ```bash
   python -m http.server 8000
   ```

3. Open your web browser and navigate to:
   ```
   http://localhost:8000
   ```

---

## 🔄 Adding New Certificates in the Future

To add a new certificate card:
1. Place the new certificate image in `assets/images/cert-new-name.png`.
2. Open `assets/js/main.js` and add a new entry to the `CERTIFICATES_DATA` object with the certificate title, issuer, credential ID, date, and description.
3. In `index.html`, duplicate one of the `.cert-card` elements under the `#certificates` section, update the `data-cert-key` and thumbnail path.
