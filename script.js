/* =========================================================
   ✎ EDIT HERE — everything personal lives in this block
   ========================================================= */

// 🔑 Password that unlocks the envelope (an experience-level password, not real security)
const PASSWORD = "041323";

// 🎵 Music file (put your mp3 at assets/music.mp3, or change the path here)
const MUSIC_SRC   = "assets/music.mp3";
const SONG_TITLE  = "You Were Once My Home";
const SONG_ARTIST = "Ace";

// ✉️ The letter. One string = one paragraph.
const MESSAGE = [
  "I don't really know how to say all of this, but I wanted to leave you with one last message. This song holds a lot of the things I never got to say, the memories, the regrets, and the things I still feel.",
  "Thank you for being a part of my life and for all the memories we shared. I hope life treats you well, and I hope you find the happiness and peace you deserve.",
  "Goodbye, and take care of yourself. I'll always be rooting for you from afar."
];

// 🎤 Lyrics + timestamps (seconds from the start of the song).
//    The times below are ESTIMATES. To set them exactly, open the site with  index.html#sync
//    (play the song and press Space when each line begins), then paste the result here.
const LYRICS = [
  { time: 0.0, text: "♪" },
  { time: 26.5, text: "From strangers to lovers, eighteen months went by" },
  { time: 29.0, text: "You became the person I could talk to when I cried" },
  { time: 32.7, text: "Christmas with your family, you made me feel at home" },
  { time: 36.6, text: "For a while, I never felt like I was alone" },
  { time: 40.0, text: "You'd run your fingers softly through my hair" },
  { time: 43.6, text: "And somehow I'd fall asleep right there" },
  { time: 46.8, text: "You'd buy me little things I never asked for" },
  { time: 50.3, text: "Those little things made me love you more" },
  { time: 53.6, text: "Milk tea, pizza, all the food we'd share" },
  { time: 55.9, text: "Spaghetti with no cheese, just the way you liked it there" },
  { time: 60.1, text: "Looking back, it's crazy how I see" },
  { time: 63.0, text: "The little things became my memories" },
  { time: 66.1, text: "But somewhere along the way, something changed" },
  { time: 68.7, text: "Same problems came back, even after we'd talked them through" },
  { time: 73.1, text: "I kept my feelings somewhere deep inside" },
  { time: 76.4, text: "Not because I stopped loving you" },
  { time: 79.5, text: "So I walked away, thought I needed peace" },
  { time: 82.5, text: "Thought letting go would finally set me free" },
  { time: 85.5, text: "But now I miss having you by my side" },
  { time: 89.5, text: "Someone to hold me when I'm not alright" },
  { time: 92.5, text: "Maybe I was selfish, maybe I was wrong" },
  { time: 95.5, text: "Maybe I should've stayed and tried a little longer" },
  { time: 98.5, text: "I wanted you to hear what I couldn't say" },
  { time: 102.5, text: "But I chose goodbye instead of finding another way" },
  { time: 106.5, text: "Yeah, you thought I didn't care, but that wasn't true" },
  { time: 109.5, text: "I was fighting with myself while I was fighting with you" },
  { time: 112.4, text: "Every time I had a problem, I was scared to bring it up" },
  { time: 116.6, text: "'Cause somehow every little thing would turn into too much" },
  { time: 119.5, text: "So I stayed quiet, kept the pain inside" },
  { time: 123.1, text: "You thought I didn't care, I was just trying to survive" },
  { time: 125.3, text: "I wanted you to understand what was hurting me" },
  { time: 129.5, text: "But I thought walking away was the only way to breathe" },
  { time: 133.0, text: "And I'm sorry for the things I did on my side" },
  { time: 135.5, text: "For being selfish, for the tears, for the times I made you cry" },
  { time: 139.2, text: "I don't regret the love, I don't regret our time" },
  { time: 142.5, text: "Even the painful memories still mean something to mine" },
  { time: 145.0, text: "Now you've got somebody, and yeah, it hurts" },
  { time: 149.5, text: "I won't lie and say that it doesn't" },
  { time: 152.5, text: "But if he makes you happy, I'll let you be" },
  { time: 156.5, text: "Even if a part of me still wishes it was me" },
  { time: 160.2, text: "You were my last girl, that's a promise I still keep" },
  { time: 166.5, text: "Even if you're far away, you're still somewhere in me" },
  { time: 172.0, text: "So I walked away, but I still look back" },
  { time: 175.8, text: "Wondering sometimes if I chose the right path" },
  { time: 179.0, text: "Maybe we were broken, maybe love wasn't enough" },
  { time: 182.3, text: "But I'll never say that what we had wasn't love" },
  { time: 185.7, text: "And even if you're not coming back to me" },
  { time: 189.5, text: "I'll still wish you everything you want to be" },
  { time: 192.8, text: "I hope you find your peace, I hope you chase your dreams" },
  { time: 196.5, text: "And become everything you always wanted to be" },
  { time: 200.0, text: "So good luck with everything, wherever you go" },
  { time: 206.3, text: "I'll be rooting for you, even from far away" },
  { time: 210.5, text: "I still love you, but I'll let you be" },
  { time: 219.2, text: "You were once my home" },
  { time: 223.5, text: "And you'll always mean something to me" },
  { time: 227.5, text: "Sorry for everthing babi :>" },
];

