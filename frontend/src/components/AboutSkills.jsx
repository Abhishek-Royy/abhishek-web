import React from 'react';
import { motion } from 'framer-motion';

const skills = {
  programmingLanguages: ["Python", "JavaScript", "C"],
  toolsTechnologies: ["Github", "Postman" ],
  frameWork: ["React JS", "Node JS", "Tailwind CSS", "Mongo DB","Express JS" ],
};

const AboutSkills = () => {
  return (
    <div className="container mx-auto lg:p-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        <SkillCategory title="Programming Languages" skills={skills.programmingLanguages} />
        <SkillCategory title="Tools & Technologies" skills={skills.toolsTechnologies} />
        <SkillCategory title="Frameworks & Database" skills={skills.frameWork} />
      </div>
    </div>
  );
};

const SkillCategory = ({ title, skills }) => {
  return (
    <div className="hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 shadow-md rounded-lg p-6">
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <ul className="list-disc list-inside space-y-2">
        {skills.map((skill, index) => (
          <motion.li
          whileHover={{x:8}}
          key={index} className="text-gray-700 dark:text-gray-400">
            {skill}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default AboutSkills;
