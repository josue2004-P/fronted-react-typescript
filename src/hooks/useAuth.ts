import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../store";
import { onLogin, onLogout, onSetError } from "../store/slices/authSlice";
import { LoginUseCase, RenewTokenUseCase } from "../application/auth";
import type { LoginDto } from "../types/auth";

import Swal from "sweetalert2";
import { AxiosError } from "axios";

export const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id, token, profiles, isLoggedIn,checking, error } = useSelector(
    (state: RootState) => state.auth
  );

  const startLogin = async (datos: LoginDto) => {
    try {
      const useCase = new LoginUseCase();
      const response = await useCase.execute(datos);
      Cookies.set("token", response.token, { expires: 7, secure: true });
      dispatch(
        onLogin({
          id: response.user.id.toString(),
          token: response.token,
          profiles: [],
        })
      );
      navigate("/dashboard");
    } catch (err: unknown) {
      let errorMsg = "Error creando producto";
      if (err instanceof AxiosError) {
        errorMsg = err.response?.data?.error || errorMsg;
      } else if (err instanceof Error) {
        errorMsg = err.message;
      }
      dispatch(onSetError(errorMsg));
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorMsg,
      });
    }
  };

  const startRenewToken = useCallback(async () => {
    try {
      const useCase = new RenewTokenUseCase();
      const response = await useCase.execute();

      Cookies.set("token", response.token, { expires: 7, secure: true });

      dispatch(
        onLogin({
          id: response.user.id.toString(),
          token: response.token,
          profiles: [],
        })
      );
    } catch (err: unknown) {
      let errorMsg = "Error renovando token";

      if (err instanceof AxiosError) {
        errorMsg = err.response?.data?.error || errorMsg;
      } else if (err instanceof Error) {
        errorMsg = err.message;
      }

      dispatch(onSetError(errorMsg));
    }
  }, [dispatch]);

  const startLogout = () => {
    Cookies.remove("token");
    dispatch(onLogout());
    navigate("/login");
  };

  return {
    id,
    token,
    profiles,
    isLoggedIn,
    error,
    checking,

    startLogin,
    startRenewToken,
    startLogout,
  };
};
