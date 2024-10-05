import React from 'react';

const ExperienceCard = ({ title, organization, description, logo, type }) => (
  <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg mb-8 transition-transform duration-300 ease-in-out hover:scale-105">
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/4 p-4 flex items-center justify-center">
        <img src={logo} alt={`${organization} logo`} className="w-24 h-24 object-contain" />
      </div>
      <div className="md:w-3/4">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium">{title}</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
            {organization}
          </p>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200 dark:sm:divide-gray-700">
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Description
              </dt>
              <dd className="mt-1 text-sm text-gray-900 dark:text-gray-100 sm:mt-0 sm:col-span-2">
                {description}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
);

const Experience = () => {
  const technicalExperiences = [
    {
      title: "Research Intern",
      organization: "Tata Research Development and Design Centre (TRDDC)",
      description: "My work at Tata Research Development and Design Centre (TRDDC) involves meta-learning based continual learning methods for fine-grained fruit quality classification. I curated a dataset of fruits at five distinct ripening stages and implemented various models to benchmark their performance. Additionally, I submitted a research paper on this project to the IEEE APSCON conference, which is currently under review.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Tata_Group.svg/1200px-Tata_Group.svg.png" // Replace with actual logo path
    }
  ];

  const volunteeringExperiences = [
    {
      title: "Tech Blogger",
      organization: "Medium",
      description: "I write tech blogs on AI, Data science and upcoming technologies.",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTljzm-KBc840BjzOkV-hsOB1Ztyebohouu8g&s" // Replace with actual logo path
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">   
      <h3 className="text-2xl font-semibold mb-4">Technical Experience</h3>
      {technicalExperiences.map((exp, index) => (
        <ExperienceCard key={index} {...exp} type="technical" />
      ))}
      
      <h3 className="text-2xl font-semibold mb-4 mt-12">Volunteering Experience</h3>
      {volunteeringExperiences.map((exp, index) => (
        <ExperienceCard key={index} {...exp} type="volunteering" />
      ))}
    </div>
  );
};

export default Experience;