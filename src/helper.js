export const formatTimeSince = t => {
  //convert from days to more relatable time frame (weeks, months, etc)
  if(t === 0) return '0 days';
  if(t === 1) return '1 day';
  if(t < 14) return `${t} days`;
  if(t < 61) return `${Math.floor(t / 7)} weeks`;
  if(t < 365) return `${Math.floor(t / 30.5)} months`;
  if(t < 384) return '1 year';
  if(t >= 384) return `${Math.round(10 * t / 365) / 10} years`;
  return '';
}

export const daysSince = date => {
  const pastDate = new Date(date);
  const today = new Date();
  const timeSince = Math.abs(today - pastDate);
  const daysSince = Math.ceil(timeSince / (1000 * 60 * 60 * 24)); 
  return daysSince;
}

const monthsAbbr = {
  0: 'Jan',
  1: 'Feb',
  2: 'Mar',
  3: 'Apr',
  4: 'May',
  5: 'Jun',
  6: 'Jul',
  7: 'Aug',
  8: 'Sep',
  9: 'Oct',
  10: 'Nov',
  11: 'Dec'
}

const months = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December'
}

export const formatBirthday = date => {
  const d = new Date(date)
  const monthName = months[d.getMonth()];
  const day = d.getDate();
  return `${monthName} ${day}`;
}

export const formatDate = date => {
  const d = new Date(date)
  const monthName = monthsAbbr[d.getMonth()];
  const day = d.getDate() + 1;
  return `${monthName} ${day}`;
}

export const formatDateWithYear = date => {
  const d = new Date(date)
  const monthName = monthsAbbr[d.getMonth()];
  const day = d.getDate() + 1;
  const year = d.getFullYear();
  return `${monthName} ${day}, ${year}`;
}

export const getNameByBondId = (bondId, bonds) => {
  const matchingBond = bonds.find(bond => bond.id === bondId);
  return (!matchingBond) ? null : matchingBond.name;
}