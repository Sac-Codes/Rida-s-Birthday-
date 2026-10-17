/**
 * BESTIE'S BIRTHDAY SURPRISE - COMPLETE INTERACTIVE LOGIC
 * Includes: Content Configuration, Web Audio Synth, Confetti Engine,
 * Scene Transitions, Interactive Cake, Folding Letter, Teddy Corner,
 * Scrapbook Lightbox, 3D Gift Box, and Accessibility.
 */

// --- DEFAULT FALLBACK CONFIGURATION (Ensures 100% functionality on file:// or if JSON fails) ---
const DEFAULT_CONFIG = {
  bestieName: "Rida",
  senderName: "Your Bestie",
  birthdayDate: "2026-10-18T00:00:00",
  isBirthdayToday: true,
  todayCelebrationMessage: "IT'S YOUR SPECIAL DAY! 🎂🎉",
  audioEnabledByDefault: false,

  firstScreen: {
    badge: "A LITTLE SOMETHING FOR YOU 💌",
    title: "Hey, Bestie Rida! 🎀",
    subtitle: "Someone made a little corner of the internet just for you…",
    buttonText: "Open Your Surprise 💌",
    footerNote: "Made with love, hugs & a little bit of magic ✨"
  },

  scene1_welcome: {
    heading: "Happy Birthday, {name}! 🎂💗",
    subtitle: "Today is all about celebrating the wonderful person you are. So, here is a tiny surprise made especially for you!",
    cakePrompt: "Make a wish & tap the candles to blow them out! 🕯️✨",
    buttonText: "There's More! ✨"
  },

  scene2_letter: {
    sectionBadge: "A HEARTFELT NOTE 💌",
    title: "A Little Birthday Letter",
    teaser: "Psst… someone has written you a little letter. 💗",
    clickPrompt: "Tap envelope to open 💌",
    dear: "Dear {name},",
    paragraphs: [
      "Happy Birthday to someone who makes life a little brighter just by being themselves! 💗",
      "I hope this new chapter brings you beautiful memories, wonderful surprises, lots of laughter, and countless reasons to smile.",
      "Never forget how special you are and how much you deserve happiness, love, and success.",
      "Keep being your lovely, wonderful self. The world needs more of your magic. ✨"
    ],
    signoff: "With lots of hugs and bestie energy,",
    signature: "{senderName} 💌"
  },

  scene3_teddyCorner: {
    sectionBadge: "COZY NOOK 🧸📚",
    title: "The Cute Teddy-Bear Corner",
    subtitle: "A cozy reading haven made with warm hugs and pastel aesthetic vibes",
    captions: [
      "A bear-y special person! 🧸",
      "Sending you a shelf full of happiness! 📚",
      "You deserve all the hugs today! 💗"
    ],
    books: [
      {
        title: "Dream Big",
        tag: "Vol. 1",
        color: "#BCE3FA",
        spineColor: "#8EC5FC",
        quote: "Your dreams are valid, bold, and beautiful. Never stop reaching for the stars! ⭐"
      },
      {
        title: "Happy Tales",
        tag: "Vol. 2",
        color: "#FFD1DC",
        spineColor: "#FFAAA6",
        quote: "May every chapter of your life be filled with laughter, cute moments, and sunshine! 🌸"
      },
      {
        title: "Love & Joy",
        tag: "Vol. 3",
        color: "#C7EAE5",
        spineColor: "#80CBC4",
        quote: "You radiate warmth wherever you go. Being around you is an absolute blessing! 💗"
      },
      {
        title: "Little Adventures",
        tag: "Vol. 4",
        color: "#E5D4F9",
        spineColor: "#CE93D8",
        quote: "To every road trip, late-night laugh attack, and silly memory yet to come! 🚀"
      }
    ]
  },

  scene4_reasons: {
    sectionBadge: "WHY YOU ARE SO SPECIAL 🌷",
    title: "Reasons You're Amazing",
    subtitle: "Just a small reminder of all the light you bring into the world",
    cards: [
      {
        id: "card-1",
        icon: "🌞",
        headline: "Sunshine Smile",
        text: "Your smile makes ordinary days brighter.",
        tag: "Instant warmth ✨"
      },
      {
        id: "card-2",
        icon: "🌸",
        headline: "Pure Heart",
        text: "You deserve every beautiful thing life has to offer.",
        tag: "Always & forever 💖"
      },
      {
        id: "card-3",
        icon: "📸",
        headline: "Unforgettable",
        text: "You make memories worth keeping.",
        tag: "Golden moments 🧸"
      },
      {
        id: "card-4",
        icon: "💗",
        headline: "Endless Kindness",
        text: "Your kindness is a genuine gift.",
        tag: "So genuine 🌷"
      },
      {
        id: "card-5",
        icon: "⭐",
        headline: "Limitless Dreams",
        text: "Keep dreaming ridiculously big.",
        tag: "Shoot for stars 🚀"
      },
      {
        id: "card-6",
        icon: "🎀",
        headline: "Simply You",
        text: "Never stop being wonderfully you.",
        tag: "One in a billion 👑"
      }
    ]
  },

  scene5_scrapbook: {
    sectionBadge: "TREASURED MEMORIES 📸",
    title: "The Memory Scrapbook",
    subtitle: "Sweet polaroids, golden memories, and unforgettable smiles of our favorite girl",
    polaroids: [
      {
        id: "photo-1",
        image: "assets/images/rida_2.jpg",
        alt: "Rida and bestie smiling together in a cute selfie",
        title: "Bestie Smiles Forever 📸💖",
        caption: "Unstoppable laughs, endless inside jokes, and the kind of friendship that brightens every single day!",
        date: "Unbreakable Bond",
        sticker: "🌸 BESTIES"
      },
      {
        id: "photo-2",
        image: "assets/images/rida_1.jpg",
        alt: "Rida receiving a certificate and trophy award with pride",
        title: "The Champion Girl 🏆⭐",
        caption: "Winning trophies, holding certificates, and shining so bright! Celebrating your big wins and endless talents.",
        date: "Proud Achievement",
        sticker: "🎖️ PROUD OF YOU"
      },
      {
        id: "photo-3",
        image: "assets/images/rida_3.jpg",
        alt: "Rida and friends smiling at school event with peace sign",
        title: "School Days & Silly Faces 🏫🌸",
        caption: "Uniforms, peace signs, exhibition days, and memories that will stay in our hearts forever!",
        date: "School Times",
        sticker: "✌️ CREW VIBES"
      },
      {
        id: "photo-4",
        image: "assets/images/rida_4.jpg",
        alt: "Baby Rida childhood throwback with her father",
        title: "Little Princess Throwback 🍼✨",
        caption: "A sweet baby girl with the biggest sparkle in her eyes. Look how wonderfully you've grown!",
        date: "Little Rida",
        sticker: "🧸 THROWBACK"
      }
    ]
  },

  scene6_gift: {
    sectionBadge: "A SPECIAL SURPRISE 🎁",
    title: "Birthday Wishes",
    teaser: "There's one more little surprise waiting for you… 🎁",
    prompt: "Tap the shiny gift box to unwrap your surprise! 🎀",
    wishHeading: "A Wish Straight From The Heart 💗",
    wishBody: "May this year bring you unexpected happiness, exciting adventures, dreams that come true, and memories that make you smile for years. Happy Birthday! 🎂💗",
    replayButton: "Open Gift Again 🎁"
  },

  scene7_countdown: {
    sectionBadge: "SPECIAL DAY ⏳",
    title: "Birthday Countdown",
    isToday: true,
    todayCelebration: "IT'S YOUR SPECIAL DAY! 🎂🎉",
    todaySubtext: "The universe is celebrating the wonderful soul that you are today! 🌟"
  },

  scene8_final: {
    sectionBadge: "WITH ALL MY LOVE 🌙",
    title: "A Little Corner Of Magic ✨",
    message: "And that's your little corner of birthday magic. Keep smiling, keep dreaming, and keep being the amazing person you are. Happy Birthday once again! 💗🧸✨",
    buttonLetter: "Read the Letter Again 💌",
    buttonRestart: "Start the Surprise Over 🎀"
  }
};

