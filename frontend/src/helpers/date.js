const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const weekdays = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

export const calcDate = (isoString) => {
  const day = new Date(isoString).getDay();
  const month = new Date(isoString).getMonth();
  const hour = new Date(isoString).getHours();
  const minutes = new Date(isoString).getMinutes();
  const date = new Date(isoString).getDate();

  return `${weekdays[day]} ${date} ${months[month]}, ${hour}:${minutes} ${
    hour < 12 ? "am" : "pm"
  }`;
};
