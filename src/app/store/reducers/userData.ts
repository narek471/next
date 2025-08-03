import { createSlice } from "@reduxjs/toolkit";
import { setGlobal } from "next/dist/trace";

const initialState = {
  age: "",
  globalAnim: false,
  taskAnswered: {} as { [key: number]: number },
  progress: 0,
  selected: null as number | null,
  selectedPlan: 1,
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
    setProgress(state: typeof initialState, action: { payload: number }) {
      state.progress = action.payload;
    },
    setSelected(
      state: typeof initialState,
      action: { payload: number | null }
    ) {
      state.selected = action.payload;
    },
    setSelectedPlan(state: typeof initialState, action: { payload: number }) {
      state.selectedPlan = action.payload;
    },
  },
});

export const {
  setSelectedAge,
  setGlobalAnim,
  setTaskAnswer,
  setSelected,
  setProgress,
  setSelectedPlan,
} = userDataSlice.actions;
export default userDataSlice.reducer;
