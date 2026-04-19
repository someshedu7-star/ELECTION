```javascript
const translations = {
  en: {
    schoolTag: "Since 1927 Legacy of Excellence",
    schoolName: "PODAR INTERNATIONAL SCHOOL WASHIM",
    electionTag: "Students Council 2026-27 | IGNIS House Captain Campaign",
    kicker: "Vote for leadership with energy and purpose",
    heroTitle: "Somesh Bali for IGNIS House Captain",
    candidateLine: "Grade 9 Rose | Students Council Election 2026-27",
    lead: "I'm Somesh Bali, and I'm standing for the post of <strong>IGNIS House Captain</strong>. I want to bring more house spirit, stronger teamwork, and a positive voice that represents every student with confidence.",
    badge1: "Lead With Fire",
    badge2: "Rise With IGNIS",
    badge3: "Your Voice, Our House",
    countdownLabel: "Countdown to Election Day - 23/04/2026",
    countdownNote: "Every second is a reminder that leadership day is near. Let IGNIS step forward with unity, energy, and confidence.",
    daysLabel: "Days",
    hoursLabel: "Hours",
    minutesLabel: "Minutes",
    secondsLabel: "Seconds",
    ctaGoals: "See My Goals",
    ctaWhyVote: "Why Vote for Me",
    posterNote: "Official campaign poster supporting the IGNIS House Captain journey.",
    whyMeLabel: "Why Me",
    whyMeTitle: "A captain who listens, leads, and lifts the whole house",
    whyMeCopy: "Leadership is not only about being in front. It is about creating opportunities, building trust, and making every student feel included.",
    promise1Title: "Energetic Leadership",
    promise1Copy: "I will bring enthusiasm to competitions, assemblies, and every house activity so IGNIS always shows up with spirit.",
    promise2Title: "Student Representation",
    promise2Copy: "I will listen to ideas from juniors and seniors alike, so our house decisions reflect what students truly want.",
    promise3Title: "Strong Team Culture",
    promise3Copy: "I want IGNIS to be known for teamwork, encouragement, and discipline, where everyone feels motivated to participate.",
    goalsLabel: "My Goals",
    goalsTitle: "What I will work on if elected",
    goalsCopy: "These goals are simple, practical, and focused on making school life more exciting, united, and student-driven.",
    goal1Title: "More Participation Across IGNIS",
    goal1Copy: "I will encourage more students to join events, take responsibility, and feel proud to represent our house.",
    goal2Title: "Better Team Coordination",
    goal2Copy: "I want clearer planning before competitions so our house performs with preparation, confidence, and focus.",
    goal3Title: "Student Ideas That Matter",
    goal3Copy: "I will support collecting suggestions from students so our activities feel more engaging and connected to what we enjoy.",
    goal4Title: "A Positive House Identity",
    goal4Copy: "My aim is to build an IGNIS image that is respectful, competitive, friendly, and remembered for strong sportsmanship.",
    spiritLabel: "Campaign Spirit",
    spiritTitle: "Dedicated. Responsible. Friendly. Fearless.",
    spiritCopy: "IGNIS stands for fire, and fire means energy, courage, and the will to shine brighter together.",
    promiseTitle: "My Promise",
    promiseCopy: "I will lead with respect, stay approachable, and give my best effort to make IGNIS House stronger in every opportunity we get.",
    sloganTitle: "My Slogan",
    sloganCopy: "<strong>\"Together we spark. Together we shine. Together we lead IGNIS to victory.\"</strong>",
    voteFormLabel: "Support Somesh",
    voteFormTitle: "Confirm your vote for IGNIS House Captain",
    voteFormCopy: "Enter your name and class, then confirm your support. Your vote will be stored safely for the campaign record.",
    nameField: "Your Name",
    classField: "Your Class",
    voteButton: "Confirm Vote",
    finalVoteLine1: "Vote Somesh Bali",
    finalVoteLine2: "for IGNIS House Captain",
    finalCopy: "Your one vote can help choose a captain who is ready to serve, support, and strengthen our house.<br><br>Let's make <strong>Podar International School Washim</strong> proud and take <strong>IGNIS House</strong> forward with confidence, unity, and energy.<br><br><strong>Students Council 2026-27</strong><br><strong>Choose commitment. Choose spirit. Choose Somesh Bali.</strong>",
    footerNote: "Campaign website for Somesh Bali | IGNIS House Captain | Podar International School Washim",
    voteSaved: "Your vote has been recorded successfully.",
    voteError: "Unable to save your vote right now.",
    voteInvalid: "Please enter your name and class."
  },
  hi: { /* unchanged */ },
  mr: { /* unchanged */ }
};

const languageOrder = ["en", "hi", "mr"];
let activeLanguageIndex = 0;

const API_BASE = window.location.protocol === "file:" ? "http://localhost:3000" : "";

const languageToggle = document.getElementById("language-toggle");
const voteForm = document.getElementById("vote-form");
const voteStatus = document.getElementById("vote-status");
const countdownNote = document.getElementById("countdown-note");

const targetDate = new Date("2026-04-23T00:00:00+05:30").getTime();

/* ---------- LANGUAGE ---------- */
function currentLanguage() {
  return languageOrder[activeLanguageIndex];
}

function applyLanguage(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;

    if (translations[lang] && key in translations[lang]) {
      node.innerHTML = translations[lang][key];
    }
  });
}

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    activeLanguageIndex = (activeLanguageIndex + 1) % languageOrder.length;
    const lang = currentLanguage();

    applyLanguage(lang);
    localStorage.setItem("lang", lang);
  });
}

/* ---------- LOAD SAVED LANGUAGE ---------- */
const savedLang = localStorage.getItem("lang") || "en";
activeLanguageIndex = languageOrder.indexOf(savedLang);
if (activeLanguageIndex === -1) activeLanguageIndex = 0;

applyLanguage(currentLanguage());

/* ---------- COUNTDOWN ---------- */
function updateCountdown() {
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";

    countdownNote.innerHTML = {
      en: "Election day is here. Stand proud, IGNIS, and make your vote count today.",
      hi: "चुनाव का दिन आ गया है। इग्निस, गर्व से खड़े रहो और आज अपने वोट को मायने दो।",
      mr: "निवडणुकीचा दिवस आला आहे. इग्निस, अभिमानाने उभे राहा आणि आज तुमच्या मताला अर्थ द्या."
    }[currentLanguage()];
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

/* ---------- VOTE FORM ---------- */
if (voteForm) {
  voteForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(voteForm);
    const payload = {
      name: String(formData.get("name") || "").trim(),
      className: String(formData.get("className") || "").trim()
    };

    if (!payload.name || !payload.className) {
      voteStatus.textContent = translations[currentLanguage()].voteInvalid;
      return;
    }

    voteStatus.textContent = "...";

    try {
      const response = await fetch(`${API_BASE}/api/votes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || "Unable to save vote.");
      }

      voteStatus.textContent = translations[currentLanguage()].voteSaved;
      voteForm.reset();
    } catch (error) {
      voteStatus.textContent =
        error.message ||
        `${translations[currentLanguage()].voteError} Start the local server first.`;
    }
  });
}
```
