const pageData = {
  profile: {
    file: "profile.md",
    command: "cat profile.md",
    result: "// Profile loaded",
    lines: 12,
    html: `<section class="hero"><div class="avatar"><div class="avatar-inner"><svg viewBox="0 0 140 140" role="img" aria-label="Default illustrated female avatar"><defs><linearGradient id="hair" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#a78bfa"/><stop offset="1" stop-color="#ff4fd8"/></linearGradient></defs><path d="M31 128V70C31 39 47 19 70 19s39 20 39 51v58H31Z" fill="url(#hair)"/><ellipse cx="70" cy="64" rx="27" ry="33" fill="#f3b6df"/><path d="M42 60C39 34 54 18 72 18c21 0 31 17 29 39-7-2-14-11-18-21-10 13-23 19-41 24Z" fill="url(#hair)"/><path d="M49 84c6 8 14 12 21 12s15-4 21-12l5 44H44l5-44Z" fill="#e6a4d5"/><path d="M22 137c2-24 20-38 38-42l10 12 10-12c19 4 36 18 38 42Z" fill="url(#hair)"/></svg></div></div><div class="hero-copy"><div class="eyebrow">// HELLO, WORLD — I AM</div><h1>Wajeeha <span class="cyan">Attique</span><span class="pink">.</span></h1><p class="tagline">Computer Science Student <span class="muted">|</span> <span class="purple">AI Enthusiast</span></p><div class="badge-row"><span class="badge">CS STUDENT</span><span class="badge pink-badge">AI ENTHUSIAST</span><span class="badge">5TH SEMESTER</span></div><p class="hero-desc"><span class="comment">/**</span><br>I’m a fifth-semester Computer Science student interested in AI and related fields. I’m building my foundations in programming and web development while exploring how technology can solve real-world problems.<br><span class="comment">*/</span></p><div class="hero-actions"><button class="action-btn primary" data-go="projects">Explore my work ↗</button><button class="action-btn" data-go="contact">$ contact --me</button></div></div></section>`,
  },
  skills: {
    file: "skills.js",
    command: "node skills.js",
    result: "// Skills module ready",
    lines: 12,
    html: `<h2><span class="keyword">const</span> skills <span class="muted">=</span> <span class="purple">{</span></h2><div class="panel-grid"><div class="mini-card"><h3><span class="cyan">technical</span>: [</h3><div class="skill-row"><span>C++</span><div class="skill-track"><div class="skill-fill" style="--w:40%"></div></div><span class="skill-value">Basic</span></div><div class="skill-row"><span>Java</span><div class="skill-track"><div class="skill-fill" style="--w:40%"></div></div><span class="skill-value">Basic</span></div><div class="skill-row"><span>HTML</span><div class="skill-track"><div class="skill-fill" style="--w:50%"></div></div><span class="skill-value">Basic</span></div><div class="skill-row"><span>CSS</span><div class="skill-track"><div class="skill-fill" style="--w:40%"></div></div><span class="skill-value">Basic</span></div><div class="skill-row"><span>JavaScript</span><div class="skill-track"><div class="skill-fill" style="--w:35%"></div></div><span class="skill-value">Basic</span></div><p class="comment">], // growing every day</p></div><div class="mini-card"><h3><span class="pink">softSkills</span>: [</h3><p><span class="string">"Problem Solving"</span>,</p><p><span class="string">"Attention to Detail"</span>,</p><p><span class="string">"Team Collaboration"</span></p><p class="comment">],</p><h3 style="margin-top:14px"><span class="cyan">currentlyLearning</span>:</h3><p><span class="string">"Git & GitHub"</span></p><div class="learning-grid">${"<i></i>".repeat(40)}</div><p class="comment">// Small commits, steady progress.</p></div></div><p class="comment" style="margin-top:13px"><span class="purple">};</span> <span class="muted">// Skills grow with practice and projects.</span></p>`,
  },
  languages: {
    file: "languages.json",
    command: "cat languages.json",
    result: "// Language data parsed",
    lines: 8,
    html: `<h2><span class="keyword">const</span> languages <span class="muted">=</span> <span class="purple">[</span></h2><div class="panel-grid"><div class="mini-card"><h3><span class="cyan">{</span> <span class="muted">01</span></h3><p><span class="pink">"language"</span>: <span class="string">"Urdu"</span>,</p><p><span class="pink">"status"</span>: <span class="string">"Fluent"</span></p><h3 style="margin-top:10px"><span class="cyan">}</span></h3></div><div class="mini-card"><h3><span class="cyan">{</span> <span class="muted">02</span></h3><p><span class="pink">"language"</span>: <span class="string">"English"</span>,</p><p><span class="pink">"status"</span>: <span class="string">"Working proficiency"</span></p><h3 style="margin-top:10px"><span class="cyan">}</span></h3></div></div><p class="comment" style="margin-top:16px"><span class="purple">]</span> <span class="muted">// Communication is part of collaboration.</span></p>`,
  },
  education: {
    file: "education.json",
    command: "cat education.json",
    result: "// Education record loaded",
    lines: 9,
    html: `<h2><span class="keyword">const</span> education <span class="muted">=</span> <span class="purple">{</span></h2><div class="code-block"><div class="code-line"><span class="pink">"institute"</span>: <span class="string">"Qarshi University"</span>,</div><div class="code-line"><span class="pink">"program"</span>: <span class="string">"BS Computer Science"</span>,</div><div class="code-line"><span class="pink">"duration"</span>: <span class="string">"5th Semester — In Progress"</span>,</div><div class="code-line"><span class="pink">"location"</span>: <span class="string">"Pakistan"</span></div></div><p class="comment" style="margin-top:15px"><span class="purple">};</span></p><div class="mini-card" style="margin-top:13px;max-width:780px"><h3><span class="lime">●</span> Current focus</h3><p>Strengthening programming fundamentals, web development skills, and exploring AI-related learning opportunities.</p></div>`,
  },
  projects: {
    file: "projects/",
    command: "git status --short",
    result: "// 1 academic project found",
    lines: 11,
    html: `<h2><span class="keyword">const</span> projects <span class="muted">=</span> <span class="purple">[</span></h2><div class="repo-card"><div class="repo-head"><div><div class="repo-title">⌘　Digicams Website</div><p class="comment" style="margin-top:7px">Web Technologies Lab · Academic project</p></div><span class="repo-tag">PUBLIC REPO</span></div><p style="color:#b0badb;line-height:1.8;margin-top:15px">A website about digital cameras, created as part of the Web Technologies lab to practise front-end web development.</p><div class="tag-row"><span class="tech-tag">● HTML</span><span class="tech-tag">● CSS</span><span class="tech-tag">● JavaScript</span></div><p class="comment" style="margin-top:15px">https://rewind-retrodigicam.vercel.app/</p></div><p class="comment" style="margin-top:13px"><span class="purple">]</span></p>`,
  },
  certifications: {
    file: "certifications.md",
    command: "cat certifications.md",
    result: "// Learning in progress",
    lines: 11,
    html: `<h2><span class="keyword">#</span> Certifications & Learning</h2><p class="comment" style="margin-bottom:14px">// Courses currently in progress on Coursera</p><div class="mini-card" style="max-width:700px"><div class="cert-row"><div><div class="cert-name">Google AI</div><div class="progress"><span style="--w:3%"></span></div></div><span class="cert-state">IN PROGRESS</span></div><div class="cert-row"><div><div class="cert-name">Google AI Essentials</div><div class="progress"><span style="--w:2%"></span></div></div><span class="cert-state">IN PROGRESS</span></div></div><h3 style="margin-top:17px">Currently learning</h3><p style="color:#aeb8dc">Git and GitHub <span class="lime">●</span> <span class="muted">Building consistency one step at a time.</span></p><div class="learning-grid">${"<i></i>".repeat(50)}</div>`,
  },
  contact: {
    file: "contact.sh",
    command: "contact --status",
    result: "// Ready to connect",
    lines: 10,
    html: `<h2><span class="keyword">#!/bin/bash</span> <span class="muted"># Let's connect</span></h2><div class="code-block"><div class="code-line"><span class="lime">$</span> echo <span class="string">"Wajeeha Attique"</span></div><div class="code-line"><span class="comment"># Computer Science Student · AI Enthusiast</span></div><div class="code-line" style="margin-top:13px"><span class="cyan">EMAIL</span>　 <a href="mailto:wajeehattique@gmail.com" class="string">wajeehattique@gmail.com</a></div><div class="code-line"><span class="cyan">PHONE</span>　 <span class="string">0123-4567899</span></div><div class="code-line"><span class="cyan">GITHUB</span>　 <a href="https://github.com/" target="_blank" rel="noreferrer" class="string">github.com ↗</a></div></div><div class="hero-actions"><a class="action-btn" href="mailto:wajeehattique@gmail.com">Send an email ↗</a><button class="action-btn primary" id="downloadCv">⇩ Download CV</button></div><p class="comment" style="margin-top:12px">// Replace sample contact details before publishing.</p>`,
  },
};
const content = document.getElementById("content");
const crumb = document.getElementById("crumb");
const lineNumbers = document.getElementById("lineNumbers");
const terminalCommand = document.getElementById("terminalCommand");
const terminalResult = document.getElementById("terminalResult");
function showPage(key) {
  const page = pageData[key] || pageData.profile;
  content.innerHTML = page.html;
  crumb.textContent = page.file;
  terminalCommand.textContent = page.command;
  terminalResult.textContent = "  " + page.result;
  lineNumbers.innerHTML = Array.from(
    { length: page.lines },
    (_, i) => i + 1,
  ).join("<br>");
  document
    .querySelectorAll("[data-page]")
    .forEach((el) => el.classList.toggle("active", el.dataset.page === key));
  document
    .querySelectorAll(".tab")
    .forEach((el) => el.classList.toggle("active", el.dataset.page === key));
  const file = document.querySelector(`.file[data-page="${key}"]`);
  if (file && key !== "profile") file.classList.add("active");
}
document.addEventListener("click", (e) => {
  const nav = e.target.closest("[data-page], [data-go]");
  if (nav) {
    e.preventDefault();
    showPage(nav.dataset.page || nav.dataset.go);
  }
  if (e.target.closest("#downloadCv")) {
    const note = document.getElementById("terminalResult");
    note.textContent = "  // Add your actual CV PDF to enable download.";
  }
});
showPage("profile");
