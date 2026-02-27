// 명함 호버 시 캐릭터 눈 깜빡임
document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.business-card');
    const eyes = document.querySelectorAll('.character-face .eye');

    let blinkInterval;

    function blink() {
        eyes.forEach(eye => {
            const ry = eye.getAttribute('ry');
            eye.setAttribute('data-original-ry', ry);
            eye.setAttribute('ry', '1');
        });
        setTimeout(() => {
            eyes.forEach(eye => {
                const original = eye.getAttribute('data-original-ry') || '10';
                eye.setAttribute('ry', original);
            });
        }, 150);
    }

    // 카드 호버 시 눈 깜빡임
    card.addEventListener('mouseenter', () => {
        blink();
        blinkInterval = setInterval(blink, 3000);
    });

    card.addEventListener('mouseleave', () => {
        clearInterval(blinkInterval);
    });

    // 4초마다 자동 깜빡임
    setInterval(blink, 4000);
});
