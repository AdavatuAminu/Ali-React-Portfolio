import { useEffect, useState, useCallback } from 'react';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';

export default function Home({ setActiveSection }) {
  const [activeCategory, setActiveCategory] = useState('frontend');

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
        value: 3,
        random: true
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false
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
        image: "/graphics/design1.jpg",
        liveLink: "https://www.behance.net/aliyuaminu.com",
        githubLink: null
      },
      {
        title: "Marketing Materials",
        description: "Series of posters and social media graphics for product launch.",
        image: "/graphics/design2.jpg",
        liveLink: "https://your-portfolio-link.com",
        githubLink: null
      },
      {
        title: "Marketing Flyer",
        description: "Series of posters and social media graphics for product launch.",
        image: "/graphics/design3.jpg",
        liveLink: "https://your-portfolio-link.com",
        githubLink: null
      },
      {
        title: "Social Media Flyer",
        description: "Complete branding package including logo, business cards, and style guide.",
        image: "/graphics/design4.jpg",
        liveLink: "https://your-portfolio-link.com",
        githubLink: null
      },
      {
        title: "Logo Design",
        description: "Series of posters and social media graphics for product launch.",
        image: "/graphics/design5.jpg",
        liveLink: "https://your-portfolio-link.com",
        githubLink: null
      },
      {
        title: "Product Branding",
        description: "Series of posters and social media graphics for product launch.",
        image: "/graphics/design6.jpg",
        liveLink: "https://your-portfolio-link.com",
        githubLink: null
      },
      {
        title: "Marketing Leaflets",
        description: "Series of posters and social media graphics for product launch.",
        image: "/graphics/design7.jpg",
        liveLink: "https://your-portfolio-link.com",
        githubLink: null
      },
      {
        title: "Graduation Flyer",
        description: "Series of posters and social media graphics for product launch.",
        image: "/graphics/design8.jpg",
        liveLink: "https://your-portfolio-link.com",
        githubLink: null
      },
      {
        title: "Banner Designs",
        description: "Series of posters and social media graphics for product launch.",
        image: "/graphics/design9.jpg",
        liveLink: "https://your-portfolio-link.com",
        githubLink: null
      },
    ]
  };

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
        <div className="min-h-screen flex flex-col items-center justify-center text-center relative">
          <h1 className="text-5xl font-bold mb-4">Frontend Developer</h1>
          <p className="text-lg mb-6">{`{ JavaScript, React, Next.js, Vue.js, MongoDB, CSS, Sass ... }`}</p>
          <p className="text-md max-w-md mb-8">
            Specializing in React & Next.js I leverage cutting-edge technologies to bring web projects to life.
          </p>
        <div className="flex gap-4 mb-12">
          <button onClick={scrollToPortfolio} className="px-6 py-3 bg-blue-700 rounded-full text-white hover:bg-orange-500">
            See my dev work
          </button>
          <a href="/AliyuAminuAdavatuCV.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 text-blue-500 hover:underline">
            Download CV
          </a>
        </div>
        <img src="/KeyboardMouse.png" alt="Keyboard and Mouse" className="w-1/3 opacity-50" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen px-6 py-12 max-w-4xl mx-auto text-inherit text-justify">
        <p className="text-lg leading-relaxed mt-10">
          Hi, I’m <span className="font-semibold text-indigo-600">Aliyu Aminu Adavatu</span> — a passionate Frontend Developer based in Kaduna, Nigeria.
          My journey into tech began with a strong curiosity for building things that people interact with daily.
        </p>
        <p className="mt-4 text-lg leading-relaxed">
          I specialize in creating intuitive and responsive web interfaces using technologies like <strong>React.js</strong>, <strong>Next.js</strong>, <strong>Tailwind CSS</strong>, and <strong>JavaScript</strong>. With a strong foundation in <strong>UI/UX design</strong> and <strong>graphic design</strong>, I focus on building products that are not just functional but also visually compelling and user-centric.
        </p>
        <p className="mt-4 text-lg leading-relaxed">
          Over the past few months, I’ve worked as an intern, volunteer, and freelancer—contributing to multiple frontend projects and collaborating with cross-functional teams. I enjoy solving real-world problems, enhancing user experiences, and constantly exploring new tools and design systems to stay ahead in the fast-paced web ecosystem.
        </p>
        <p className="mt-4 text-lg leading-relaxed">
          In addition to frontend development, I have hands-on experience in creating branding materials, layouts, and visual assets using tools like <strong>Figma</strong> and <strong>Adobe Creative Suite</strong>. This creative background enhances my approach to building clean and consistent UI components.
        </p>
        <p className="mt-4 text-lg leading-relaxed">
          When I'm not coding, I enjoy reading tech blogs, designing interfaces, or brainstorming innovative ideas that can make a positive impact locally and globally. I’m currently open to <span className="font-semibold">remote opportunities, internships, and full-time roles</span> where I can grow, contribute, and collaborate with passionate teams.
        </p>
        <p className="mt-4 text-lg leading-relaxed">
          I hold a degree in Urban and Regional Planning from the Federal University of Technology, Minna. Driven by a growing passion for technology, I have since earned certifications in <strong>Frontend Development</strong>, <strong>Software Engineering</strong>, <strong>Graphic Design</strong>, and <strong>UI/UX Design</strong>.
        </p>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="min-h-screen py-25 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Portfolio</h2>
        <div className="flex justify-center mb-8">
          <div className="flex gap-4">
            <button
              className={`px-4 py-2 rounded-[20px] ${activeCategory === 'frontend' ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setActiveCategory('frontend')}
            >
              Frontend
            </button>
            <button
              className={`px-4 py-2 rounded-[20px] ${activeCategory === 'uiux' ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setActiveCategory('uiux')}
            >
              UI/UX
            </button>
            <button
              className={`px-4 py-2 rounded-[20px] ${activeCategory === 'graphic' ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setActiveCategory('graphic')}
            >
              Graphic Design
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData[activeCategory].map((project, index) => (
            <div key={index} className="border rounded-[20px] shadow-lg hover:shadow-lg transition overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
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
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-25 max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="mb-4">Let’s connect! Reach out via email:</p>
        <a href="mailto:aliyuaminu3369@gmail.com" className="text-blue-500 hover:underline">
          aliyuaminu3369@gmail.com
        </a>
      </section>
    </div>
  );
}