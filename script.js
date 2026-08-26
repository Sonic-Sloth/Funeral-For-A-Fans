window.addEventListener("DOMContentLoaded", () => {

  // =====================
  // LOADING SCREEN
  // =====================

  const loadingText = document.getElementById("loadingText");
  const enterButton = document.getElementById("enter");
  const splash = document.getElementById("splash");
  const site = document.getElementById("site");

  const music = document.getElementById("bgmusic");

  const messages = [
    "♫ Loading band photos...",
    "♫ Loading Information...",
    "♫ Loading Music...",
    "♫ Downloading Dangerous Viruses To Your Computer...",
    "♫ I'm Just Kidding...",
    "♫ Preparing guestbook...",
    "♫ Ready."
  ];

  let index = 0;

  setInterval(() => {

    if (loadingText) {
      loadingText.textContent = messages[index];
    }

    index++;

    if (index >= messages.length) {
      index = 0;
    }

  }, 1200);


  // =====================
  // ENTER BUTTON
  // =====================

  enterButton.addEventListener("click", () => {

    // Start music
    if (music) {

      music.volume = 0.3;

      music.play().then(() => {
        console.log("Music started!");
      }).catch(error => {
        console.log("Music failed:", error);
      });

    }


    // Fade out splash screen
    splash.classList.add("fade-out");


    // Show website
    setTimeout(() => {

      splash.style.display = "none";

      site.style.display = "block";

      requestAnimationFrame(() => {
        site.classList.add("show");
      });

    }, 1000);

  });


  // =====================
  // MUSIC CONTROLS
  // =====================

  window.playMusic = function() {

    if (music) {
      music.play();
    }

  };


  window.pauseMusic = function() {

    if (music) {
      music.pause();
    }

  };


  // =====================
  // PROGRESS BAR
  // =====================

  if (music) {

    music.addEventListener("timeupdate", () => {

      if (!music.duration || isNaN(music.duration)) {
        return;
      }

      const percent =
        (music.currentTime / music.duration) * 100;

      const progressbar =
        document.getElementById("progressbar");

      if (progressbar) {
        progressbar.style.width = percent + "%";
      }

    });

  }


  // =====================
  // FUNERALAMP PLAYLIST
  // =====================

  const playlist = [

    {
      title: "All The Rage",
      file: "https://mp3tourl.com/audio/1787785696380-937e2978-e13c-4884-bf81-2c8e21f772f9.mp3"
    },

    {
      title: "Juneau",
      file: "https://mp3tourl.com/audio/1787785089537-fee02e58-214a-40de-beca-7be6f71a888b.mp3"
    },

    {
      title: "Streetcar",
      file: "https://mp3tourl.com/audio/1787785645165-b7101a1e-4bcc-4944-b090-75145755a9a7.mp3"
    },

    {
      title: "Roses For The Dead",
      file: "https://mp3tourl.com/audio/1787785642532-e4a7d2bb-788a-49b4-a270-be489ecea38d.mp3"
    },

    {
      title: "Escape Artists Never Die",
      file: "https://mp3tourl.com/audio/1787785695504-a83f2212-e810-4360-8e7e-4337238c9bfb.mp3"
    },

    {
      title: "Into Oblivion (Reunion)",
      file: "https://mp3tourl.com/audio/1787785576761-f8ea4d14-62e0-40a3-ae8b-64413d81195b.mp3"
    },

    {
      title: "History",
      file: "https://mp3tourl.com/audio/1787785742708-faf19d87-13a1-451c-bafa-374bf5631fbd.mp3"
    },

    {
      title: "Rookie Of The Year",
      file: "https://mp3tourl.com/audio/1787785537466-ba516d53-9ee1-41e4-9bcf-44516be14d9d.mp3"
    },

    {
      title: "Bullet Theory",
      file: "https://mp3tourl.com/audio/1787785486279-88a8f769-b94b-466c-9c96-e03e5380667b.mp3"
    },

    {
      title: "Drive",
      file: "https://mp3tourl.com/audio/1787785472274-b42b3d00-2efe-4d78-bffd-4c8a9e158584.mp3"
    },

    {
      title: "Monsters",
      file: "https://mp3tourl.com/audio/1787785454906-47d7563e-9780-4598-8771-1c55db284378.mp3"
    },

    {
      title: "Bend Your Arms To Look Like Wings",
      file: "https://mp3tourl.com/audio/1787785428567-f19d7b99-1d7a-4d06-822d-06d6f9466012.mp3"
    },

    {
      title: "Red Is The New Black",
      file: "https://mp3tourl.com/audio/1787785355489-51a744ee-abe1-46a1-87a0-d1c9a9e854f1.mp3"
    }

  ];


  let currentSong = 0;


  // =====================
  // LOAD SONG
  // =====================

  function loadSong() {

    if (!music) {
      return;
    }

    music.src = playlist[currentSong].file;

    document.getElementById("songtitle").textContent =
      "▶ " + playlist[currentSong].title + ".mp3";

  }


  // =====================
  // NEXT SONG
  // =====================

  window.nextSong = function() {

    currentSong++;

    if (currentSong >= playlist.length) {
      currentSong = 0;
    }

    loadSong();

    music.play().catch(error => {
      console.log("Music failed:", error);
    });

  };


  // =====================
  // PREVIOUS SONG
  // =====================

  window.previousSong = function() {

    currentSong--;

    if (currentSong < 0) {
      currentSong = playlist.length - 1;
    }

    loadSong();

    music.play().catch(error => {
      console.log("Music failed:", error);
    });

  };


  // =====================
  // INITIAL SONG
  // =====================

  loadSong();

});