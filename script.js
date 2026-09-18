const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const music = document.querySelector('#background-music');
const musicToggle = document.querySelector('.music-toggle');
const introVideo = document.querySelector('#intro-video');
const videoFrame = document.querySelector('.video-frame');

menuToggle?.addEventListener('click', () => {
	const isOpen = mainNav.classList.toggle('is-open');
	menuToggle.setAttribute('aria-expanded', String(isOpen));
});

mainNav?.querySelectorAll('a').forEach((link) => {
	link.addEventListener('click', () => {
		mainNav.classList.remove('is-open');
		menuToggle?.setAttribute('aria-expanded', 'false');
	});
});

document.querySelector('#year').textContent = new Date().getFullYear();

music.volume = 0.08;

musicToggle?.addEventListener('click', async () => {
	if (music.paused) {
		try {
			await music.play();
			musicToggle.classList.add('is-playing');
			musicToggle.setAttribute('aria-pressed', 'true');
			musicToggle.setAttribute('aria-label', 'Muziek uitzetten');
			musicToggle.querySelector('.music-label').textContent = 'Muziek uit';
		} catch {
			musicToggle.querySelector('.music-label').textContent = 'Klik opnieuw';
		}
		return;
	}

	music.pause();
	musicToggle.classList.remove('is-playing');
	musicToggle.setAttribute('aria-pressed', 'false');
	musicToggle.setAttribute('aria-label', 'Muziek aanzetten');
	musicToggle.querySelector('.music-label').textContent = 'Muziek aan';
});

introVideo?.addEventListener('play', () => {
	music.pause();
	musicToggle?.classList.remove('is-playing');
	musicToggle?.setAttribute('aria-pressed', 'false');
	musicToggle?.setAttribute('aria-label', 'Muziek aanzetten');
	if (musicToggle) musicToggle.querySelector('.music-label').textContent = 'Muziek aan';
});

introVideo?.addEventListener('loadeddata', () => {
	videoFrame?.classList.add('has-video');
});
