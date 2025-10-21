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
                <h3>About me and my journey</h3>
                <p>I’m Fatih Maul, an Informatics Engineering student with a strong passion for Cybersecurity, Blockchain, and the evolving world of AI research. My journey in tech started with simple curiosity — how systems work, how data flows, and how security defines trust in the digital age. That curiosity gradually evolved into a commitment: to understand technology not just as a tool, but as a foundation for a more secure and ethical digital world.</p>
                <p>Over time, I’ve explored a wide range of disciplines — from full-stack Web2 development (Next.js & TypeScript) and mobile prototyping (Flutter) to software design, project management, and technical writing. Each experience helped me see technology as a bridge between logic and creativity, between building systems and understanding people who use them.</p>
                <p>My current focus is on Cybersecurity, especially in areas like network defence, penetration testing, and Linux-based system hardening (Kali & Debian). I’m fascinated by how blockchain redefines digital trust and how AI can complement cybersecurity by automating detection, prediction, and resilience. For me, security isn’t just about preventing breaches — it’s about building confidence, transparency, and sustainability in technology.</p>
                <p>Beyond the technical side, I’m also deeply involved in community and leadership. As part of CSS Agency and the CSSMoRA organisation, I’ve worked at the intersection of marketing, publication, and technology, helping teams transform ideas into impactful digital experiences. These roles strengthened my skills in communication, collaboration, and strategic thinking — essential traits for anyone aiming to lead in the tech industry.</p>
                <p>I see technology as a reflection of our way of life. To me, being in tech means constantly learning, questioning, and adapting. I believe in a balanced approach — developing hard technical skills while staying grounded in curiosity, ethics, and purpose. My path forward is guided by one principle: build technology that empowers, protects, and inspires trust.</p>
                <p>In the coming years, I aim to deepen my expertise in Cybersecurity, Blockchain Infrastructure, and AI-driven security systems — eventually leading toward my long-term goal of becoming a Chief Information Security Officer (CISO).</p>
            </div>
            
            <div class="modal-section">
                <h3>Technical Focus</h3>
                <ul class="tech-list-full">
                    <li>Cybersecurity & Network Analysis</li>
                    <li>Blockchain Development & Smart Contract Logic</li>
                    <li>AI-driven Security Research</li>
                    <li>Next.js & TypeScript (Full-stack Web2)</li>
                    <li>Flutter (Mobile Prototyping)</li>
                    <li>Linux Environments (Kali, Debian)</li>
                    <li>Java & Python (OOP)</li>
                    <li>Figma / UI-UX Design</li>
                    <li>Technical Writing & Storytelling</li>
                    <li>Project Management</li>
                </ul>
            </div>
        `
    },
    'Projects': {
    title: "Complete Project Experience",
    content: `
        <div class="modal-section">
            <h3>Ibunda.id Software Documentation and User Manuals (2025)</h3>
            <p><strong>Role: Technical Writer</strong></p>
            <p>Developed and maintained comprehensive <strong>system documentation</strong> and <strong>role-based user manuals</strong> for three core products — two web platforms and one mobile application. Structured technical archives and ensured documentation consistency across multidisciplinary teams, contributing to improved system maintainability and onboarding efficiency.</p>
            <ul class="tech-list-full">
                <li>GitLab</li><li>Notion</li><li>Figma</li><li>SonarQube</li><li>Laravel</li><li>Golang</li><li>CI/CD Pipeline</li><li>AWS</li>
            </ul>
        </div>
        
        <div class="modal-section">
            <h3>StudentxCEOs Grand Summit 14th Website (2025)</h3>
            <p><strong>Role: Frontend Developer</strong></p>
            <p>Built a responsive <strong>event website</strong> for the Grand Summit 14th conference, integrating <strong>user authentication (login & registration)</strong> and a complete <strong>submission flow</strong> for participants. Implemented a scalable frontend architecture using <strong>Next.js and TypeScript</strong>, delivering a production-ready platform optimised for speed, reliability, and UX consistency.</p>
            <ul class="tech-list-full">
                <li>Next.js</li><li>TypeScript</li><li>GitHub</li><li>Postman</li><li>Figma</li>
            </ul>
        </div>

        <div class="modal-section">
            <h3>Campus Whistle-Blowing System (2024)</h3>
            <p><strong>Role: Project Manager & Web Developer</strong></p>
            <p>Led the development of a <strong>web-based reporting platform</strong> designed for campus facility complaints with full CRUD functionalities. Implemented backend architecture using <strong>native PHP and MySQL</strong>, ensuring data confidentiality, structured workflows, and role-based access for administrators and users.</p>
            <ul class="tech-list-full">
                <li>PHP</li><li>phpMyAdmin</li><li>HTML / CSS / JavaScript</li>
            </ul>
        </div>

        <div class="modal-section">
            <h3>Mobile E-commerce App Design & Prototype (2023–2024)</h3>
            <p><strong>Role: UI/UX Designer & Mobile Developer</strong></p>
            <p>Designed and developed a <strong>functional mobile prototype</strong> for an e-commerce application focusing on user experience and interaction flow. Created wireframes and interactive mockups in Figma and implemented front-end logic using <strong>Flutter and Dart</strong>, introducing basic <strong>state management</strong> principles for smooth navigation.</p>
            <ul class="tech-list-full">
                <li>Figma</li><li>Flutter (Dart)</li>
            </ul>
        </div>

        <div class="modal-section">
            <h3>Banking System Simulation (2023)</h3>
            <p><strong>Role: Software Developer</strong></p>
            <p>Developed a desktop-based <strong>banking simulator</strong> featuring core functionalities such as deposit, withdrawal, and transfer. Applied strong <strong>Object-Oriented Programming (OOP)</strong> principles in Java to simulate transactional logic and user data management.</p>
            <ul class="tech-list-full">
                <li>Java (OOP)</li><li>IntelliJ IDEA</li><li>Database Integration</li>
            </ul>
        </div>

        <div class="modal-section">
            <h3>Dijkstra Pathfinding App (2024)</h3>
            <p><strong>Role: Algorithm Developer</strong></p>
            <p>Developed a GUI-based application that demonstrates <strong>Dijkstra’s Algorithm</strong> for shortest-path calculation. Implemented graph structures, traversal logic, and interactive visualization using <strong>Java Swing</strong> for educational and demonstrative purposes.</p>
            <ul class="tech-list-full">
                <li>Java</li><li>Java Swing</li><li>Algorithm Design</li>
            </ul>
        </div>

        <div class="modal-section">
            <h3>Psychology-based Game Project (2024)</h3>
            <p><strong>Role: Project Manager & Game Developer</strong></p>
            <p>Led a two-member development team to build a <strong>psychology-inspired prototype game</strong> exploring behavioural responses and player interaction. Oversaw project scope, design direction, and implementation using <strong>Unity and C#</strong>.</p>
            <ul class="tech-list-full">
                <li>Unity</li><li>C#</li><li>Game Design</li><li>Leadership</li>
            </ul>
        </div>

        <div class="modal-section">
            <h3>IoT Item Counter System (2024)</h3>
            <p><strong>Role: Embedded Systems Developer</strong></p>
            <p>Designed an <strong>IoT-based counting system</strong> using ultrasonic sensors and Arduino to detect and record item flow in real-time. Programmed in C and optimized for stable sensor communication and minimal hardware latency.</p>
            <ul class="tech-list-full">
                <li>Arduino</li><li>C Programming</li><li>Ultrasonic Sensor</li><li>Embedded Systems</li>
            </ul>
        </div>

        <div class="modal-section">
            <h3>WordPress Blog Platform (2023)</h3>
            <p><strong>Role: Content Creator & Web Administrator</strong></p>
            <p>Created and managed a personal <strong>WordPress blog</strong> focusing on technology and self-development topics. Applied <strong>SEO optimisation</strong> techniques and improved content structure to enhance online visibility and audience engagement.</p>
            <ul class="tech-list-full">
                <li>WordPress</li><li>SEO Basics</li><li>Web Administration</li>
            </ul>
        </div>

        <div class="modal-section">
            <h3>Library Management System (2023)</h3>
            <p><strong>Role: Software Developer</strong></p>
            <p>Developed a desktop application for <strong>library management</strong> with full CRUD capabilities and input validation. Built with Java using <strong>Object-Oriented Programming (OOP)</strong> principles and designed for efficient book tracking and user record management.</p>
            <ul class="tech-list-full">
                <li>Java (OOP)</li><li>GUI Application</li><li>Database Integration</li>
            </ul>
        </div>
    `
},

    'Experience': {
    title: "Riwayat Organisasi, Pendidikan, dan Pelatihan",
    content: `
        <div class="modal-section">
            <h3>Key Roles (Technical & Leadership)</h3>
            
            <div class="project">
                <h4>Founder & Full-stack Developer — CSS Agency (2024–Now)</h4>
                <p>Founded and led a student-based media agency providing digital marketing and web development services. 
                Built the core platform using <strong>Next.js</strong> and <strong>TypeScript</strong>, integrated API endpoints, 
                and designed the automation structure for order processing. Focused on scalability and system security.</p>
            </div>

            <div class="project">
                <h4>Technical Writer — Ibunda.id (2025)</h4>
                <p>Created and maintained comprehensive system documentation for three core products, 
                ensuring consistency, accessibility, and technical clarity for both internal and client use.</p>
            </div>

            <div class="project">
                <h4>Front-end Developer — StudentXCEOs Chapter Bandung (Feb–Jun 2025)</h4>
                <p>Developed and maintained responsive web interfaces for the <em>Grand Summit 14th</em> 
                event homepage and competition dashboard using <strong>Next.js</strong> and <strong>TypeScript</strong>. 
                Collaborated with backend teams for seamless API integration and secure participant data management.</p>
            </div>

            <div class="project">
                <h4>Cybersecurity Developer — Student Financial Aid System (2025)</h4>
                <p>Built a secure financial aid management system using <strong>PHP Native</strong> with 
                <strong>JWT authentication</strong>. Implemented file upload verification, role-based access control, 
                and secure data distribution dashboards for admin and student users.</p>
            </div>

            <div class="project">
                <h4>Blockchain Portfolio Project — Personal Research (2025)</h4>
                <p>Currently developing a decentralized personal portfolio integrated with <strong>Solidity</strong> for 
                backend smart contracts and hosted on a blockchain environment. Focused on transparency, digital identity, 
                and cryptographic verification principles.</p>
            </div>
        </div>
        
        <div class="modal-section">
            <h3>Organisational Experience</h3>
            <ul>
                <li><strong>Head of Financial Literacy Department — CSSMoRA UIN SGD (Jul 2025–Now):</strong> 
                    Coordinating a team to design literacy programs and host financial education workshops for scholarship recipients.</li>
                <li><strong>Head of Marketing Bureau — CSSMoRA UIN SGD (Jun 2024–Jul 2025):</strong> 
                    Managed digital campaigns, handled branding initiatives, and contributed to strategic growth planning.</li>
                <li><strong>Head of Online Marketing — CSS Media Agency (2024–Now):</strong> 
                    Led the digital marketing strategy, focusing on data-driven campaigns, conversion analytics, and SEO optimisation.</li>
                <li><strong>Member of Academic Support & NALAR — HIMATIF UIN SGD (Mar 2025–Now):</strong> 
                    Facilitated peer learning sessions, curated academic materials, and helped mentor junior students in technical areas.</li>
                <li><strong>Delegate — AIESEC in Bandung (Oct 2023–Jan 2024):</strong> 
                    Participated in strategic leadership workshops and real-world case study discussions.</li>
                <li><strong>Member — GDSC UIN Bandung (2023–2024):</strong> 
                    Engaged in collaborative technical projects, gaining exposure to Google’s open-source tools and best practices.</li>
                <li><strong>Secretary of Art Division — OSMHA (2021–2022):</strong> 
                    Managed event documentation, creative planning, and budgeting for art-related student initiatives.</li>
            </ul>
        </div>

        <div class="modal-section">
            <h3>Education & Training</h3>
            <ul>
                <li><strong>Bachelor of Science in Informatics Engineering</strong> — UIN Sunan Gunung Djati Bandung (2023–2027), GPA 3.96/4.0.<br>
                Focus: <em>Cybersecurity, Blockchain, Artificial Intelligence, and Networks.</em></li>
                
                <li><strong>International Student Exchange Program</strong> — Northern University of Malaysia (UUM) (2025–2026).<br>
                Focus: <em>Software Development Management, Cybersecurity, Blockchain Research.</em></li>
                
                <li><strong>Harvard CS50: Introduction to Computer Science</strong> — edX (2023–2024).<br>
                Comprehensive study of computer science fundamentals, algorithms, and hands-on project implementation.</li>
                
                <li><strong>Codingstudio.id Course</strong> — (2023–2024).<br>
                Introduction to cybersecurity fundamentals, attack types, and vulnerability exploration including OWASP Top 10.</li>
                
                <li><strong>Cybersecurity & Networking Bootcamp</strong> — (Private Training, 2024).<br>
                Covered topics on penetration testing, Linux command line, and network configuration using Kali & Debian environments.</li>

                <li><strong>AI & Quantitative Finance Research</strong> — (Independent Study, 2025).<br>
                Conducted regression-based analysis on altcoin price trends using <strong>Python</strong> for quantitative finance modelling.</li>
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


