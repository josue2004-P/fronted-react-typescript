import { axiosClient } from "../infrastructure/api/AxiosClient";
import type{ LoginDto, LoginResponse } from "../types/auth";
import Cookies from "js-cookie";

export async function loginRequest(data: LoginDto): Promise<LoginResponse> {
  const { data: response } = await axiosClient.post<LoginResponse>("/authentication", data);
  return response;
}

export async function renewTokenRequest(): Promise<LoginResponse> {
  const token = Cookies.get("token") || "";
  const { data } = await axiosClient.get<LoginResponse>("/authentication/renew-token", {
    headers: { "x-token": token },
  });
  return data;
}