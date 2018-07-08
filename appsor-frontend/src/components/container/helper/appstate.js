// Initial State of App.js

const initialState = {
  currentPage: 'Home',
  basicInfo: {
    firstName: null,
    middleInitial: null,
    lastName: null,
    nickname: null,
    studentNumber: null,
    birthday: null,
    contactNumber: null,
    email: null,
    address: null,
  },
  skillsInterests: {
    skills: [],
    interests: [],
    experience: [],
  },
  affiliations: [
    {
      orgName: null,
      position: null,
      duties: null,
    },
  ],
  committees: [
    {
      priority: 1,
      committee_id: null,
      reason: null,
    },
    {
      priority: 2,
      committee_id: null,
      reason: null,
    },
    {
      priority: 3,
      committee_id: null,
      reason: null,
    },
  ],
};

export default initialState;
