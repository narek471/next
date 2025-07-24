import { createSlice } from "@reduxjs/toolkit";
import { setGlobal } from "next/dist/trace";

const initialState = {
  age: "",
  globalAnim: false,
  taskAnswered: {} as { [key: number]: number },
  progress: 0,
  selected: null as number | null,
};

const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setSelectedAge(state: typeof initialState, action: { payload: string }) {
      state.age = action.payload;
    },
    setGlobalAnim(state: typeof initialState, action: { payload: boolean }) {
      state.globalAnim = action.payload;
    },
    setTaskAnswer(
      state: typeof initialState,
      action: { payload: [number, number] }
    ) {
      state.taskAnswered[action.payload[0]] = action.payload[1];
    },
    setProgress(
      state: typeof initialState,
      action: { payload: { type: "add" | "min" } }
    ) {
      if (action.payload.type == "add") {
        state.progress = state.progress + 3.8;
      } else {
        state.progress = state.progress - 4;
      }
    },
    setSelected(
      state: typeof initialState,
      action: { payload: number | null }
    ) {
      state.selected = action.payload;
    },
  },
});

export const {
  setSelectedAge,
  setGlobalAnim,
  setTaskAnswer,
  setSelected,
  setProgress,
} = userDataSlice.actions;
export default userDataSlice.reducer;
