// Fungsi untuk toggle menu saat di mobile
function toggleMenu() {
    const nav = document.querySelector('header nav');
    nav.classList.toggle('active');
}

// Fungsi untuk scroll smooth dan menutup menu setelah klik (Mobile)
document.querySelectorAll('header nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Hanya mencegah default jika link adalah ID (#)
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
        } else {
            return; 
        }
        
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            // Scroll ke seksi target
            window.scrollTo({
                top: targetSection.offsetTop - 70, // Kurangi tinggi header/navbar
                behavior: 'smooth'
            });
        }
        
        // Tutup menu di mobile setelah klik
        const nav = document.querySelector('header nav');
        if (nav.classList.contains('active')) {
             nav.classList.remove('active');
        }
    });
});


// Fungsi untuk Tab Konten (Pengalaman/Pendidikan)
function openTab(evt, tabName) {
    let i, tabcontent, tablinks;
    
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Set 'Organization' sebagai tab default saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('Organization').style.display = 'block';
    document.querySelector('.tab-link').classList.add('active');
});


// --- MOUSE GLOW EFFECT LOGIC ---
document.addEventListener('mousemove', (e) => {
    const mouseGlow = document.getElementById('mouse-glow');
    if (mouseGlow) {
        requestAnimationFrame(() => {
            mouseGlow.style.left = e.clientX + 'px';
            mouseGlow.style.top = e.clientY + 'px';
        });
    }
});


// --- GALLERY MODAL FUNCTIONS ---
// Fungsi untuk membuka modal saat gambar Galeri diklik
function openModal(caption, imageSrc) {
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image-src');
    const modalCaption = document.getElementById('modal-image-caption');

    modal.style.display = "block";
    modalImage.src = imageSrc;
    modalCaption.textContent = caption;
    
    document.body.style.overflow = 'hidden'; 
}

// Fungsi untuk menutup modal Galeri
function closeModal() {
    const modal = document.getElementById('image-modal');
    modal.style.display = "none";
    document.body.style.overflow = 'auto';
}


// --- FULL DETAIL MODAL LOGIC (DIPICU OLEH TOMBOL 'SEE MORE') ---

