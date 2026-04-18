const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { URL } = require('url');

let createClient = null;
try {
  ({ createClient } = require('@supabase/supabase-js'));
} catch {
  createClient = null;
}

const PORT = process.env.PORT || 3000;
const SUPABASE_URL = process.env.SUPABASE_URL || '';
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

const votesFile = path.join(__dirname, 'votes.json');

const supabase = SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY
  ? createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)
  : null;

// ---------- Helpers ----------
function sendJson(res, code, data) {
  res.writeHead(code, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
}

function sendText(res, code, text) {
  res.writeHead(code, { 'Content-Type': 'text/plain' });
  res.end(text);
}

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        resolve(JSON.parse(body || '{}'));
      } catch {
        reject(new Error("Invalid JSON"));
      }
    });
  });
}

function readVotes() {
  try {
    return JSON.parse(fs.readFileSync(votesFile));
  } catch {
    return [];
  }
}

function writeVotes(votes) {
  fs.writeFileSync(votesFile, JSON.stringify(votes, null, 2));
}

// ---------- Server ----------
const server = http.createServer(async (req, res) => {
  const urlObj = new URL(req.url, `http://${req.headers.host}`);
  const pathname = urlObj.pathname;

  // ✅ ROOT FIX
  if (pathname === "/") {
    sendText(res, 200, "Backend is running 🚀");
    return;
  }

  // ---------- HEALTH ----------
  if (pathname === "/api/health") {
    sendJson(res, 200, {
      ok: true,
      supabase: !!supabase
    });
    return;
  }

  // ---------- VOTES ----------
  if (pathname === "/api/votes" && req.method === "POST") {
    try {
      const body = await parseBody(req);
      const votes = readVotes();

      const newVote = {
        id: Date.now(),
        name: body.name,
        className: body.className
      };

      votes.push(newVote);
      writeVotes(votes);

      sendJson(res, 201, newVote);
    } catch (e) {
      sendJson(res, 400, { error: e.message });
    }
    return;
  }

  // ---------- REVIEWS (Supabase) ----------
  if (pathname === "/api/reviews" && req.method === "GET") {
    if (!supabase) {
      sendJson(res, 500, { error: "Supabase not configured" });
      return;
    }

    const { data, error } = await supabase.from('reviews').select('*');

    if (error) {
      sendJson(res, 500, { error: error.message });
    } else {
      sendJson(res, 200, data);
    }
    return;
  }

  // ---------- DEFAULT ----------
  sendText(res, 404, "Not Found");
});

// ---------- START ----------
server.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
