// 🌍 TRANSLATIONS
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
    countdownNote: "Every second is a reminder that leadership day is near.",
    daysLabel: "Days",
    hoursLabel: "Hours",
    minutesLabel: "Minutes",
    secondsLabel: "Seconds",
    ctaGoals: "See My Goals",
    ctaWhyVote: "Why Vote for Me",
    posterNote: "Official campaign poster supporting the IGNIS House Captain journey.",
    whyMeTitle: "A captain who listens, leads, and lifts the whole house",
    whyMeCopy: "Leadership is about trust, inclusion, and teamwork.",
    goalsTitle: "What I will work on if elected",
    finalVoteLine1: "Vote Somesh Bali",
    finalVoteLine2: "for IGNIS House Captain",
    finalCopy: "Choose commitment. Choose spirit. Choose Somesh Bali.",
    footerNote: "Campaign website for Somesh Bali",
    voteSaved: "Vote recorded successfully.",
    voteError: "Error saving vote.",
    voteInvalid: "Enter name and class."
  },

  hi: {
    schoolTag: "1927 से उत्कृष्टता की विरासत",
    schoolName: "पोडार इंटरनेशनल स्कूल वाशिम",
    electionTag: "स्टूडेंट्स काउंसिल 2026-27 | इग्निस हाउस कैप्टन अभियान",
    kicker: "ऊर्जा और उद्देश्य से नेतृत्व के लिए वोट करें",
    heroTitle: "इग्निस हाउस कैप्टन के लिए सोमेश बळी", // ✅ FIXED
    candidateLine: "ग्रेड 9 रोज | चुनाव 2026-27",
    lead: "मैं सोमेश बळी हूं और इग्निस हाउस कैप्टन के लिए खड़ा हूं।",
    badge1: "जोश से नेतृत्व",
    badge2: "इग्निस के साथ आगे बढ़ो",
    badge3: "आपकी आवाज़, हमारा हाउस",
    countdownLabel: "चुनाव की उलटी गिनती",
    countdownNote: "नेतृत्व का दिन करीब है।",
    daysLabel: "दिन",
    hoursLabel: "घंटे",
    minutesLabel: "मिनट",
    secondsLabel: "सेकंड",
    ctaGoals: "मेरे लक्ष्य",
    ctaWhyVote: "मुझे क्यों चुनें",
    posterNote: "आधिकारिक प्रचार पोस्टर",
    whyMeTitle: "एक नेता जो सबको साथ लेकर चले",
    whyMeCopy: "नेतृत्व विश्वास और टीमवर्क है।",
    goalsTitle: "मेरे लक्ष्य",
    finalVoteLine1: "सोमेश बळी को वोट दें",
    finalVoteLine2: "इग्निस हाउस कैप्टन",
    finalCopy: "सही चुनाव करें। सोमेश बळी चुनें।",
    footerNote: "सोमेश बळी अभियान वेबसाइट",
    voteSaved: "वोट दर्ज हो गया।",
    voteError: "वोट सेव नहीं हुआ।",
    voteInvalid: "नाम और कक्षा भरें।"
  },

  mr: {
    schoolTag: "1927 पासून उत्कृष्टतेची परंपरा",
    schoolName: "पोडार इंटरनॅशनल स्कूल वाशिम",
    electionTag: "स्टुडंट्स कौन्सिल 2026-27 | इग्निस हाउस कॅप्टन मोहीम",
    kicker: "ऊर्जावान नेतृत्वासाठी मतदान करा",
    heroTitle: "इग्निस हाउस कॅप्टनसाठी सोमेश बळी", // ✅ FIXED
    candidateLine: "ग्रेड 9 रोज | निवडणूक 2026-27",
    lead: "मी सोमेश बळी आहे आणि इग्निस हाउस कॅप्टनसाठी उभा आहे.",
    badge1: "जाज्वल्य नेतृत्व",
    badge2: "इग्निससोबत पुढे चला",
    badge3: "तुमचा आवाज, आपला हाउस",
    countdownLabel: "निवडणुकीची उलटी गणना",
    countdownNote: "नेतृत्वाचा दिवस जवळ आहे.",
    daysLabel: "दिवस",
    hoursLabel: "तास",
    minutesLabel: "मिनिटे",
    secondsLabel: "सेकंद",
    ctaGoals: "माझी ध्येये",
    ctaWhyVote: "मला मत द्या",
    posterNote: "अधिकृत पोस्टर",
    whyMeTitle: "सर्वांना घेऊन चालणारा नेता",
    whyMeCopy: "नेतृत्व म्हणजे विश्वास.",
    goalsTitle: "माझी ध्येये",
    finalVoteLine1: "सोमेश बळीला मत द्या",
    finalVoteLine2: "इग्निस हाउस कॅप्टन",
    finalCopy: "योग्य निवड करा. सोमेश बळी निवडा.",
    footerNote: "सोमेश बळी प्रचार वेबसाइट",
    voteSaved: "मत नोंदवले गेले.",
    voteError: "मत जतन झाले नाही.",
    voteInvalid: "नाव आणि वर्ग भरा."
  }
};

// 🌐 LANGUAGE
let currentLang = localStorage.getItem("lang") || "en";

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  applyLanguage();
}

// APPLY TEXT
function applyLanguage() {
  document.documentElement.lang = currentLang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[currentLang][key]) {
      el.innerHTML = translations[currentLang][key];
    }
  });
}

// ⏳ COUNTDOWN
const targetDate = new Date("2026-04-23T00:00:00+05:30").getTime();

function updateCountdown() {
  const now = Date.now();
  const diff = targetDate - now;

  if (diff <= 0) return;

  document.getElementById("days").textContent =
    String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, "0");

  document.getElementById("hours").textContent =
    String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, "0");

  document.getElementById("minutes").textContent =
    String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, "0");

  document.getElementById("seconds").textContent =
    String(Math.floor((diff / 1000) % 60)).padStart(2, "0");
}

// 🗳️ VOTE SYSTEM (safe)
const voteForm = document.getElementById("vote-form");
const voteStatus = document.getElementById("vote-status");

if (voteForm) {
  voteForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = voteForm.name.value.trim();
    const cls = voteForm.className.value.trim();

    if (!name || !cls) {
      voteStatus.textContent = translations[currentLang].voteInvalid;
      return;
    }

    voteStatus.textContent = "...";

    try {
      const res = await fetch("/api/votes", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ name, className: cls })
      });

      if (!res.ok) throw new Error();

      voteStatus.textContent = translations[currentLang].voteSaved;
      voteForm.reset();
    } catch {
      voteStatus.textContent = translations[currentLang].voteError;
    }
  });
}

// INIT
applyLanguage();
updateCountdown();
setInterval(updateCountdown, 1000);