let currentConfig = { ...DEFAULT_CONFIG };
let currentPolaroidIndex = 0;
let hugCount = 0;
let isCandleLit = true;
let isLetterOpen = false;
let isGiftOpen = false;
let sfxEnabled = true;
let musicEnabled = false;

// --- WEB AUDIO API MUSIC BOX & CHIMES SYNTHESIZER ---
class CozyAudioEngine {
  constructor() {
    this.ctx = null;
    this.musicTimer = null;
    this.isPlayingMusic = false;
    this.noteIndex = 0;
    
    // Dreamy Lofi Music Box notes (Frequencies in Hz: C5, D5, E5, G5, A5, C6...)
    this.melody = [
      { f: 523.25, d: 0.5 }, // C5
      { f: 659.25, d: 0.5 }, // E5
      { f: 783.99, d: 0.5 }, // G5
      { f: 1046.50, d: 1.0 }, // C6
      { f: 880.00, d: 0.5 }, // A5
      { f: 783.99, d: 0.5 }, // G5
      { f: 659.25, d: 1.0 }, // E5
      { f: 587.33, d: 0.5 }, // D5
      { f: 659.25, d: 0.5 }, // E5
      { f: 783.99, d: 0.5 }, // G5
      { f: 880.00, d: 1.0 }, // A5
      { f: 1046.50, d: 0.5 }, // C6
      { f: 1174.66, d: 0.5 }, // D6
      { f: 1046.50, d: 1.5 }, // C6
      { f: 783.99, d: 0.5 }, // G5
      { f: 659.25, d: 1.0 }  // E5
    ];
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Soft Celesta / Music Box Note
  playChime(freq, duration = 0.8, volume = 0.15) {
    if (!sfxEnabled && !this.isPlayingMusic) return;
    this.init();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(volume, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.warn("Audio playback issue:", e);
    }
  }

  // Sparkling flourish chime
  playSparkle() {
    if (!sfxEnabled) return;
    const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
    notes.forEach((f, i) => {
      setTimeout(() => this.playChime(f, 0.6, 0.12), i * 70);
    });
  }

  // Gentle pop for clicks
  playPop() {
    if (!sfxEnabled) return;
    this.playChime(440, 0.25, 0.1);
  }

  // Candle puff sound
  playPuff() {
    if (!sfxEnabled) return;
    this.init();
    try {
      // Gentle swoosh / bell
      this.playChime(880, 0.4, 0.08);
      setTimeout(() => this.playChime(587.33, 0.5, 0.08), 100);
    } catch (e) {}
  }

  // Background Music loop
  toggleMusic() {
    this.init();
    this.isPlayingMusic = !this.isPlayingMusic;
    if (this.isPlayingMusic) {
      this.startMusicLoop();
    } else {
      this.stopMusicLoop();
    }
    return this.isPlayingMusic;
  }

  startMusicLoop() {
    this.stopMusicLoop();
    this.isPlayingMusic = true;
    const playNext = () => {
      if (!this.isPlayingMusic) return;
      const note = this.melody[this.noteIndex];
      this.playChime(note.f, note.d * 1.5, 0.08);

      // Add a quiet bass harmony note occasionally
      if (this.noteIndex % 4 === 0) {
        this.playChime(note.f / 2, 2.0, 0.04);
      }

      this.noteIndex = (this.noteIndex + 1) % this.melody.length;
      this.musicTimer = setTimeout(playNext, note.d * 900);
    };
    playNext();
  }

  stopMusicLoop() {
    this.isPlayingMusic = false;
    if (this.musicTimer) {
      clearTimeout(this.musicTimer);
      this.musicTimer = null;
    }
  }
}

const audio = new CozyAudioEngine();

// --- LIGHTWEIGHT CANVAS CONFETTI ENGINE ---
class ConfettiEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.colors = ['#FF8EB3', '#FFD1E2', '#FFEAA7', '#A0C4FF', '#BCE3FA', '#E5D4F9', '#FFD166'];
    this.shapes = ['circle', 'rect', 'heart'];
    this.animId = null;

    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  burst(count = 75, originX = window.innerWidth / 2, originY = window.innerHeight / 2) {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const velocity = Math.random() * 8 + 4;
      this.particles.push({
        x: originX,
        y: originY,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity - 2,
        size: Math.random() * 9 + 5,
        color: this.colors[Math.floor(Math.random() * this.colors.length)],
        shape: this.shapes[Math.floor(Math.random() * this.shapes.length)],
        rot: Math.random() * 360,
        vRot: (Math.random() - 0.5) * 10,
        alpha: 1,
        life: Math.random() * 80 + 60
      });
    }

