import React from 'react';

const experiences = [
  {
    jobTitle: "Frontend Developer",
    companyName: "Infroot Solution",
    dates: "April 2024 - Present",
    description: "Created responsive designs that increased mobile user engagement by 30%, and also handle API"
  },
  // {
  //   jobTitle: "Frontend Developer",
  //   companyName: "Web Solutions",
  //   dates: "Jun 2018 - Dec 2019",
  //   description: "Created responsive designs that increased mobile user engagement by 30%."
  // }
];

const ExperienceSection = () => {
  return (
    <div className="container mx-auto lg:p-8 py-8">
      <div className="space-y-5">
        {experiences.map((experience, index) => (
          <ExperienceItem key={index} experience={experience} />
        ))}
      </div>
    </div>
  );
};

const ExperienceItem = ({ experience }) => {
  return (
    <div className="hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700  shadow-md rounded-lg p-6">
      <h3 className="text-2xl font-semibold">{experience.jobTitle}</h3>
      <p className="text-gray-700 dark:text-gray-400 italic">{experience.companyName} • {experience.dates}</p>
      <p className="text-gray-700 dark:text-gray-400 mt-2">{experience.description}</p>
    </div>
  );
};

export default ExperienceSection;
