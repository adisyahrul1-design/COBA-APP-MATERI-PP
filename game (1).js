var skor = 0;
var soalKe = 0;
var nama = "";
var waktu = 20;
var timerInterval;

var soal = [
  
  {
    tanya: "Indonesia memiliki banyak suku dan agama. Jika terjadi perbedaan pendapat antar kelompok, sikap yang sesuai dengan Bhinneka Tunggal Ika adalah...",
    pilihan: [
      "Memaksakan pendapat mayoritas",
      "Mengutamakan dialog dan toleransi",
      "Menghindari kelompok lain",
      "Menyalahkan budaya tertentu"
    ],
    benar: 1
  },
  
  {
    tanya: "Makna utama semboyan Bhinneka Tunggal Ika bagi bangsa Indonesia adalah...",
    pilihan: [
      "Persamaan budaya",
      "Persatuan dalam keberagaman",
      "Keseragaman adat",
      "Kebebasan tanpa batas"
    ],
    benar: 1
  },
  
  {
    tanya: "Contoh penerapan Bhinneka Tunggal Ika di sekolah adalah...",
    pilihan: [
      "Hanya berteman dengan yang satu agama",
      "Menghormati teman yang berbeda budaya",
      "Menolak pendapat berbeda",
      "Membentuk kelompok berdasarkan suku"
    ],
    benar: 1
  },
  
  {
    tanya: "Jika ada konflik karena perbedaan budaya, solusi terbaik adalah...",
    pilihan: [
      "Membiarkannya",
      "Menyelesaikan dengan musyawarah",
      "Menyebarkan isu negatif",
      "Menghindari komunikasi"
    ],
    benar: 1
  },
  
  {
    tanya: "Keberagaman Indonesia harus dipandang sebagai...",
    pilihan: [
      "Ancaman bangsa",
      "Kelemahan negara",
      "Kekuatan dan kekayaan bangsa",
      "Alasan perpecahan"
    ],
    benar: 2
  },
  
  {
    tanya: "Sikap toleransi berarti...",
    pilihan: [
      "Menyamakan semua agama",
      "Menghormati perbedaan tanpa memaksakan kehendak",
      "Menolak perbedaan",
      "Mengikuti mayoritas"
    ],
    benar: 1
  },
  
  {
    tanya: "Bhinneka Tunggal Ika tertulis pada pita yang dicengkeram oleh...",
    pilihan: [
      "Burung Elang",
      "Garuda Pancasila",
      "Merpati Putih",
      "Cendrawasih"
    ],
    benar: 1
  },
  
  {
    tanya: "Jika melihat teman didiskriminasi karena suku, tindakan yang tepat adalah...",
    pilihan: [
      "Mendukung diskriminasi",
      "Diam saja",
      "Membela dan melaporkan pada guru",
      "Menghindari masalah"
    ],
    benar: 2
  },
  
  {
    tanya: "Persatuan bangsa penting untuk...",
    pilihan: [
      "Menimbulkan konflik",
      "Melemahkan negara",
      "Menjaga keutuhan NKRI",
      "Menghapus budaya daerah"
    ],
    benar: 2
  },
  
  {
    tanya: "Bhinneka Tunggal Ika berasal dari kitab...",
    pilihan: [
      "Negarakertagama",
      "Sutasoma",
      "Arjunawiwaha",
      "Pararaton"
    ],
    benar: 1
  }
  
];

