import React from 'react';
import { Award } from 'lucide-react';

const AchievementItem = ({ title, description }) => (
  <div className="flex items-start mb-4">
    <Award className="w-6 h-6 mr-2 text-blue-500" />
    <div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  </div>
);

const Home = () => {
  const achievements = [
    {
      title: "Blogger",
      description: "More than 500+ subscribers on my blog"
    },
    {
      title: "Joint Entrance Examination (JEE)",
      description: "Ranked within the top 1.5% of students out of 1.5 million."
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-16">
      <img src="https://i.ibb.co/qBbRmwQ/portfolio-image.jpg" alt="Prathamesh Gadekar" className="w-48 h-48 rounded-full mb-8" />
      <h1 className="text-4xl font-bold mb-4 text-center">Prathamesh Gadekar</h1>
      <p className="text-xl mb-8 text-center">Computer Science Student | AI & Machine Learning Enthusiast</p>
      <p className="text-center max-w-2xl mb-8">
        Research-driven Computer Science student with a strong foundation in AI, Machine Learning, and Computer Vision, eager to contribute to impactful research. Seeking opportunities to collaborate with organizations or academic institutions that value innovation and rigorous research, while offering the chance for continuous learning and professional growth.
      </p>
      
      <div className="w-full max-w-2xl mt-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Key Achievements</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          {achievements.map((achievement, index) => (
            <AchievementItem key={index} {...achievement} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;