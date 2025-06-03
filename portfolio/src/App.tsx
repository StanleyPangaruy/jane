import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Download, User, BookOpen, Briefcase, ExternalLink, Github, Linkedin } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

interface Education {
  degree: string;
  school: string;
  period: string;
  gpa?: string;
}

const Portfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  const projects: Project[] = [
    {
      title: "Financial Analysis Dashboard",
      description: "Comprehensive dashboard for analyzing company financial performance with interactive charts and ratio calculations.",
      technologies: ["Excel", "Power BI", "Financial Modeling"]
    },
    {
      title: "Budget Management System",
      description: "Personal budgeting application with expense tracking, category management, and financial goal setting.",
      technologies: ["Excel VBA", "Data Analysis", "Forecasting"]
    },
    {
      title: "Tax Preparation Case Study",
      description: "Complete tax preparation project for a small business including depreciation schedules and tax optimization strategies.",
      technologies: ["Tax Software", "Regulatory Compliance", "Documentation"]
    }
  ];

  const experience: Experience[] = [
    {
      title: "Accounting Intern",
      company: "Local Accounting Firm",
      period: "Summer 2024",
      description: [
        "Assisted with monthly financial statement preparation",
        "Performed accounts receivable and payable reconciliations",
        "Supported tax preparation for individual and business clients"
      ]
    },
    {
      title: "Finance Tutor",
      company: "University Tutoring Center",
      period: "Sept 2023 - Present",
      description: [
        "Provided one-on-one tutoring for accounting principles",
        "Helped students with financial statement analysis",
        "Maintained 95% student satisfaction rating"
      ]
    }
  ];

  const education: Education[] = [
    {
      degree: "Bachelor of Science in Accounting",
      school: "University Name",
      period: "2022 - 2026 (Expected)",
      gpa: "3.8"
    }
  ];

  const skills = [
    "Financial Accounting",
    "Management Accounting",
    "Tax Preparation",
    "Auditing",
    "Excel & VBA",
    "QuickBooks",
    "Financial Analysis",
    "Cost Accounting",
    "Budgeting & Forecasting",
    "Regulatory Compliance"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-emerald-800">JANE</div>
            <div className="hidden md:flex space-x-8">
              {['hero', 'about', 'experience', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-emerald-600 ${
                    activeSection === section ? 'text-emerald-600' : 'text-gray-600'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative mb-8">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-emerald-400 to-green-600 shadow-2xl flex items-center justify-center">
              <User size={80} className="text-white" />
            </div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow-lg border-2 border-emerald-200">
              <span className="text-emerald-600 font-semibold">Available for Opportunities</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            Hello, I'm <span className="text-emerald-600">Jane</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Aspiring <span className="text-emerald-600 font-semibold">Certified Public Accountant</span>
          </p>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate accounting student with a strong foundation in financial analysis, 
            tax preparation, and business consulting. Dedicated to helping businesses achieve 
            financial clarity and success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View My Work
            </button>
            <button className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
              <Download size={20} />
              Download Resume
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-emerald-600 mb-4">My Journey</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Currently pursuing my Bachelor's degree in Accounting with a passion for financial 
                analysis and business consulting. I believe in the power of accurate financial 
                information to drive business decisions and create sustainable growth.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Through internships and academic projects, I've gained hands-on experience in 
                financial statement preparation, tax compliance, and audit procedures. My goal 
                is to become a CPA and help businesses navigate complex financial challenges.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white p-4 rounded-lg shadow-md border border-green-100">
                  <div className="text-2xl font-bold text-emerald-600">3.8</div>
                  <div className="text-sm text-gray-600">GPA</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border border-green-100">
                  <div className="text-2xl font-bold text-emerald-600">5+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-emerald-600 mb-6">Core Skills</h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <div key={index} className="bg-white p-3 rounded-lg shadow-sm border border-green-100 text-center text-gray-700 hover:shadow-md transition-shadow">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section id="experience" className="py-20 px-6 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Education & Experience</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold text-emerald-600 mb-8 flex items-center gap-2">
                <BookOpen className="text-emerald-600" size={24} />
                Education
              </h3>
              {education.map((edu, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-green-100 mb-4">
                  <h4 className="text-lg font-semibold text-gray-800">{edu.degree}</h4>
                  <p className="text-emerald-600 font-medium">{edu.school}</p>
                  <p className="text-gray-600 text-sm mb-2">{edu.period}</p>
                  {edu.gpa && <p className="text-gray-700">GPA: {edu.gpa}/4.0</p>}
                </div>
              ))}
            </div>
            
            {/* Experience */}
            <div>
              <h3 className="text-2xl font-semibold text-emerald-600 mb-8 flex items-center gap-2">
                <Briefcase className="text-emerald-600" size={24} />
                Experience
              </h3>
              {experience.map((exp, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-green-100 mb-4">
                  <h4 className="text-lg font-semibold text-gray-800">{exp.title}</h4>
                  <p className="text-emerald-600 font-medium">{exp.company}</p>
                  <p className="text-gray-600 text-sm mb-3">{exp.period}</p>
                  <ul className="text-gray-700 text-sm space-y-1">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-600 mt-1">•</span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-green-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {project.link && (
                    <button className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium transition-colors">
                      <ExternalLink size={16} />
                      View Project
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-emerald-600 to-green-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Let's Connect</h2>
          <p className="text-emerald-100 text-lg mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities, networking, and discussing 
            the exciting world of accounting and finance.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <Mail className="text-white mx-auto mb-4" size={32} />
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-emerald-100">jane@email.com</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <Phone className="text-white mx-auto mb-4" size={32} />
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <p className="text-emerald-100">+1 (555) 123-4567</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <MapPin className="text-white mx-auto mb-4" size={32} />
              <h3 className="text-white font-semibold mb-2">Location</h3>
              <p className="text-emerald-100">Lopez, Quezon, Philippines</p>
            </div>
          </div>
          
          <div className="flex justify-center gap-6">
            <button className="bg-white/20 backdrop-blur-sm p-3 rounded-full border border-white/30 hover:bg-white/30 transition-all">
              <Linkedin className="text-white" size={24} />
            </button>
            <button className="bg-white/20 backdrop-blur-sm p-3 rounded-full border border-white/30 hover:bg-white/30 transition-all">
              <Github className="text-white" size={24} />
            </button>
            <button className="bg-white/20 backdrop-blur-sm p-3 rounded-full border border-white/30 hover:bg-white/30 transition-all">
              <Mail className="text-white" size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Jane Marnel. Designed with 💚 for success.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;