// Returns current date in DD MM YYYY format
const date = (): string => {
  const today = new Date();
  const date = today.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  // date is in the format of DD-MM-YY

  let formattedDate: string = "";

  // Replaces "-" with " "
  for (const dateElement of date) {
    if (dateElement === "-") {
      formattedDate += " ";
    } else {
      formattedDate += dateElement;
    }
  }

  return formattedDate;
};

export default date;
