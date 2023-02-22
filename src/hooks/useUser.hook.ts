import { useEffect } from "react";
import { AuthActions } from "store/auth/ActionCreators";
import { useAppDispatch, useAppSelector } from "store/hooks/redux.hooks";

export const useUser = () => {
  const dispatch = useAppDispatch();
  const { currentUser } = useAppSelector((state) => state.auth);

  useEffect(() => {
    dispatch(AuthActions.getUser());
  }, []);

  return { currentUser };
};
