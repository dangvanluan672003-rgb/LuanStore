const express = require("express");
const app = express();

app.use(express.static("public"));

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Luân Shop</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<header>
    <h1>🛒 Luân Shop</h1>
</header>

<div class="products">

    <div class="card">
        <h2>iPhone 16 Pro</h2>
        <p>29.990.000đ</p>
        <button>Mua ngay</button>
    </div>

    <div class="card">
        <h2>Laptop Gaming</h2>
        <p>22.500.000đ</p>
        <button>Mua ngay</button>
    </div>

    <div class="card">
        <h2>Tai nghe Bluetooth</h2>
        <p>790.000đ</p>
        <button>Mua ngay</button>
    </div>

</div>

<script src="script.js"></script>

</body>
</html>
body{
    margin:0;
    font-family:Arial;
    background:#f2f2f2;
}

header{
    background:#2196F3;
    color:white;
    padding:20px;
    text-align:center;
}

.products{
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    margin:20px;
}

.card{
    width:220px;
    background:white;
    margin:10px;
    padding:15px;
    border-radius:10px;
    box-shadow:0 0 10px rgba(0,0,0,.2);
    text-align:center;
}

button{
    background:#4CAF50;
    color:white;
    border:none;
    padding:10px 15px;
    border-radius:6px;
}
document.querySelectorAll("button").forEach(btn=>{
    btn.onclick=()=>{
        alert("Đã thêm vào giỏ hàng!");
    }
});
