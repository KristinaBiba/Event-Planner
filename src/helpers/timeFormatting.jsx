export const timeFormatting = (timeInISO) => {
  const time = timeInISO
  .toISOString()
  .split('T')[1]
  .split(':')
  .splice(0, 2);
if (Number(time[0]) > 20) {
  time[0] = Number(time[0]) - 21;
} else {
  time[0] = Number(time[0]) + 3;
}
if (time[0]<10) {
  time[0] = '0' + time[0];
}
    return time.join(':');
}