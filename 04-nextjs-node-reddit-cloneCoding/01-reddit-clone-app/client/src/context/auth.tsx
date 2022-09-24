import axios from "axios";
import React, {
  createContext,
  useReducer,
  useContext,
  useEffect,
} from "react";
import { useRouter } from "next/router";

import { User } from "../types";

interface AuthState {
  authenticated: boolean;
  user: User | undefined;
  loading: boolean;
}

const AuthStateContext = createContext<AuthState>({
  authenticated: false,
  user: undefined,
  loading: true,
});

const AuthDispatchContext = createContext<any>(null);

interface Action {
  type: string;
  payload: any;
}

const reducer = (state: AuthState, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case "LOGIN": {
      return {
        ...state,
        authenticated: true,
        user: payload,
      };
    }

    case "LOGOUT": {
      return {
        ...state,
        authenticated: false,
        user: undefined,
      };
    }

    case "STOP_LOADING": {
      return {
        ...state,
        loading: false,
      };
    }

    default: {
      throw new Error(`Unkown Action type: ${type}`);
    }
  }
};

export const AuthProvider = ({ children }: {
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const [state, defaultDispatch] = useReducer(reducer, {
    authenticated: false,
    user: undefined,
    loading: true,
  });

  const dispatch = (type: string, payload?: any) => {
    defaultDispatch({ type, payload });
  };

  useEffect(() => {
    const loadUser = async () => {
      try {
        const response = await axios.get("/auth/me", {
          withCredentials: true,
        });
        dispatch("LOGIN", response.data);
      } catch (error) {
        console.log("😱: ", error);
      } finally {
        dispatch("STOP_LOADING");
      }
    }

    loadUser();
  }, []);
  
  return (
    <AuthDispatchContext.Provider value={dispatch}>
        <AuthStateContext.Provider value={state}>
          {children}
        </AuthStateContext.Provider>
      </AuthDispatchContext.Provider>
  );
};

export const useAuthState = () => useContext(AuthStateContext);
export const useAuthDispatch = () => useContext(AuthDispatchContext);