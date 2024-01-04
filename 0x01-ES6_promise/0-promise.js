export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    // Simulate an asynchronous API call
    setTimeout(() => {
      resolve('API response data');
    }, 1000); // Delay for 1 second
  });
}
