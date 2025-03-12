export function getCurrentDate() {
    const today = new Date();
    // Options to get full day, month, numeric day, and year
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    // Format the date
    return today.toLocaleDateString('en-US', options);

}

getCurrentDate();