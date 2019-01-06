const skillsInterestsOptions = {
  skills: [
    'Javascript',
    'ES6',
    'NodeJS',
    'Python',
    'Django',
    'Flask',
    'Ruby',
    'Ruby on Rails',
    'HTML/CSS',
    'PHP',
    'Wordpress',
    'Databases',
    'Leadership',
    'Business Writing',
    'Creative Writing',
    'Public Speaking',
    'Pitching',
    'People Skills',
    'Teaching',
    'UX / UI',
    'Unit Testing',
    'Web Design',
    'Photoshop',
    'Illustrator',
    'Animation',
    'Game Development',
  ],
  interests: [
    'Machine Learning',
    'Data Science',
    'Tech Management',
    'Business Management',
    'Project Management',
    'Event Handling',
    'Competitive Programming',
    'Cryptocurrency',
    'Object-Oriented Programming',
    'Cooking',
    'Data Science',
    'Reading',
    'DevOps',
    'Anime / Manga',
    'Web Development',
    'K-Dramas',
    'Photography',
    'Graphic Design',
    'Startups',
  ],
  experience: [
    'Exchange Student',
    'Internship',
    'Programming Workshop',
    'Web Development',
    'Mobile Development',
    'Delegate',
    'Stock Trading',
    'Project Management',
    'Event Handling',
    'People Operations',
    'Writing',
    'Public Speaking',
    'Leadership Roles',
    'Freelancing',
    'Web Development',
    'Personal Projects',
  ],
};

const updateSkillsInterestsOptions = (skillsInterests) => {
  const mapToOptions = list => list.map(item => ({ text: item, value: item }));

  const { skills, interests, experience } = skillsInterests;
  const skillsOptions = [...new Set([...skills, ...skillsInterestsOptions.skills])];
  const interestsOptions = [...new Set([...interests, ...skillsInterestsOptions.interests])];
  const experienceOptions = [...new Set([...experience, ...skillsInterestsOptions.experience])];

  return {
    skills: mapToOptions(skillsOptions),
    interests: mapToOptions(interestsOptions),
    experience: mapToOptions(experienceOptions),
  };
};

const committeeOptions = [
  { text: 'Engineering', value: 1, disabled: false },
  { text: 'Innovation', value: 2, disabled: false },
  { text: 'Publicity', value: 3, disabled: false },
  { text: 'Memberships and Internals', value: 4, disabled: false },
  { text: 'External Relations', value: 5, disabled: false },
  { text: 'Service', value: 6, disabled: false },
];

export {
  skillsInterestsOptions,
  updateSkillsInterestsOptions,
  committeeOptions,
};
