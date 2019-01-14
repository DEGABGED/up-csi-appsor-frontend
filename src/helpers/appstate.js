// Initial State of App.js

const initialState = {
  basicInfo: {
    firstName: '',
    middleInitial: '',
    lastName: '',
    nickname: '',
    studentNumber: '20  -',
    birthday: '1999-01-01',
    contactNumber: '(+63) 9',
    email: '',
    address: '',
  },
  skillsInterests: {
    skills: [],
    interests: [],
    experience: [],
  },
  affiliations: [
    {
      orgName: '',
      position: '',
      duties: '',
    },
  ],
  committees: [
    {
      priority: 1,
      committee_id: null,
      reason: '',
    },
    {
      priority: 2,
      committee_id: null,
      reason: '',
    },
    {
      priority: 3,
      committee_id: null,
      reason: '',
    },
  ],
};

export default initialState;
