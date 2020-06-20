export const formatTimeSince = (t) => {
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

export const daysSince = (date) => {
  const pastDate = new Date(date);
  const today = new Date();
  const timeSince = Math.abs(today - pastDate);
  const daysSince = Math.ceil(timeSince / (1000 * 60 * 60 * 24)); 
  return daysSince;
}