    if (!this.animId) {
      this.animate();
    }
  }

  animate() {
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.18; // gravity
      p.vx *= 0.98; // friction
      p.rot += p.vRot;
      p.life--;
      p.alpha = Math.max(0, p.life / 80);

      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate((p.rot * Math.PI) / 180);
      this.ctx.globalAlpha = p.alpha;
      this.ctx.fillStyle = p.color;

      if (p.shape === 'circle') {
        this.ctx.beginPath();
        this.ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        this.ctx.fill();
      } else if (p.shape === 'rect') {
        this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
      } else if (p.shape === 'heart') {
        // Draw miniature heart
        this.ctx.font = `${Math.floor(p.size * 1.2)}px sans-serif`;
        this.ctx.fillText('💗', -p.size / 2, p.size / 2);
      }

      this.ctx.restore();

      if (p.life <= 0 || p.y > this.canvas.height + 50) {
        this.particles.splice(i, 1);
      }
    }

    if (this.particles.length > 0) {
      this.animId = requestAnimationFrame(() => this.animate());
    } else {
      this.animId = null;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
}

let confetti = null;

// --- INITIALIZATION & CONFIG LOADING ---
document.addEventListener('DOMContentLoaded', async () => {
  confetti = new ConfettiEngine('confettiCanvas');
  await loadContentConfiguration();
  bindInteractiveEvents();
  renderDynamicComponents();
  setupNavScrollSpy();
  setupSparkleCursorTrail();
});

/**
 * Loads configuration from data/birthday-content.json
 * Seamlessly falls back to DEFAULT_CONFIG if opened via file:// or fetch fails
 */
async function loadContentConfiguration() {
  try {
    const res = await fetch('data/birthday-content.json');
    if (res.ok) {
      const json = await res.json();
      currentConfig = { ...DEFAULT_CONFIG, ...json };
    }
  } catch (err) {
    console.info('Loaded local fallback birthday configuration.');
    currentConfig = { ...DEFAULT_CONFIG };
  }
  applyConfigToDOM();
}

/**
 * Applies all customizable strings, names, and images to the DOM
 */
