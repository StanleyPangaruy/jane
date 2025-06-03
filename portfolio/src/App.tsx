import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Download, User, BookOpen, Award, Briefcase, ExternalLink, Linkedin, Calculator, TrendingUp, PieChart, BarChart3, DollarSign, FileText, Target, Zap, Star, ChevronRight, PhilippinePeso } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  icon: React.ReactNode;
  gradient: string;
}

interface Experience {
  title: string;
  company: string;
  location?: string;
  period: string;
  description: string[];
  icon: React.ReactNode;
}

interface Education {
  degree: string;
  school: string;
  period: string;
  gpa?: string;
}

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
}

const Portfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState('jane');
  const [isScrolled, setIsScrolled] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({ gpa: 0, projects: 0, experience: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Animate stats
    const timer = setTimeout(() => {
      setAnimatedStats({ gpa: 3.8, projects: 8, experience: 2 });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  const projects: Project[] = [
    {
      title: "Financial Analysis Dashboard",
      description: "Interactive Excel dashboard with advanced pivot tables, financial ratios, and automated variance analysis for quarterly reporting.",
      technologies: ["Advanced Excel", "Power BI", "Financial Modeling", "VBA"],
      icon: <BarChart3 size={32} className="text-white" />,
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      title: "Tax Optimization Calculator",
      description: "Comprehensive tax planning tool with depreciation schedules, deduction optimization, and multi-scenario analysis.",
      technologies: ["Tax Software", "Excel VBA", "Regulatory Compliance"],
      icon: <Calculator size={32} className="text-white" />,
      gradient: "from-green-500 to-emerald-600"
    },
    {
      title: "Budget Forecasting Model",
      description: "Dynamic budgeting system with rolling forecasts, variance analysis, and automated reporting for small businesses.",
      technologies: ["Financial Planning", "Forecasting", "Data Analysis"],
      icon: <TrendingUp size={32} className="text-white" />,
      gradient: "from-teal-500 to-green-600"
    },
    {
      title: "Audit Trail System",
      description: "Comprehensive audit documentation system with internal controls testing and compliance tracking.",
      technologies: ["Audit Procedures", "Internal Controls", "Documentation"],
      icon: <FileText size={32} className="text-white" />,
      gradient: "from-emerald-600 to-green-700"
    }
  ];

  const experience: Experience[] = [
    {
      title: "SK Kagawad",
      company: "Sangguniang Kabataan",
      location: "Brgy. Gomez, Lopez, Quezon",
      period: "Nov 2023 - Present",
      description: [
        "Appointed Budget Monitoring Officer",
        "Elected BAC Chairperson",
      ],
      icon: <Briefcase className="text-emerald-600" size={24} />
    },
    {
      title: "On-the-Job Trainee Accounting",
      company: "Acyatan and Co. CPAs",
      location: "Lucena City, Quezon",
      period: "Sept 2024 - Dec 2024",
      description: [
        "Completed 400 hours of hands-on training focused on financial statement preparation, trial balance adjustments, tax compliance (eBIR forms, alphalist validation, donor's tax computation), and corporate documentation.",
        "Assisted in managing and auditing large datasets and financial documents, enhancing accuracy and attention to detail in professional workflows.",
        "Strengthened Excel proficiency (including pivot tables), analytical thinking, independence, and problem-solving skills in a real-world accounting environment.",
      ],
      icon: <BookOpen className="text-emerald-600" size={24} />
    }
  ];

  const education: Education[] = [
    {
      degree: "Bachelor of Science in Accountancy",
      school: "Polytechnic University of the Philippines - Lopez, Quezon",
      period: "2021 - 2025 (Expected)",
      gpa: "3.85"
    }
  ];

  const skills: Skill[] = [
    { name: "Financial Accounting", level: 95, icon: <DollarSign size={20} /> },
    { name: "Management Accounting", level: 90, icon: <BarChart3 size={20} /> },
    { name: "Tax Preparation", level: 85, icon: <Calculator size={20} /> },
    { name: "Auditing", level: 80, icon: <FileText size={20} /> },
    { name: "Excel & VBA", level: 92, icon: <TrendingUp size={20} /> },
    { name: "QuickBooks Pro", level: 88, icon: <PieChart size={20} /> }
  ];

  const certifications = [
    "QuickBooks ProAdvisor Certified",
    "Excel Expert Certification",
    "Preparing for CPA Exam (2025)",
    "VITA Tax Preparation Volunteer"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50">
      {/* Floating Elements */}
      <div className="fixed top-20 left-10 opacity-10 animate-pulse">
        <PhilippinePeso size={120} className="text-emerald-500" />
      </div>
      <div className="fixed bottom-20 right-10 opacity-10 animate-pulse delay-1000">
        <Calculator size={100} className="text-green-500" />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-2xl border-b border-emerald-100' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <Calculator className="text-white" size={20} />
              </div>
              <div className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                Jane Marnel
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              {['jane', 'about', 'experience', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-semibold transition-all duration-300 hover:text-emerald-600 relative ${
                    activeSection === section ? 'text-emerald-600' : 'text-gray-700'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                  {activeSection === section && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="jane" className="min-h-screen flex items-center justify-center px-6 pt-20 md:pt-0 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-green-500/5"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10 py-8">
          <div className="relative mb-8 md:mb-12">
            <div className="w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 shadow-2xl flex items-center justify-center relative overflow-hidden p-2">
              <div className="absolute inset-2 rounded-full overflow-hidden">
                  <img 
                    src="/pfp.jpg" 
                    alt="Jane's Profile" 
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      // Fallback to user icon if image doesn't load
                      e.currentTarget.style.display = 'none';
                      if (e.currentTarget.nextElementSibling) {
                        (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                      }
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-emerald-300 to-green-400 rounded-full flex items-center justify-center" style={{display: 'none'}}>
                  <User size={100} className="text-white" />
                  </div>
              </div>
              <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <Star className="text-white" size={24} />
              </div>
            </div>
            <div className="absolute -bottom-4 md:-bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-6 md:px-8 py-2 md:py-3 rounded-full shadow-xl border-2 border-emerald-200">
              <span className="text-emerald-600 font-bold text-xs md:text-sm">🚀 Ready for Opportunities</span>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-black text-gray-800 mb-6">
            Hello, I'm <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent">Jane</span>
          </h1>
          <div className="text-2xl md:text-3xl text-gray-700 mb-4 font-semibold">
            Future <span className="text-emerald-600">Certified Public Accountant</span>
          </div>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Passionate accounting student specializing in financial analysis, tax optimization, 
            and business intelligence. Transforming numbers into strategic insights that drive success.
          </p>
          
          {/* Animated Stats */}
          <div className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-emerald-100">
              <div className="text-3xl font-black text-emerald-600">{animatedStats.gpa.toFixed(1)}</div>
              <div className="text-sm text-gray-600 font-semibold">GPA</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-emerald-100">
              <div className="text-3xl font-black text-emerald-600">{animatedStats.projects}+</div>
              <div className="text-sm text-gray-600 font-semibold">Projects</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-emerald-100">
              <div className="text-3xl font-black text-emerald-600">{animatedStats.experience}+</div>
              <div className="text-sm text-gray-600 font-semibold">Years Experience</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => scrollToSection('projects')}
              className="group bg-gradient-to-r from-emerald-600 to-green-600 text-white px-10 py-5 rounded-2xl font-bold hover:from-emerald-700 hover:to-green-700 transition-all duration-300 shadow-2xl hover:shadow-emerald-500/25 transform hover:-translate-y-2 flex items-center justify-center gap-3"
            >
              <Zap size={24} />
              View My Work
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border-3 border-emerald-600 text-emerald-600 px-10 py-5 rounded-2xl font-bold hover:bg-emerald-600 hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 flex items-center justify-center gap-3">
              <Download size={24} />
              Download Resume
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-gray-800 mb-6">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-emerald-100">
                <h3 className="text-3xl font-bold text-emerald-600 mb-6 flex items-center gap-3">
                  <Target className="text-emerald-600" size={32} />
                  My Mission
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  I'm passionate about transforming complex financial data into clear, actionable insights. 
                  My goal is to help businesses make informed decisions through accurate accounting, 
                  strategic tax planning, and comprehensive financial analysis.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Currently pursuing my CPA certification while gaining hands-on experience through 
                  internships and real-world projects. I believe in continuous learning and staying 
                  current with evolving accounting standards and technologies.
                </p>
              </div>
              
              {/* Certifications */}
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-3xl border border-emerald-200">
                <h3 className="text-2xl font-bold text-emerald-600 mb-6 flex items-center gap-3">
                  <Award className="text-emerald-600" size={28} />
                  Certifications & Achievements
                </h3>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold text-emerald-600 mb-8 flex items-center gap-3">
                <BarChart3 className="text-emerald-600" size={32} />
                Core Competencies
              </h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-emerald-100">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="text-emerald-600">{skill.icon}</div>
                        <span className="font-semibold text-gray-800">{skill.name}</span>
                      </div>
                      <span className="text-emerald-600 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-emerald-500 to-green-500 h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-gradient-to-br from-white/50 to-emerald-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-gray-800 mb-6">Experience & Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Experience */}
            <div>
              <h3 className="text-3xl font-bold text-emerald-600 mb-10 flex items-center gap-3">
                <Briefcase className="text-emerald-600" size={32} />
                Professional Experience
              </h3>
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <div key={index} className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-emerald-100 hover:shadow-emerald-500/10 transition-all duration-300">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                        {exp.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-800 mb-1">{exp.title}</h4>
                        <p className="text-emerald-600 font-semibold text-lg">{exp.company}</p>
                        <p className="text-gray-500 text-sm">{exp.location}</p>
                        <p className="text-gray-600 font-medium">{exp.period}</p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Education */}
            <div>
              <h3 className="text-3xl font-bold text-emerald-600 mb-10 flex items-center gap-3">
                <BookOpen className="text-emerald-600" size={32} />
                Education
              </h3>
              {education.map((edu, index) => (
                <div key={index} className="bg-gradient-to-br from-emerald-600 to-green-700 p-8 rounded-3xl shadow-2xl text-white mb-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                      <BookOpen className="text-white" size={32} />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold">{edu.degree}</h4>
                      <p className="text-emerald-100 text-lg font-medium">{edu.school}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-2xl p-4 text-center">
                      <div className="text-2xl font-bold">{edu.period}</div>
                      <div className="text-emerald-100 text-sm">Period</div>
                    </div>
                    <div className="bg-white/10 rounded-2xl p-4 text-center">
                      <div className="text-2xl font-bold">{edu.gpa}/4.0</div>
                      <div className="text-emerald-100 text-sm">GPA</div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Relevant Coursework */}
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-emerald-100">
                <h4 className="text-xl font-bold text-emerald-600 mb-6">Key Coursework</h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {['Advanced Financial Accounting', 'Cost Accounting', 'Auditing Theory', 'Taxation', 'Financial Analysis', 'Business Law', 'Information Systems', 'Ethics in Accounting'].map((course, i) => (
                    <div key={i} className="bg-emerald-50 p-3 rounded-xl text-gray-700 font-medium">
                      {course}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-gray-800 mb-6">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world accounting solutions demonstrating technical expertise and practical application
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white rounded-3xl shadow-2xl border border-emerald-100 overflow-hidden hover:shadow-emerald-500/20 transition-all duration-500 transform hover:-translate-y-4">
                <div className={`bg-gradient-to-br ${project.gradient} p-8 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                      {project.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold border border-emerald-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <button className="group flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-bold transition-all duration-300 text-lg">
                    <ExternalLink size={20} />
                    View Project Details
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-br from-emerald-600 via-green-700 to-teal-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-48 translate-y-48"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-black text-white mb-8">Let's Connect & Collaborate</h2>
          <p className="text-emerald-100 text-xl mb-16 max-w-3xl mx-auto leading-relaxed">
            Ready to discuss opportunities, share insights about the accounting profession, 
            or collaborate on exciting financial projects. Let's make numbers work for success!
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Mail className="text-white" size={32} />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">Email</h3>
              <p className="text-emerald-100 text-lg">jmcantillana2021@gmail.com </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Phone className="text-white" size={32} />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">Phone</h3>
              <p className="text-emerald-100 text-lg">+63 (948) 998-0408</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="text-white" size={32} />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">Location</h3>
              <p className="text-emerald-100 text-lg">Lopez, Quezon</p>
            </div>
          </div>
          
          <div className="flex justify-center gap-6">
            <a href="https://www.linkedin.com/in/cantillana-jane-marnel-e-04825531a/" target="_blank" rel="noopener noreferrer">
              <button className="bg-white/20 backdrop-blur-lg p-4 rounded-2xl border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-110">
                <Linkedin className="text-white" size={28} />
              </button>
            </a>
            {/* <button className="bg-white/20 backdrop-blur-lg p-4 rounded-2xl border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-110">
              <Github className="text-white" size={28} />
            </button> */}
            <a href="mailto:jmcantillana2021@gmail.com">
              <button className="bg-white/20 backdrop-blur-lg p-4 rounded-2xl border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-110">
                <Mail className="text-white" size={28} />
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center">
              <Calculator className="text-white" size={16} />
            </div>
            <span className="text-xl font-bold">Jane Marnel</span>
          </div>
          <p className="text-gray-400 text-lg">
            © 2025 Jane Marnel • Future CPA • Designed by stnpy with 💚
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;