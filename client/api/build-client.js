import axios from "axios";

export default ({ req }) => {
  try {
    console.log("in build-client");
    // window is an object that only exists on browser
    if (typeof window === "undefined") {
      // We are on the server
      console.log("in we are in server");
      return axios.create({
        baseURL: "http://ticketing-app-for-my-testing.online/",
        // by passing header we will pass required fields like host and cookie
        headers: req.headers,
      });
    } else {
      // We must be on the browser
      return axios.create({
        baseUrl: "/",
      });
    }
  } catch (error) {
    console.error(error);
  }
};
