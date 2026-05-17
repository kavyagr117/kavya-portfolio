// ─── Navigation ───────────────────────────────────────────────────────────────
export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

// ─── Hero ──────────────────────────────────────────────────────────────────────
export const hero = {
  greeting: 'Hi, I\'m',
  name: 'Kavya G R',
  roles: ['QA Engineer', 'Python Developer', 'Cybersecurity Enthusiast'],
  bio: 'Computer Science & Cyber Security student at Garden City University, building a career at the intersection of software quality, automation engineering, and offensive security. Currently driving QA at SuperAGI.',
  github: 'https://github.com/kavyagr117',
  linkedin: 'https://www.linkedin.com/in/kavyagr20',
  email: 'kavyagr50@gmail.com',
  phone: '+91 6366669563',
};

// ─── About ────────────────────────────────────────────────────────────────────
export const about = {
  paragraphs: [
    "I'm a final-year Computer Science & Cyber Security student at Garden City University with a 9.2 CGPA — focused on building things that are both robust and secure. My internship journey has taken me from writing test plans and hunting bugs at product startups, to researching Active Directory attack paths and network topologies.",
    "On the QA side, I own the full testing lifecycle: requirement analysis, test case design, API validation with Postman, and building Selenium automation suites. I understand that quality is a shared responsibility — not a phase bolted on at the end.",
    "My cybersecurity work lives in a hands-on lab environment where I practice offensive techniques using BloodHound, Impacket, and Nmap, then flip to the defensive side to build Splunk detection rules that catch the same attacks.",
    "I'm actively looking for roles in QA engineering, test automation, Python development, or entry-level cybersecurity — wherever I can ship something meaningful.",
  ],
  highlights: [
    'Manual & Automation Testing',
    'Python Scripting',
    'API Testing',
    'Cybersecurity Research',
    'JIRA & Bug Tracking',
    'Nmap & Network Analysis',
  ],
  education: {
    institution: 'Garden City University',
    degree: 'B.Tech — Computer Science & Cyber Security',
    period: '2022 – 2026',
    cgpa: '9.2',
  },
};

// ─── Experience ───────────────────────────────────────────────────────────────
export const experiences = [
  {
    id: 'superagi',
    company: 'SuperAGI',
    shortName: 'SuperAGI',
    role: 'Quality Assurance Intern',
    period: 'Jan 2026 – Present',
    location: 'Bengaluru, KA',
    type: 'Full-time Internship',
    points: [
      'Owned end-to-end QA for the Analytics module — from requirement analysis through regression — ensuring accurate, production-grade dashboard insights reached users.',
      'Identified the highest-impact defects during the company-wide Bug Bash, including critical and edge-case issues that had evaded prior review, earning 1st Prize.',
      'Collaborated daily with engineering and product to close defects early in the SDLC and maintain quality gates across release cycles.',
    ],
  },
  {
    id: 'bilvaleaf',
    company: 'Bilvaleaf',
    shortName: 'Bilvaleaf',
    role: 'Quality Assurance Intern',
    period: 'Apr – Oct 2025',
    location: 'Bengaluru, KA',
    type: 'Internship',
    points: [
      'Designed and executed 100+ test cases across web application workflows, uncovering and documenting 100+ reproducible bugs with clear steps-to-reproduce.',
      'Worked alongside developers throughout the SDLC to verify fixes, run regression cycles, and push higher-quality builds to production.',
      'Gained hands-on expertise with bug tracking in JIRA, test documentation standards, and systematic defect triage.',
    ],
  },
  {
    id: 'zetpeak',
    company: 'Zetpeak',
    shortName: 'Zetpeak',
    role: 'Python & Cyber Research Intern',
    period: 'Aug – Nov 2025',
    location: 'Bengaluru, KA',
    type: 'Internship',
    points: [
      'Wrote and debugged Python scripts that automated repetitive development workflows, reducing manual effort across the engineering team.',
      'Conducted network security research using Nmap — mapping network topologies, identifying open ports and vulnerabilities, and analysing attack surfaces.',
      'Produced structured research reports on discovered vulnerability patterns to guide remediation strategy.',
    ],
  },
];

