let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 4000);
// Language Toggle

const toggleBtn = document.getElementById("lang-toggle");

let currentLang = "en";

toggleBtn.addEventListener("click", function () {
  if (currentLang === "en") {
    // Switch to Turkish
    document.getElementById("nav-home").textContent = "Ana Sayfa";
    document.getElementById("nav-shop").textContent = "Mağaza";
    document.getElementById("nav-collections").textContent = "Koleksiyonlar";
    document.getElementById("nav-about").textContent = "Hakkımızda";
    document.getElementById("nav-contact").textContent = "İletişim";

    document.getElementById("hero-title").textContent = "Yaratıcı Atölye";
    document.getElementById("hero-subtitle").textContent = "Modern El Yapımı Koleksiyon";
    document.getElementById("hero-btn").textContent = "Keşfet";

    toggleBtn.textContent = "EN";
    currentLang = "tr";

  } else {
    // Switch to English
    document.getElementById("nav-home").textContent = "Home";
    document.getElementById("nav-shop").textContent = "Shop";
    document.getElementById("nav-collections").textContent = "Collections";
    document.getElementById("nav-about").textContent = "About";
    document.getElementById("nav-contact").textContent = "Contact";

    document.getElementById("hero-title").textContent = "Creative Atelier";
    document.getElementById("hero-subtitle").textContent = "Modern Handmade Collection";
    document.getElementById("hero-btn").textContent = "Explore";

    toggleBtn.textContent = "TR";
    currentLang = "en";
  }
});

// Open lightbox
function openLightbox(src) {
  const box = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");

  box.style.display = "flex";
  img.src = src;
}

// Close lightbox
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// Change main image when thumbnail clicked
function changeImage(img) {
  document.querySelector(".gallery-main").src = img.src;
}

document.getElementById("lightbox-img").addEventListener("click", function(e) {
  e.stopPropagation();
  this.classList.toggle("zoomed");
});
