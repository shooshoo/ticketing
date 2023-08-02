import axios from "axios";

export default ({ req }) => {
  // window is an object that only exists on browser
  if (typeof window === "undefined") {
    // We are on the server

    return axios.create({
      baseURL:
        "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local",
      // by passing header we will pass required fields like host and cookie
      headers: req.headers,
    });
  } else {
    // We must be on the browser
    return axios.create({
      baseUrl: "/",
    });
  }
};
