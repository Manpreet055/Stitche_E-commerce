// Shared error handler
const handleApiError = (error = {}, setError = () => {}) => {
  if (error.response) {
    setError(error.response);
    console.log("Server Error:", error.response);
  } else if (error.request) {
    setError(error.response);
    console.log("Network Error:", error.request);
  } else {
    setError(error.response);
    console.log("Something went wrong:", error.message);
  }
};

export default handleApiError;