function tampilMateri() {
  document.getElementById("konten").innerHTML = `
<h2>Bhinneka Tunggal Ika</h2>

<img width="250" src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Garuda_Pancasila%2C_Coat_of_Arms_of_Indonesia.svg">

<h3>1. Pengertian</h3>
<p>Bhinneka Tunggal Ika berarti berbeda-beda tetapi tetap satu. 
Semboyan ini menjadi dasar persatuan bangsa Indonesia yang memiliki keberagaman suku, agama, budaya, bahasa, dan adat istiadat.</p>

<h3>2. Sejarah</h3>
<p>Bhinneka Tunggal Ika berasal dari Kitab Sutasoma karya Mpu Tantular pada masa Kerajaan Majapahit. 
Kalimat aslinya berbunyi "Bhinneka Tunggal Ika Tan Hana Dharma Mangrwa" yang berarti berbeda-beda tetapi tetap satu, tidak ada kebenaran yang mendua.</p>

<h3>3. Makna dalam Kehidupan</h3>
<p>Keberagaman bukan alasan untuk terpecah, tetapi menjadi kekuatan bangsa. 
Dengan toleransi, saling menghormati, dan gotong royong, bangsa Indonesia dapat hidup rukun.</p>

<img width="300" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Traditional_dances_of_Indonesia.jpg/640px-Traditional_dances_of_Indonesia.jpg">

<h3>4. Contoh Penerapan</h3>
<ul style="text-align:left">
<li>Menghormati teman berbeda agama.</li>
<li>Tidak mengejek budaya lain.</li>
<li>Bekerja sama tanpa membedakan suku.</li>
<li>Menjaga persatuan dan kesatuan.</li>
</ul>

<h3>5. Pentingnya Persatuan</h3>
<p>Tanpa persatuan, Indonesia mudah terpecah. 
Dengan semangat Bhinneka Tunggal Ika, bangsa Indonesia mampu menjaga keutuhan NKRI.</p>

<br><b>Scroll untuk membaca seluruh materi 📖</b>
`;
}

function mulaiKuis() {
  nama = prompt("Masukkan Nama:");
  if (!nama) return;
  
  skor = 0;
  soalKe = 0;
  tampilSoal();
}

function tampilSoal() {
  if (soalKe < soal.length) {
    
    waktu = 20;
    var s = soal[soalKe];
    
    var html = "<h2>Kuis HOTS</h2>";
    html += "<p><b>Soal " + (soalKe + 1) + " dari " + soal.length + "</b></p>";
    html += "<p style='color:red'>Waktu: <span id='waktu'>20</span> detik</p>";
    html += "<p>" + s.tanya + "</p>";
    
    for (let i = 0; i < s.pilihan.length; i++) {
      html += "<button onclick='cek(" + i + ")'>" + s.pilihan[i] + "</button><br><br>";
    }
    
    document.getElementById("konten").innerHTML = html;
    startTimer();
    
  } else {
    selesai();
  }
}

function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(function() {
    waktu--;
    document.getElementById("waktu").innerText = waktu;
    if (waktu <= 0) {
      clearInterval(timerInterval);
      soalKe++;
      tampilSoal();
    }
  }, 1000);
}

function cek(p) {
  clearInterval(timerInterval);
  if (p === soal[soalKe].benar) { skor++; }
  soalKe++;
  tampilSoal();
}

function selesai() {
  simpanSkor();
  var persen = (skor / soal.length) * 100;
  var nilai = persen >= 85 ? "A 🏅" : persen >= 70 ? "B 🎖" : "C";
  
  document.getElementById("konten").innerHTML = `
<h2>Kuis Selesai 🎉</h2>
<p>Nama: <b>${nama}</b></p>
<p>Skor: <b>${skor}/${soal.length}</b></p>
<p>Nilai: <b>${nilai}</b></p>
<button onclick="mulaiKuis()">Ulangi</button>
<button onclick="lihatSkor()">Lihat Papan Skor</button>
`;
}

function simpanSkor() {
  var data = JSON.parse(localStorage.getItem("skorPPKN")) || [];
  data.push({ nama: nama, skor: skor });
  localStorage.setItem("skorPPKN", JSON.stringify(data));
}

function lihatSkor() {
  var data = JSON.parse(localStorage.getItem("skorPPKN")) || [];
  data.sort((a, b) => b.skor - a.skor);
  
  var html = "<h2>Papan Skor 🏆</h2>";
  for (let i = 0; i < data.length; i++) {
    html += `<p>${i+1}. ${data[i].nama} - ${data[i].skor}</p>`;
  }
  document.getElementById("konten").innerHTML = html;
}

function keluar() {
  document.getElementById("konten").innerHTML =
    "<h2>Terima kasih sudah belajar 🙏</h2>";
}