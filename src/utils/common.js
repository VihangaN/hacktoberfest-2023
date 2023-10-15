const getDateName = (date) => {
    let day = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    return day[new Date(date).getDay()];
}

export {
    getDateName
}