const BONDS = [
  {
    id: 1,
    name: 'Mom',
    group: 'Close Family',
    birthday: '1969-04-21',
    notes: 'Prefers video chat when possible.\nWhen would be a good time to visit next?'
  },
  {
    id: 2,
    name: 'Justin Wellum',
    group: 'Close Friends',
    birthday: '1992-07-06',
    notes: 'Enjoys recieving gifts - possibly something new for his house?\n\nPlanning on having him and Maddy over for dinner soon.'
  },
  {
    id: 3,
    name: 'Grandma',
    group: 'Family',
    birthday: '1950-02-18',
    notes: 'Loves to get hand written letters. Also enjoys Facebook messages.\nBe sure to ask about the new puppy.'
  }
];

const INTERACTIONS = [
  {
    id: 1,
    names: ['Grandma'],
    description: 'We had a short chat to catch up.',
    date: '2020-05-07',
    location: '',
    purpose: 'To catch up',
    medium: 'Phone Call',
    notes: ''
  },
  {
    id: 2,
    names: ['Justin Wellum'],
    description: 'Discussed his promotion and how we are each doing with the Covid lockdown',
    date: '2020-05-17',
    location: '',
    purpose: 'To catch up',
    medium: 'Video Call',
    notes: 'Justin seems really excited about his new position - but it sounds like it will be stressful onboarding remotely.'
  },
  {
    id: 3,
    names: ['Mom'],
    description: 'I shared the news about passing my server-side mock interview.',
    date: '2020-05-26',
    location: '',
    purpose: 'Share news about me passing my mock interview',
    medium: 'Phone Call',
    notes: ''
  }
];

export default {
  BONDS,
  INTERACTIONS
};