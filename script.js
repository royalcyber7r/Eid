function generateBanner() {
    const name = document.getElementById("name").value;
    const role = document.getElementById("role").value;
    const photoFile = document.getElementById("photo").files[0];

    const size = parseInt(document.getElementById("size").value);
    const posX = parseInt(document.getElementById("moveX").value);
    const posY = parseInt(document.getElementById("moveY").value);

    if (!name || !role || !photoFile) {
        alert("সব তথ্য পূরণ করুন");
        return;
    }

    const canvas = document.getElementById("bannerCanvas");
    const ctx = canvas.getContext("2d");
    canvas.style.display = "block";

    const bg = new Image();
    bg.src = "banner-bg.jpg";

    bg.onload = function () {
        ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);

        const userImg = new Image();
        userImg.src = URL.createObjectURL(photoFile);

        userImg.onload = function () {
            // কন্ট্রোল প্রয়োগ করে ছবি বসানো
            ctx.drawImage(userImg, posX, posY, size, size);

            ctx.fillStyle = "white";
            ctx.font = "40px Arial";
            ctx.fillText(name, 400, 280);

            ctx.font = "32px Arial";
            ctx.fillText(role, 400, 330);

            const downloadBtn = document.getElementById("downloadBtn");
            downloadBtn.href = canvas.toDataURL("image/jpeg");
            downloadBtn.style.display = "block";
        };
    };
}
