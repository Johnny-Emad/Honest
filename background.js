/**
 * Honest 4.0 Extension Service Worker (background.js)
 * Bridges content scripts to:
 * 1. Autonomous social search agent (TikTok CC, Reddit, Facebook)
 * 2. Multimodal Vision Auditor (Gemini 1.5 Flash)
 * 3. Generative AI Reality Synthesis Engine (FLUX / SD)
 */

const AGENT_BASE_URL = 'http://localhost:5000';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'CHECK_AGENT_HEALTH') {
    checkAgentHealth()
      .then(data => sendResponse({ success: true, data }))
      .catch(err => sendResponse({ success: false, error: err.message }));
    return true; // Keep channel open for async response
  }

  if (request.action === 'SEARCH_SOCIAL_AGENT') {
    searchSocialAgent(request.payload)
      .then(data => sendResponse({ success: true, data }))
      .catch(err => sendResponse({ success: false, error: err.message }));
    return true;
  }

  if (request.action === 'RUN_VISUAL_AUDIT') {
    runVisualAudit(request.payload)
      .then(data => sendResponse({ success: true, data }))
      .catch(err => sendResponse({ success: false, error: err.message }));
    return true;
  }

  if (request.action === 'GENERATE_REALITY_IMAGE') {
    generateRealityImage(request.payload)
      .then(data => sendResponse({ success: true, data }))
      .catch(err => sendResponse({ success: false, error: err.message }));
    return true;
  }

  if (request.action === 'ASK_HONEST_QUESTION') {
    askHonestAgent(request.payload)
      .then(data => sendResponse({ success: true, data }))
      .catch(err => sendResponse({ success: false, error: err.message }));
    return true;
  }

  if (request.action === 'GET_ALTERNATIVES') {
    getAlternatives(request.payload)
      .then(data => sendResponse({ success: true, data }))
      .catch(err => sendResponse({ success: false, error: err.message }));
    return true;
  }
});

async function checkAgentHealth() {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 2500);

  try {
    const response = await fetch(`${AGENT_BASE_URL}/api/health`, {
      signal: controller.signal
    });
    clearTimeout(timeoutId);
    if (!response.ok) throw new Error('Agent service responded with non-200');
    return await response.json();
  } catch (err) {
    clearTimeout(timeoutId);
    throw err;
  }
}

async function searchSocialAgent(payload) {
  const response = await fetch(`${AGENT_BASE_URL}/api/agent/search`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error(`Agent search failed with status ${response.status}`);
  }
  return await response.json();
}

async function runVisualAudit(payload) {
  const response = await fetch(`${AGENT_BASE_URL}/api/vlm/audit`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error(`Visual audit failed with status ${response.status}`);
  }
  return await response.json();
}

async function generateRealityImage(payload) {
  const response = await fetch(`${AGENT_BASE_URL}/api/vlm/generate-reality`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error(`Reality generation failed with status ${response.status}`);
  }
  return await response.json();
}

async function askHonestAgent(payload) {
  const response = await fetch(`${AGENT_BASE_URL}/api/agent/ask`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error(`Agent Q&A failed with status ${response.status}`);
  }
  return await response.json();
}

async function getAlternatives(payload) {
  const response = await fetch(`${AGENT_BASE_URL}/api/agent/alternatives`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error(`Agent alternatives failed with status ${response.status}`);
  }
  return await response.json();
}
