const text =
`Gửi em ❤️

Có lẽ anh không phải người hoàn hảo,
nhưng từ khi gặp em,
mỗi ngày của anh đều trở nên đặc biệt hơn.

Cảm ơn em đã xuất hiện.

Em đồng ý làm người yêu anh nhé? 💖`;

const typing = document.getElementById("typing");
const btn = document.getElementById("loveBtn");
const music = document.getElementById("music");

let i = 0;

function typeWriter() {
    if (i < text.length) {
        typing.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 45);
    }
}

typeWriter();

btn.onclick = () => {

    music.play().catch(() => {});

    alert("❤️ Cảm ơn em đã đồng ý ❤️");

    for (let i = 0; i < 80; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "100vh";
        heart.style.fontSize = (20 + Math.random() * 30) + "px";
        heart.style.pointerEvents = "none";
        heart.style.transition = "all 4s linear";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.style.top = "-10vh";
            heart.style.opacity = "0";
        }, 10);

        setTimeout(() => {
            heart.remove();
        }, 4000);
    }
};
