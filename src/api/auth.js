
import api from "./client";

export const signup = (body) =>
  api.post("/users/signup", body).then((res) => res.data);