/* =========================================================
   Everything below is the machinery. You shouldn't need to edit it.
   ========================================================= */
(() => {
  'use strict';

  const $ = (sel) => document.querySelector(sel);
  const rand = (a, b) => a + Math.random() * (b - a);
  const randInt = (a, b) => Math.floor(rand(a, b + 1));
  const reducedMQ = window.matchMedia('(prefers-reduced-motion: reduce)');
  const K = () => (reducedMQ.matches ? 0.35 : 1);   // time multiplier for scripted sequences
  const wait = (ms, fn) => setTimeout(fn, ms * K());
  const isNarrow = () => window.innerWidth < 640;

  /* ---------------------------------------------------------
     SKY: stars, shooting stars, particles
     --------------------------------------------------------- */
  function buildStars() {
    const box = $('#stars');
    box.textContent = '';
    const count = Math.round(Math.min(150, (window.innerWidth * window.innerHeight) / 8500));
    const tints = ['#ffffff', '#ffffff', '#dfe9ff', '#c9dbff', '#fff4dc'];
    const frag = document.createDocumentFragment();
    for (let i = 0; i < count; i++) {
      const s = document.createElement('i');
      const big = Math.random() < 0.07;
      const size = big ? rand(2.4, 3.4) : rand(0.8, 2.1);
      s.style.left = rand(0, 100) + '%';
      s.style.top = rand(0, 84) + '%';
      s.style.width = s.style.height = size + 'px';
      s.style.background = tints[randInt(0, tints.length - 1)];
      s.style.setProperty('--o', rand(0.3, 1).toFixed(2));
      if (big) s.classList.add('big');
      if (Math.random() < 0.3) {
        s.classList.add('tw');
        s.style.setProperty('--td', rand(2.6, 7.5).toFixed(2) + 's');
        s.style.setProperty('--tl', (-rand(0, 9)).toFixed(2) + 's');
      }
      frag.appendChild(s);
    }
    box.appendChild(frag);
  }

  function buildParticles() {
    const box = $('#particles');
    box.textContent = '';
    const n = isNarrow() ? 8 : 14;
    for (let i = 0; i < n; i++) {
      const p = document.createElement('i');
      p.className = 'pt';
      p.style.left = rand(2, 98) + '%';
      p.style.top = rand(48, 92) + '%';
      p.style.setProperty('--ps', rand(2, 4.5).toFixed(1) + 'px');
      p.style.setProperty('--pd', rand(16, 32).toFixed(1) + 's');
      p.style.setProperty('--pl', (-rand(0, 30)).toFixed(1) + 's');
      p.style.setProperty('--dx', rand(-60, 60).toFixed(0) + 'px');
      box.appendChild(p);
    }
  }

  function shootingStar() {
    const box = $('#shooting');
    const el = document.createElement('div');
    el.className = 'shoot';
    const fromRight = Math.random() < 0.5;
    const ang = fromRight ? rand(148, 162) : rand(18, 32);          // degrees (heading)
    const dist = rand(260, 520) * (isNarrow() ? 0.7 : 1);
    el.style.left = (fromRight ? rand(52, 96) : rand(4, 48)) + '%';
    el.style.top = rand(3, 38) + '%';
    el.style.setProperty('--ang', ang.toFixed(1) + 'deg');
    el.style.setProperty('--dist', dist.toFixed(0) + 'px');
    el.style.setProperty('--len', rand(110, 190).toFixed(0) + 'px');
    el.style.setProperty('--dur', rand(1.1, 1.7).toFixed(2) + 's');
    el.addEventListener('animationend', () => el.remove());
    box.appendChild(el);
  }
  function scheduleShootingStar(first) {
    const slow = reducedMQ.matches;
    const delay = first ? rand(3500, 6500) : slow ? rand(26000, 42000) : rand(8000, 17000);
    setTimeout(() => {
      if (!document.hidden) shootingStar();
      scheduleShootingStar(false);
    }, delay);
  }

  /* ---------------------------------------------------------
     GRASS: generated blades, each swaying with its own phase
     --------------------------------------------------------- */
  const GRASS_LAYERS = [
    // gap = spacing between tufts (px); h = height as fraction of the grass area
    { id: '#gBackL',  gap: 34, h: [0.42, 0.74], w: [5, 9],   hue: [150, 168], l: [15, 21], a: [2.5, 5], t: [7.5, 10] },
    { id: '#gMidL',   gap: 28, h: [0.40, 0.88], w: [6, 11],  hue: [145, 165], l: [9, 13],  a: [3, 7],   t: [5.5, 8.5] },
    { id: '#gFrontL', gap: 26, h: [0.26, 0.66], w: [8, 15],  hue: [140, 160], l: [4, 6],   a: [4, 9],   t: [5, 8] }
  ];
  let grassBuiltFor = 0;

  // Performance note: the field is cut into ~64px-wide SECTIONS. Only the sections animate (they lean
  // from the roots with a different phase each, so a wave rolls through), while the blades inside stay
  // static. That is ~60 moving elements instead of hundreds of individual blades.
  function buildGrass() {
    const grass = $('#grass');
    const W = window.innerWidth;
    const H = grass.clientHeight || 160;
    grassBuiltFor = W;
    const SW = 64, PAD = 10;

    GRASS_LAYERS.forEach((L) => {
      const layer = $(L.id);
      layer.textContent = '';
      const frag = document.createDocumentFragment();
      const baseT = rand(L.t[0], L.t[1]);            // shared period → the wave travels coherently
      const wavesAcross = rand(1.1, 1.7);
      const dens = L === GRASS_LAYERS[0] ? 0.11 : 0.15;
      for (let x = -SW; x < W + SW; x += SW) {
        const sec = document.createElement('div');
        sec.className = 'tuft';
        const secW = SW + PAD * 2;
        sec.style.left = (x - PAD).toFixed(0) + 'px';
        sec.style.width = secW + 'px';
        sec.style.height = Math.round(H * L.h[1]) + 'px';
        sec.style.setProperty('--r0', rand(-1, 1).toFixed(1) + 'deg');
        sec.style.setProperty('--a', rand(L.a[0], L.a[1]).toFixed(1) + 'deg');
        sec.style.setProperty('--t', (baseT * rand(0.97, 1.04)).toFixed(2) + 's');
        sec.style.setProperty('--d', (-((x / W) * wavesAcross * baseT * 2) + rand(-0.3, 0.3)).toFixed(2) + 's');
        const n = Math.round(secW * dens);
        for (let k = 0; k < n; k++) {
          const b = document.createElement('i');
          b.className = 'blade';
          b.style.left = rand(0, secW - 8).toFixed(1) + 'px';
          b.style.width = rand(L.w[0], L.w[1]).toFixed(1) + 'px';
          b.style.height = Math.round(H * rand(L.h[0], L.h[1])) + 'px';
          b.style.setProperty('--h', randInt(L.hue[0], L.hue[1]));
          b.style.setProperty('--l', rand(L.l[0], L.l[1]).toFixed(1));
          b.style.setProperty('--br', rand(-9, 9).toFixed(1) + 'deg');
          sec.appendChild(b);
        }
        frag.appendChild(sec);
      }
      layer.appendChild(frag);
    });
  }

  /* ---------------------------------------------------------
     MUSIC PLAYER
     --------------------------------------------------------- */
  const audio = $('#audio');
  const playBtn = $('#playBtn');
  const seek = $('#seek');
  const tCur = $('#tCur');
  const tDur = $('#tDur');
  const audioHint = $('#audioHint');
  const player = $('#player');

  $('#songTitle').textContent = SONG_TITLE;
  $('#songArtist').textContent = SONG_ARTIST;
  document.title = SONG_TITLE;
  audio.src = MUSIC_SRC;

  const fmt = (s) => {
    if (!isFinite(s) || s < 0) s = 0;
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return m + ':' + String(sec).padStart(2, '0');
  };

  let dragging = false;
  let lastGestureStart = 0;
  let rafId = 0;

  function setPlayingUI(p) {
    playBtn.classList.toggle('is-playing', p);
    playBtn.setAttribute('aria-label', p ? 'Pause' : 'Play');
  }

  function updateUI() {
    const t = audio.currentTime || 0;
    const d = audio.duration;
    const hasDur = isFinite(d) && d > 0;
    if (!dragging) {
      const frac = hasDur ? Math.min(1, t / d) : 0;
      seek.value = String(Math.round(frac * 1000));
      seek.style.setProperty('--p', (frac * 100).toFixed(2) + '%');
    }
    tCur.textContent = fmt(t);
    tDur.textContent = hasDur ? fmt(d) : '0:00';
    seek.setAttribute('aria-valuetext', fmt(t) + (hasDur ? ' of ' + fmt(d) : ''));
    updateLyricsActive(t);
  }

  let lastTick = 0;
  function tick(now) {
    if (now - lastTick > 90) { lastTick = now; updateUI(); }   // ~11 updates/sec is plenty
    if (!audio.paused) rafId = requestAnimationFrame(tick);
  }

  audio.addEventListener('play', () => { setPlayingUI(true); hideHint(); cancelAnimationFrame(rafId); rafId = requestAnimationFrame(tick); });
  audio.addEventListener('pause', () => { setPlayingUI(false); updateUI(); });
  audio.addEventListener('playing', () => setPlayingUI(true));
  ['seeked', 'timeupdate', 'loadedmetadata', 'durationchange'].forEach((e) => audio.addEventListener(e, updateUI));
  audio.addEventListener('ended', () => {         // reset normally at the end
    audio.currentTime = 0;
    setPlayingUI(false);
    updateUI();
    forceLyricsTop();
  });
  audio.addEventListener('error', () => {
    showHint('Music file not found — place it at ' + MUSIC_SRC);
  });

  function togglePlay() {
    if (audio.paused) {
      const p = audio.play();
      if (p && p.catch) p.catch(() => showHint('Tap play to begin the music'));
    } else {
      audio.pause();
    }
  }
  playBtn.addEventListener('click', () => {
    // if this same tap/keypress just started the music via the autoplay fallback, don't toggle it straight back off
    if (performance.now() - lastGestureStart < 700) return;
    togglePlay();
  });

  // seeking
  seek.addEventListener('pointerdown', () => { dragging = true; });
  ['pointerup', 'pointercancel', 'change', 'blur'].forEach((e) => seek.addEventListener(e, () => { dragging = false; }));
  seek.addEventListener('input', () => {
    const d = audio.duration;
    if (!isFinite(d) || d <= 0) return;
    const frac = Number(seek.value) / 1000;
    seek.style.setProperty('--p', (frac * 100).toFixed(2) + '%');
    audio.currentTime = frac * d;
    tCur.textContent = fmt(audio.currentTime);
    updateLyricsActive(audio.currentTime);
  });

  // hints (autoplay blocked, missing file, etc.)
  function showHint(msg) { audioHint.textContent = msg; audioHint.hidden = false; }
  function hideHint() { audioHint.hidden = true; }

  // Autoplay: try on load; if the browser blocks it, start on the first interaction instead.
  const GESTURE_EVENTS = ['pointerup', 'touchend', 'click', 'keydown'];
  function armGestureStart() {
    const handler = (e) => {
      if (e.type === 'keydown' && ['Tab', 'Shift', 'Control', 'Alt', 'Meta', 'Escape', 'CapsLock'].includes(e.key)) return;
      if (!audio.paused) { disarm(); return; }
      if (audio.error) { disarm(); return; }
      lastGestureStart = performance.now();
      const p = audio.play();
      if (p && p.then) p.then(disarm).catch(() => {});
    };
    const disarm = () => GESTURE_EVENTS.forEach((ev) => document.removeEventListener(ev, handler, true));
    GESTURE_EVENTS.forEach((ev) => document.addEventListener(ev, handler, true));
  }
  function tryAutoplay() {
    const p = audio.play();
    if (p && p.catch) {
      p.catch(() => {
        // Blocked by the browser — completely normal. Wait for the first interaction.
        if (!audio.error) showHint('Tap anywhere to let the music begin');
        armGestureStart();
      });
    }
  }

  /* ---------------------------------------------------------
     LYRICS
     --------------------------------------------------------- */
  const lyricsBtn = $('#lyricsBtn');
  const lyricsPanel = $('#lyricsPanel');
  const lyricsScroll = $('#lyricsScroll');
  const lyricsList = $('#lyricsList');
  const lyricsClose = $('#lyricsClose');

  let lyricsData = LYRICS.slice().sort((a, b) => a.time - b.time);
  let lyricEls = [];
  let activeIdx = -2;
  let lyricsOpen = false;
  let lastUserScroll = 0;

  function renderLyrics() {
    lyricsList.textContent = '';
    lyricEls = lyricsData.map((l, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'ly';
      b.tabIndex = -1;
      b.textContent = l.text;
      b.dataset.i = String(i);
      b.title = 'Jump to ' + fmt(l.time);
      lyricsList.appendChild(b);
      return b;
    });
    activeIdx = -2;
    updateLyricsActive(audio.currentTime || 0, true);
  }

  lyricsList.addEventListener('click', (e) => {
    const b = e.target.closest('.ly');
    if (!b) return;
    const l = lyricsData[Number(b.dataset.i)];
    if (!l) return;
    audio.currentTime = l.time;
    updateUI();
  });

  function findActive(t) {
    let lo = 0, hi = lyricsData.length - 1, ans = -1;
    while (lo <= hi) {
      const mid = (lo + hi) >> 1;
      if (lyricsData[mid].time <= t) { ans = mid; lo = mid + 1; } else hi = mid - 1;
    }
    return ans;
  }

  function updateLyricsActive(t, force) {
    if (!lyricEls.length) return;
    const idx = findActive(t + 0.12);
    if (idx === activeIdx && !force) return;
    activeIdx = idx;
    for (let i = 0; i < lyricEls.length; i++) {
      const el = lyricEls[i];
      el.classList.toggle('active', i === idx);
      el.style.setProperty('--d', idx < 0 ? Math.min(i + 1, 4) : Math.abs(i - idx));
      if (i === idx) el.setAttribute('aria-current', 'true'); else el.removeAttribute('aria-current');
    }
    if (lyricsOpen) scrollToActive(false);
  }

  function scrollToActive(instant) {
    if (!instant && performance.now() - lastUserScroll < 2500) return;   // let the reader browse
    const idx = Math.max(activeIdx, 0);
    const el = lyricEls[idx];
    if (!el) return;
    const top = el.offsetTop - lyricsScroll.clientHeight * 0.42 + el.offsetHeight / 2;
    lyricsScroll.scrollTo({ top: Math.max(0, top), behavior: instant || reducedMQ.matches ? 'auto' : 'smooth' });
  }
  function forceLyricsTop() { activeIdx = -2; updateLyricsActive(0, true); if (lyricsOpen) scrollToActive(true); }

  ['wheel', 'touchmove', 'pointerdown'].forEach((ev) =>
    lyricsScroll.addEventListener(ev, () => { lastUserScroll = performance.now(); }, { passive: true }));

  let lyricsCloseTimer = 0;
  function openLyrics() {
    clearTimeout(lyricsCloseTimer);
    lyricsOpen = true;
    lyricsPanel.hidden = false;
    lyricsBtn.setAttribute('aria-expanded', 'true');
    lastUserScroll = 0;
    scrollToActive(true);
    requestAnimationFrame(() => { lyricsPanel.classList.add('open'); scrollToActive(true); });
    lyricsClose.focus({ preventScroll: true });
  }
  function closeLyrics() {
    lyricsOpen = false;
    lyricsPanel.classList.remove('open');
    lyricsBtn.setAttribute('aria-expanded', 'false');
    lyricsCloseTimer = setTimeout(() => { lyricsPanel.hidden = true; }, 560);
    lyricsBtn.focus({ preventScroll: true });
  }
  lyricsBtn.addEventListener('click', () => (lyricsOpen ? closeLyrics() : openLyrics()));
  lyricsClose.addEventListener('click', closeLyrics);
  lyricsPanel.addEventListener('click', (e) => { if (e.target === lyricsPanel || e.target === lyricsList || e.target === lyricsScroll) closeLyrics(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && lyricsOpen) closeLyrics(); });

  /* ---------------------------------------------------------
     PASSWORD → ENVELOPE
     --------------------------------------------------------- */
  const lock = $('#lock');
  const lockForm = $('#lockForm');
  const pwInput = $('#pw');
  const pwError = $('#pwError');
  const envWrap = $('#envWrap');
  const envFloat = $('#envFloat');
  const envHover = $('#envHover');
  const envelope = $('#envelope');
  const flap = $('#flap');
  const letter = $('#letter');
  const letterScroll = $('#letterScroll');
  const letterInner = $('#letterInner');
  const envHint = $('#envHint');
  const burst = $('#burst');

  let unlocked = false;
  let opened = false;
  let errTimer = 0;

  MESSAGE.forEach((para) => {
    const p = document.createElement('p');
    p.textContent = para;
    letterInner.appendChild(p);
  });

  lockForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (unlocked) return;
    if (pwInput.value.trim() === PASSWORD) {
      unlock();
    } else {
      pwError.textContent = 'Incorrect password.';
      pwError.classList.add('on');
      pwInput.value = '';
      pwInput.setAttribute('aria-invalid', 'true');
      lockForm.classList.remove('shake');
      void lockForm.offsetWidth;
      lockForm.classList.add('shake');
      clearTimeout(errTimer);
      errTimer = setTimeout(() => { pwError.classList.remove('on'); pwInput.removeAttribute('aria-invalid'); }, 3200);
      pwInput.focus();
    }
  });
  pwInput.addEventListener('input', () => { pwError.classList.remove('on'); });

  function sparkBurst() {
    const r = lockForm.getBoundingClientRect();
    const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    const n = reducedMQ.matches ? 10 : 36;
    const frag = document.createDocumentFragment();
    for (let i = 0; i < n; i++) {
      const s = document.createElement('i');
      s.className = 'spark';
      const ang = rand(0, Math.PI * 2), dist = rand(60, 220);
      s.style.setProperty('--x', cx + rand(-r.width / 3, r.width / 3) + 'px');
      s.style.setProperty('--y', cy + rand(-10, 10) + 'px');
      s.style.setProperty('--s', rand(3, 9).toFixed(1) + 'px');
      s.style.setProperty('--dx', (Math.cos(ang) * dist).toFixed(0) + 'px');
      s.style.setProperty('--dy', (Math.sin(ang) * dist * 0.8 - 40).toFixed(0) + 'px');
      s.style.setProperty('--dur', rand(1.5, 2.8).toFixed(2) + 's');
      s.addEventListener('animationend', () => s.remove());
      frag.appendChild(s);
    }
    burst.appendChild(frag);
  }

  function unlock() {
    unlocked = true;
    pwInput.blur();
    pwInput.disabled = true;
    pwError.classList.remove('on');
    sparkBurst();
    lock.classList.add('leaving');
    wait(900, () => {
      envWrap.hidden = false;
      layoutEnvelope();
      void envWrap.offsetWidth;
      envWrap.classList.add('show');
    });
    wait(1500, () => { lock.hidden = true; });
    wait(3300, () => { if (!opened) { envelope.focus({ preventScroll: true }); envHint.classList.add('on'); } });
  }

  /* ---- envelope geometry ---- */
  const geo = { W: 0, H: 0, pw: 0, s0: 1, hs: 0, h0: 0, ty0: 0 };

  function setLetterVars({ ty, ls, lh, rot, dur }) {
    if (ty !== undefined)  envelope.style.setProperty('--ty', ty.toFixed(1) + 'px');
    if (ls !== undefined)  envelope.style.setProperty('--ls', ls.toFixed(4));
    if (lh !== undefined)  envelope.style.setProperty('--lh', lh.toFixed(1) + 'px');
    if (rot !== undefined) envelope.style.setProperty('--rot', rot + 'deg');
    if (dur !== undefined) envelope.style.setProperty('--dur', dur + 's');
  }

  function layoutEnvelope() {
    const W = envelope.offsetWidth, H = envelope.offsetHeight;
    if (!W) return;
    const pw = Math.min(540, window.innerWidth - 28);
    envelope.style.setProperty('--pw', pw + 'px');
    geo.W = W; geo.H = H; geo.pw = pw;
    geo.s0 = (W * 0.9) / pw;
    geo.hs = H * 0.78;                       // visible height of the folded letter inside the envelope
    geo.h0 = geo.hs / geo.s0;                // same, in the letter's own (unscaled) units
    geo.ty0 = H * 0.12;
    if (!opened) setLetterVars({ ty: geo.ty0, ls: geo.s0, lh: geo.h0, rot: 0, dur: 0 });
  }

  function finalGeometry() {
    const W = envelope.offsetWidth, H = envelope.offsetHeight;
    const pw = geo.pw;
    const Hn = letterInner.offsetHeight;                           // natural height of the whole message
    const topPad = Math.ceil(player.getBoundingClientRect().bottom) + 14;
    const avail = window.innerHeight - topPad - 16;
    let f = 1;
    if (Hn > avail) f = Math.max(0.82, avail / Hn);
    const lh = Math.min(Hn, avail / f);                            // visible height (letter units)
    const shownH = lh * f;
    const finalTopVp = topPad + Math.max(0, (avail - shownH) / 2) - 4;
    const envTop = envelope.getBoundingClientRect().top;
    // the empty envelope slips down so a lip of it peeks out beneath the paper
    let sink = finalTopVp + shownH - 0.5 * H - envTop;
    sink = Math.min(sink, window.innerHeight - 8 - envTop - H);
    sink = Math.max(0, sink);
    return { f, lh, ty: finalTopVp - envTop, sink, W, H, pw };
  }

  function freezeFloat() {
    const cur = getComputedStyle(envFloat).transform;
    envFloat.style.animation = 'none';
    envFloat.style.transform = cur === 'none' ? 'none' : cur;
    void envFloat.offsetWidth;
    envFloat.style.transition = 'transform ' + (1.2 * K()).toFixed(2) + 's ease';
    envFloat.style.transform = 'none';
  }

  function openEnvelope() {
    if (opened || !unlocked || !envWrap.classList.contains('show')) return;
    opened = true;
    layoutEnvelope();
    envelope.classList.add('opened');
    envelope.removeAttribute('tabindex');
    envelope.setAttribute('aria-label', 'Envelope, opening');
    envelope.setAttribute('role', 'img');
    envHover.classList.add('is-opened');
    envHint.classList.remove('on');
    freezeFloat();

    // STEP 1 — the flap opens
    flap.classList.add('open');
    wait(520, () => flap.classList.add('behind'));

    // STEP 2 — the paper begins to slide up out of the envelope
    wait(1250, () => setLetterVars({ dur: 1.7 * K(), ty: geo.ty0 - geo.H * 0.46, rot: -1.8 }));

    // STEP 3 — the paper rises completely clear of the envelope
    wait(3200, () => setLetterVars({ dur: 1.6 * K(), ty: -(geo.hs + geo.H * 0.05), rot: 1.1 }));

    // STEP 4 — the paper moves forward, unfolds, and settles in front
    wait(5000, () => {
      layoutEnvelope();
      const g = finalGeometry();
      letter.classList.add('forward');
      envelope.style.setProperty('--sink', g.sink.toFixed(0) + 'px');
      setLetterVars({ dur: 2.2 * K(), ty: g.ty, ls: g.f, lh: g.lh, rot: 0 });
      wait(700, () => envelope.classList.add('sunk'));
      wait(2300, () => {
        letter.classList.add('done');
        letterScroll.tabIndex = 0;
        letterScroll.setAttribute('role', 'document');
        letterScroll.setAttribute('aria-label', 'The letter');
        envelope.setAttribute('aria-label', 'Opened envelope');
      });
    });
  }

  envelope.addEventListener('click', openEnvelope);
  envelope.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openEnvelope(); }
  });

  /* ---------------------------------------------------------
     SYNC HELPER  (open index.html#sync)
     --------------------------------------------------------- */
  function initSyncTool() {
    const tool = $('#syncTool');
    if (location.hash !== '#sync') return;
    tool.hidden = false;
    pwInput.blur();
    const nextEl = $('#syncNext'), out = $('#syncOut');
    const lines = LYRICS.filter((l) => l.text !== '♪').map((l) => l.text);
    let rec = [];

    function render() {
      const n = rec.length;
      nextEl.textContent = n < lines.length ? `(${n + 1}/${lines.length})  ${lines[n]}` : 'All lines recorded ✓  — copy the timestamps below.';
      const all = [{ time: 0, text: '♪' }].concat(rec);
      out.value = '[\n' + all.map((l) => `  { time: ${l.time}, text: ${JSON.stringify(l.text)} },`).join('\n') + '\n]';
      out.scrollTop = out.scrollHeight;
    }
    function tap() {
      if (rec.length >= lines.length) return;
      rec.push({ time: Math.round(audio.currentTime * 10) / 10, text: lines[rec.length] });
      render();
      if (rec.length === lines.length) {            // preview immediately in the lyrics panel
        lyricsData = [{ time: 0, text: '♪' }].concat(rec);
        renderLyrics();
      }
    }
    $('#syncTap').addEventListener('click', tap);
    $('#syncUndo').addEventListener('click', () => { rec.pop(); render(); });
    $('#syncReset').addEventListener('click', () => { rec = []; render(); audio.currentTime = 0; });
    $('#syncCopy').addEventListener('click', () => {
      out.select();
      (navigator.clipboard ? navigator.clipboard.writeText(out.value) : Promise.reject()).catch(() => document.execCommand('copy'));
    });
    document.addEventListener('keydown', (e) => {
      if (e.code !== 'Space' || e.target.tagName === 'TEXTAREA') return;
      e.preventDefault();
      tap();
    }, true);
    render();
  }

  /* ---------------------------------------------------------
     INIT
     --------------------------------------------------------- */
  function measurePlayer() {
    const bottom = Math.ceil(player.getBoundingClientRect().bottom);
    document.documentElement.style.setProperty('--player-h', bottom + 'px');
  }

  let resizeTimer = 0;
  window.addEventListener('resize', () => {
    measurePlayer();
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (Math.abs(window.innerWidth - grassBuiltFor) > 40) buildGrass();
      if (envWrap.classList.contains('show')) {
        if (!opened) layoutEnvelope();
        else if (letter.classList.contains('done')) {      // re-fit the open letter instantly
          layoutEnvelope();
          const g = finalGeometry();
          envelope.classList.remove('sunk');
          envelope.style.setProperty('--sink', g.sink.toFixed(0) + 'px');
          setLetterVars({ dur: 0, ty: g.ty, ls: g.f, lh: g.lh, rot: 0 });
          requestAnimationFrame(() => envelope.classList.add('sunk'));
        }
      }
    }, 200);
  });

  buildStars();
  buildParticles();
  buildGrass();
  measurePlayer();
  renderLyrics();
  scheduleShootingStar(true);
  initSyncTool();
  updateUI();
  tryAutoplay();
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => { measurePlayer(); if (envWrap.classList.contains('show') && !opened) layoutEnvelope(); });
  }
  if (!isNarrow() && location.hash !== '#sync') pwInput.focus({ preventScroll: true });
})();
