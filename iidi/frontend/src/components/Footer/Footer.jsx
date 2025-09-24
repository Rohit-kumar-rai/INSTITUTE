import React from 'react';
import { Link } from 'react-router-dom';
// SVG component for the logo
const LogoIcon = () => (
  <img src="/logo.png" className="w-12 h-12  bg-gray-100  p-0" alt="" />
);

// SVG components for social media icons
const FacebookIcon = () => (
    <svg className="w-6 h-6 text-gray-500 hover:text-gray-700 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" /></svg>
);
const InstagramIcon = () => (
    <svg className="w-6 h-6 text-gray-500 hover:text-gray-700 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.644-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" /></svg>
);
const LinkedinIcon = () => (
    <svg className="w-6 h-6 text-gray-500 hover:text-gray-700 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
);
const TwitterIcon = () => (
    <svg className="w-6 h-6 text-gray-500 hover:text-gray-700 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.299 1.634 4.208 3.807 4.649-.63.172-1.296.22-1.994.195.621 1.956 2.423 3.379 4.568 3.416-1.616 1.266-3.645 2.023-5.83 2.023-.379 0-.753-.022-1.122-.067 2.089 1.342 4.58 2.123 7.24 2.123 8.693 0 13.455-7.223 13.455-13.455 0-.204-.005-.407-.013-.61a9.618 9.618 0 002.323-2.41z" /></svg>
);
const DribbbleIcon = () => (
    <svg className="w-6 h-6 text-gray-500 hover:text-gray-700 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 24c-6.627 0-12-5.373-12-12s5.373-12 12-12 12 5.373 12 12-5.373 12-12 12zm-2.4-15.82c.348-.035.703-.056 1.062-.056 4.003 0 7.426 2.656 8.601 6.33-1.119 1.45-2.62 2.633-4.34 3.425-1.512-3.03-4.394-5.281-7.82-5.751.199-.611.458-1.204.747-1.764.93-1.815 2.07-3.328 3.42-4.512-.349.034-.7.055-1.061.055-1.033 0-2.02-.195-2.92-.551.921 1.259 1.733 2.695 2.311 4.105zm-5.733 1.903c1.283-.223 2.61-.343 3.988-.343 1.173 0 2.304.103 3.379.293-1.08 3.63-3.953 6.401-7.585 7.211-1.223-1.39-2.089-3.141-2.42-5.031.541-.392 1.054-.812 1.539-1.252.348-.318.681-.645.999-.978zm13.133 3.117c-.244-1.812-.984-3.497-2.11-4.907.979.838 1.83 1.879 2.499 3.055.228.397.438.808.623 1.233-.342.168-.694.321-1.012.419z" /></svg>
);
const GithubIcon = () => (
    <svg className="w-6 h-6 text-gray-500 hover:text-gray-700 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
);

export default function Footer() {
  const footerLinks = [ {name:"Data science & AI" ,to: "DataScience"}, {name:"Digital Marketing With AI", to: "Digital Marketing With AI"}, {name:"Influencer Marketing With Content Creation", to: "Influencer Marketing With Content Creation"}]; //["Features", "data science & AI","Marketing Analytics","Design" /*"Careers", "Work", "Code", "Cool stuffs", "Last thing"*/];
   const AboutLinks =[ {name:"Home", to: "/"},{name:"About" ,to: "/"}, {name:"features", to: "/course"}]; 

  return (
    <footer className="bg-white text-gray-700 font-sans">
      <div className="container mx-auto px-6 py-12">
        {/* Top section of the footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: About and Social */}
          <div className="space-y-4">
            <LogoIcon />
            <p className="text-gray-500">
              Industry Growth 
 Brands increasingly rely on certified
 professionals to build authentic
 engagement and trust with their
 target audiences.

 

            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook"><FacebookIcon /></a>
              <a href="#" aria-label="Instagram"><InstagramIcon /></a>
              <a href="#" aria-label="LinkedIn"><LinkedinIcon /></a>
            </div>
          </div>

          {/* Column 2: Links */}
          <div>
            <h3 className="font-bold text-red-500 mb-4">About</h3>
            <ul className="space-y-3">
              {AboutLinks.map(link => (
                <li key={link.name}><Link to= {link.to} className="hover:text-red-500 transition-colors">{link.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Column 3: Links */}
          <div>
            <h3 className="font-bold text-red-500 mb-4">Course</h3>
            <ul className="space-y-3">
              {footerLinks.map(link => (
                <li key={link.name}><Link to={link.to} className="hover:text-red-500 transition-colors">{link.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Column 4: Popular Posts */}
          <div>
            <h3 className="font-bold text-red-500 mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <div className="hover:text-red-500 transition-colors">
                  <p className="font-semibold">+91-9761954123</p>
                  <p className="text-sm text-gray-500">WhatsApp contact number</p>
                </div>
              </li>
              <li>
                <div className="hover:text-red-500 transition-colors">
                  <p className="font-semibold">info@internationalinsitute
 ofdataintellegence</p>
                  <p className="text-sm text-gray-500"> Official email</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* Bottom section of the footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8">
          <div className="flex items-center space-x-2 mb-4 sm:mb-0">
            <LogoIcon />
            <p className="text-sm text-gray-500">&copy; 2025 IIDI. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook"><FacebookIcon /></a>
            <a href="#" aria-label="Twitter"><TwitterIcon /></a>
            <a href="#" aria-label="Dribbble"><DribbbleIcon /></a>
            <a href="#" aria-label="Github"><GithubIcon /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
