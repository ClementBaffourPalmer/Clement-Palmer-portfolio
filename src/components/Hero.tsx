import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Download, Eye, MessageCircle } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

  const handleMessageClick = () => {
    window.open('sms:+233240441107', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%234F46E5%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-400 via-purple-500 to-yellow-500 shadow-2xl">
                <img 
                  src="/profile-portrait.jpg" 
                  alt="Clement Palmer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-yellow-500 opacity-20 animate-pulse"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-yellow-500 bg-clip-text text-transparent animate-gradient">
                  Clement
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Full-Stack Developer & Creative Problem Solver
              </p>
              
              <p className="text-lg text-gray-400 mb-12 max-w-2xl">
                I craft exceptional digital experiences through clean code, intuitive design, and innovative solutions. 
                Passionate about building products that make a difference.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-16">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl">
                  View My Work
                </button>
                
                <div className="flex gap-3">
                  <button 
                    onClick={handleViewResume}
                    className="border-2 border-gray-600 text-gray-300 px-6 py-4 rounded-lg font-semibold hover:border-gray-500 hover:text-white transition-colors duration-200 flex items-center gap-2"
                  >
                    <Eye size={20} />
                    View Resume
                  </button>
                  
                  <button 
                    onClick={handleDownloadResume}
                    className="border-2 border-gray-600 text-gray-300 px-6 py-4 rounded-lg font-semibold hover:border-gray-500 hover:text-white transition-colors duration-200 flex items-center gap-2"
                  >
                    <Download size={20} />
                    Download Resume
                  </button>
                </div>
              </div>
              
              <div className="flex justify-center lg:justify-start space-x-6 mb-16">
                <a 
                  href="https://github.com/ClementBaffourPalmer?tab=repositories" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110 transform"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/clement-palmer-867679219/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110 transform"
                >
                  <Linkedin size={24} />
                </a>
                <button 
                  onClick={handleMessageClick}
                  className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110 transform"
                >
                  <MessageCircle size={24} />
                </button>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110 transform">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white transition-colors duration-200 animate-bounce"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
};

export default Hero;