// ─── Skills ───────────────────────────────────────────────────────────────────
export const skills = [
  {
    category: 'Languages',
    items: ['Python', 'SQL', 'Bash / Shell'],
  },
  {
    category: 'QA & Testing',
    items: ['Manual Testing', 'Automation Testing', 'API Testing', 'Regression Testing', 'SDLC', 'Test Planning'],
  },
  {
    category: 'Automation & Tools',
    items: ['Selenium', 'Postman', 'JIRA', 'Git & GitHub'],
  },
  {
    category: 'Cybersecurity',
    items: ['Nmap', 'BloodHound', 'Impacket', 'Kerberoasting', 'Splunk', 'Network Analysis', 'Active Directory'],
  },
  {
    category: 'Libraries & Frameworks',
    items: ['OpenCV', 'MediaPipe', 'NumPy'],
  },
  {
    category: 'Soft Skills',
    items: ['Issue Resolution', 'Agility', 'Anticipatory Mindset', 'Cross-team Collaboration'],
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────
export const projects = [
  {
    number: '01',
    title: 'Eye-Controlled Mouse System',
    tagline: 'Accessibility · Computer Vision · Python',
    description:
      'A hands-free computer interaction system that replaces traditional mouse input with real-time gaze tracking. Built with a computer vision pipeline achieving sub-100ms latency, making devices fully accessible without any physical contact.',
    highlights: [
      '90%+ gaze accuracy with sub-100ms latency pipeline',
      'Blink-based left-click detection at 80% precision',
      'Zero hardware dependency — runs on any standard webcam',
      'Designed for accessibility: removes reliance on traditional input devices',
    ],
    tech: ['Python', 'OpenCV', 'MediaPipe', 'Computer Vision', 'NumPy'],
    github: 'https://github.com/kavyagr117',
    live: null,
    date: 'March 2025',
  },
  {
    number: '02',
    title: 'AD Enumeration & Post-Exploitation Lab',
    tagline: 'Cybersecurity · Offensive Research · Detection Engineering',
    description:
      'A purpose-built Active Directory attack simulation environment for studying offensive techniques and engineering defensive detection capabilities. Covers the full kill chain from initial enumeration to lateral movement.',
    highlights: [
      'Simulated Kerberoasting, AS-REP roasting, and lateral movement',
      'BloodHound attack path mapping on a realistic AD topology',
      'Splunk detection rules tuned to catch post-exploitation indicators',
      'Custom dashboards for monitoring suspicious authentication events',
    ],
    tech: ['BloodHound', 'Impacket', 'Splunk', 'Nmap', 'Active Directory', 'Kerberos'],
    github: 'https://github.com/kavyagr117',
    live: null,
    date: 'January 2025',
  },
];

// ─── Certifications ───────────────────────────────────────────────────────────
export const certifications = [
  {
    name: 'Cyber Job Simulation',
    issuer: 'Deloitte Australia',
    description: 'Hands-on cybersecurity simulation covering real-world incident response and threat analysis scenarios.',
    icon: '🔐',
    color: 'from-blue-500/10 to-indigo-500/5',
    border: 'border-blue-500/15',
  },
  {
    name: 'Python Essentials',
    issuer: 'Cisco Network Academy',
    description: 'Foundational to intermediate Python programming, data structures, and scripting methodologies.',
    icon: '🐍',
    color: 'from-yellow-500/10 to-orange-500/5',
    border: 'border-yellow-500/15',
  },
  {
    name: 'AWS Code Deploy',
    issuer: 'Infosys Springboard',
    description: 'Cloud deployment pipelines, CI/CD workflows, and automated release strategies on AWS infrastructure.',
    icon: '☁️',
    color: 'from-orange-500/10 to-amber-500/5',
    border: 'border-orange-500/15',
  },
];

// ─── Achievements ─────────────────────────────────────────────────────────────
export const achievements = [
  {
    title: 'HP Student Ambassador',
    description:
      'Recognised by HP for promoting technology literacy and community engagement — earned an official ambassador badge for outreach and awareness initiatives across campus.',
    icon: '🏅',
  },
  {
    title: 'Microsoft Tech Events',
    description:
      'Regular attendee at Microsoft\'s weekend developer sessions in Bengaluru, staying sharp on emerging tools and growing a genuine professional network in the industry.',
    icon: '💡',
  },
  {
    title: '1st Prize — SuperAGI Bug Bash',
    description:
      'Earned top honours in an internal Bug Bash competition by identifying the most critical and impactful defects — including edge cases that had bypassed earlier review stages.',
    icon: '🏆',
  },
  {
    title: 'Social Media & Brand Campaigns',
    description:
      'Managed and optimised content strategies across platforms, driving measurable engagement growth and strengthening brand presence for initiatives I contributed to.',
    icon: '📈',
  },
];
