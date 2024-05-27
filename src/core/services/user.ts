import { User } from "../../types/globalTypes";
import { appApi } from "../clients/appApi";

interface Credentials {
  email: string;
  password: string;
}

interface RegisterValues extends Credentials {
  userName?: string;
}

export async function signIn(body: Credentials) {
  return await appApi.post("users/signin", body, {
    credentials: "include",
  });
}

export async function signOut() {
  return await appApi.post("users/signout", {}, { credentials: "include" });
}

export async function register(body: RegisterValues) {
  return await appApi.post("users/register", body, {
    credentials: "include",
  });
}

export async function checkToken() {
  const res = await appApi.get("users/check-token", { credentials: "include" });
  return (await res.json()) as User;
}