function applyConfigToDOM() {
  const cfg = currentConfig;
  const name = cfg.bestieName || "Bestie";
  const sender = cfg.senderName || "Your Bestie";

  // First Screen Elements
  if (cfg.firstScreen) {
    setElText('heroBadgeText', cfg.firstScreen.badge);
    setElText('heroTitle', cfg.firstScreen.title);
    setElText('heroSubtitle', cfg.firstScreen.subtitle);
    setElText('openBtnText', cfg.firstScreen.buttonText);
    setElText('heroFooterCaption', cfg.firstScreen.footerNote);
  }

  // Welcome Scene
  if (cfg.scene1_welcome) {
    const heading = (cfg.scene1_welcome.heading || "Happy Birthday, {name}! 🎂💗").replace('{name}', name);
    const welcomeEl = document.getElementById('welcomeHeading');
    if (welcomeEl) {
      welcomeEl.innerHTML = `Happy Birthday, <span class="highlight-name" id="welcomeBestieName">${escapeHtml(name)}</span>! 🎂💗`;
    }
    setElText('welcomeSubtitle', cfg.scene1_welcome.subtitle);
    setElText('cakeInstructionText', cfg.scene1_welcome.cakePrompt);
  }

  // Letter Scene
  if (cfg.scene2_letter) {
    setElText('letterSectionBadge', cfg.scene2_letter.sectionBadge);
    setElText('letterTeaser', cfg.scene2_letter.teaser);
    setElText('letterDear', (cfg.scene2_letter.dear || "Dear {name},").replace('{name}', name));
    setElText('letterSignoff', cfg.scene2_letter.signoff);
    setElText('letterSignature', (cfg.scene2_letter.signature || "{senderName} 💌").replace('{senderName}', sender));

    const paraContainer = document.getElementById('letterParagraphsContainer');
    if (paraContainer && cfg.scene2_letter.paragraphs) {
      paraContainer.innerHTML = cfg.scene2_letter.paragraphs
        .map(p => `<p>${escapeHtml(p)}</p>`)
        .join('');
    }
  }

  // Teddy Corner
  if (cfg.scene3_teddyCorner) {
    setElText('teddySectionBadge', cfg.scene3_teddyCorner.sectionBadge);
    setElText('teddySubtitle', cfg.scene3_teddyCorner.subtitle);
    const capsContainer = document.getElementById('teddyCaptionsContainer');
    if (capsContainer && cfg.scene3_teddyCorner.captions) {
      capsContainer.innerHTML = cfg.scene3_teddyCorner.captions
        .map(c => `<div class="nook-badge">${escapeHtml(c)}</div>`)
        .join('');
    }
  }

  // Gift Scene
  if (cfg.scene6_gift) {
    setElText('giftSectionBadge', cfg.scene6_gift.sectionBadge);
    setElText('giftTeaser', cfg.scene6_gift.teaser);
    setElText('giftPromptText', cfg.scene6_gift.prompt);
    setElText('wishCardHeading', cfg.scene6_gift.wishHeading);
    setElText('wishCardBody', cfg.scene6_gift.wishBody);
  }

  // Countdown Scene
  if (cfg.scene7_countdown) {
    setElText('countdownSectionBadge', cfg.scene7_countdown.sectionBadge);
    if (cfg.scene7_countdown.isToday) {
      setElText('todayCelebrationHeadline', cfg.scene7_countdown.todayCelebration);
      setElText('todayCelebrationSubtext', cfg.scene7_countdown.todaySubtext);
    } else {
      setupLiveCountdown(cfg.birthdayDate);
    }
  }

  // Final Scene
  if (cfg.scene8_final) {
    setElText('finalSectionBadge', cfg.scene8_final.sectionBadge);
    setElText('finalMessageText', cfg.scene8_final.message);
    setElText('btnReadLetterText', cfg.scene8_final.buttonLetter);
    setElText('btnRestartText', cfg.scene8_final.buttonRestart);
  }
}

/**
 * Renders reasons cards, scrapbook polaroids, and bookshelf
 */
function renderDynamicComponents() {
  renderBookshelf();
  renderReasonsGrid();
  renderScrapbookGrid();
}

// --- RENDER BOOKSHELF ---
function renderBookshelf() {
  const rack = document.getElementById('pastelBooksRack');
  if (!rack) return;
  const books = currentConfig.scene3_teddyCorner?.books || DEFAULT_CONFIG.scene3_teddyCorner.books;

  rack.innerHTML = books.map((book, idx) => `
    <div class="book-spine-item ${idx === 0 ? 'active' : ''}" data-book-index="${idx}" role="button" tabindex="0" aria-label="Book ${escapeHtml(book.title)}. Click to view chapter note">
      <div class="book-cover" style="--book-color: ${book.color}; --spine-color: ${book.spineColor || book.color};">
        <span class="book-tag">${escapeHtml(book.tag || `Vol. ${idx + 1}`)}</span>
        <span class="book-spine-title">${escapeHtml(book.title)}</span>
        <span class="book-ribbon">⭐</span>
      </div>
    </div>
  `).join('');

  // Set initial quote
  updateActiveBookQuote(0);

  // Attach click listeners
  rack.querySelectorAll('.book-spine-item').forEach(item => {
    item.addEventListener('click', () => {
      const idx = parseInt(item.getAttribute('data-book-index'), 10);
      selectBook(idx);
    });
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const idx = parseInt(item.getAttribute('data-book-index'), 10);
        selectBook(idx);
      }
    });
  });
}

function selectBook(idx) {
  const rack = document.getElementById('pastelBooksRack');
  rack.querySelectorAll('.book-spine-item').forEach((b, i) => {
    b.classList.toggle('active', i === idx);
  });
  updateActiveBookQuote(idx);
  audio.playPop();
}

