import logo from "./logo.svg";
import "./App.css";
import Typed from 'typed.js';
import React, { useEffect } from 'react';

function App() {

  useEffect(() => {
    const typed = new Typed('.text', {
      strings: ['Frontend Developer', 'Tech Innovator', 'Full Stack Developer'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    const typed2 = new Typed('.text2', {
      strings: ['Frontend Developer', 'Tech Innovator', 'Full Stack Developer'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });
    return () => {
      typed.destroy();
      typed2.destroy();
    };
  }, []);


  return (
    <>
    <div className="body">
      <header className="header">
        <a href="#" className="logo">
        MyPortfolio <i class="fa-solid fa-user-tie"></i>
          
        </a>

        <nav className="navbar">
          <a href="#" style={{ "--i": "1" }} className="active">
          <i class="fa-solid fa-house"></i><span>Home</span> 
          </a>
          <a href="#about" style={{ "--i": "2" }}>
          <i class="fa-solid fa-address-book"></i> <span>About</span>
          </a>
          <a href="#services" style={{ "--i": "3" }}>
          <i class="fa-solid fa-laptop-code"></i><span>Skills</span> 
          </a>
          <a href="#skills" style={{ "--i": "4" }}>
          <i class="fa-solid fa-list-check"></i><span>Projects</span> 
          </a>
          <a href="#contact" style={{ "--i": "5" }}>
          <i class="fa-solid fa-envelope"></i> <span>Contact</span> 
          </a>
        </nav>
      </header>

      <section class="home">
        <div class="home-content">
          <h3>Hello, It's Me</h3>
          <h1>Bhuvanesh</h1>
          <h3>
            And I'm a <span class="text" style={{'color':'cyan'}}></span>{/* it is working */}
          </h3>
          
          <p>
            Welcome to my world of innovation and technology! Explore how I
            blend creativity with expertise in Full Stack Development,
            cybersecurity, and Machine Learning to shape tomorrow's solutions
            today.
          </p>

          <div class="home-sci">
            <a href="https://www.facebook.com/profile.php?id=100094051295260" target="_blank" style={{ "--i": "7" }}>
            <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/iam_bhuvanesh_1440/?igsh=czBvYzE0OXljMmY%3D"target="_blank" style={{ "--i": "8" }}>
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com/Bhuvanesh1440"target="_blank" style={{ "--i": "9" }}>
              <i class="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/in/bhuvanesh-thotakura-079b37283/"target="_blank" style={{ "--i": "10" }}>
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/bhuvanesh1440"target="_blank" style={{ "--i": "11" }}>
              <i class="fab fa-github"></i>
            </a>
            <a href="#"target="_blank" style={{ "--i": "12" }}>
              <i class="fab fa-youtube"></i>
            </a>
          </div>

          <a href="#"target="_blank" class="btn-box">
            More About Me
          </a>
        </div>
      
        <div class="about-img">
          
          <img
            src="./resources/portfolio3.jpg" height="450" width='450' style={{'border-radius':'50%'}}
            alt=""
          />
        </div>
      </section>

      

      <section class="about" id="about">
        <div class="about-img">
          <img
            src="./resources/portfolio3.jpg" height="350" width='350' style={{'border-radius':'50%'}}
            alt=""
          />
        </div>
        <div class="about-text">
          <h2>
            About <span>Me</span>
          </h2>
          <h4><span class="text2" style={{'color':'cyan','fontSize':'32px'}}></span></h4>
          <p>
            Hey! I'm Bhuvanesh Thotakura and I love tech stuff. I'm into making
            cool things using code. I know Angular.js, React.js, Node.js, and
            handling databases is my thing—I create apps that are fun and easy
            to use. I've also dabbled in keeping things super safe online. I'm
            good at setting up strong security and solving problems to make sure
            everything stays protected. Lately, I've been diving into Machine
            Learning, playing around with data and algorithms to make computers
            smarter. Guess what? I was part of the top 40 projects in the IBM
            Hack Challenge 2023—pretty awesome, right? I'm all about pushing the
            limits and finding new ways to do things in the tech world. Let's
            team up and explore how we can mix tech and creativity to shape a
            super cool future! 
          </p>
          <a href="#" target="_blank"class="btn-box">
            More About Me
          </a>
        </div>
      </section>

      <section>
  <div class="services" id="services">
    <div class="container">
      <h1 class="sub-title">
        My <span>Services</span>
      </h1>
      <div class="services-list">
        <div>
          <i class="fa-brands fa-react" style={{"color": "#00eeff"}}></i>&emsp;
          <i class="fab fa-node" style={{"color": "#00eeff"}}></i>&emsp;
          <i class="fas fa-database" style={{"color": "#00eeff"}}></i>&emsp;

          <h2>MERN STACK</h2>
          <p>
            Craft fully interactive and scalable web applications using the powerful MERN (MongoDB, Express.js, React.js, Node.js) stack. From dynamic user interfaces to robust backend functionalities, I transform your ideas into digital experiences.
          </p>
          <a href="" target="_blank" class="read">Learn More</a>
        </div>

        <div>
          <i class="fa-brands fa-angular" style={{"color": "#00eeff"}}></i>&emsp;
          <i class="fab fa-node" style={{"color": "#00eeff"}}></i>&emsp;
          <i class="fas fa-database" style={{"color": "#00eeff"}}></i>&emsp;

          <h2>MEAN STACK</h2>
          <p>
            Dive into the world of MEAN (MongoDB, Express.js, Angular.js, Node.js) stack to build dynamic and immersive web applications. Seamlessly integrate frontend and backend components for a seamless user experience.
          </p>
          <a href="" target="_blank" class="read">Learn More</a>
        </div>

        <div>
          <i class="fab fa-html5" style={{"color": "#00eeff"}}></i>&emsp;
          <i class="fab fa-css3-alt" style={{"color": "#00eeff"}}></i>&emsp;
          <i class="fab fa-js-square" style={{"color": "#00eeff"}}></i>&emsp;

          <h2>Frontend Development</h2>
          <p>
            Elevate user experiences with captivating frontend development. From stunning designs to responsive layouts, I create visually appealing and interactive interfaces that engage your audience.
          </p>
          <a href="" target="_blank" class="read">Learn More</a>
        </div>

        <div>
          <i class="fas fa-database" style={{"color": "#00eeff"}}></i>&emsp;
          <i class="fas fa-cogs" style={{"color": "#00eeff"}}></i>&emsp;
          <i class="fab fa-node" style={{"color": "#00eeff"}}></i>

          <h2>Backend Development</h2>
          <p>
            Empower your web applications with robust backend solutions. From data management to server-side logic, I ensure seamless functionality and performance for your digital platforms.
          </p>
          <a href="" target="_blank" class="read">Learn More</a>
        </div>

        <div>
          <i class="fas fa-robot" style={{"color": "#00eeff"}}></i>&emsp;
          <i class="fas fa-tools" style={{"color": "#00eeff"}}></i>&emsp;
          <i class="fas fa-microchip" style={{"color": "#00eeff"}}></i>&emsp;

          <h2>Machine Learning Solutions</h2>
         
          <p>
            Embrace the power of AI with innovative machine learning solutions. From predictive analytics to intelligent automation, I unlock new possibilities and efficiencies for your business operations.
          </p>
          <a href="" target="_blank" class="read">Learn More</a>
        </div>

        <div>
          <i class="fas fa-desktop" style={{"color": "#00eeff"}}></i>&emsp;
          <i class="fas fa-mobile-alt" style={{"color": "#00eeff"}}></i>&emsp;
          <i class="fas fa-tablet-alt" style={{"color": "#00eeff"}}></i>&emsp;

          <h2>Responsive Design</h2>
          <p>
            Ensure seamless user experiences across all devices with responsive design solutions. I create adaptable and visually appealing interfaces that scale beautifully on desktops, tablets, and mobile devices.
          </p>
          <a href="" target="_blank" class="read">Learn More</a>
        </div>
      </div>
    </div>
  </div>
</section>


      <h1 class="sub-title">
        My <span>Skills</span>
      </h1>

      <section class="skills">
        <div class="container1" id="skills">
          <h1 class="heading1">Techical Skills</h1>
          <div class="Technical-bars">
            <div class="bar">
              <i style={{"color": "#c95d2e"}} class="fab fa-html5"></i>
              <div class="info">
                <span>Html</span>
              </div>
              <div class="progress-line html">
                <span></span>
              </div>
            </div>

            <div class="bar">
              <i style={{"color": "#147bbc"}} class="fab fa-css3-alt"></i>
              <div class="info">
                <span>Css</span>
              </div>
              <div class="progress-line css">
                <span></span>
              </div>
            </div>

            <div class="bar">
              <i style={{"color": "#b0bc1e"}} class="fab fa-js-square"></i>
              <div class="info">
                <span>JavaScript</span>
              </div>
              <div class="progress-line Javascript">
                <span></span>
              </div>
            </div>

            <div class="bar">
              <i style={{"color": "#c32ec9"}} class="fab fa-python"></i>
              <div class="info">
                <span>Python</span>
              </div>
              <div class="progress-line python">
                <span></span>
              </div>
            </div>

            <div class="bar">
              <i style={{"color": "#69bcbc"}} class="fab fa-react"></i>
              <div class="info">
                <span>React.js</span>
              </div>
              <div class="progress-line react">
                <span></span>
              </div>
            </div>

            <div class="bar">
              <i style={{"color": "red"}} class="fab fa-angular"></i>
              <div class="info">
                <span>Angular</span>
              </div>
              <div class="progress-line angular">
                <span></span>
              </div>
            </div>
          </div>
        </div>

        <div class="container1">
          <h1 class="heading1">Professional Skills</h1>
          <div class="radial-bars">
            <div class="radial-bar">
              <svg x="0px" y="0px" viewBox="0 0 200 200">
                <circle class="progress-bar" cx="100" cy="100" r="80"></circle>
                <circle class="path path-1" cx="100" cy="100" r="80"></circle>
              </svg>

              <div class="percentage">90%</div>
              <div class="text">Creativity</div>
            </div>

            <div class="radial-bar">
              <svg x="0px" y="0px" viewBox="0 0 200 200">
                <circle class="progress-bar" cx="100" cy="100" r="80"></circle>
                <circle class="path path-2" cx="100" cy="100" r="80"></circle>
              </svg>

              <div class="percentage">65%</div>
              <div class="text">Communucation</div>
            </div>

            <div class="radial-bar">
              <svg x="0px" y="0px" viewBox="0 0 200 200">
                <circle class="progress-bar" cx="100" cy="100" r="80"></circle>
                <circle class="path path-3" cx="100" cy="100" r="80"></circle>
              </svg>

              <div class="percentage">70%</div>
              <div class="text">Problem solving</div>
            </div>

            <div class="radial-bar">
              <svg x="0px" y="0px" viewBox="0 0 200 200">
                <circle class="progress-bar" cx="100" cy="100" r="80"></circle>
                <circle class="path path-4" cx="100" cy="100" r="80"></circle>
              </svg>

              <div class="percentage">85%</div>
              <div class="text">Team work</div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div id="portfolio" >
          <div class="main-text" id="project">
            <h2>
              Latest <span>Project</span>
            </h2>

            <div class="portfolio-content">
              <div class="row">
                <img src="./resources/project1.jpeg" alt="" />
                <div class="layer">
                  <h5>UI/UX Design</h5>
                  <p>
                    This is a project for designing UI and UX of an ecommerce
                    website.This is a project for designing UI and UX of an
                    ecommerce website.
                  </p>
                  <a href=""target="_blank">
                    {/* <!-- <i class="fas fa-external-link-alt"></i> --> */}
                    <i
                      class="fas fa-external-link-alt"
                      style={{ color: "black" }}
                    ></i>
                  </a>
                </div>
              </div>

              <div class="row">
                <img src="./resources/project1.jpeg" alt="" />
                <div class="layer">
                  <h5>UI/UX Design</h5>
                  <p>
                    This is a project for designing UI and UX of an ecommerce
                    website.This is a project for designing UI and UX of an
                    ecommerce website.
                  </p>
                  <a href="">
                    <i
                      class="fas fa-external-link-alt"
                      style={{ color: "black" }}
                    ></i>
                    {/* <!-- <i class="fas fa-arrow-alt-circle-up" style="color: aliceblue;"></i> --> */}
                  </a>
                </div>
              </div>

              <div class="row">
                <img src="./resources/project1.jpeg" alt="" />
                <div class="layer">
                  <h5>UI/UX Design</h5>
                  <p>
                    This is a project for designing UI and UX of an ecommerce
                    website.This is a project for designing UI and UX of an
                    ecommerce website.
                  </p>
                  <a href="">
                    {/* <!-- <i class="fas fa-external-link-alt"></i> --> */}
                    <i
                      class="fas fa-external-link-alt"
                      style={{ color: "black" }}
                    ></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="contact" id="contact">
        <div class="contact-text">
          <h2>
            Contact <span>Me</span>
          </h2>
          <h4>Let's work Together</h4>
          <p>
            Let's connect and discuss how we can bring your ideas to life. Drop
            me a message—I'd love to hear from you!
          </p>
          <div class="contact-list">
            <li>
              <i class="fas fa-paper-plane" style={{"color": "#00eeff"}}></i>   bhuvanesh1440@gmail.com
              
            </li>
            <li>
            
              <i class="fas fa-phone" style={{"color": "#00eeff"}}></i> +91 8790066998
            </li>
          </div>
          <div class="contact-icons">
            <a href="https://www.facebook.com/profile.php?id=100094051295260"target="_blank">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/Bhuvanesh1440"target="_blank">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/iam_bhuvanesh_1440/?igsh=czBvYzE0OXljMmY%3D"target="_blank">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/bhuvanesh-thotakura-079b37283/"target="_blank">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div class="contact-form">
          <form action="">
            <input type="text" placeholder="Enter your Name" required />
            <input type="email" placeholder="Enter Your Email" required />

            <input type="" placeholder="Enter Your Subject" />
            <textarea
              name=""
              id=""
              cols="40"
              rows="10"
              placeholder="Enter your message"
            ></textarea>

            <input type="submit" value="submit" class="send" />
          </form>
        </div>
      </section>

      <div class="last-text">
        <p>Developed by Bhuvanesh @2023</p>
      </div>
      <a href="#" class="top">
        <i class="fas fa-arrow-up"></i>
      </a>
      {/* <script src="main.js"></script> */}
      <script src="https://kit.fontawesome.com/aca0f5fb4b.js" crossorigin="anonymous"></script>
      </div>
    </>
  );
}

export default App;
