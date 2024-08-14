export const dateFormater = (inputDate) => {
    const dateStr = inputDate;
    const date = new Date(dateStr);

    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
}