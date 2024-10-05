import React from 'react';

const CertificationCard = ({ title, issuer, date, description, image, link }) => (
  <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg mb-6 transition-transform duration-300 ease-in-out hover:scale-105">
    <div className="flex flex-col sm:flex-row">
      <div className="sm:w-1/3 p-4 flex items-center justify-center">
        <img src={image} alt={`${title} logo`} className="w-40 h-40 object-contain" />
      </div>
      <div className="sm:w-2/3">
        <div className="px-4 py-3 sm:px-6">
          <h3 className="text-lg leading-6 font-medium">{title}</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
            {issuer} - {date}
          </p>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-3 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200 dark:sm:divide-gray-700">
            <div className="py-3 sm:py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Description
              </dt>
              <dd className="mt-1 text-sm text-gray-900 dark:text-gray-100 sm:mt-0 sm:col-span-2">
                {description}
              </dd>
            </div>
            <div className="py-3 sm:py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Verify
              </dt>
              <dd className="mt-1 text-sm text-gray-900 dark:text-gray-100 sm:mt-0 sm:col-span-2">
                <a href={link} className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200" target="_blank" rel="noopener noreferrer">
                  View Certificate
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
);

const Certifications = () => {
  const certifications = [
    {
      title: "Machine Learning Specialization",
      issuer: "Stanford University (Coursera)",
      date: "December 2022",
      description: "Comprehensive course covering supervised learning, unsupervised learning, and deep learning techniques.",
      image: "https://miro.medium.com/v2/resize:fit:1200/1*8LNWYIfSuwOKrWqJFVx0Mw.jpeg",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/5JLS759S37FS"
    },
    {
      title: " Natural Language Processing with Classification and Vector Spaces",
      issuer: "DeepLearning.AI",
      date: "January 2023",
      description: "I learned to analyze and manipulate human language through techniques like sentiment analysis. I explored vector space models to understand word relationships and visualized them using principal component analysis (PCA).",
      image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/XDP/XDP~COURSE!~classification-vector-spaces-in-nlp/XDP~COURSE!~classification-vector-spaces-in-nlp.jpeg",
      link: "https://www.coursera.org/account/accomplishments/certificate/EPMSNPJP6796"
    },
    {
      title: "DevOps, DataOps, MLOps",
      issuer: "Duke University (Coursera)",
      date: "July 2023",
      description: "I learned how to build continuous integration and delivery pipelines for ML models, emphasizing MLOps principles that involve managing data, training, and deploying models. ",
      image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/XDP/XDP~COURSE!~devops-dataops-mlops-duke/XDP~COURSE!~devops-dataops-mlops-duke.jpeg",
      link: "https://www.coursera.org/account/accomplishments/certificate/8VL84NHN9ND9"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {certifications.map((cert, index) => (
        <CertificationCard key={index} {...cert} />
      ))}
    </div>
  );
};

export default Certifications;