const htmlStructure = () => {
  const headerNav = document.getElementById('header-nav');
  const headerMain = document.getElementById('header-main');
  const aboutMain = document.getElementById('ABOUT-ME');
  const educationMain = document.getElementById('EDUCATION');
  const projectsMain = document.getElementById('PROJECTS');
  const footerMain = document.getElementById('FOOTER');
  // Not sure if this will be needed later
  const typing = document.getElementById('typing');


  // Header nav
  headerNav.innerHTML = `
  <ul>
          <li><a href="#ABOUT-ME">About Me</a></li>
          <li><a href="#EDUCATION">Education</a></li>
          <li><a href="#PROJECTS">Projects</a></li>
        </ul>
  `;
  // Header
  headerMain.innerHTML = `
    <h1>
      <span>
        Hello, My name is <br>
      </span>
    </h1>

    <h1 class="typing"><span>Malik Robinson</span></h1>

    <br>

    <h2>
      <span>
        Front-End Developer | Computer Science Graduate | Clean&Responsive Websites
      </span>
    </h2>
    `;

  aboutMain.innerHTML = `
      <div class="about-info">
        <h2><span>About Me</span></h2>

        <div class="about-container">
          <div class="about-text">
            <p>
            I am a SNHU(Southern New Hampshire University) new graduate with my bachelors in computer science. I am an aspiring Front-End developer based in Florida. I am actively seeking employment both remote(Any state) and hybrid(in Florida). I am passionate about building responsive, accessible web experiences with a focus on performance and clean code.
            </p>
          </div>

          <div class="about-skills">
            <h3>SKILLS</h3>
            <div class="skills">
              <p class="skill">HTML</p>
              <p class="skill">CSS</p>
              <p class="skill">JavaScript</p>
              <p class="skill">GIT</p>
            </div>
          </div>
        </div>
      </div>
  `;

  // Education
  educationMain.innerHTML = `
      <div class="education-info">
        <h2><span>Education</span></h2>
          <div class="school-info">
            <img src="./assets/images/snhu_nobg-logo.png" width="350px" height="350px">
            <div class="specifics">
              <p><span>Graduation date: </span> September 1st 2025</p>
              <p><span>Degree: </span> Bachelor's in Computer science</p>
              <p><span>GPA: </span> 3.7</p>
            </div>
          </div>
        <div class="achievements">
          <div class="relevant-classes">
            <h3><span>Relevant classes</span></h3>
            <p class="completed-class">Web and Mobile User Experience (IT-355)</p>
            <p class="completed-class">Mobile Apps Design & Development (IT-390)</p>
            <p class="completed-class">Web Site Design (IT-270)</p>
            <p class="completed-class">UI/UX Design and Development (CS-319)</p>
          </div>
          <div class="badges">
            <h3><span>Badges</span></h3>
            <img src="./assets/images/Honor-roll-badges-nobg.png" width="150px" height="150px">

            <img src="./assets/images/President'-Dean's-badges-nobg.png" width="325px" height="325px">
          </div>
        </div>
      </div>
  `;

  // Projects
  projectsMain.innerHTML = `
      <div class="projects-list">
        <h2><span>Projects</span></h2>
        <div class="projects">
          <div class="project">
            <div class="project-name">
              <h3>Yummy Eats</h3>
            </div>
            <p>test 1</p>
          </div>

          <div class="project">
            <div class="project-name">
              <h3>PasteTree</h3>
            </div>
            <p>test 2</p>
          </div>

          <div class="project">
            <div class="project-name">
              <h3>PasteTree</h3>
            </div>
            <p>test 3</p>
          </div>
        </div>
      </div>
  `;

  // Footer
  footerMain.innerHTML = `
    <div class="footer-summary">
    <h3>Malik Robinson</h3>
    <h4>Location: Poinciana, Florida</h4>
    <p>Aspiring Front-End developer | Actively seeking remote internships/work (Any State) | Actively seeking hybrid work in Florida</p>
    </div>

    <div class="contact-container">
          <a href="mailto:malik16.mr@gmail.com" target="_blank"><svg fill="#fff" width="50px" height="50px" viewBox="0 0 36 36" version="1.1"  preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <title>email-solid</title>
          <path class="clr-i-solid clr-i-solid-path-1" d="M32.33,6a2,2,0,0,0-.41,0h-28a2,2,0,0,0-.53.08L17.84,20.47Z"></path><path class="clr-i-solid clr-i-solid-path-2" d="M33.81,7.39,19.25,21.89a2,2,0,0,1-2.82,0L2,7.5a2,2,0,0,0-.07.5V28a2,2,0,0,0,2,2h28a2,2,0,0,0,2-2V8A2,2,0,0,0,33.81,7.39ZM5.3,28H3.91V26.57l7.27-7.21,1.41,1.41Zm26.61,0H30.51l-7.29-7.23,1.41-1.41,7.27,7.21Z"></path>
          <rect x="0" y="0" width="36" height="36"  fill-opacity="0"/></svg> 
          </a>

          <a href="https://github.com/Malikrob16" target="_blank"><svg fill="#fff" width="50px" height="50px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"/></svg>
          </a>

          <a href="https://linkedin.com/in/robinson-malik" target="_blank"><svg fill="#fff" width="50px" height="50px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z"/></svg>
          </a>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM content loaded");

  htmlStructure();
});