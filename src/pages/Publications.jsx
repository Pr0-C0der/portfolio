import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Copy, ExternalLink } from 'lucide-react';

const PublicationCard = ({ title, journal, authors, abstract, image, citation, link }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
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
              Published in {journal}
            </p>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200 dark:sm:divide-gray-700">
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Authors
                </dt>
                <dd className="mt-1 text-sm text-gray-900 dark:text-gray-100 sm:mt-0 sm:col-span-2">
                  {authors}
                </dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Abstract
                </dt>
                <dd className="mt-1 text-sm text-gray-900 dark:text-gray-100 sm:mt-0 sm:col-span-2">
                  {abstract}
                </dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Citation
                </dt>
                <dd className="mt-1 text-sm text-gray-900 dark:text-gray-100 sm:mt-0 sm:col-span-2 flex items-center">
                  <span className="mr-2">{citation}</span>
                  <CopyToClipboard text={citation} onCopy={handleCopy}>
                    <button className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
                      <Copy size={16} />
                    </button>
                  </CopyToClipboard>
                  {copied && <span className="ml-2 text-green-500">Copied!</span>}
                </dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Link
                </dt>
                <dd className="mt-1 text-sm text-gray-900 dark:text-gray-100 sm:mt-0 sm:col-span-2">
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 flex items-center"
                  >
                    View Publication <ExternalLink size={16} className="ml-1" />
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

const Publications = () => {
  const publications = [
    {
      title: "Advancements in AI-driven Exoplanet Detection Techniques",
      journal: "Journal of Computer Science, 2023",
      authors: "Prathamesh Gadekar, John Doe, Jane Smith",
      abstract: "This paper presents novel AI-driven techniques for exoplanet detection, improving accuracy and efficiency in identifying potential habitable worlds beyond our solar system.",
      image: "/placeholder.svg",
      citation: "Gadekar, P., Doe, J., & Smith, J. (2023). Advancements in AI-driven Exoplanet Detection Techniques. Journal of Computer Science, 2023.",
      link: "https://example.com/publication1"
    },
    {
      title: "Machine Learning Applications in Climate Change Prediction",
      journal: "Environmental Science & Technology, 2022",
      authors: "Prathamesh Gadekar, Alice Johnson, Bob Williams",
      abstract: "This study explores the application of advanced machine learning algorithms in predicting long-term climate change patterns, offering new insights for environmental policy-making.",
      image: "/placeholder.svg",
      citation: "Gadekar, P., Johnson, A., & Williams, B. (2022). Machine Learning Applications in Climate Change Prediction. Environmental Science & Technology, 2022.",
      link: "https://example.com/publication2"
    },
    {
      title: "Quantum Computing Algorithms for Optimization Problems",
      journal: "Quantum Information Processing, 2023",
      authors: "Prathamesh Gadekar, Emily Chen, Michael Brown",
      abstract: "This research introduces novel quantum algorithms designed to solve complex optimization problems, demonstrating significant speedup compared to classical methods.",
      image: "/placeholder.svg",
      citation: "Gadekar, P., Chen, E., & Brown, M. (2023). Quantum Computing Algorithms for Optimization Problems. Quantum Information Processing, 2023.",
      link: "https://example.com/publication3"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* {publications.map((pub, index) => (
        <PublicationCard key={index} {...pub} />
      ))} */}

      <p className="text-xl">Coming soon...</p>

      
    </div>
  );
};

export default Publications;