function ganti_gambar() {
    let images = document.getElementById("gantiGambar").value;
    let gambar = document.getElementById("gambar");
    if (images == "bekantan"){
        gambar.src="./gambar/bekantan.png";
        alert(`Ini adalah foto ${images}`);
    }else if (images == "siamang"){
        gambar.src="./gambar/siamang.png";
        alert(`Ini adalah foto ${images}`);
    }else if (images == "simpanse"){
        gambar.src="./gambar/simpanse.png";
        alert(`Ini adalah foto  ${images}`);
    }else if (images == "kukang"){
        gambar.src="./gambar/kukang.png";
        alert(`Ini adalah foto  ${images}`);
    }else if (images == "gorila"){
        gambar.src="./gambar/gorila.png";
        alert(`Ini adalah foto  ${images}`);
    }else if (images == "orang_utan"){
        gambar.src="./gambar/orang utan.png";
        alert(`Ini adalah foto  ${images}`);
    }
}