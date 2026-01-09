import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Hi, I&apos;m @viollenaki</h1>
        <p className={styles.welcomeText}>Welcome to my portfolio</p>
      </header>

      <section className={styles.section}>
        <h2>Connect with Me</h2>
        <div className={styles.socialLinks}>
          <a href="https://instagram.com/viollenaki" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/badge/Instagram-%40viollenaki-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram" />
          </a>
          <a href="https://t.me/viollenaki" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/badge/Telegram-%40viollenaki-26A5E4?style=for-the-badge&logo=telegram&logoColor=white" alt="Telegram" />
          </a>
          <a href="https://x.com/viollenaki" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/badge/X-%40viollenaki-000000?style=for-the-badge&logo=x&logoColor=white" alt="X" />
          </a>
          <a href="https://www.threads.net/viollenaki" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/badge/Threads-%40viollenaki-000000?style=for-the-badge&logo=threads&logoColor=white" alt="Threads" />
          </a>
          <a href="https://linkedin.com/in/akbar-sharipov" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/badge/LinkedIn-Akbar%20Sharipov-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
          </a>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.animationContainer}>
          <Image
            src="https://repository-images.githubusercontent.com/507089682/889a6863-d25c-4a54-b2c5-8efad7260eeb"
            alt="My Animation"
            width={800}
            height={400}
            className={styles.animationImage}
            unoptimized
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2>💻 My Skills</h2>
        
        <div className={styles.skillsSection}>
          <h3>Languages & Frameworks</h3>
          <div className={styles.skillIcons}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" width="40" height="40" alt="Python" title="Python" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" width="40" height="40" alt="C++" title="C++" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" width="40" height="40" alt="Dart" title="Dart" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" width="43" height="43" alt="Java" title="Java" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" width="40" height="40" alt="Kotlin" title="Kotlin" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" width="40" height="40" alt="Swift" title="Swift" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="40" height="40" alt="HTML5" title="HTML5" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="40" height="40" alt="CSS3" title="CSS3" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="40" height="40" alt="JavaScript" title="JavaScript" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" width="40" height="40" alt="Flutter" title="Flutter" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" width="40" height="40" alt="Django" title="Django" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" width="40" height="40" alt="FastAPI" title="FastAPI" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/qt/qt-original.svg" width="41" height="41" alt="Qt" title="Qt" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="40" height="40" alt="React" title="React" />
          </div>
        </div>

        <div className={styles.skillsSection}>
          <h3>Databases</h3>
          <div className={styles.skillIcons}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" width="40" height="40" alt="SQLite" title="SQLite" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" width="40" height="40" alt="MySQL" title="MySQL" />
          </div>
        </div>

        <div className={styles.skillsSection}>
          <h3>Tools & Technologies</h3>
          <div className={styles.skillIcons}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="40" height="40" alt="Git" title="Git" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="40" height="40" alt="GitHub" title="GitHub" />
            <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" width="40" height="40" alt="Figma" title="Figma" />
            <img src="https://img.icons8.com/?size=100&id=AYxtdcQOzPA3&format=png&color=000000" width="40" height="40" alt="Atlassian" title="Atlassian" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" width="44" height="44" alt="Photoshop" title="Photoshop" />
            <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" width="40" height="40" alt="Firebase" title="Firebase" />
            <img src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/google-analytics.svg" width="40" height="40" alt="Google Analytics" title="Google Analytics" />
            <img src="https://companieslogo.com/img/orig/brevo_BIG-bfe19409.png?t=1720244494" width="80" height="40" alt="Brevo" title="Brevo" />
            <img src="https://posthog.com/brand/posthog-logo@2x.png" width="210" height="40" alt="PostHog" title="PostHog" />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.streakContainer}>
          <h3>Daily Streak</h3>
          <img src="https://streak-stats.demolab.com/?user=viollenaki" alt="GitHub Streak" className={styles.statsImage} />
        </div>
      </section>

      <section className={`${styles.section} ${styles.statsSection}`}>
        <h2>📊 GitHub Stats</h2>
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <img src="https://github-readme-stats.vercel.app/api?username=viollenaki&show_icons=true&theme=tokyonight" alt="viollenaki's GitHub Stats" className={styles.statsImage} />
          </div>
          <div className={styles.statCard}>
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=viollenaki&layout=compact&theme=tokyonight" alt="Top Languages" className={styles.statsImage} />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>📈 Activity Graph</h2>
        <div className={styles.statCard}>
          <img src="https://github-readme-activity-graph.vercel.app/graph?username=viollenaki&theme=tokyo-night&bg_color=1a1b27&color=38bdae&line=70a5fd&point=bf91f3&area=true&hide_border=true" alt="GitHub Activity Graph" className={styles.statsImage} />
        </div>
      </section>

      <section className={styles.section}>
        <h2>⚡ GitHub Metrics</h2>
        <div className={styles.metricsGrid}>
          <div>
            <img src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=viollenaki&theme=tokyonight" alt="Profile Summary" className={styles.statsImage} />
          </div>
          <div>
            <img src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=viollenaki&theme=tokyonight" alt="Most Commit Language" className={styles.statsImage} />
          </div>
          <div>
            <img src="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=viollenaki&theme=tokyonight" alt="Repos per Language" className={styles.statsImage} />
          </div>
          <div>
            <img src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=viollenaki&theme=tokyonight" alt="Stats" className={styles.statsImage} />
          </div>
          <div>
            <img src="https://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=viollenaki&theme=tokyonight&utcOffset=6" alt="Productive Time" className={styles.statsImage} />
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>Let&apos;s connect, create, and make something amazing together! 🚀</p>
      </footer>
    </div>
  );
}
