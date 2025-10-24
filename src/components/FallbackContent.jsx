import React from 'react';

const FallbackContent = () => {
  return (
    <div className="min-h-screen bg-[#030014] text-white">
      {/* Simple Navbar */}
      <nav className="fixed w-full top-0 z-50 bg-[#030014]/50 backdrop-blur-xl">
        <div className="mx-auto px-[5%] sm:px-[5%] lg:px-[10%]">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-[#a855f7] to-[#6366f1] bg-clip-text text-transparent">
              ZoukhDev
            </div>
          </div>
        </div>
      </nav>

      {/* Simple Hero Section */}
      <section id="Home" className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              Frontend
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
              Developer
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm a passionate web developer with expertise in modern technologies and a keen eye for design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#Contact" 
              className="px-8 py-3 bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white rounded-lg hover:opacity-80 transition-opacity"
            >
              Get In Touch
            </a>
            <a 
              href="#Portofolio" 
              className="px-8 py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              View My Work
            </a>
          </div>
        </div>
      </section>

      {/* Simple About Section */}
      <section id="About" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            I specialize in creating immersive, interactive experiences using modern web technologies. 
            My passion lies in building user-friendly applications that combine functionality with beautiful design.
          </p>
        </div>
      </section>

      {/* Simple Portfolio Section */}
      <section id="Portofolio" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
            My Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <div className="w-full h-48 bg-gradient-to-br from-[#6366f1]/20 to-[#a855f7]/20 rounded-lg mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Project {i}</h3>
                <p className="text-gray-400">A modern web application built with React and modern technologies.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Contact Section */}
      <section id="Contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Ready to work together? Let's discuss your next project.
          </p>
          <a 
            href="mailto:contact@zoukhdev.com" 
            className="inline-block px-8 py-3 bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white rounded-lg hover:opacity-80 transition-opacity"
          >
            Send Message
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 ZoukhDev™. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FallbackContent;
