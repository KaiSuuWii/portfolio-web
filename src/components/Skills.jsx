import React from 'react';
import { skills } from './data';

const Skills = () => {
  return (
    <div className="border border-gray-600 rounded-2xl bg-black text-gray-400 max-w-[1200px] mx-auto p-4">
      <h2 className="text-gray-300 text-2xl md:text-4xl font-bold mb-6 text-center">
        Technical Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-0">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center justify-center w-full h-[150px] md:h-[180px]">
            <img src={skill.icon} alt={skill.name} className="w-20 h-20 md:w-28 md:h-28 lg:w-28 lg:h-28"/>
            <p className="mt-2 text-sm md:text-lg font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
