import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessage } from "../slices/greetingSlice";

function Greeting() {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting.greeting);
  const status = useSelector((state) => state.greeting.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchMessage());
    }
  }, [status, dispatch]);

  return <div>{status === "succeeded" ? greeting : "Cargando..."}</div>;
}

export default Greeting;
