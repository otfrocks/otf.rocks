const axios = require("axios");

// For more info, check https://www.netlify.com/docs/functions/#javascript-lambda-functions
// module.exports.handler = async function (event, context, callback) {
//   console.log("queryStringParameters", event.queryStringParameters);
//   callback(null, {
//     // return null to show no errors
//     statusCode: 200, // http status code
//     body: JSON.stringify({
//       msg: "Hello, World! This is better " + Math.round(Math.random() * 10),
//     }),
//   });
// };

exports.handler = async (event, context) => {
  const url = "https://api.chucknorris.io/jokes/random";
  const json = await axios.get(url);
  try {
    return {
      statusCode: 200,
      body: JSON.stringify(json.data),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 404,
      body: JSON.stringify(error),
    };
  }
};

// Now you are ready to access this API from anywhere in your Gatsby app! For example, in any event handler or lifecycle method, insert:
// fetch("/.netlify/functions/hello")
//    .then(response => response.json())
//    .then(console.log)
// For more info see: https://www.gatsbyjs.org/blog/2018-12-17-turning-the-static-dynamic/#static-dynamic-is-a-spectrum
