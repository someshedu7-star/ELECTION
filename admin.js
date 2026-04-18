const loginCard = document.getElementById("login-card");
const dashboard = document.getElementById("dashboard");
const loginForm = document.getElementById("login-form");
const loginStatus = document.getElementById("login-status");
const voteSummary = document.getElementById("vote-summary");
const voteList = document.getElementById("vote-list");
const logoutButton = document.getElementById("logout-button");
const API_BASE = window.location.protocol === "file:" ? "http://localhost:3000" : "";
const SESSION_KEY = "somesh-vote-admin-session";

function getSessionId() {
  return localStorage.getItem(SESSION_KEY) || "";
}

function authHeaders() {
  const sessionId = getSessionId();
  return sessionId ? { "X-Vote-Admin-Session": sessionId } : {};
}

function formatDate(value) {
  return new Date(value).toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short"
  });
}

function renderVotes(votes) {
  voteSummary.textContent = `${votes.length} vote${votes.length === 1 ? "" : "s"} recorded`;

  if (!votes.length) {
    voteList.innerHTML = `
      <article class="vote-item">
        <strong>No votes yet</strong>
        <span>Votes submitted from the campaign page will appear here.</span>
      </article>
    `;
    return;
  }

  voteList.innerHTML = votes.map((vote) => `
    <article class="vote-item">
      <strong>${vote.name}</strong>
      <span>Class: ${vote.className}</span>
      <span>Submitted: ${formatDate(vote.createdAt)}</span>
    </article>
  `).join("");
}

async function loadVotes() {
  const response = await fetch(`${API_BASE}/api/vote-admin/votes`, {
    credentials: "include",
    headers: authHeaders()
  });

  if (!response.ok) {
    throw new Error("Login required.");
  }

  const data = await response.json();
  renderVotes(data.votes || []);
}

async function checkSession() {
  const response = await fetch(`${API_BASE}/api/vote-admin/status`, {
    credentials: "include",
    headers: authHeaders()
  });
  const data = await response.json();

  if (data.authenticated) {
    loginCard.classList.add("hidden");
    dashboard.classList.remove("hidden");
    await loadVotes();
  }
}

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  loginStatus.textContent = "Checking password...";

  const formData = new FormData(loginForm);
  const payload = {
    password: String(formData.get("password") || "")
  };

  try {
    const response = await fetch(`${API_BASE}/api/vote-admin/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        ...authHeaders()
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || "Incorrect password.");
    }

    if (data.sessionId) {
      localStorage.setItem(SESSION_KEY, data.sessionId);
    }
    loginStatus.textContent = "";
    loginCard.classList.add("hidden");
    dashboard.classList.remove("hidden");
    await loadVotes();
  } catch (error) {
    loginStatus.textContent = error.message || "Failed to fetch. Start the local server first.";
  }
});

logoutButton.addEventListener("click", async () => {
  await fetch(`${API_BASE}/api/vote-admin/logout`, {
    method: "POST",
    credentials: "include",
    headers: authHeaders()
  });

  localStorage.removeItem(SESSION_KEY);
  dashboard.classList.add("hidden");
  loginCard.classList.remove("hidden");
  loginForm.reset();
  loginStatus.textContent = "Logged out.";
});

checkSession().catch(() => {
  loginStatus.textContent = "";
});