const fullDetailContents = {
    'About': {
        title: "Perjalanan Hidup Pribadi & Rincian Profil",
        content: `
            <div class="modal-section">
                <h3>Ringkasan & Filosofi</h3>
                [cite_start]<p>Saya adalah mahasiswa Teknik Informatika yang **passionate dan detail-oriented**, mahir dalam *technical writing*, *project management*, *software design*, *full-stack web2 development*, dan *mobile app prototyping* menggunakan Flutter[cite: 4]. [cite_start]Saya membangun solusi yang **responsif** dan **berpusat pada pengguna** dengan kode yang efisien[cite: 5].</p>
                [cite_start]<p>Kekuatan saya adalah **logika berpikir** dan **problem-solving** tingkat lanjut, mampu memecah masalah kompleks dan merancang solusi **scalable**[cite: 6].</p>
                [cite_start]<p>Saya sangat antusias dengan **Cybersecurity**, memiliki dasar solid dalam jaringan, lingkungan Linux (Kali, Debian), dan pengembangan sistem yang aman[cite: 7].</p>
            </div>
            
            <div class="modal-section">
                <h3>Minat Kunci & Keahlian</h3>
                <ul class="tech-list-full">
                    [cite_start]<li>Figma/UI-UX [cite: 10][cite_start]</li><li>Next.js [cite: 11][cite_start]</li><li>Kali Linux [cite: 17][cite_start]</li><li>Network Analytics [cite: 18][cite_start]</li><li>Java [cite: 19][cite_start]</li><li>Python [cite: 20][cite_start]</li><li>Project Management [cite: 25][cite_start]</li><li>Technical Writing [cite: 4][cite_start]</li><li>Storytelling [cite: 23][cite_start]</li><li>English [cite: 25]</li>
                </ul>
            </div>
        `
    },
    'Projects': {
        title: "Daftar Lengkap Pengalaman Proyek",
        content: `
            <div class="modal-section">
                <h3>Ibunda.id Software Documentations and User Manuals (2025)</h3>
                <p><strong>Role: Technical Writer</strong></p>
                [cite_start]<p>Menciptakan dan memelihara dokumentasi sistem komprehensif dan panduan pengguna (per peran) untuk **tiga produk inti** (dua website dan satu mobile application)[cite: 33]. [cite_start]Mengorganisir arsip sistem dan memastikan konsistensi dokumentasi antar tim[cite: 34].</p>
                <ul class="tech-list-full">
                    [cite_start]<li>Gitlab</li><li>Notion</li><li>Figma</li><li>Sonarqube</li><li>Laravel</li><li>Golang</li><li>CI/CD Pipeline</li><li>AWS [cite: 31]</li>
                </ul>
            </div>
            
            <div class="modal-section">
                <h3>StudentxCEOs Grand Summit 14th Website (2025)</h3>
                <p><strong>Role: Website Developer (Frontend)</strong></p>
                [cite_start]<p>Mengembangkan *landing page* untuk acara Grand Summit yang berisi fungsi **login dan registrasi** pengguna[cite: 39, 40]. [cite_start]Mengembangkan dan memelihara antarmuka web responsif menggunakan **Next.js dan TypeScript**[cite: 131]. [cite_start]Menyampaikan *platform* siap produksi yang mendukung alur registrasi dan submission[cite: 134].</p>
                <ul class="tech-list-full">
                    [cite_start]<li>Next.JS</li><li>Typescript</li><li>Github</li><li>Postman</li><li>Figma [cite: 37]</li>
                </ul>
            </div>

            <div class="modal-section">
                <h3>PHP based campus whistle-blowing system (2024)</h3>
                <p><strong>Role: Project Manager, Website Developer</strong></p>
                [cite_start]<p>Mengelola, merencanakan, dan mengembangkan website pelaporan keluhan fasilitas kampus dengan fungsionalitas CRUD, diimplementasikan menggunakan native PHP dan MySQL[cite: 45].</p>
                <ul class="tech-list-full">
                    [cite_start]<li>PHP</li><li>phpMyAdmin</li><li>HTML/CSS/JavaScript [cite: 43]</li>
                </ul>
            </div>

            <div class="modal-section">
                <h3>Mobile E-commerce App Design and Prototype (2023-2024)</h3>
                <p><strong>Role: UI/UX Designer, Mobile Developer</strong></p>
                [cite_start]<p>Mengembangkan prototipe fungsional aplikasi mobile e-commerce dan merancang *user flow* dan *interface*, berfokus pada UI/UX dan basic state management[cite: 50].</p>
                <ul class="tech-list-full">
                    [cite_start]<li>Figma</li><li>Flutter (Dart) [cite: 49]</li>
                </ul>
            </div>
            
            <div class="modal-section">
                <h3>Proyek Lainnya (Rincian Singkat)</h3>
                <ul>
                    [cite_start]<li>**Banking System Simulation (2023):** Membangun aplikasi simulasi perbankan dengan fitur inti (deposit, withdrawal, transfer), mengimplementasikan konsep OOP di Java[cite: 60, 61].</li>
                    [cite_start]<li>**Djikstra-based Pathfinding App (2024):** Membuat aplikasi GUI untuk demonstrasi algoritma Dijkstra, mengembangkan logika *graph* dan *pathfinding* menggunakan Java (OOP) dan Java Swing[cite: 66].</li>
                    [cite_start]<li>**Psychology-based Game Project (2024):** Project Manager, memimpin tim 2 orang membangun prototipe game (Unity, C#)[cite: 71].</li>
                    [cite_start]<li>**IoT Item Counter System (2024):** Embedded Systems Developer, membangun sistem penghitung item menggunakan sensor ultrasonik dan Arduino, diprogram dalam C[cite: 76].</li>
                    [cite_start]<li>**Wordpress Blog and Website (2023):** Content Creator dan Web Admin, mengelola blog pribadi, mempraktikkan SEO basics[cite: 81].</li>
                    [cite_start]<li>**Library Management System (2023):** Mengembangkan aplikasi desktop untuk manajemen perpustakaan, fokus pada input validation menggunakan Java (OOP)[cite: 86].</li>
                </ul>
            </div>
        `
    },
    'Experience': {
        title: "Riwayat Organisasi, Pendidikan, dan Pelatihan",
        content: `
            <div class="modal-section">
                <h3>Role Kunci (Technical & Leadership)</h3>
                <h4>Technical Writer - Ibunda.id (2025)</h4>
                [cite_start]<p>Menciptakan dan memelihara dokumentasi sistem komprehensif untuk tiga produk inti, memastikan konsistensi dan aksesibilitas[cite: 33].</p>
                <h4>Front-end Developer - StudentXCEOs Chapter Bandung (Feb-Jun 2025)</h4>
                [cite_start]<p>Mengembangkan dan memelihara antarmuka web responsif untuk *event homepage* dan *dashboard* Grand Summit ke-14 menggunakan **Next.js dan TypeScript**[cite: 131].</p>
            </div>
            
            <div class="modal-section">
                <h3>Pengalaman Organisasi</h3>
                <ul>
                    <li>**HIMATIF UIN SGD (Mar 2025 - Now):** Member of NALAR and Academic Board. [cite_start]Mendistribusikan materi pembelajaran, memfasilitasi *study group*, dan menyediakan bantuan akademik[cite: 138, 139].</li>
                    <li>**CSSMORA UIN SGD (Jul 2025 - Now):** Head of Financial Literacy Department. [cite_start]Mengkoordinasikan tim untuk merancang kurikulum dan memfasilitasi *workshop* literasi keuangan[cite: 150, 158].</li>
                    <li>**CSSMORA UIN SGD (Jun 2024 - Jul 2025):** Head of Marketing Bureau. [cite_start]Mengelola *branding*, promosi, dan kampanye digital, serta berkontribusi pada perencanaan strategis[cite: 144, 145].</li>
                    <li>**AIESEC in Bandung (Oct 2023 - Jan 2024):** Delegates of AIESEC Future Leaders. [cite_start]Berpartisipasi aktif dalam diskusi penyelesaian *study case*[cite: 119, 121].</li>
                    <li>**GDSC UIN Bandung (2023-2024):** Member. [cite_start]Terlibat dalam *technical workshops* dan proyek kolaboratif, familiar dengan Google *tools* dan praktik *open-source*[cite: 162].</li>
                    <li>**OSMHA (Minhajul Haq Student Council) (2021-2022):** Secretary of Art Division. [cite_start]Mengelola dokumentasi resmi, mengkoordinasikan perencanaan acara seni, dan memantau anggaran divisi[cite: 166, 169].</li>
                </ul>
            </div>

            <div class="modal-section">
                <h3>Pendidikan Formal & Pelatihan Kursus</h3>
                <ul>
                    [cite_start]<li>**Bachelor of Science in Informatics Engineering** - UIN SGD Bandung (2023-2027), GPA $3.96/4.0$[cite: 96]. [cite_start]Fokus: Cybersecurity, Blockchain, Networks[cite: 97].</li>
                    <li>**International Students Exchange Program** - Northern University of Malaysia (UUM) (2025-2026). [cite_start]Fokus: Software Development Management, Cybersecurity, Blockchain[cite: 90, 92].</li>
                    <li>**Harvard CS50 Computer Science** - edX (2023-2024). [cite_start]Fokus pada dasar ilmu komputer, algoritma, dan proyek implementasi[cite: 113].</li>
                    [cite_start]<li>**Codingstudio.id course** (2023-2024): Fokus pada dasar *cybersecurity*, jenis serangan, dan eksplorasi kerentanan seperti OWASP 10[cite: 110].</li>
                    [cite_start]<li>**Basic Cybersecurity, Penetration Testing, Linux Command, and Networking** (Pelatihan)[cite: 102].</li>
                </ul>
            </div>
        `
    }
};

