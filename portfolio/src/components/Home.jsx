import { useEffect, useState, useCallback } from 'react';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';

export default function Home({ setActiveSection }) {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [showMore, setShowMore] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesConfig = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: ['#3B82F6', '#8B5CF6', '#EC4899']
      },
      shape: {
        type: 'circle'
      },
      opacity: {
        value: 0.5,
        random: true
      },
      size: {
        value: 5,
        random: true
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: true
      }
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: 'repulse'
        }
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4
        }
      }
    },
    retina_detect: true
  };

  useEffect(() => {
    const sectionIds = ['home', 'about', 'portfolio', 'contact'];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      {
        threshold: 0.5,
        rootMargin: '-20% 0px -60% 0px',
      }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    const handleManualScrollCheck = () => {
      const scrollY = window.scrollY;
      if (scrollY < 100) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleManualScrollCheck);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleManualScrollCheck);
    };
  }, [setActiveSection]);

  const scrollToPortfolio = () => {
    const section = document.getElementById('portfolio');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  const portfolioData = {
    frontend: [
      {
        title: "Smart SEO Dashboard Website",
        description: "Search engine optimization website built with React and smooth scrolling navigation",
        image: "/frontend/front1.jpg",
        liveLink: "https://smart-seo-dashboard.vercel.app/",
        githubLink: "https://github.com/AdavatuAminu/Smart-SEO-dashboard"
      },
      {
        title: "Admin Dashboard",
        description: "Admin dashboard with charts and CRUD features using React & Chart.js..",
        image: "/frontend/front2.jpg",
        liveLink: "https://belsoft-dashboard.vercel.app/",
        githubLink: "https://github.com/AdavatuAminu/belsoft-dashboard/tree/main"
      },
      {
        title: "E-Commerce Website",
        description: "React + Tailwind powered storefront with product filtering and cart features.",
        image: "/frontend/front3.jpg",
        liveLink: "https://breez-ecommerce.vercel.app",
        githubLink: "https://github.com/AdavatuAminu/Breez-ecommerce"
      },
      {
        title: "AI Job Match dashboard",
        description: "Automatic job AI job search website.",
        image: "/frontend/front4.jpg",
        liveLink: "https://ai-powered-job-match-dashboard-swart.vercel.app",
        githubLink: "https://github.com/AdavatuAminu/AI-Powered-Job-Match-Dashboard"
      },
      {
        title: "Pokemon App",
        description: "Clone and redesign of the popular pokemon app.",
        image: "/frontend/front5.jpg",
        liveLink: "https://aliyupokemonapp.netlify.app",
        githubLink: "https://github.com/AdavatuAminu/pokemon"
      },
      {
        title: "Calculator App",
        description: "React built calculator for basic calculations.",
        image: "/frontend/front6.jpg",
        liveLink: "https://reactjs-calculator-v25q.onrender.com",
        githubLink: "https://github.com/AdavatuAminu/ReactJS-calculator"
      },
      {
        title: "My Dropbox App",
        description: "Dropbox-clone app using React & AWS backend.",
        image: "/frontend/front7.jpg",
        liveLink: "https://my-dropbox-beryl.vercel.app",
        githubLink: "https://github.com/AdavatuAminu/dropbox-clone"
      },
      {
        title: "My Instagram App",
        description: "Insagram-clone app using React & AWS backend.",
        image: "/frontend/front8.jpg",
        liveLink: "https://my-instagram-henna.vercel.app",
        githubLink: "https://github.com/AdavatuAminu/Instagram-clone"
      },
    ],
    uiux: [
      {
        title: "Frostbite Mobile App Prototype",
        description: "Interactive Adobe XD prototype for a online for order.",
        image: "/UI/web1.jpg",
        liveLink: "https://www.behance.net/aliyuaminu",
        githubLink: null
      },
      {
        title: "Global Routes Website Design",
        description: "Complete UI/UX design for an Air transport service company.",
        image: "/UI/web2.jpg",
        liveLink: "https://www.behance.net/aliyuaminu",
        githubLink: null
      },
      {
        title: "Stay Health Inc Website Redesign",
        description: "Complete UI/UX redesign for a corporate website with user testing.",
        image: "/UI/web3.jpg",
        liveLink: "https://www.behance.net/aliyuaminu",
        githubLink: null
      },
      {
        title: "Need Help Web App",
        description: "Interactive Figma prototype for a task management mobile application.",
        image: "/UI/web4.jpg",
        liveLink: "https://www.behance.net/aliyuaminu",
        githubLink: null
      }
    ],
    graphic: [
      {
        title: "Brand Identity",
        description: "Crafted a cohesive brand identity including logo, business cards, and a complete style guide.",
        images: ["/graphics/design1.jpg", "/graphics/design1-2.jpg", "/graphics/design1-3.jpg", "/graphics/design1-4.jpg", "/graphics/design1-5.jpg", "/graphics/design1-6.jpg", "/graphics/design1-7.jpg", "/graphics/design1-8.jpg", "/graphics/design1-9.jpg", "/graphics/design1-10.jpg", "/graphics/design1-11.jpg"],
        liveLink: null,
        githubLink: null
      },
      {
        title: "Marketing Materials",
        description: "Designed a variety of promotional materials including posters and social media content for a product launch campaign.",
        images: ["/graphics/design2.jpg", "/graphics/design2-2.jpg", "/graphics/design2-3.jpg", "/graphics/design2-4.jpg", "/graphics/design2-5.jpg", "/graphics/design2-6.jpg", "/graphics/design2-7.jpg"],
        liveLink: null,
        githubLink: null
      },
      {
        title: "Marketing Flyer",
        description: "Created visually compelling marketing flyers to support campaigns and promotions.",
        images: ["/graphics/design3.jpg", "/graphics/design3-2.jpg", "/graphics/design3-3.jpg", "/graphics/design3-4.jpg", "/graphics/design3-5.jpg", "/graphics/design3-6.jpg", "/graphics/design3-7.jpg", "/graphics/design3-8.jpg", "/graphics/design3-9.jpg"],
        liveLink: null,
        githubLink: null
      },
      {
        title: "Social Media Flyer",
        description: "Developed flyers optimized for various social media platforms, ensuring brand consistency and engagement.",
        images: ["/graphics/design4.jpg", "/graphics/design4-2.jpg", "/graphics/design4-3.jpg", "/graphics/design4-4.jpg", "/graphics/design4-5.jpg", "/graphics/design4-6.jpg", "/graphics/design4-7.jpg"],
        liveLink: null,
        githubLink: null
      },
      {
        title: "Logo Design",
        description: "Designed unique and memorable logos tailored to reflect each brand’s identity and vision.",
        images: ["/graphics/design5.jpg", "/graphics/design5-2.jpg", "/graphics/design5-3.jpg", "/graphics/design5-4.jpg", "/graphics/design5-5.jpg", "/graphics/design5-6.jpg", "/graphics/design5-7.jpg", "/graphics/design5-8.jpg", "/graphics/design5-9.jpg", "/graphics/design5-10.jpg"],
        liveLink: null,
        githubLink: null
      },
      {
        title: "Product Branding",
        description: "Developed branding assets for new products, including packaging, labels, and promotional graphics.",
        images: ["/graphics/design6.jpg", "/graphics/design6-2.jpg", "/graphics/design6-3.jpg"],
        liveLink: null,
        githubLink: null
      },
      {
        title: "Graduation Flyer",
        description: "Designed elegant and celebratory flyers for graduation events, highlighting individuals and achievements.",
        images: ["/graphics/design7.jpg", "/graphics/design7-2.jpg", "/graphics/design7-3.jpg"],
        liveLink: null,
        githubLink: null
      },
    ]
  };

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setCurrentImageIndex(0); // Start with the first image in the array
  };

  const handleClosePopup = () => {
    setSelectedImageIndex(null);
    setCurrentImageIndex(0);
  };

  const handleSwipe = (direction) => {
    if (selectedImageIndex !== null) {
      const currentImages = portfolioData.graphic[selectedImageIndex].images;
      const newIndex = (currentImageIndex + direction + currentImages.length) % currentImages.length;
      setCurrentImageIndex(newIndex);
    }
  };

  const handleKeyDown = (e) => {
    if (selectedImageIndex !== null) {
      if (e.key === 'ArrowLeft') handleSwipe(-1);
      if (e.key === 'ArrowRight') handleSwipe(1);
      if (e.key === 'Escape') handleClosePopup();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, currentImageIndex]);

  return (
    <div className="px-6">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center relative">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesConfig}
          className="absolute inset-0 z-0"
        />
        <div className="min-h-screen flex flex-col items-center justify-center text-center relative mt-1 md:mt-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 md:mb-4">Frontend Developer</h1>
          <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">UI/UX and Graphic Designer</h2>
          <p className="text-base md:text-lg mb-4 md:mb-6">
            {`{ JavaScript, React, Next.js, Rails, TailwindCSS... }`}
          </p>
          <p className="text-sm md:text-md max-w-md mb-6 md:mb-8">
            Specializing in React & Next.js I leverage cutting-edge technologies to bring web projects to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 md:mb-12">
            <button
              onClick={scrollToPortfolio}
              className="px-4 py-2 sm:px-6 sm:py-3 bg-blue-700 rounded-full text-white text-sm sm:text-base hover:bg-orange-500"
            >
              See my dev work
            </button>
            <a
              href="/AliyuAminuAdavatuCV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 sm:px-6 sm:py-3 text-blue-500 text-sm sm:text-base hover:underline"
            >
              Download CV
            </a>
          </div>

          <img
            src="/KeyboardMouse.png"
            alt="Keyboard and Mouse"
            className="w-4/4 sm:w-2/3 md:w-1/2 opacity-80"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen px-6 py-12 max-w-6xl mx-auto text-inherit text-justify">
        <div className="w-full flex flex-col items-center border-b-2 border-gray-300 mt-1 mb-1"></div>

        {/* Image + First Paragraph Wrapper */}
        <div className="flex flex-col md:flex-row md:items-start md:gap-8 mt-15">
          <img
            src="./Aliyu2.png"
            alt="Profile pic"
            className="w-full sm:w-2/3 md:w-1/4 border rounded-xl bg-gray-800 mb-5 md:mb-0"
          />
          <p className="text-lg leading-relaxed">
            Hi, I’m <span className="font-semibold text-indigo-600">Aliyu Aminu Adavatu</span> — a passionate Frontend Developer based in Kaduna, Nigeria.
            My journey into tech began with a strong curiosity for building things that people interact with daily.
            I specialize in creating intuitive and responsive web interfaces using technologies like <strong>React.js</strong>, <strong>Next.js</strong>, <strong>Tailwind CSS</strong>, and <strong>JavaScript</strong>. With a strong foundation in <strong>UI/UX design</strong> and <strong>graphic design</strong>, I focus on building products that are not just functional but also visually compelling and user-centric.
            Over the past few months, I’ve worked as an intern, volunteer, and freelancer—contributing to multiple frontend projects and collaborating with cross-functional teams. I enjoy solving real-world problems, enhancing user experiences, and constantly exploring new tools and design systems to stay ahead in the fast-paced web ecosystem.
          </p>
        </div>
        {/* Remaining Paragraphs */}
        <p className="mt-4 text-lg leading-relaxed">
          In addition to frontend development, I have hands-on experience in creating branding materials, layouts, and visual assets using tools like <strong>Figma</strong> and <strong>Adobe Creative Suite</strong>. This creative background enhances my approach to building clean and consistent UI components.
        </p>
        <p className="mt-4 text-lg leading-relaxed">
          When I'm not coding, I enjoy reading tech blogs, designing interfaces, or brainstorming innovative ideas that can make a positive impact locally and globally. I’m currently open to <span className="font-semibold">remote opportunities, internships, and full-time roles</span> where I can grow, contribute, and collaborate with passionate teams.
        </p>
        <p className="mt-4 text-lg leading-relaxed">
          I hold a degree in Urban and Regional Planning from the Federal University of Technology, Minna. Driven by a growing passion for technology, I have since earned certifications in <strong>Frontend Development</strong>, <strong>Software Engineering</strong>, <strong>Graphic Design</strong>, and <strong>UI/UX Design</strong>.
        </p>
        <div className="w-full flex flex-col items-center border-b-2 border-gray-300 mt-10 mb-10"></div>
        <h1 className="font-bold text-center text-2xl">TOOLS AND FRAMEWORKS</h1>

        <div className="mt-[20px] px-4 w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left text-inherit dark:text-gray-200">
          {/* JavaScript */}
          <div className="flex flex-col items-start">
            <img src="/js.png" alt="JavaScript" className="w-8 h-8 mb-2" />
            <h3 className="font-semibold text-lg">JavaScript</h3>
            <p>Proficient in writing modern JavaScript for building interactive web apps.</p>
          </div>

          {/* Ruby on Rails */}
          <div className="flex flex-col items-start">
            <img src="/ruby.png" alt="Ruby" className="w-15 h-10 mb-2" />
            <h3 className="font-semibold text-lg">Ruby on Rails</h3>
            <p>Experience in building full-stack apps with Rails and RESTful APIs.</p>
          </div>

          {/* Git */}
          <div className="flex flex-col items-start">
            <img src="/git.png" alt="Git" className="w-10 h-10 mb-2" />
            <h3 className="font-semibold text-lg">Git</h3>
            <p>Version control expertise for team collaboration and code tracking.</p>
          </div>

          {/* React */}
          <div className="flex flex-col items-start">
            <img src="/react.png" alt="React" className="w-8 h-8 mb-2" />
            <h3 className="font-semibold text-lg">React</h3>
            <p>Developing dynamic user interfaces and SPAs using React.</p>
          </div>

          {/* Next.js */}
          <div className="flex flex-col items-start">
            <img src="/next.png" alt="Next.js" className="w-8 h-8 mb-2" />
            <h3 className="font-semibold text-lg">Next.js</h3>
            <p>Building SEO-friendly and performant React apps with server-side rendering.</p>
          </div>

          {/* AWS Amplify */}
          <div className="flex flex-col items-start">
            <img src="/aws.png" alt="AWS" className="w-8 h-8 mb-2" />
            <h3 className="font-semibold text-lg">AWS Amplify</h3>
            <p>Integrating cloud features like authentication and storage into web apps.</p>
          </div>

          {/* Tailwind CSS */}
          <div className="flex flex-col items-start">
            <img src="/tailwind.png" alt="Tailwind CSS" className="w-20 h-4 mb-2" />
            <h3 className="font-semibold text-lg">Tailwind CSS</h3>
            <p>Styling responsive UIs efficiently using a utility-first CSS framework.</p>
          </div>

          {/* CSS & Sass */}
          <div className="flex flex-col items-start">
            <img src="/css.png" alt="CSS & Sass" className="w-8 h-8 mb-2" />
            <h3 className="font-semibold text-lg">CSS & Sass</h3>
            <p>Creating modular and maintainable styles using modern CSS & Sass.</p>
          </div>

          {/* Bootstrap */}
          <div className="flex flex-col items-start">
            <img src="/bootstrap.png" alt="Bootstrap" className="w-25 h-10 mb-2" />
            <h3 className="font-semibold text-lg">Bootstrap</h3>
            <p>Rapid prototyping and layout design using Bootstrap's component library.</p>
          </div>

          {/* Adobe Illustrator */}
          <div className="flex flex-col items-start">
            <img src="/AdobeIllustrator.png" alt="Adobe Illustrator" className="w-10 h-10 mb-2" />
            <h3 className="font-semibold text-lg">Adobe Illustrator</h3>
            <p>Designing vector graphics and UI assets for digital products.</p>
          </div>

          {/* Figma */}
          <div className="flex flex-col items-start">
            <img src="/figma.png" alt="Figma" className="w-12 h-10 mb-2" />
            <h3 className="font-semibold text-lg">Figma</h3>
            <p>Designing and prototyping responsive interfaces collaboratively.</p>
          </div>

          {/* Photoshop */}
          <div className="flex flex-col items-start">
            <img src="/Photoshop.png" alt="Photoshop" className="w-10 h-10 mb-2" />
            <h3 className="font-semibold text-lg">Photoshop</h3>
            <p>Editing and creating pixel-perfect designs and mockups.</p>
          </div>

          {/* Adobe */}
          <div className="flex flex-col items-start">
            <img src="/adobe.png" alt="Adobe" className="w-10 h-10 mb-2" />
            <h3 className="font-semibold text-lg">Adobe Suite</h3>
            <p>Skilled in multiple Adobe tools for creative and UI design workflows.</p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="min-h-screen py-25 max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-2 text-center">Portfolio Projects</h1>
        <h2 className="text-[15px] font-normal mb-6 text-center">From Frontend dev to website & graphic designs</h2>
        <div className="flex justify-center mb-8">
          <div className="flex gap-4">
            <button
              className={`px-4 py-2 rounded-[20px] ${activeCategory === 'frontend' ? 'bg-blue-700 text-white' : 'text-inherit font-bold hover:bg-orange-500'}`}
              onClick={() => { setActiveCategory('frontend'); setShowMore(false) }}
            >
              Frontend
            </button>
            <button
              className={`px-4 py-2 rounded-[20px] ${activeCategory === 'uiux' ? 'bg-blue-700 text-white' : 'text-inherit font-bold hover:bg-orange-500'}`}
              onClick={() => { setActiveCategory('uiux'); setShowMore(false) }}
            >
              Websites
            </button>
            <button
              className={`px-4 py-2 rounded-[20px] ${activeCategory === 'graphic' ? 'bg-blue-700 text-white' : 'text-inherit font-bold hover:bg-orange-500'}`}
              onClick={() => { setActiveCategory('graphic'); setShowMore(false) }}
            >
              Graphic
            </button>
          </div>
        </div>
        <div className="flex grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData[activeCategory].slice(0, showMore ? undefined : (window.innerWidth >= 1024 ? 3 : 4)).map((project, index) => (
            <div key={index} className="shadow-lg hover:shadow-lg transition overflow-hidden">
              <img
                src={project.image || project.images?.[0]}
                alt={project.title}
                className="w-full h-48 object-cover cursor-pointer"
                onClick={() => activeCategory === 'graphic' ? handleImageClick(index) : null}
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm mb-2">{project.description}</p>
                <div className="flex gap-4 text-sm text-blue-500">
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noreferrer" className="hover:underline">
                      Live Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noreferrer" className="hover:underline">
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {portfolioData[activeCategory].length > (window.innerWidth >= 1024 ? 3 : 4) && !showMore && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowMore(true)}
              className="px-6 py-3 bg-blue-700 rounded-full text-white hover:bg-orange-500"
            >
              See More
            </button>
          </div>
        )}
        {selectedImageIndex !== null && activeCategory === 'graphic' && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={handleClosePopup}
            >
              &times;
            </button>
            <button
              className="absolute left-4 text-white text-4xl"
              onClick={() => handleSwipe(-1)}
            >
              &#10094;
            </button>
            <img
              src={portfolioData.graphic[selectedImageIndex].images[currentImageIndex]}
              alt={portfolioData.graphic[selectedImageIndex].title}
              className="max-w-full max-h-full"
            />
            <button
              className="absolute right-4 text-white text-4xl"
              onClick={() => handleSwipe(1)}
            >
              &#10095;
            </button>
          </div>
        )}
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-25 max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Get in touch</h2>
        <p className="mb-4">I'm always interested in exploring new opportunities, collaborating, or exchanging ideas with like-minded individuals. Feel free to book a call or email me if you'd like to see my portfolio deck or to discuss a potential project.</p>
        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full p-2 border rounded text-inherit" />
          <input type="email" placeholder="Email Address" className="w-full p-2 border rounded text-inherit" />
          <textarea placeholder="Write Your Message...." className="w-full p-2 border rounded h-32 text-inherit"></textarea>
          <button type="submit" className="w-full bg-blue-700 text-white p-2 rounded hover:bg-orange-500">Send Message</button>
        </form>
        <p className="mt-4 text-sm">Copyright © 2025 A.A Adavatu All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="https://instagram.com/aaadavatu" target="_blank" rel="noopener noreferrer"><img src="/instagram.png" alt="Instagram" className="w-6 h-6" /></a>
          <a href="https://github.com/AdavatuAminu" target="_blank" rel="noopener noreferrer"><img src="/github.png" alt="GitHub" className="w-6 h-6" /></a>
          <a href="https://linkedin.com/in/aliyu-aminu-adavatu" target="_blank" rel="noopener noreferrer"><img src="/linkedin.png" alt="LinkedIn" className="w-6 h-6" /></a>
          <a href="https://x.com/AliyuAminu_dev" target="_blank" rel="noopener noreferrer"><img src="/x.png" alt="X" className="w-6 h-6" /></a>
        </div>
      </section>
    </div>
  );
}