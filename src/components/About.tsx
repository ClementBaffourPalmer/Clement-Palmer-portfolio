import React from 'react';
import { Code, Palette, Rocket, Download, Eye } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-400" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with modern best practices"
    },
    {
      icon: <Palette className="w-8 h-8 text-purple-400" />,
      title: "Design Focus",
      description: "Creating beautiful, user-centered experiences that delight"
    },
    {
      icon: <Rocket className="w-8 h-8 text-yellow-400" />,
      title: "Innovation",
      description: "Always exploring new technologies and creative solutions"
    }
  ];

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/CLEM_RESUME.pdf';
    link.download = 'Clement_Palmer_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewResume = () => {
    window.open('/CLEM_RESUME.pdf', '_blank');
  };

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate full-stack developer with a love for creating digital experiences that matter. 
              With expertise in modern web technologies and a keen eye for design, I bridge the gap between 
              functionality and aesthetics.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              My journey in tech began with curiosity and has evolved into a career dedicated to continuous 
              learning and innovation. I believe in writing clean, efficient code while maintaining a focus 
              on user experience and accessibility.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open source 
              projects, or sharing knowledge with the developer community.
            </p>
            
            <div className="pt-6">
              <h3 className="text-xl font-semibold text-white mb-4">What I Bring</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  3+ years of full-stack development experience
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Strong background in modern JavaScript frameworks
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                  Passion for performance optimization and best practices
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <h3 className="text-xl font-semibold text-white mb-4">Resume</h3>
              <p className="text-gray-300 mb-4">
                Want to learn more about my experience and qualifications? Check out my detailed resume.
              </p>
              <div className="flex gap-3">
                <button 
                  onClick={handleViewResume}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl flex items-center gap-2"
                >
                  <Eye size={20} />
                  View Resume
                </button>
                
                <button 
                  onClick={handleDownloadResume}
                  className="border-2 border-gray-600 text-gray-300 px-6 py-3 rounded-lg font-semibold hover:border-gray-500 hover:text-white transition-colors duration-200 flex items-center gap-2"
                >
                  <Download size={20} />
                  Download
                </button>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors duration-200"
              >
                <div className="flex items-center mb-4">
                  {highlight.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{highlight.title}</h3>
                </div>
                <p className="text-gray-300">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;