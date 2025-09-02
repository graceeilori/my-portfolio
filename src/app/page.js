export default function Home() {
  return (
    <>
      <header>
        <nav>
          <div>Grace Ilori</div> {/* TODO: Replace with logo */}
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#aboutme">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="https://drive.google.com/file/d/1-nebFR8bCl7dHBkYg9oRd6eJ7FHGARi1/view?usp=sharing">Resume</a></li>
          </ul>
        </nav>
      </header>
    
      <main>

        <section id="home">
          <h1>Hi. I’m Grace.</h1>
          <p>I explore how people interact with technology and use the insights gained to build solutions that are intuitive and impactful.</p>
          <p>welcome to my space...</p>
        </section>

        <section id="aboutme">
          <div> {/* Left side - Text */}
            <h4>About Me</h4>
            <p>I am a 3rd year Computer Science student at the University of Calgary with interest in web development, user-centered design, and digital accessibility. I enjoy blending code and design to create thoughtful and functional user experiences. Thanks for stopping by 🌟</p>
          </div>

          <div> {/* Right side - Cards */}
            {/* TODO: Replace divs with card component */}
            <div> {/* Card 1 - Experience */}
              <h4>Experience</h4>
              <p>McCaig Institute for Bone and Joint Health</p>
              <p>Student Researcher</p>
              <p>May 2025 - Present</p>
              <p>Calgary Public Library</p>
              <p>Tech Mentor</p>
              <p>July 2024 - Present</p>
              <p>Code The Change YYC</p>
              <p>VP External</p>
              <p>February 2024 - Present</p>
            </div>

            <div> {/* Card 2 - Education */}
              <h4>Education</h4>
              <p>University of Calgary</p>
              <p>Bachelor of Science in Computer Science</p>
              <p>September 2023 - Present</p>
              <h3>Achievements & Roles</h3>
              <p>Faculty of Science Dean’s List 2024/2025</p>
              <p>Orientation Leader 2024</p>
              <h3>Relevant Coursework</h3>
              <p>CPSC 233: Object Oriented Programming</p>
              <p>CPSC 251: Theoretical Foundations of Computer Science</p>
              <p>CPSC 329: Explorations in Information Security and Privacy</p>
              <p>CPSC 331: Data Structures and Algorithms</p>
              <p>SENG 300: Software engineering I</p>
            </div>

            <div> {/* Card 3 - Skills */}
              <h4>Skills</h4>
              <ul>
                <li>HTML, CSS, JavaScript</li>
                <li>Next.js, Java, Python</li>
                <li>Figma, Miro, Git</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projects">
          <div> {/* Projects Carousel Container*/}
            <h4>Projects</h4>

            <div> {/* Project 1 - My Portfolio Website */}
              <p>Image</p> {/* TODO: Replace with project image */}
              <div>
                <h3>Project Title</h3>
                <p>You’re here 😜</p>
                <p>Take a look around! And enjoy some music from my Spotify playlist while scrolling</p>
                <p>Spotify Integration</p> {/* TODO: Actual Spotify integration */}
                <a href="#">View Project</a>
              </div>
            </div>

            <div> {/* Project 2 */}
              <p>Image</p> {/* TODO: Replace with project image */}
              <div>
                <h3>Project Title</h3>
                <p>Project description</p>
                <a href="#">View Project</a>
              </div>
            </div>

            <div>
              <p>Arrows</p> {/* Replace with carousel arrows */}
            </div>

          </div>
        </section>

      </main>      

      <footer>
        
      </footer>
    </>
  );
}