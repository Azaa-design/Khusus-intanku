function openGift() {
    const lid = document.querySelector('.lid');
    const message = document.getElementById('message');
    lid.style.transform = 'rotateX(150deg)';
    setTimeout(() => {
        message.style.display = 'block';
    }, 600); // Tampilkan pesan setelah animasi selesai
}