// Fungsi untuk membuka modal detail penuh (Dipicu oleh tombol "See More")
function openFullDetailModal(sectionName) {
    const modal = document.getElementById('full-detail-modal');
    const modalTitle = document.getElementById('full-detail-title');
    const modalBody = document.getElementById('full-detail-body');
    const content = fullDetailContents[sectionName];

    modalTitle.textContent = sectionName.toUpperCase();
    modalBody.innerHTML = content ? content.content : `<p>Konten untuk ${sectionName} tidak ditemukan.</p>`;
    
    modal.style.display = "block";
    document.body.style.overflow = 'hidden'; 
    // Mengatur scroll modal ke atas setiap kali dibuka
    modalBody.scrollTop = 0;
}

// Fungsi untuk menutup modal detail penuh
function closeFullDetailModal() {
    const modal = document.getElementById('full-detail-modal');
    modal.style.display = "none";
    document.body.style.overflow = 'auto';
}

// Menutup modal dengan tombol ESC (diperbarui untuk kedua modal)
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeModal(); // Menutup modal Galeri (image-modal)
        closeFullDetailModal(); // Menutup modal Detail Penuh (full-detail-modal)
    }
});

// --- LOGIKA FORMULIR KONTAK (PENGIRIMAN NYATA MELALUI FORMSPREE) ---

document.getElementById('contact-form-professional').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const formAction = form.action;
    const sendButton = form.querySelector('.send-button');

    // Mencegah klik ganda dan memberikan feedback
    const originalText = sendButton.textContent;
    sendButton.textContent = 'Sending...';
    sendButton.disabled = true;

    try {
        const response = await fetch(formAction, {
            method: 'POST',
            body: formData,
            headers: {
                // Header ini penting untuk AJAX submission di Formspree
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            alert('🎉 Pesan Anda berhasil terkirim! Saya akan segera menghubungi Anda melalui email.');
            form.reset();
        } else {
            // Jika ada error dari server Formspree
            const data = await response.json();
            alert('Gagal mengirim pesan. Silakan coba lagi atau hubungi saya via LinkedIn: ' + (data.errors ? data.errors[0].message : 'Error tidak diketahui.'));
        }
    } catch (error) {
        // Jika terjadi kesalahan jaringan
        alert('Terjadi kesalahan jaringan. Silakan cek koneksi Anda.');
    } finally {
        // Kembalikan tombol ke keadaan semula
        sendButton.textContent = originalText;
        sendButton.disabled = false;
    }
});


