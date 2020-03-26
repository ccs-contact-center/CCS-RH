import { ADD_PROFILE } from "./types";

export const addProfile = profile => {
  return {
    type: ADD_PROFILE,
    payload: profile
  };
};
