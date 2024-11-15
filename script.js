document.getElementById("loveButton").addEventListener("click", function() {
    // "Seni Çok Seviyorum!" mesajını göster
    const messageBox = document.getElementById("messageBox");
    messageBox.style.display = "block";
    
    // Butona tıklandığında hareketli kalpleri ekle
    for (let i = 0; i < 1100; i++) {  // 150 kalp daha fazla
        createHeart();
    }
});

function createHeart() {
    const heartsContainer = document.getElementById("hearts");

    const heart = document.createElement("div");
    heart.classList.add("heart");
    heartsContainer.appendChild(heart);

    // Kalp animasyonunu başlat
    animateHeart(heart);
}

function animateHeart(heart) {
    // Kalplerin her tarafa yayılması için X ve Y koordinatlarını ayarla
    const startX = Math.random() * window.innerWidth; // X koordinatı (sol, sağ ve ortada yayılacak)
    const startY = window.innerHeight * 0.75 + Math.random() * window.innerHeight * 0.25; // Y koordinatı (alt kısımdan başlasın, üst kısıma doğru)

    heart.style.left = `${startX}px`;
    heart.style.top = `${startY}px`;

    // Kalp animasyonunu başlat
    heart.style.animationDuration = `${Math.random() * 2 + 3}s`; // Animasyon süresi her kalp için rastgele
    heart.style.animationTimingFunction = "ease-out";
    heart.style.animationDelay = `${Math.random() * 2}s`;

    heart.addEventListener("animationend", function() {
        heart.remove(); // Animasyon tamamlandığında kalbi kaldır
    });
}
