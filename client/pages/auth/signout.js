import { useEffect } from "react";
import Router from "next/router";
import useRequest from "../../hooks/use-request";

const signout = () => {
  // this is a customized hook that we wrote to
  // prevent code duplication for inout error handling
  // in different forms.
  const { doRequest } = useRequest({
    url: "/api/users/signout",
    method: "post",
    body: {},
    // this a callback function to be called if request is successful
    // to be rout to a landing page!
    onSuccess: () => Router.push("/"),
  });

  // this a built in hook that will be executed when component is rendered
  useEffect(() => {
    doRequest();
  }, []);

  return <div>Signing you out...</div>;
};

export default signout;
