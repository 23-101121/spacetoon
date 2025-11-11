// ====== HERO SECTION FROM JS ======
let homeSection = document.getElementById("home");

let heroContent = `
  <div class="hero-text">
    <button id="funBtn"> Blast Off to Fun!</button>
    <h1> Where Cartoons Come to Life! </h1>
    <p>Join us on an amazing space adventure filled with your favorite cartoons, exciting shows, and endless fun for the whole galaxy! ✨</p>
    <div class="hero-buttons">
      <button class="explore"> Explore Shows</button>
      <button class="watch"> Watch Live</button>
    </div>
  </div>
  <div class="hero-img">
    <img src="o4u30E3j-Spacetoon-×-Shahid-1200x675.png" alt="Kids watching TV">
  </div>
`;

homeSection.innerHTML = heroContent;

// ====== POP-UP AD ======
let popup = document.getElementById("popup-ad");
let closeAd = document.getElementById("close-ad");

// Random 50% chance to show popup
let random = Math.random();
if (random > 0.5) {
  popup.classList.remove("hidden");
}

closeAd.onclick = function() {
  popup.classList.add("hidden");
};

// ====== SMOOTH SCROLLING ======
let links = document.getElementsByTagName("a");
for (let i = 0; i < links.length; i++) {
  links[i].onclick = function(e) {
    let targetId = this.getAttribute("href");
    if (targetId.startsWith("#")) {
      e.preventDefault();
      document.getElementById(targetId.substring(1)).scrollIntoView({
        behavior: "smooth"
      });
    }
  }
}

  // Array of objects for the 3 cards
  let reasons = [
    {
      title: "Creative Shows",
      desc: "Colorful and engaging cartoons that spark imagination.",
      img: "3705385.jpg"
    },
    {
      title: "Educational Fun",
      desc: "Learn while having fun with our educational programs.",
      img: "24062141_unmk_e4ai_220107.jpg"
    },
    {
      title: "Adventure Time",
      desc: "Epic adventures with your favorite cartoon heroes.",
      img: "23908282_6748586.jpg"
    }
  ];

  let loveCards = document.getElementById("loveCards");
  loveCards.innerHTML = "";

  // Loop through the array to display each card
  for (let i = 0; i < reasons.length; i++) {
    loveCards.innerHTML += `
      <div class="card">
        <img src="${reasons[i].img}" alt="${reasons[i].title}">
        <h3>${reasons[i].title}</h3>
        <p>${reasons[i].desc}</p>
      </div>
    `;
  }


  // ====== SPACE FRIENDS SECTION ======
let friendsSection = document.getElementById("spaceFriends");

let spaceFriends = [
  { name: "Alien", img: "32432416_6400_9_06.jpg" },
  { name: "Robot", img: "169502200_273bc97e-2045-4555-82aa-00a78b794898.jpg" },
  { name: "Astronaut", img: "36101449_7200_4_08.jpg" },
  { name: "Rocket", img: "3853697_81255.jpg" },
  { name: "Star", img: "137410936_66ffc042-f3ee-479e-9567-959fdcecc849.jpg" },
  { name: "UFO", img: "38270897_7700_6_08.jpg" }
];

let sectionContent = `
  <div class="friends-container">
    <h2>Meet Our Space Friends!</h2>
    <div class="friends-list">
`;

for (let i = 0; i < spaceFriends.length; i++) {
  sectionContent += `
    <div class="friend" title="${spaceFriends[i].name}">
      <img src="${spaceFriends[i].img}" alt="${spaceFriends[i].name}">
      <p>${spaceFriends[i].name}</p>
    </div>
  `;
}

sectionContent += `
    </div>
  </div>
`;

friendsSection.innerHTML = sectionContent;



