import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/slices/authSlice";
import { urlWs } from "../../constants/apiurl";

const AuthSocket = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state: any) => state.auth);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080/authsocket");
    socket.onopen = () => {
      console.log("connected");
    }
    socket.onclose = () => {
        dispatch(logout());
    }
    socket.onmessage = (event) => {
      console.log(event.data);
    }
    const interval = setInterval(() => {
      socket.send("Bearer " + authState.token);
    }, 60000);

    return () => clearInterval(interval);
  }, [authState]);

  return <></>;
};

export default AuthSocket;