function updateActiveBookQuote(idx) {
  const books = currentConfig.scene3_teddyCorner?.books || DEFAULT_CONFIG.scene3_teddyCorner.books;
  const book = books[idx] || books[0];
  const titleEl = document.getElementById('quoteBookTitle');
  const bodyEl = document.getElementById('quoteBookBody');
  if (titleEl) titleEl.textContent = `📖 ${book.title} (${book.tag || 'Chapter'})`;
  if (bodyEl) bodyEl.textContent = `“${book.quote}”`;
}

// --- RENDER REASONS GRID ---
function renderReasonsGrid() {
  const container = document.getElementById('reasonsGrid');
  if (!container) return;
  const cards = currentConfig.scene4_reasons?.cards || DEFAULT_CONFIG.scene4_reasons.cards;

  container.innerHTML = cards.map(c => `
    <article class="reason-card" tabindex="0" aria-label="Reason: ${escapeHtml(c.headline)}">
      <div class="reason-icon" aria-hidden="true">${c.icon}</div>
      <h3 class="reason-headline">${escapeHtml(c.headline)}</h3>
      <p class="reason-text">${escapeHtml(c.text)}</p>
      <div class="reason-footer">
        <span class="reason-tag">${escapeHtml(c.tag)}</span>
        <button class="reason-heart-btn" aria-label="Send love for this reason" title="Send a hug!">
          <span>💖 Hug</span>
        </button>
      </div>
    </article>
  `).join('');

  // Reasons interactive heart click
  container.querySelectorAll('.reason-heart-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      audio.playChime(783.99, 0.4, 0.15);
      btn.innerHTML = '<span>💖 Sent!</span>';
      const rect = btn.getBoundingClientRect();
      confetti.burst(15, rect.left + rect.width / 2, rect.top);
      setTimeout(() => {
        btn.innerHTML = '<span>💖 Hug</span>';
      }, 1500);
    });
  });
}

