import React from 'react';

const EducationCard = ({ institution, degree, cgpa, duration, image }) => (
  <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg mb-8 transition-transform duration-300 ease-in-out hover:scale-105">
    <div className="flex items-center p-4">
      <div className="flex-shrink-0 mr-4">
        <img src={image} alt={institution} className="w-16 h-16 object-contain" />
      </div>
      <div className="flex-grow">
        <h3 className="text-lg leading-6 font-medium">
          {institution}
        </h3>
        <p className="mt-1 max-w-2xl text-sm">
          {degree}
        </p>
        <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          <p>CGPA: {cgpa}</p>
          <p>Duration: {duration}</p>
        </div>
      </div>
    </div>
  </div>
);


const Education = () => {
  const educations = [
    {
      institution: "Indian Institute of Information Technology Pune",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      cgpa: "7.96",
      duration: "Oct. 2021 -- Present",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/IIITP_logo.jpg" // Replace with actual image path
    },
    {
      institution: "Rao Junior College Of Science",
      degree: "Higher Secondary Certificate (HSC)",
      cgpa: "91.67%",
      duration: "June 2019 -- May 2021",
      image: "https://www.raoedu.ac.in/images/RJCS-1.png" // Replace with actual image path
    },
    {
      institution: "Hume Mc Henry Memorial Higher Secondary School and Junior College of Sda",
      degree: "Secondary School Certificate (SSC)",
      cgpa: "87.3%",
      duration: "June 2009 -- May 2019",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuT4EK-2gHxKjMvW26_vJtCE9zqRx3SnDaUg&s" // Replace with actual image path
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {educations.map((edu, index) => (
        <EducationCard key={index} {...edu} />
      ))}
    </div>
  );
};

export default Education;