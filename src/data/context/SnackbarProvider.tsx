
import Snackbar from "@/components/template/Snackbar";
import { SnackbarType } from "@/types/SnackbarTypes";
import { createContext, useReducer, useContext, useCallback } from "react";
import { TAction } from "../reducers/SnackbarReducer";
import reducer from "../reducers/SnackbarReducer";

const SnackbarContext = createContext<{
  queue: SnackbarType[];
  dispatch: React.Dispatch<TAction>;
}>({
  queue: [] as SnackbarType[],
  dispatch: () => { },
});

export default function SnackbarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [{ queue }, dispatch] = useReducer(reducer, { queue: [] });

  return (
    <SnackbarContext.Provider value={{ queue, dispatch }}>
      {queue.map((snack, index) => (
        <Snackbar
          key={snack.key}
          className={`-mt-${index + 1} left-${index + 4}`}
          text={snack.text}
          variant={snack.variant}
          icon={snack.icon}
          duration={snack.duration}
          handleClose={() =>
            dispatch({ type: "REMOVE_SNACKBAR", payload: { key: snack.key } })
          }
          open
        />
      ))}
      {children}
    </SnackbarContext.Provider>
  );
}

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error("useSnackbar was called outside SnackbarProvider");
  }
  const { dispatch } = context;

  return useCallback(
    (snack: SnackbarType) => {
      dispatch({ type: "ADD_SNACKBAR", payload: { current: snack } });
    },
    [dispatch]
  );
};