const skillsInterestsOptions = {
  skills: [
    'Javascript',
    'Python',
  ],
  interests: [
    'Javascript',
    'Python',
  ],
  experience: [
    'Javascript',
    'Python',
  ],
};

const committeeOptions = [
  { text: 'Engineering', value: 1, disabled: false },
  { text: 'Innovation', value: 2, disabled: false },
  { text: 'Publicity', value: 3, disabled: false },
  { text: 'Memberships and Internals', value: 4, disabled: false },
  { text: 'External Relations', value: 5, disabled: false },
  { text: 'Service', value: 6, disabled: false },
];

export { skillsInterestsOptions, committeeOptions };

// TODO:
// Change committee_id value depending
//  on the Rails config