function tampilMateri(sila) {
    var isi = document.getElementById("materi");

    if (sila === 1) {
        isi.innerHTML = "<h2>Sila 1</h2>" +
            "<p>Ketuhanan Yang Maha Esa.</p>" +
            "<p>Mengajarkan bahwa bangsa Indonesia percaya kepada Tuhan dan menghormati kebebasan beragama.</p>";
    }

    else if (sila === 2) {
        isi.innerHTML = "<h2>Sila 2</h2>" +
            "<p>Kemanusiaan yang Adil dan Beradab.</p>" +
            "<p>Menjunjung tinggi nilai kemanusiaan dan memperlakukan semua orang dengan adil.</p>";
    }

    else if (sila === 3) {
        isi.innerHTML = "<h2>Sila 3</h2>" +
            "<p>Persatuan Indonesia.</p>" +
            "<p>Mengutamakan persatuan dan kesatuan bangsa di atas kepentingan pribadi.</p>";
    }

    else if (sila === 4) {
        isi.innerHTML = "<h2>Sila 4</h2>" +
            "<p>Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan/Perwakilan.</p>" +
            "<p>Mengutamakan musyawarah dalam mengambil keputusan bersama.</p>";
    }

    else if (sila === 5) {
        isi.innerHTML = "<h2>Sila 5</h2>" +
            "<p>Keadilan Sosial bagi Seluruh Rakyat Indonesia.</p>" +
            "<p>Mewujudkan keadilan dan kesejahteraan untuk seluruh rakyat Indonesia.</p>";
    }
}