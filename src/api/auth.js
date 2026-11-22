
import api from "./client";

export const signup = (body) =>
  api.post("/users/signup", body).then((res) => res.data);

export const signin = (body) => 
    api.post("/users/signin", body).then((res) => res.data);

