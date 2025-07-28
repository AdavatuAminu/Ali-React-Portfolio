import { useEffect, useState, useCallback } from 'react';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';

export default function Home({ setActiveSection }) {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [showMore, setShowMore] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

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
        liveLink: "https://www.behance.net/aliyuaminu.com",
        githubLink: null
      },
      {
        title: "Global Routes Website Design",
        description: "Complete UI/UX design for an Air transport service company.",
        image: "/UI/web2.jpg",
        liveLink: "https://www.behance.net/aliyuaminu.com",
        githubLink: null
      },
      {
        title: "Stay Health Inc Website Redesign",
        description: "Complete UI/UX redesign for a corporate website with user testing.",
        image: "/UI/web3.jpg",
        liveLink: "https://www.behance.net/aliyuaminu.com",
        githubLink: null
      },
      {
        title: "Need Help Web App",
        description: "Interactive Figma prototype for a task management mobile application.",
        image: "/UI/web4.jpg",
        liveLink: "https://www.behance.net/aliyuaminu.com",
        githubLink: null
      }
    ],
    graphic: [
      {
        title: "Brand Identity",
        description: "Complete branding package including logo, business cards, and style guide.",
        images: ["/graphics/design1.jpg", "/graphics/design2.jpg", "/graphics/design3.jpg"],
        liveLink: "https://www.behance.net/aliyuaminu.com",
        githubLink: null
      },
      {
        title: "Marketing Materials",
        description: "Series of posters and social media graphics for product launch.",
        images: ["/graphics/design2.jpg", "/mock/graphic5.jpg", "/mock/graphic6.jpg"],
        liveLink: "https://your-portfolio-link.com",
        githubLink: null
      },
      {
        title: "Marketing Flyer",
        description: "Series of posters and social media graphics for product launch.",
        images: ["/graphics/design3.jpg", "/mock/graphic8.jpg", "/mock/graphic9.jpg"],
        liveLink: "https://your-portfolio-link.com",
        githubLink: null
      },
      {
        title: "Social Media Flyer",
        description: "Complete branding package including logo, business cards, and style guide.",
        images: ["/graphics/design4.jpg", "/mock/graphic11.jpg", "/mock/graphic12.jpg"],
        liveLink: "https://your-portfolio-link.com",
        githubLink: null
      },
      {
        title: "Logo Design",
        description: "Series of posters and social media graphics for product launch.",
        images: ["/graphics/design5.jpg", "/mock/graphic14.jpg", "/mock/graphic15.jpg"],
        liveLink: "https://your-portfolio-link.com",
        githubLink: null
      },
      {
        title: "Product Branding",
        description: "Series of posters and social media graphics for product launch.",
        images: ["/graphics/design6.jpg", "/mock/graphic17.jpg", "/mock/graphic18.jpg"],
        liveLink: "https://your-portfolio-link.com",
        githubLink: null
      },
      {
        title: "Marketing Leaflets",
        description: "Series of posters and social media graphics for product launch.",
        images: ["/graphics/design7.jpg", "/mock/graphic20.jpg", "/mock/graphic21.jpg"],
        liveLink: "https://your-portfolio-link.com",
        githubLink: null
      },
      {
        title: "Graduation Flyer",
        description: "Series of posters and social media graphics for product launch.",
        images: ["/graphics/design8.jpg", "/mock/graphic23.jpg", "/mock/graphic24.jpg"],
        liveLink: "https://your-portfolio-link.com",
        githubLink: null
      },
      {
        title: "Banner Designs",
        description: "Series of posters and social media graphics for product launch.",
        images: ["/graphics/design9.jpg", "/mock/graphic26.jpg", "/mock/graphic27.jpg"],
        liveLink: "https://your-portfolio-link.com",
        githubLink: null
      },
    ]
  };

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleClosePopup = () => {
    setSelectedImageIndex(null);
  };

  const handleSwipe = (direction) => {
    if (selectedImageIndex !== null) {
      const graphicData = portfolioData.graphic;
      const newIndex = selectedImageIndex + direction;
      if (newIndex >= 0 && newIndex < graphicData.length) {
        setSelectedImageIndex(newIndex);
      }
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
  }, [selectedImageIndex]);

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
            {`{ JavaScript, React, Next.js, Rails, MongoDB, CSS, Sass ... }`}
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
      </section >

    {/* Portfolio Section */ }
    < section id = "portfolio" className = "min-h-screen py-25 max-w-7xl mx-auto" >
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
  {
    portfolioData[activeCategory].length > (window.innerWidth >= 1024 ? 3 : 4) && !showMore && (
      <div className="text-center mt-8">
        <button
          onClick={() => setShowMore(true)}
          className="px-6 py-3 bg-blue-700 rounded-full text-white hover:bg-orange-500"
        >
          See More
        </button>
      </div>
    )
  }
  {
    selectedImageIndex !== null && activeCategory === 'graphic' && (
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
          src={portfolioData.graphic[selectedImageIndex].images[0]}
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
    )
  }
      </section >

    {/* Contact Section */ }
    < section id = "contact" className = "min-h-screen py-25 max-w-xl mx-auto text-center" >
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
      </section >
    </div >
  );
}