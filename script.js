/* ==============================
   COUNTDOWN FOR COVER & CEREMONY
   ============================== */
const weddingDate = new Date("Sep 14, 2025 09:30:00").getTime();
const countdownEls = [
    document.getElementById("countdown"),
    document.getElementById("cover-countdown")
];

setInterval(function () {
    const now = new Date().getTime();
    const dist = weddingDate - now;
    let displayText;

    if (dist < 0) {
        displayText = "Happily Married 🎉";
    } else {
        const d = Math.floor(dist / (1000 * 60 * 60 * 24));
        const h = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((dist % (1000 * 60)) / 1000);
        displayText = `${d}d ${h}h ${m}m ${s}s`;
    }

    countdownEls.forEach(el => {
        if (el) el.textContent = displayText;
    });
}, 1000);

/* ==============================
   SCROLL REVEAL ANIMATION
   ============================== */
const sections = document.querySelectorAll('.section');
function revealSections() {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(sec => {
        if (sec.getBoundingClientRect().top < triggerBottom) {
            sec.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', revealSections);
revealSections();

/* ==============================
   BACKGROUND MUSIC CONTROL
   ============================== */
const music = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-btn');

if (music && musicBtn) {
    musicBtn.addEventListener('click', () => {
        if (music.paused) {
            music.play();
            musicBtn.textContent = "🔇 Pause Music";
        } else {
            music.pause();
            musicBtn.textContent = "🎵 Play Music";
        }
    });
}

/* ==============================
   CONFETTI ON LOAD
   ============================== */
window.addEventListener('load', () => {
    setTimeout(() => {
        if (typeof confetti === 'function') {
            confetti({
                particleCount: 150,
                spread: 90,
                origin: { y: 0.6 },
                colors: ['#FFD700', '#FF69B4', '#FF4500']
            });
        }
    }, 1000);
});

/* ==============================
   SMOOTH SCROLL FOR ARROW
   ============================== */
document.querySelectorAll('.scroll-arrow').forEach(arrow => {
    arrow.addEventListener('click', () => {
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    });
});

/* ==============================
   BLINKING HEART IN TAB TITLE
   ============================== */
const originalTitle = "✨ Wedding Invite";
let showHeart = true;

setInterval(() => {
    document.title = showHeart ? "❤️ " + originalTitle : "💍 " + originalTitle;
    showHeart = !showHeart;
}, 1000);

/* ==============================
   IMAGE FADE-IN EFFECT
   ============================== */
document.querySelectorAll('img').forEach(img => {
    img.style.opacity = 0;
    img.addEventListener('load', () => {
        img.style.transition = "opacity 1.2s ease-in-out";
        img.style.opacity = 1;
    });
});