// --- RENDER SCRAPBOOK GRID ---
function renderScrapbookGrid() {
  const container = document.getElementById('polaroidGrid');
  if (!container) return;
  const polaroids = currentConfig.scene5_scrapbook?.polaroids || DEFAULT_CONFIG.scene5_scrapbook.polaroids;

  const rotations = [-2.5, 3.2, -1.8, 2.7];

  container.innerHTML = polaroids.map((p, idx) => `
    <div class="polaroid-card" style="--rot: ${rotations[idx % rotations.length]}deg" data-polaroid-index="${idx}" role="button" tabindex="0" aria-label="View photo memory: ${escapeHtml(p.title)}">
      <div class="washi-tape" aria-hidden="true"></div>
      <div class="polaroid-img-wrapper">
        <img 
          src="${p.image}" 
          alt="${escapeHtml(p.alt || p.title)}" 
          class="polaroid-img"
          loading="lazy"
          onerror="this.src='assets/images/hero_teddy_bear.jpg'"
        />
      </div>
      <div class="polaroid-caption-block">
        <span class="polaroid-sticker">${escapeHtml(p.sticker || '🌸 BESTIES')}</span>
        <h4 class="polaroid-title">${escapeHtml(p.title)}</h4>
        <p class="polaroid-caption">${escapeHtml(p.caption)}</p>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.polaroid-card').forEach(card => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.getAttribute('data-polaroid-index'), 10);
      openPhotoLightbox(idx);
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const idx = parseInt(card.getAttribute('data-polaroid-index'), 10);
        openPhotoLightbox(idx);
      }
    });
  });
}

// --- EVENT BINDINGS FOR ALL INTERACTIONS ---
function bindInteractiveEvents() {
  // 1. OPEN SURPRISE BUTTON (Hero Screen Transition)
  const openSurpriseBtn = document.getElementById('openSurpriseBtn');
  if (openSurpriseBtn) {
    openSurpriseBtn.addEventListener('click', handleOpenSurprise);
  }

  // 2. AUDIO & SFX CONTROLS
  const toggleMusicBtn = document.getElementById('toggleMusicBtn');
  const musicLabel = document.getElementById('musicLabel');
  const musicIcon = document.getElementById('musicIcon');
  if (toggleMusicBtn) {
    toggleMusicBtn.addEventListener('click', () => {
      const isPlaying = audio.toggleMusic();
      musicEnabled = isPlaying;
      if (musicLabel) musicLabel.textContent = isPlaying ? 'Music: Playing' : 'Music: Off';
      if (musicIcon) musicIcon.textContent = isPlaying ? '🎶' : '🎵';
      toggleMusicBtn.classList.toggle('active', isPlaying);
    });
  }

  const toggleSfxBtn = document.getElementById('toggleSfxBtn');
  const sfxLabel = document.getElementById('sfxLabel');
  const sfxIcon = document.getElementById('sfxIcon');
  if (toggleSfxBtn) {
    toggleSfxBtn.addEventListener('click', () => {
      sfxEnabled = !sfxEnabled;
      if (sfxLabel) sfxLabel.textContent = sfxEnabled ? 'SFX: On' : 'SFX: Off';
      if (sfxIcon) sfxIcon.textContent = sfxEnabled ? '🔔' : '🔕';
      toggleSfxBtn.classList.toggle('active', sfxEnabled);
      if (sfxEnabled) audio.playPop();
    });
  }

  // 3. INTERACTIVE BIRTHDAY CAKE
  const cakeContainer = document.getElementById('cakeContainer');
  if (cakeContainer) {
    cakeContainer.addEventListener('click', blowOutCandles);
    cakeContainer.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        blowOutCandles();
      }
    });
  }

  const relightCandlesBtn = document.getElementById('relightCandlesBtn');
  if (relightCandlesBtn) {
    relightCandlesBtn.addEventListener('click', relightCandles);
  }

  // 4. DIGITAL ENVELOPE & LETTER
  const envelopeElement = document.getElementById('envelopeElement');
  if (envelopeElement) {
    envelopeElement.addEventListener('click', openLetter);
    envelopeElement.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLetter();
      }
    });
  }

  const closeLetterBtn = document.getElementById('closeLetterBtn');
  if (closeLetterBtn) {
    closeLetterBtn.addEventListener('click', closeLetter);
  }

  // 5. TEDDY HUG INTERACTIONS
  const giveTeddyHugBtn = document.getElementById('giveTeddyHugBtn');
  const teddyInteractiveWrapper = document.getElementById('teddyInteractiveWrapper');
  if (giveTeddyHugBtn) {
    giveTeddyHugBtn.addEventListener('click', triggerTeddyHug);
  }
  if (teddyInteractiveWrapper) {
    teddyInteractiveWrapper.addEventListener('click', (e) => {
      if (e.target !== giveTeddyHugBtn && !giveTeddyHugBtn.contains(e.target)) {
        triggerTeddyHug();
      }
    });
  }

  // 6. 3D GIFT BOX
  const giftBoxContainer = document.getElementById('giftBoxContainer');
  if (giftBoxContainer) {
    giftBoxContainer.addEventListener('click', openGiftBox);
    giftBoxContainer.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openGiftBox();
      }
    });
  }

  const replayGiftBtn = document.getElementById('replayGiftBtn');
  if (replayGiftBtn) {
    replayGiftBtn.addEventListener('click', replayGiftBox);
  }

  // 7. EXTRA CONFETTI BUTTON IN TODAY BANNER
  const extraConfettiBtn = document.getElementById('extraConfettiBtn');
  if (extraConfettiBtn) {
    extraConfettiBtn.addEventListener('click', (e) => {
      const rect = extraConfettiBtn.getBoundingClientRect();
      confetti.burst(100, rect.left + rect.width / 2, rect.top);
      audio.playSparkle();
    });
  }

  // 8. FINAL SCREEN BUTTONS
  const finalReadLetterBtn = document.getElementById('finalReadLetterBtn');
  if (finalReadLetterBtn) {
    finalReadLetterBtn.addEventListener('click', () => {
      const letterSection = document.getElementById('letterScene');
      if (letterSection) {
        letterSection.scrollIntoView({ behavior: 'smooth' });
        setTimeout(openLetter, 500);
      }
    });
  }

  const finalRestartBtn = document.getElementById('finalRestartBtn');
  if (finalRestartBtn) {
    finalRestartBtn.addEventListener('click', restartExperience);
  }

  // 9. SECRET HEART MODAL
  const easterEggBtn = document.getElementById('easterEggBtn');
  const secretModal = document.getElementById('secretModal');
  const closeSecretBtn = document.getElementById('closeSecretBtn');
  if (easterEggBtn && secretModal) {
    easterEggBtn.addEventListener('click', () => {
      secretModal.showModal();
      audio.playSparkle();
      confetti.burst(50, window.innerWidth - 80, 50);
    });
  }
  if (closeSecretBtn && secretModal) {
    closeSecretBtn.addEventListener('click', () => {
      secretModal.close();
      audio.playPop();
    });
  }

  // 10. LIGHTBOX CONTROLS
  const photoLightboxModal = document.getElementById('photoLightboxModal');
  const closeLightboxBtn = document.getElementById('closeLightboxBtn');
  const prevLightboxBtn = document.getElementById('prevLightboxBtn');
  const nextLightboxBtn = document.getElementById('nextLightboxBtn');

  if (closeLightboxBtn && photoLightboxModal) {
    closeLightboxBtn.addEventListener('click', () => photoLightboxModal.close());
  }
  if (prevLightboxBtn) {
    prevLightboxBtn.addEventListener('click', () => navigateLightbox(-1));
  }
  if (nextLightboxBtn) {
    nextLightboxBtn.addEventListener('click', () => navigateLightbox(1));
  }

  // Keyboard navigation for Lightbox
  window.addEventListener('keydown', (e) => {
    if (!photoLightboxModal || !photoLightboxModal.open) return;
    if (e.key === 'ArrowLeft') {
      navigateLightbox(-1);
    } else if (e.key === 'ArrowRight') {
      navigateLightbox(1);
    } else if (e.key === 'Escape') {
      photoLightboxModal.close();
    }
  });
}

// --- TRANSITION: FIRST SCREEN TO SURPRISE EXPERIENCE ---
function handleOpenSurprise() {
  const firstScreen = document.getElementById('firstScreen');
  const mainExperience = document.getElementById('mainExperience');
  const openSurpriseBtn = document.getElementById('openSurpriseBtn');

  audio.playSparkle();

  const rect = openSurpriseBtn.getBoundingClientRect();
  confetti.burst(120, rect.left + rect.width / 2, rect.top + rect.height / 2);

  firstScreen.classList.add('fade-out');

  setTimeout(() => {
    firstScreen.classList.add('hidden');
    mainExperience.classList.remove('hidden');

    const welcomeScene = document.getElementById('welcomeScene');
    if (welcomeScene) {
      welcomeScene.scrollIntoView({ behavior: 'smooth' });
    }

    // Secondary celebratory confetti shower
    setTimeout(() => {
      confetti.burst(90, window.innerWidth / 2, 180);
    }, 600);
  }, 700);
}

// --- INTERACTIVE CAKE ACTIONS ---
function blowOutCandles() {
  if (!isCandleLit) return;
  isCandleLit = false;

  const flameGroup = document.getElementById('flameGroup');
  const smokeGroup = document.getElementById('smokeGroup');
  const wishRevealBox = document.getElementById('wishRevealBox');
  const cakeStatusBadge = document.getElementById('cakeStatusBadge');

  if (flameGroup) flameGroup.classList.add('hidden');
  if (smokeGroup) smokeGroup.classList.remove('hidden');
  if (wishRevealBox) wishRevealBox.classList.remove('hidden');
  if (cakeStatusBadge) cakeStatusBadge.classList.add('hidden');

  audio.playPuff();
  audio.playSparkle();

  // Burst stars and sparkles from cake
  const cake = document.getElementById('cakeContainer');
  if (cake) {
    const rect = cake.getBoundingClientRect();
    confetti.burst(70, rect.left + rect.width / 2, rect.top + 80);
  }
}

function relightCandles() {
  isCandleLit = true;
  const flameGroup = document.getElementById('flameGroup');
  const smokeGroup = document.getElementById('smokeGroup');
  const wishRevealBox = document.getElementById('wishRevealBox');
  const cakeStatusBadge = document.getElementById('cakeStatusBadge');

  if (flameGroup) flameGroup.classList.remove('hidden');
  if (smokeGroup) smokeGroup.classList.add('hidden');
  if (wishRevealBox) wishRevealBox.classList.add('hidden');
  if (cakeStatusBadge) cakeStatusBadge.classList.remove('hidden');

  audio.playPop();
}

// --- ENVELOPE & LETTER ACTIONS ---
function openLetter() {
  if (isLetterOpen) return;
  isLetterOpen = true;

  const envelope = document.getElementById('envelopeElement');
  const letter = document.getElementById('letterPaper');

  envelope.classList.add('open');
  audio.playSparkle();

  setTimeout(() => {
    envelope.classList.add('open-state');
    letter.classList.add('open');
    letter.setAttribute('aria-hidden', 'false');

    const rect = letter.getBoundingClientRect();
    confetti.burst(50, rect.left + rect.width / 2, rect.top + 40);
  }, 400);
}

function closeLetter() {
  if (!isLetterOpen) return;
  isLetterOpen = false;

  const envelope = document.getElementById('envelopeElement');
  const letter = document.getElementById('letterPaper');

  letter.classList.remove('open');
  letter.setAttribute('aria-hidden', 'true');

  setTimeout(() => {
    envelope.classList.remove('open-state');
    envelope.classList.remove('open');
    audio.playPop();
  }, 400);
}

// --- TEDDY CORNER ACTIONS ---
const teddyPhrases = [
  "Sending you the biggest birthday hugs! 🧸💗",
  "You're the sweetest bestie in the entire universe! 🌸",
  "Wishing you endless laughs, love & tasty treats! 🧁",
  "A bear-y special birthday to a bear-y special girl! ✨",
  "Best friends forever and ever! 💖"
];

function triggerTeddyHug() {
  hugCount++;
  audio.playSparkle();

  const speechEl = document.getElementById('teddySpeechBubble');
  if (speechEl) {
    const phrase = teddyPhrases[hugCount % teddyPhrases.length];
    speechEl.querySelector('span').textContent = phrase;
  }

  const avatar = document.querySelector('.teddy-avatar-frame');
  if (avatar) {
    avatar.style.transform = 'scale(1.15) rotate(-6deg)';
    setTimeout(() => {
      avatar.style.transform = '';
    }, 400);
  }

  const btn = document.getElementById('giveTeddyHugBtn');
  if (btn) {
    const rect = btn.getBoundingClientRect();
    confetti.burst(30, rect.left + rect.width / 2, rect.top);
  }
}

// --- 3D GIFT BOX ACTIONS ---
function openGiftBox() {
  if (isGiftOpen) return;
  isGiftOpen = true;

  const giftBox = document.getElementById('giftBoxContainer');
  const wishCard = document.getElementById('revealedWishCard');
  const promptText = document.getElementById('giftPromptText');

  giftBox.classList.add('opened');
  audio.playSparkle();

  const rect = giftBox.getBoundingClientRect();
  confetti.burst(100, rect.left + rect.width / 2, rect.top + rect.height / 2);

  setTimeout(() => {
    wishCard.classList.remove('hidden');
    if (promptText) promptText.classList.add('hidden');
  }, 500);
}

function replayGiftBox() {
  isGiftOpen = false;
  const giftBox = document.getElementById('giftBoxContainer');
  const wishCard = document.getElementById('revealedWishCard');
  const promptText = document.getElementById('giftPromptText');

  wishCard.classList.add('hidden');
  giftBox.classList.remove('opened');
  if (promptText) promptText.classList.remove('hidden');

  audio.playPop();
}

// --- SCRAPBOOK LIGHTBOX ACTIONS ---
function openPhotoLightbox(index) {
  const polaroids = currentConfig.scene5_scrapbook?.polaroids || DEFAULT_CONFIG.scene5_scrapbook.polaroids;
  if (!polaroids || polaroids.length === 0) return;

  currentPolaroidIndex = (index + polaroids.length) % polaroids.length;
  const p = polaroids[currentPolaroidIndex];

  const modal = document.getElementById('photoLightboxModal');
  const img = document.getElementById('lightboxImg');
  const sticker = document.getElementById('lightboxSticker');
  const date = document.getElementById('lightboxDate');
  const title = document.getElementById('lightboxTitle');
  const caption = document.getElementById('lightboxCaption');

  if (img) {
    img.src = p.image;
    img.alt = p.alt || p.title;
  }
  if (sticker) sticker.textContent = p.sticker || '🌸 BESTIES';
  if (date) date.textContent = p.date || '';
  if (title) title.textContent = p.title || '';
  if (caption) caption.textContent = p.caption || '';

  modal.showModal();
  audio.playPop();
}

function navigateLightbox(dir) {
  openPhotoLightbox(currentPolaroidIndex + dir);
}

// --- LIVE COUNTDOWN TIMER (FOR FUTURE BIRTHDAY DATES) ---
function setupLiveCountdown(dateString) {
  const countdownWidget = document.getElementById('countdownWidget');
  const todayBanner = document.getElementById('todayCelebrationBanner');
  if (!countdownWidget || !dateString) return;

  const target = new Date(dateString).getTime();
  if (isNaN(target)) return;

  if (todayBanner) todayBanner.classList.add('hidden');
  countdownWidget.classList.remove('hidden');

  const updateClock = () => {
    const now = new Date().getTime();
    const diff = target - now;

    if (diff <= 0) {
      // It's today!
      countdownWidget.classList.add('hidden');
      if (todayBanner) todayBanner.classList.remove('hidden');
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    setElText('countdownDays', String(days).padStart(2, '0'));
    setElText('countdownHours', String(hours).padStart(2, '0'));
    setElText('countdownMins', String(mins).padStart(2, '0'));
    setElText('countdownSecs', String(secs).padStart(2, '0'));
  };

  updateClock();
  setInterval(updateClock, 1000);
}

// --- RESTART EXPERIENCE ---
function restartExperience() {
  const firstScreen = document.getElementById('firstScreen');
  const mainExperience = document.getElementById('mainExperience');

  window.scrollTo({ top: 0, behavior: 'smooth' });

  setTimeout(() => {
    mainExperience.classList.add('hidden');
    firstScreen.classList.remove('hidden');
    firstScreen.classList.remove('fade-out');

    // Reset components to initial states
    relightCandles();
    closeLetter();
    replayGiftBox();

    audio.playSparkle();
    confetti.burst(80, window.innerWidth / 2, window.innerHeight / 2);
  }, 400);
}

// --- CHAPTER NAV SCROLL SPY ---
function setupNavScrollSpy() {
  const sections = document.querySelectorAll('.experience-section');
  const navLinks = document.querySelectorAll('.scene-nav-link');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 140;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.id;
      }
    });

    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('data-target') === currentId);
    });
  }, { passive: true });
}

// --- HELPER UTILITIES ---
function setElText(id, text) {
  const el = document.getElementById(id);
  if (el && text !== undefined) {
    el.textContent = text;
  }
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// --- MAGICAL SPARKLE CURSOR TRAIL ---
function setupSparkleCursorTrail() {
  // Only activate on devices with a pointer / mouse
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const container = document.getElementById('sparkleTrailContainer');
  if (!container) return;

  const sparkleSymbols = ['✨', '💖', '⭐', '🌸', '🎀', '💫'];
  let lastX = 0;
  let lastY = 0;
  let lastTime = 0;

  window.addEventListener('mousemove', (e) => {
    const now = Date.now();
    const dist = Math.hypot(e.clientX - lastX, e.clientY - lastY);

    // Throttle spawn rate based on movement distance and time
    if (dist < 18 || now - lastTime < 45) return;
    lastX = e.clientX;
    lastY = e.clientY;
    lastTime = now;

    const sparkle = document.createElement('span');
    sparkle.className = 'cursor-sparkle';
    sparkle.textContent = sparkleSymbols[Math.floor(Math.random() * sparkleSymbols.length)];
    sparkle.style.left = `${e.clientX}px`;
    sparkle.style.top = `${e.clientY}px`;
    sparkle.style.fontSize = `${Math.random() * 10 + 12}px`;

    const deltaX = (Math.random() - 0.5) * 35;
    sparkle.style.setProperty('--dx', `${deltaX}px`);

    container.appendChild(sparkle);

    setTimeout(() => {
      sparkle.remove();
    }, 900);
  }, { passive: true });
}
