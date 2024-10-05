import React, { useState } from 'react';

const ProjectCard = ({ title, description, technologies, link, image, genre }) => (
  <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg mb-8 transition-transform duration-300 ease-in-out hover:scale-105">
    <div className="flex flex-col md:flex-row">
      {image && (
        <div className="md:w-1/3">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className={`${image ? 'md:w-2/3' : 'w-full'}`}>
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium">{title}</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
            {technologies}
          </p>
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mt-2">
            {genre}
          </span>
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
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Link
              </dt>
              <dd className="mt-1 text-sm text-gray-900 dark:text-gray-100 sm:mt-0 sm:col-span-2">
                <a href={link} className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const [selectedGenre, setSelectedGenre] = useState('All');

  const projects = [
    {
      title: "Exoplanet Detector",
      description: "Developed an exoplanet detection system using machine learning and deep learning techniques. Built a high-performing Convolutional Neural Network (CNN) model achieving 99.82% precision, 100% recall, and 99.91% accuracy.",
      technologies: "Python, Pytorch, TensorFlow, Scikit-Learn",
      link: "https://github.com/Pr0-C0der/Exoplanet-Detection-using-CNN",
      image: "https://images.squarespace-cdn.com/content/v1/55a676ebe4b0e7324c26d410/1688918850423-BULMYJVZDZEFFKD0U8R7/exo3.jpg?format=1000w",
      genre: "Deep learning"
    },
    {
      title: "Mileage Predictor",
      description: "Developed a web application for car mileage prediction using various machine learning techniques. Trained and compared five regression models, namely Support Vector, Random Forest, XGBoost, LightGBM, etc.",
      technologies: "Python, Flask, Scikit-Learn",
      link: "https://github.com/Pr0-C0der/End-To-End-AUTOMPG-Machine-Learning-Project",
      image: "https://www.cashbasisaccounting.uk/wp-content/uploads/2021/06/mileage-calculator-1.jpg",
      genre: "Machine Learning"
    },
    {
      title: "Shoot the Spaceship",
      description: "A two-player game built with Pygame where players can compete against each other by shooting down each other's spaceships.",
      technologies: "Python, Pygame",
      link: "https://github.com/Pr0-C0der/Shoot-The-Spaceship",
      image: "https://wallpapercave.com/wp/wp3205648.jpg",
      genre: "Gaming"
    },
    {
      title: "Maven Toy Analytics",
      description: "Developing an interactive dashboard for a toy company, Maven Toys. Managers can use this dashboard to get comprehensive report about the sales of toys. The aim of this data analysis project is to create an interactive dashboard using Power BI for analyzing sales of a toy company called Maven Toys. The project involves taking raw sales and inventory data, cleaning and transforming it into a suitable format, and then visualizing the insights through an interactive and user-friendly dashboard.",
      technologies: "Excel, Power BI",
      link: "https://github.com/Pr0-C0der/Toys-Sales-Analysis-Using-Power-BI-",
      image: "https://www.kanbanbox.com/wp-content/uploads/2022/07/KanbanBOX_ekanban_Business_Intelligence_Con_Power_BI_2.png",
      genre: "Data Analytics"
    }
  ];

  const genres = ['All', ...new Set(projects.map(project => project.genre))];

  const filteredProjects = selectedGenre === 'All' 
    ? projects 
    : projects.filter(project => project.genre === selectedGenre);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={`px-4 py-2 rounded-full ${
                selectedGenre === genre
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
              }`}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>
      {filteredProjects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default Projects;