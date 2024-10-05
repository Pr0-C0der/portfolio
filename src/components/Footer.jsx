import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();


  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-gray-400">
          © {currentYear} Prathamesh Gadekar. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
