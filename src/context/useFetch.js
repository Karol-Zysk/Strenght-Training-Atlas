import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import jwt from "jsonwebtoken";

const useFetch = (url) => {
  const [loginName, setLoginName] = useState();

  async function getName() {
    const req = await fetch("https://stbible.herokuapp.com/api/name", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });
    const data = await req.json();
    if (data.status === "ok") {
      setLoginName(data.name);
    } else {
      // console.log(data.error);
    }
  }

  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwt.decode(token);
      if (!user) {
        localStorage.removeItem("token");
        navigate("/login");
      } else {
        getName();
      }
    }
  }, [getName]);

  return { loginName, setLoginName };
};

export default useFetch;
