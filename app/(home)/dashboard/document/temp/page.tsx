// pages/index.js
const Resume = () => {
  const styles = {
    container: {
      maxWidth: "800px",
      margin: "0 auto",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      background: "white",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      borderRadius: "8px",
    },
    header: {
      textAlign: "center" as const,
      paddingBottom: "20px",
      borderBottom: "2px solid #0070f3",
    },
    section: {
      margin: "20px 0",
    },
    h1: {
      color: "#0070f3",
    },
    h3: {
      borderBottom: "2px solid #0070f3",
      paddingBottom: "5px",
    },
    job: {
      margin: "10px 0",
    },
    ul: {
      listStyleType: "disc",
      paddingLeft: "20px",
    },
    footer: {
      marginTop: '40px',
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header as React.CSSProperties}>
        <h1 style={styles.h1}>CHLOE MARTINEZ</h1>
        <h2>Senior Full Stack Developer | Python | React</h2>
        <p>Email: chloe.martinez@domain.com | Phone: 123-456-7890</p>
      </header>

      <section style={styles.section}>
        <h3 style={styles.h3}>Summary</h3>
        <p>
          Accomplished Full Stack Developer with extensive experience in front-end and back-end technologies. 
          Proven track record in project management and delivering high-quality software solutions.
        </p>
      </section>

      <section style={styles.section}>
        <h3 style={styles.h3}>Experience</h3>
        <div style={styles.job}>
          <h4>Senior Full Stack Developer</h4>
          <p>Company XYZ · 2020 - Present</p>
          <ul style={styles.ul}>
            <li>Developed scalable web applications using React and Node.js.</li>
            <li>Implemented responsive designs for optimal user experience.</li>
            <li>Collaborated with cross-functional teams to define project requirements.</li>
          </ul>
        </div>
        <div style={styles.job}>
          <h4>Full Stack Developer</h4>
          <p>Company ABC · 2018 - 2020</p>
          <ul style={styles.ul}>
            <li>Designed and developed RESTful APIs.</li>
            <li>Worked with databases such as MongoDB and PostgreSQL.</li>
          </ul>
        </div>
        <div style={styles.job}>
          <h4>Web Developer</h4>
          <p>Company DEF · 2015 - 2018</p>
          <ul style={styles.ul}>
            <li>Created user-friendly interfaces with HTML, CSS, and JavaScript.</li>
            <li>Optimized web applications for performance and SEO.</li>
          </ul>
        </div>
      </section>

      <section style={styles.section}>
        <h3 style={styles.h3}>Projects</h3>
        <p>Open Source Data Visualization Tool</p>
        <p>Community Engagement App</p>
      </section>

      <section style={styles.section}>
        <h3 style={styles.h3}>Key Achievements</h3>
        <ul style={styles.ul}>
          <li>Increased user engagement by 30% in 2023.</li>
          <li>Improved system security protocols leading to a 20% decrease in breaches.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h3 style={styles.h3}>Skills</h3>
        <p>JavaScript, Python, React, Node.js, MongoDB, HTML, CSS</p>
      </section>

      <section style={styles.section}>
        <h3 style={styles.h3}>Education</h3>
        <h4>Master of Science in Computer Science</h4>
        <p>University Name · Year</p>
      </section>

      <footer style={styles.footer}>
        <h3>Passions</h3>
        <p>Open Source, Data Science, Web Development</p>
      </footer>
    </div>
  );
}

export default Resume;
