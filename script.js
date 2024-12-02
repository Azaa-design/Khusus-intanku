// Animasi tambahan jika dibutuhkan, seperti untuk efek bunga bergerak atau interaksi
document.querySelector('.container').addEventListener('click', function() {
    alert('sederhana aja kok ,eummp I love you! intannya');
});

function popBalloon(balloon) {
  balloon.classList.add('pop-animation');
  setTimeout(() => {
    balloon.remove();
    alert('duar...hhhh lopyu..!');
  }, 300);
}
