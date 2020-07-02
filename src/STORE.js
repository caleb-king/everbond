const BONDS = [
  {
    id: 1,
    name: 'Mom',
    birthday: '04/21',
    notes: 'Prefers video chat when possible.\nWhen would be a good time to visit next?'
  },
  {
    id: 2,
    name: 'Justin Wellum',
    birthday: '07/06',
    notes: 'Enjoys recieving gifts - possibly something new for his house?\n\nPlanning on having him and Maddy over for dinner soon.'
  },
  {
    id: 3,
    name: 'Grandma',
    birthday: '02/18',
    notes: 'Loves to get hand written letters. Also enjoys Facebook messages.\nBe sure to ask about the new puppy.'
  }
];

const INTERACTIONS = [
  {
    id: 7,
    bondId: 1,
    date: '2020-06-17',
    medium: 'Phone Call',
    location: '',
    description: 'We reflected on how well Papa\'s birthday surprise went over.',
  },
  {
    id: 4,
    bondId: 2,
    date: '2020-05-26',
    medium: 'Video Call',
    location: '',
    description: 'Discussed his promotion and how we are each doing with the Covid lockdown',
  },
  {
    id: 6,
    bondId: 3,
    date: '2020-05-17',
    medium: 'Phone Call',
    location: '',
    description: 'We mostly talked about her new puppy',
  },
  {
    id: 5,
    bondId: 1,
    date: '2020-05-07',
    medium: 'Phone Call',
    location: '',
    description: 'I shared the news about passing my server-side mock interview.',
  },
  {
    id: 3,
    bondId: 3,
    date: '2020-04-28',
    medium: 'Phone Call',
    location: '',
    description: 'We had a short chat to catch up.',
  },
  {
    id: 2,
    bondId: 1,
    date: '2020-04-21',
    medium: 'Video Call',
    location: '',
    description: 'Discussed how my sisters are doing',
  },
  {
    id: 1,
    bondId: 2,
    date: '2020-04-16',
    medium: 'In Person',
    location: 'Denver, CO',
    description: 'I shared the news about passing my server-side mock interview.',
  },
];

export default {
  BONDS,
  INTERACTIONS
};