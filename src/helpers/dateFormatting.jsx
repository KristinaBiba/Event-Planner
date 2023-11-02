export const dateFormatting = (dateInISO) => {
    const date = dateInISO.toISOString().split('T')[0].split('-').reverse();
    date[0] = Number(date[0]) + 1;
    if (date[0]<10) {
      date[0] = '0' + date[0];
    }
    return date.join('.');
}