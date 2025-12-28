const convertDate = (isoDate, monthtype = "short") => {
  return new Date(isoDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: monthtype,
    day: "2-digit",
  });
};

export default convertDate;
