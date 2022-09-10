const stars = document.querySelectorAll("#star");

stars.forEach((star) => {
    let duration = Math.random() * (1.2 - 0.6) + 0.6;
    star.style.animation = `star-fall ${duration}s infinite linear`;
});