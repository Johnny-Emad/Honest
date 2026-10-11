# Honest 4.0 - Generative AI Visual Reality & Multi-Modal Product Auditor
### 🍌 Banana Hacks 2026 Edition: Generative AI & Image Creation

Honest 4.0 is a next-generation browser extension designed to protect online shoppers from deceptive marketing, lighting tricks, and material discrepancies across **Amazon**, **Noon**, and **Shein**.

By pairing **Multimodal Vision Models (Gemini 1.5 Flash)** with **Generative Image Synthesis (FLUX.1 / Stable Diffusion)**, Honest 4.0 reveals what products *actually* look like in real consumers' homes before you buy.

---

## 🏆 Banana Hacks 2026 Theme Alignment: "Generative AI & Image Creation"

While previous versions focused on text and review mining, Honest 4.0 shifts focus to **Visual Truth in E-Commerce**:

| Core Pillar | Technology | What it Does |
| :--- | :--- | :--- |
| **1. Catalog Image Extractor** | DOM, Schema.org JSON-LD & OG Meta | Scrapes the official high-resolution studio marketing images directly from the e-commerce DOM. |
| **2. Multimodal Forensic Comparison** | Gemini 1.5 Flash (Pydantic Schema) | Forensically compares studio lighting, fabric drape, and silhouette against real unboxing video stills. |
| **3. Generative "Real-Life Look"** | FLUX.1 Schnell / SDXL Prompt Synthesis | Generates a photorealistic AI image showing the item on an everyday consumer under domestic lighting. |
| **4. Interactive Before/After Split Slider** | Shadow DOM Custom UI Component | Allows shoppers to slide between the Advertised Catalog shot and the AI-Synthesized Reality in real time. |
| **5. Lighting Environment Simulator** | Dynamic Rendering | Simulates product appearance across Natural Daylight, Office LEDs, and Warm Domestic Home light. |
| **6. Visual Scorecard Card Export** | One-Click Composite Generator | Generates an annotated visual card with discrepancy scores ready to share on WhatsApp or social media. |

---

## 📦 Project Architecture

```
Honest4/
├── manifest.json              # Chrome Manifest V3 declaration
├── content.js                 # Shadow DOM injection, image scraping & interactive split slider
├── style.css                  # Encapsulated CSS with reality slider, glassmorphism & forensics
├── background.js              # Service worker routing API calls to vision & social agent
├── test-preview.html          # Standalone demo stage (ideal for instant hackathon testing!)
└── server/
    ├── agent.js               # Node.js backend (Port 5000): VLM audit, reality gen & social agent
    ├── vlm_engine.py          # Python Gemini 1.5 Flash SDK script with structured Pydantic schema
    └── package.json           # Backend dependencies
```

---

## 🚀 How to Install & Run in Chrome

1. Open Chrome (or Edge / Brave / Arc) and navigate to:
   ```
   chrome://extensions
   ```
2. Toggle **Developer mode** on (top-right corner).
3. Click **Load unpacked**.
4. Select the project folder:
   ```
   ./Honest4
   ```
5. Navigate to any product page on [Amazon](https://amazon.com), [Noon](https://noon.com), or [Shein](https://shein.com).
6. Click the floating **Honest 4.0** badge in the bottom-right corner to open the **✨ Reality Check** tab!

---

## 🧪 Instant Local Hackathon Demo (No Extension Loading Needed)

To test or present the project immediately:
1. Open [`test-preview.html`](test-preview.html) in any modern web browser.
2. Click between the demo items:
   - **1. Oversized Wool Blend Trench Coat** (Highlights color wash and limp fabric)
   - **2. Sony WH-1000XM5** (High visual match & authentic build quality)
   - **3. Retro Corduroy Jacket** (Sizing & yellow/mustard color shift)
3. Interact with the **✨ Reality Check** tab:
   - Drag the **↔ Split Slider** to compare Advertised vs. Real Look.
   - Switch lighting conditions (**☀️ Daylight**, **💡 Office 4500K**, **🛋️ Warm Home 3000K**).
   - View the **Multimodal Vision Forensics** scorecards and TikTok unboxing keyframes.
   - Click **📸 Export Visual Scorecard** to generate and download a branded, high-res PNG scorecard.

---

## 🎨 Generative AI Pipeline: FLUX.1 & Stable Diffusion

Honest 4.0 does not just extract review sentiment; it executes an end-to-end Image AI pipeline:

1. **Multimodal Analysis:** Gemini 1.5 Flash compares catalog image parts with customer video keyframes to output structured parameters: color shifts, fabric drape, and defects.
2. **Reality Prompt Synthesis:** The VLM crafts a photorealistic, unretouched prompt describing the product in domestic environments.
3. **Diffusion Generation:** The prompt is piped to **FLUX.1-schnell** or **SD-XL** to synthesize the true consumer reality preview:
   ```
   "Candid smartphone mirror selfie photo taken inside a modest hallway entryway, warm 3000K ceiling light, person wearing an unsteamed camel trench coat with visible natural fabric drape wrinkles, matte plastic buttons, realistic imperfect folds, unretouched, 4k"
   ```
4. **Client-side Canvas Snapshot:** The shopper can export an annotated, composite visual comparison card with a single click.

---

## 📡 Running the Backend Agent (Optional)

The extension includes high-fidelity pre-cached heuristics for demo reliability, but you can also spin up the local agent server:

```bash
cd server
npm start
```
Server runs on `http://localhost:5000`:
- `POST /api/vlm/audit` — Multimodal catalog vs. video frame comparison
- `POST /api/vlm/generate-reality` — Generative reality synthesis (FLUX.1)
- `POST /api/agent/search` — Social consensus & video CC search
- `GET  /api/health` — Agent status check

