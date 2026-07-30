import { useState, useEffect } from 'react'
import './App.css'
import dhruvDevops from './assets/dhruv-devops.png'
import awsRelease from './assets/certifications/aws-release-deploy.jpeg'
import awsEssentials from './assets/certifications/aws-cloud-essentials.jpeg'
import oracleDevopsImg from './assets/certifications/oracle-devops.jpg'
import oracleDevopsPdf from './assets/certifications/oracle-devops.pdf'
import oracleAiImg from './assets/certifications/oracle-ai.jpg'
import oracleAiPdf from './assets/certifications/oracle-ai.pdf'
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaAws,
  FaDocker,
  FaLinux,
  FaPython,
  FaExternalLinkAlt
} from 'react-icons/fa'

import {
  SiTerraform,
  SiKubernetes,
  SiJenkins,
  SiAnsible,
  SiPrometheus,
  SiGrafana
} from 'react-icons/si'
function App() {
    const [activeCompany, setActiveCompany] = useState('scoreme')
    const [activeSection, setActiveSection] = useState('home')
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const handleHeroMouseMove = (e) => {
  const card = e.currentTarget
  const rect = card.getBoundingClientRect()

  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  const centerX = rect.width / 2
  const centerY = rect.height / 2

  const rotateX = ((y - centerY) / centerY) * -3
  const rotateY = ((x - centerX) / centerX) * 3

  card.style.setProperty('--rotateX', `${rotateX}deg`)
  card.style.setProperty('--rotateY', `${rotateY}deg`)

  card.style.setProperty('--mouseX', `${x}px`)
  card.style.setProperty('--mouseY', `${y}px`)
}

const handleHeroMouseLeave = (e) => {
  const card = e.currentTarget

  card.style.setProperty('--rotateX', '0deg')
  card.style.setProperty('--rotateY', '0deg')
}

    const experiences = {
    scoreme: {
      company: 'Scoreme Solutions',
      role: 'DevOps Engineer L1',
      date: 'June 2025 — Present',
      points: [
        'Designed and implemented a secure and private hub-spoke AWS architecture for FinTech projects, enabling network isolation, data privacy, and centralized observability.',
        'Containerized Java-based applications using Docker, stored images in Amazon ECR, and deployed workloads on AWS Fargate.',
        'Integrated ELK Stack, Prometheus, and Grafana for real-time application, API, and system-level monitoring.',
        'Migrated a core monolithic application into 12 independent microservices running on AWS Lambda and Fargate, communicating through Amazon SQS.'
      ]
    },

    monotype: {
      company: 'Monotype Solutions',
      role: 'DevOps Engineer',
      date: 'August 2024 — February 2025',
      points: [
        'Integrated SonarQube and CheckMarx SAST & SCA into CI/CD pipelines across 250+ GitHub repositories.',
        'Saved $40K through resource optimization, EBS gp2 to gp3 migration, and archival of data to Amazon S3 Glacier.',
        'Led the migration of Dockerized ReportPortal from an on-premises environment to AWS.',
        'Automated infrastructure provisioning using Terraform and Ansible, reducing manual effort by 60%.'
      ]
    },

    amway: {
      company: 'Amway',
      role: 'DevOps Intern',
      date: 'June 2024 — August 2024',
      points: [
        'Automated deployments of 11 microservices using Shell scripts and AWS CodePipeline.',
        'Built Lambda-based monitoring integrated with Amazon CloudWatch for automated health checks and real-time alerts.',
        'Designed secure MFA sign-in using Amazon Cognito for internal applications.'
      ]
    }
  }
  const currentExperience = experiences[activeCompany]
  useEffect(() => {
  const revealElements = document.querySelectorAll('.reveal')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.12,
    }
  )

  revealElements.forEach((element) => {
    observer.observe(element)
  })

  return () => {
    observer.disconnect()
  }
}, [])
  useEffect(() => {
  if (menuOpen) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }

  return () => {
    document.body.style.overflow = ''
  }
}, [menuOpen])

  useEffect(() => {
  const handleScroll = () => {
    // Add navbar effect after scrolling
    setScrolled(window.scrollY > 50)

    const sections = [
      'home',
      'about',
      'experience',
      'skills',
      'projects',
      'certifications',
      'contact'
    ]

    let current = 'home'

    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId)

      if (section) {
        const rect = section.getBoundingClientRect()

        if (rect.top <= 180) {
          current = sectionId
        }
      }
    })

    setActiveSection(current)
  }

  window.addEventListener('scroll', handleScroll)

  // Run once when page loads
  handleScroll()

  return () => {
    window.removeEventListener('scroll', handleScroll)
  }
}, [])
  return (
    <>
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
  <a
    href="#home"
    className="logo"
    onClick={() => setMenuOpen(false)}
  >
    DS<span>.</span>
  </a>

  <button
    className={`menu-toggle ${menuOpen ? 'open' : ''}`}
    onClick={() => setMenuOpen(!menuOpen)}
    aria-label="Toggle navigation"
    aria-expanded={menuOpen}
  >
    <span></span>
    <span></span>
    <span></span>
  </button>

  <div className={`nav-links ${menuOpen ? 'mobile-open' : ''}`}>
    <a
      href="#about"
      className={activeSection === 'about' ? 'active' : ''}
      onClick={() => setMenuOpen(false)}
    >
      About
    </a>

    <a
      href="#experience"
      className={activeSection === 'experience' ? 'active' : ''}
      onClick={() => setMenuOpen(false)}
    >
      Experience
    </a>

    <a
      href="#skills"
      className={activeSection === 'skills' ? 'active' : ''}
      onClick={() => setMenuOpen(false)}
    >
      Skills
    </a>

    <a
      href="#projects"
      className={activeSection === 'projects' ? 'active' : ''}
      onClick={() => setMenuOpen(false)}
    >
      Projects
    </a>

    <a
      href="#certifications"
      className={activeSection === 'certifications' ? 'active' : ''}
      onClick={() => setMenuOpen(false)}
    >
      Certifications
    </a>

    <a
      href="#contact"
      className={activeSection === 'contact' ? 'active' : ''}
      onClick={() => setMenuOpen(false)}
    >
      Contact
    </a>

    <a
      href="/Dhruv_Sharma_Resume.pdf"
      target="_blank"
      rel="noreferrer"
      className="resume-nav-button"
      onClick={() => setMenuOpen(false)}
    >
      Resume
    </a>
  </div>
</nav>

      <main>
<section id="home" className="hero-section">
  <div className="hero-container">

    {/* LEFT SIDE */}
    <div className="hero-content">

      <p className="hero-intro">
      </p>

      <h1>
        Dhruv Sharma<span className="name-dot">.</span>
      </h1>
      <h2>DevOps & Cloud Engineer</h2>

      <p className="hero-description">
        I build secure, scalable, and automated cloud infrastructure
        using AWS, Terraform, Docker, Kubernetes, and modern DevOps
        practices.
      </p>

      <div className="hero-buttons">

        <a href="#projects">
          View My Projects
        </a>

        <a
          href="/Dhruv_Sharma_Resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Resume ↗
        </a>

        <a href="#contact">
          Contact Me
        </a>

      </div>

    </div>


    {/* RIGHT SIDE */}
    <div className="hero-visual">

      <div className="hero-image-glow"></div>

      <div
        className="hero-image-card"
        onMouseMove={handleHeroMouseMove}
        onMouseLeave={handleHeroMouseLeave}
        >

        <img
          src={dhruvDevops}
          alt="Dhruv Sharma - DevOps and Cloud Engineer"
          className="hero-profile-image"
        />

        <div className="hero-image-overlay"></div>

      </div>

      <div className="hero-visual-label">
        <span className="status-dot"></span>
        Cloud • DevOps • Automation
      </div>

    </div>

  </div>
</section>
        <section id="about" className="about-section reveal">
  <div className="section-container">

    <div className="section-heading">
      <h2>About Me</h2>
      <div className="heading-line"></div>
    </div>

    <div className="about-content">

      <div className="about-text">
        <p>
          I'm a DevOps & Cloud Engineer with hands-on experience
          designing, automating, deploying, and monitoring cloud
          infrastructure.
        </p>

        <p>
          I currently work as a DevOps Engineer L1 at Scoreme Solutions,
          where I work with AWS infrastructure, containerized applications,
          microservices, CI/CD pipelines, infrastructure automation, and
          observability.
        </p>

        <p>
          My focus is on building secure, scalable, and highly automated
          infrastructure while improving deployment reliability,
          monitoring, and operational efficiency.
        </p>

        <p className="tech-intro">
          Technologies I frequently work with:
        </p>

        <div className="tech-list">
          <span>▹ AWS</span>
          <span>▹ Terraform</span>
          <span>▹ Docker</span>
          <span>▹ Kubernetes</span>
          <span>▹ Jenkins</span>
          <span>▹ Ansible</span>
          <span>▹ Prometheus</span>
          <span>▹ Grafana</span>
        </div>
      </div>

      <div className="about-card">
        <div className="about-card-item">
          <span>Experience</span>
          <strong>DevOps & Cloud</strong>
        </div>

        <div className="about-card-item">
          <span>Primary Cloud</span>
          <strong>AWS</strong>
        </div>

        <div className="about-card-item">
          <span>Current Role</span>
          <strong>DevOps Engineer L1</strong>
        </div>

        <div className="about-card-item">
          <span>Location</span>
          <strong>Gurugram, India</strong>
        </div>
      </div>

    </div>

  </div>
</section>
<section id="experience" className="experience-section reveal">
    <div className="section-container">

    <div className="section-heading">
      <h2>Where I've Worked</h2>
      <div className="heading-line"></div>
    </div>

    <div className="experience-content">

      <div className="company-tabs">

        <button
          className={activeCompany === 'scoreme' ? 'company-tab active' : 'company-tab'}
          onClick={() => setActiveCompany('scoreme')}
        >
          Scoreme
        </button>

        <button
          className={activeCompany === 'monotype' ? 'company-tab active' : 'company-tab'}
          onClick={() => setActiveCompany('monotype')}
        >
          Monotype
        </button>

        <button
          className={activeCompany === 'amway' ? 'company-tab active' : 'company-tab'}
          onClick={() => setActiveCompany('amway')}
        >
          Amway
        </button>

      </div>

      <div
        key={activeCompany}
        className="experience-details"
      >
        <h3>
          {currentExperience.role}
          <span> - {currentExperience.company}</span>
        </h3>

        <p className="experience-date">
          {currentExperience.date}
        </p>

        <ul>
          {currentExperience.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>

      </div>

    </div>

  </div>
</section>
<section id="skills" className="skills-section reveal">
    <div className="section-container">

    <div className="section-heading">
      <h2>Skills & Technologies</h2>
      <div className="heading-line"></div>
    </div>

    <p className="skills-description">
      Technologies and tools I use to build, automate, deploy,
      secure, and monitor cloud infrastructure.
    </p>

    <div className="skills-grid">

      <div className="skill-card stagger card">
        <div className="skill-icon">
  <FaAws />
</div>
        <h3>Cloud</h3>
        <div className="skill-tags">
          <span>AWS</span>
          <span>OCI</span>
          <span>EC2</span>
          <span>Lambda</span>
          <span>S3</span>
          <span>RDS</span>
          <span>ECS</span>
          <span>Fargate</span>
          <span>CloudFront</span>
          <span>Route 53</span>
        </div>
      </div>

      <div className="skill-card stagger card">
        <div className="skill-icon">
  <FaDocker />
</div>
        <h3>Containers & Orchestration</h3>
        <div className="skill-tags">
          <span>Docker</span>
          <span>Kubernetes</span>
          <span>Amazon ECR</span>
          <span>Amazon ECS</span>
          <span>Fargate</span>
        </div>
      </div>

      <div className="skill-card stagger card">
        <div className="skill-icon">
  <SiTerraform />
</div>
        <h3>Infrastructure & Automation</h3>
        <div className="skill-tags">
          <span>Terraform</span>
          <span>Ansible</span>
          <span>Packer</span>
          <span>CloudFormation</span>
        </div>
      </div>

      <div className="skill-card stagger card">
<div className="skill-icon">
  <SiJenkins />
</div>
        <h3>CI/CD & DevSecOps</h3>
        <div className="skill-tags">
          <span>Jenkins</span>
          <span>GitHub Actions</span>
          <span>CodePipeline</span>
          <span>CodeDeploy</span>
          <span>SonarQube</span>
          <span>CheckMarx</span>
        </div>
      </div>

      <div className="skill-card stagger card">
<div className="skill-icon">
  <SiPrometheus />
</div>
        <h3>Monitoring & Security</h3>
        <div className="skill-tags">
          <span>Prometheus</span>
          <span>Grafana</span>
          <span>ELK Stack</span>
          <span>Wazuh</span>
          <span>CloudWatch</span>
          <span>Cloudflare</span>
        </div>
      </div>

      <div className="skill-card stagger card">
 <div className="skill-icon">
  <FaLinux />
</div>
        <h3>Scripting & Systems</h3>
        <div className="skill-tags">
          <span>Linux</span>
          <span>Bash</span>
          <span>Shell</span>
          <span>Python</span>
          <span>YAML</span>
          <span>JSON</span>
          <span>Nginx</span>
          <span>MySQL</span>
        </div>
      </div>

    </div>
  </div>
</section>
<section id="projects" className="projects-section reveal">
  <div className="section-container">

    <div className="section-heading">
      <h2>Featured Projects</h2>
      <div className="heading-line"></div>
    </div>

    <p className="projects-intro">
      Cloud infrastructure, architecture, automation, CI/CD, and
      serverless projects I've worked on professionally and independently.
    </p>


    {/* ========================================
        MAIN PROFESSIONAL PROJECT
    ======================================== */}

    <article className="hub-spoke-project">

      <div className="hub-project-content">

        <p className="project-type">
          Featured Professional Project
        </p>

        <h3>AWS Hub - Spoke Architecture</h3>

        <p className="project-company">
          ScoreMe Solutions
        </p>

        <p className="project-description">
          Designed and worked on a scalable Hub-and-Spoke architecture
          on AWS where a centralized Hub VPC provided core application
          services, shared infrastructure, centralized logging, and
          controlled connectivity across multiple isolated Spoke VPCs.
        </p>

        <p className="project-description">
          Application workloads ran across EC2, AWS Lambda, and ECS
          Fargate. Amazon SQS was used for asynchronous communication
          between application components, while cross-VPC communication
          followed a controlled Spoke → Hub → Spoke model.
        </p>

<div className="project-highlights">
  <span>Centralized Logging</span>
  <span>Shared Services</span>
  <span>Isolated Application VPCs</span>
  <span>SQS Communication</span>
  <span>Controlled Networking</span>
</div>

        <div className="project-tech">
          <span>AWS</span>
          <span>VPC</span>
          <span>API Gateway</span>
          <span>EC2</span>
          <span>Lambda</span>
          <span>Fargate</span>
          <span>SQS</span>
          <span>RDS</span>
          <span>S3</span>
        </div>

      </div>


      {/* ARCHITECTURE VISUAL */}

<div className="architecture-preview">

  <div className="architecture-title">
    AWS HUB & SPOKE ARCHITECTURE
  </div>

  <div className="request-flow animated-request-flow">
  <span>Client</span>

  <div className="flow-path">
    <span className="flow-packet"></span>
  </div>

  <span>API Gateway</span>

  <div className="flow-path flow-delay-1">
    <span className="flow-packet"></span>
  </div>

  <span>Hub</span>
</div>

  <div className="architecture-network">

    {/* SPOKE 1 */}
    <div className="spoke-box">
      <span>Spoke VPC 01</span>
      <small>EC2 • Lambda • Fargate</small>
    </div>

    <div className="connection-line animated-connection">
  <span className="connection-track"></span>
  <span className="connection-packet"></span>
</div>

    {/* CENTRAL HUB */}
    <div className="hub-box">
      <strong>HUB VPC</strong>

      <span>Core Application</span>
      <span>Shared Services</span>
      <span>Centralized Logging</span>
    </div>

    <div className="connection-line">
      ⇄
    </div>

    {/* SPOKE 2 */}
    <div className="spoke-box">
      <span>Spoke VPC 02</span>
      <small>EC2 • Lambda • Fargate</small>
    </div>

  </div>

  <div className="architecture-services">
    <span>SQS</span>
    <span>RDS</span>
    <span>S3</span>
  </div>

  <div className="architecture-flow-label">
    SPOKE → HUB → SPOKE
  </div>

</div>
</article>


    {/* ========================================
        OTHER PROJECTS
    ======================================== */}




    <div className="projects-grid">


      {/* SERVERLESS PROJECT */}

      <article className="project-card">

        <div className="project-top">

          <div className="project-folder">
            ⌁
          </div>

          <a
            href="https://github.com/DhruvSharma1708/AWS-Serverless-web-app-Deployed"
            target="_blank"
            rel="noreferrer"
            className="project-github"
          >
            <FaGithub />
            <span>GitHub</span>
            <FaExternalLinkAlt />
          </a>

        </div>

        <p className="project-type">
          Personal Cloud Project
        </p>

        <h3>AWS Serverless Web App</h3>

        <p className="project-description">
          A scalable serverless web application built on AWS with
          authentication, API-driven CRUD operations, and a fully
          serverless backend architecture.
        </p>

        <div className="project-architecture">
          <span>S3</span>
          <b>→</b>
          <span>CloudFront</span>
          <b>→</b>
          <span>API Gateway</span>
          <b>→</b>
          <span>Lambda</span>
          <b>→</b>
          <span>DynamoDB</span>
        </div>

        <div className="project-tech">
          <span>AWS</span>
          <span>Lambda</span>
          <span>Python</span>
          <span>DynamoDB</span>
          <span>Cognito</span>
          <span>API Gateway</span>
        </div>

      </article>


      {/* CLOUDSTACKOPS */}

      <article className="project-card">

        <div className="project-top">

          <div className="project-folder">
            ⌁
          </div>

          <span className="project-status">
            Infrastructure Project
          </span>

        </div>

        <p className="project-type">
          Personal DevOps Project
        </p>

        <h3>CloudStackOps</h3>

        <p className="project-description">
          A cloud infrastructure and CI/CD project combining a Flask REST
          API with AWS networking, database infrastructure, automated
          provisioning, and continuous deployment.
        </p>

        <div className="project-architecture">
          <span>GitHub</span>
          <b>→</b>
          <span>Jenkins</span>
          <b>→</b>
          <span>Terraform</span>
          <b>→</b>
          <span>AWS</span>
        </div>

        <div className="project-tech">
          <span>Terraform</span>
          <span>Jenkins</span>
          <span>AWS</span>
          <span>Flask</span>
          <span>RDS</span>
          <span>MySQL</span>
        </div>

      </article>

    </div>

  </div>
</section>
<section
  id="certifications"
  className="certifications-section reveal"
>
    <div className="section-container">

    <div className="section-heading">
      <h2>Certifications</h2>
      <div className="heading-line"></div>
    </div>

    <p className="certifications-intro">
      Professional certifications and credentials I've earned across
      cloud computing, DevOps, and AWS technologies.
    </p>

    <div className="certifications-grid">

      {/* ORACLE DEVOPS */}
      <article className="certificate-card">

        <a
          href={oracleDevopsPdf}
          target="_blank"
          rel="noreferrer"
          className="certificate-image-wrapper"
        >
          <img
            src={oracleDevopsImg}
            alt="Oracle Cloud Infrastructure Certified DevOps Professional"
            className="certificate-image"
          />

          <div className="certificate-overlay">
            <span>View Certificate ↗</span>
          </div>
        </a>

        <div className="certificate-info">

          <div className="certificate-provider oracle">
            Oracle
          </div>

          <h3>
            OCI 2025 Certified DevOps Professional
          </h3>

          <div className="certificate-meta">
            <span>Issued Oct 2025</span>
            <span>Valid until Oct 2027</span>
          </div>

          <div className="certificate-buttons">

            <a
              href={oracleDevopsPdf}
              target="_blank"
              rel="noreferrer"
            >
              View Certificate
            </a>

            <a
              href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=6E2250F94FFEB2C425330181BE61A56A87C7813E6F24BB25D3CBD07F3026D05F"
              target="_blank"
              rel="noreferrer"
            >
              Verify ↗
            </a>

          </div>

        </div>
      </article>


      {/* ORACLE AI */}
      <article className="certificate-card">

        <a
          href={oracleAiPdf}
          target="_blank"
          rel="noreferrer"
          className="certificate-image-wrapper"
        >
          <img
            src={oracleAiImg}
            alt="Oracle Cloud Infrastructure Certified AI Foundations Associate"
            className="certificate-image"
          />

          <div className="certificate-overlay">
            <span>View Certificate ↗</span>
          </div>
        </a>

        <div className="certificate-info">

          <div className="certificate-provider oracle">
            Oracle
          </div>

          <h3>
            OCI 2025 Certified AI Foundations Associate
          </h3>

          <div className="certificate-meta">
            <span>Issued Oct 2025</span>
            <span>Valid until Oct 2027</span>
          </div>

          <div className="certificate-buttons">

            <a
              href={oracleAiPdf}
              target="_blank"
              rel="noreferrer"
            >
              View Certificate
            </a>

            <a
              href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=9F1785C546E4975BC0D193A6522CA3D87939AA5C645FF4197806ECA27AB54A78"
              target="_blank"
              rel="noreferrer"
            >
              Verify ↗
            </a>

          </div>

        </div>
      </article>


      {/* AWS RELEASE & DEPLOY */}
      <article className="certificate-card">

        <a
          href={awsRelease}
          target="_blank"
          rel="noreferrer"
          className="certificate-image-wrapper"
        >
          <img
            src={awsRelease}
            alt="DevOps on AWS Release and Deploy Certificate"
            className="certificate-image"
          />

          <div className="certificate-overlay">
            <span>View Certificate ↗</span>
          </div>
        </a>

        <div className="certificate-info">

          <div className="certificate-provider aws">
            AWS
          </div>

          <h3>
            DevOps on AWS: Release and Deploy
          </h3>

          <div className="certificate-meta">
            <span>Issued Jun 2024</span>
            <span>AWS • Coursera</span>
          </div>

          <div className="certificate-buttons">

            <a
              href={awsRelease}
              target="_blank"
              rel="noreferrer"
            >
              View Certificate
            </a>

            <a
              href="https://www.coursera.org/account/accomplishments/verify/AMSHQ2Y28AE7"
              target="_blank"
              rel="noreferrer"
            >
              Verify ↗
            </a>

          </div>

        </div>
      </article>


      {/* AWS CLOUD ESSENTIALS */}
      <article className="certificate-card">

        <a
          href={awsEssentials}
          target="_blank"
          rel="noreferrer"
          className="certificate-image-wrapper"
        >
          <img
            src={awsEssentials}
            alt="AWS Cloud Technical Essentials Certificate"
            className="certificate-image"
          />

          <div className="certificate-overlay">
            <span>View Certificate ↗</span>
          </div>
        </a>

        <div className="certificate-info">

          <div className="certificate-provider aws">
            AWS
          </div>

          <h3>
            AWS Cloud Technical Essentials
          </h3>

          <div className="certificate-meta">
            <span>Issued Jun 2024</span>
            <span>AWS • Coursera</span>
          </div>

          <div className="certificate-buttons">

            <a
              href={awsEssentials}
              target="_blank"
              rel="noreferrer"
            >
              View Certificate
            </a>

            <a
              href="https://www.coursera.org/account/accomplishments/verify/TLM93ZQN9XAJ"
              target="_blank"
              rel="noreferrer"
            >
              Verify ↗
            </a>

          </div>

        </div>
      </article>

    </div>
  </div>
</section>
<section id="contact" className="contact-section reveal">
    <div className="contact-container">

    <p className="contact-number">What's Next?</p>

    <h2>Get In Touch</h2>

    <p className="contact-description">
  I'm always open to discussing DevOps, Cloud Engineering,
  infrastructure automation, and new opportunities. Feel free to
  reach out — I'll be happy to connect.
</p>

<div className="contact-details">

  <div className="contact-detail-item">
    <span>Email</span>

    <a href="mailto:Dhruv.sha21@gmail.com">
      Dhruv.sha21@gmail.com
    </a>
  </div>

  <div className="contact-detail-item">
    <span>Phone</span>

    <a href="tel:+919873536608">
      +91 98735 36608
    </a>
  </div>

</div>

<div className="contact-socials">

  <a
    href="mailto:Dhruv.sha21@gmail.com"
    className="social-link"
    aria-label="Email Dhruv Sharma"
  >
    <FaEnvelope />
    <span>Email</span>
  </a>

  <a
    href="https://github.com/DhruvSharma1708"
    target="_blank"
    rel="noreferrer"
    className="social-link"
    aria-label="Dhruv Sharma GitHub"
  >
    <FaGithub />
    <span>GitHub</span>
  </a>

  <a
    href="https://www.linkedin.com/in/dhruv-sharma-5bbbb21b3"
    target="_blank"
    rel="noreferrer"
    className="social-link"
    aria-label="Dhruv Sharma LinkedIn"
  >
    <FaLinkedinIn />
    <span>LinkedIn</span>
  </a>

</div>

  </div>
</section>


<footer className="footer">

  <p>
    Designed & Built by Dhruv Sharma
  </p>

  <p className="footer-tech">
    React • Vite • CSS
  </p>

</footer>

      </main>
    </>
  )
}

export default App