# 🎀 Bestie's Birthday Surprise Website 🧸💗📚

A cute, interactive, personalized digital birthday gift website handcrafted with soft pastel aesthetics, warm friendship vibes, teddy bears, pastel books, digital letters, memory polaroids, and delightful micro-interactions!

---

## ✨ Features & Interactive Scenes

1. **🎀 The Opening First Screen (Hero)**
   - Dreamy pastel pink atmosphere with glowing ambient elements (`#FFE6F0`, `#FFD1E2`, `#FFB6D1`).
   - Fluffy pastel teddy bear sitting happily beside a neat stack of pastel storybooks.
   - Gentle floating hearts, sparkles, ribbons, and tiny stars.
   - Prominent, shimmering **"Open Your Surprise 💌"** button with confetti burst and sound chime transitions.

2. **🎂 Scene 1 — The Birthday Welcome**
   - Large personalized greeting: *"Happy Birthday, Bestie! 🎂💗"*.
   - Interactive SVG birthday cake with flickering candles: **tap to make a wish & blow out the candles!**
   - Realistic smoke puffs rise, starry wishes appear, and candles can be relit anytime.

3. **💌 Scene 2 — A Little Birthday Letter**
   - 3D-folding digital envelope with custom wax seal stamp.
   - Tap envelope to break the seal, unfold the flap, and slide the handwritten letter out with sparkle flourishes.
   - Easily customizable letter paragraphs, greeting, and signature.

4. **🧸 Scene 3 — The Cute Teddy-Bear Corner & Bookshelf**
   - Huggable interactive teddy bear: tap to give bear hugs and trigger heart bursts & sweet phrases.
   - Interactive pastel bookshelf with colorful volumes (*"Dream Big"*, *"Happy Tales"*, *"Love & Joy"*, *"Little Adventures"*).
   - Tap any book on the shelf to reveal its inspiring chapter quote!

5. **🌷 Scene 4 — Reasons You're Amazing**
   - Grid of pastel appreciation cards celebrating kindness, smiles, and friendship.
   - Interactive *"Send a Hug! 💖"* reaction button on each card with mini confetti bursts.

6. **📸 Scene 5 — The Memory Scrapbook**
   - Authentic polaroid cards with washi tape, stamps, and handwritten titles & captions.
   - Full-screen **Image Lightbox** with keyboard navigation (`ArrowLeft`, `ArrowRight`, `Escape`) and mobile touch support.

7. **🎁 Scene 6 — Birthday Wishes & 3D Gift Box**
   - 3D-styled interactive gift box with ribbon knot and bow.
   - Tap the gift to untie the ribbon, pop the lid off, trigger a confetti explosion, and reveal the heartfelt birthday wish card!
   - Can be unboxed and replayed anytime.

8. **⏳ Scene 7 — Special Day Celebration & Countdown**
   - Celebratory banner for the birthday person with extra confetti thrower!
   - Supports live countdown timer for future dates.

9. **🌙 Scene 8 — The Final Birthday Screen**
   - Cozy bedtime aesthetic with teddy bear, warm glowing fairy lights, and heartfelt closing message.
   - Quick navigation to *"Read the Letter Again 💌"* or *"Start the Surprise Over 🎀"*.

10. **🎵 Web Audio Synthesizer & Easter Egg**
    - Built-in zero-dependency Web Audio music-box lullaby (gentle celesta tones) — no broken audio links or external dependencies.
    - Sound effects for pops, chimes, and candle puffs.
    - Secret Heart Easter Egg button in the top navigation revealing a hidden bestie message!

---

## 🚀 How to Run Locally

You can run this project with zero setup!

### Option 1: Direct Double Click
Simply double-click `index.html` in your file explorer to open it directly in Google Chrome, Microsoft Edge, Firefox, or Safari.

### Option 2: Local HTTP Server (Recommended)
Using Python (pre-installed on most systems):
```bash
python -m http.server 8000
```
Or using Node.js:
```bash
npx serve .
```
Then visit `http://localhost:8000` in your web browser.

---

## 🎨 How to Personalize & Customize

All content is cleanly separated and configurable in [`data/birthday-content.json`](file:///d:/Playground%20D/Rida's%20Birthday%20Web/data/birthday-content.json).

### 1. Changing Names & Dates
Open `data/birthday-content.json` and change:
```json
{
  "bestieName": "Rida",
  "senderName": "Your Bestie",
  "birthdayDate": "2026-10-18T00:00:00",
  "isBirthdayToday": true
}
```

### 2. Customizing the Birthday Letter
Modify the `scene2_letter` section:
```json
"scene2_letter": {
  "paragraphs": [
    "Your personalized message here...",
    "Another sweet paragraph..."
  ]
}
```

### 3. Adding Your Own Photos to the Scrapbook
1. Place your `.jpg` or `.png` images into `assets/images/`.
2. Update the `scene5_scrapbook.polaroids` array in `data/birthday-content.json` with the filenames, captions, and dates.

---

## 📱 Browser & Device Support

- **Desktop & Laptop**: Chrome, Edge, Firefox, Safari, Opera (smooth 60fps animations & hover states).
- **Tablets & iPads**: Responsive layouts with touch interactions.
- **Mobile Phones**: Specially stacked cards, touch-friendly buttons, and zero horizontal scrolling.
- **Accessibility**: Semantic HTML5, accessible ARIA labels, keyboard focus outlines, and `prefers-reduced-motion` compliance.

---

Made with 💗, hugs & bestie magic ✨
