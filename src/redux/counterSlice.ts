import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// カウンタースライスの型を定義
interface CounterState {
  displaycount: number;
  value: number;
}

// 初期値を設定
const initialState: CounterState = {
  displaycount: 0,
  value: 1
};

const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    plus(state, action: PayloadAction<undefined>) {
      console.log(action.type, action.payload);
      state.displaycount += state.value;
    },
    minus(state, action: PayloadAction<undefined>) {
      console.log(action.type, action.payload);
      state.displaycount -= state.value;
    },
    reset(state, action: PayloadAction<undefined>) {
      console.log(action.type, action.payload);
      state.displaycount = 0;
    },
    // PayloadAction タイプを使用して、`action.payload の内容を宣言します`
    numSetting(state, action: PayloadAction<number>) {
      console.log(action.type, action.payload);
      state.value = action.payload;
    }
  }
});

const { plus, minus, numSetting, reset } = counter.actions;

export { plus, minus, numSetting, reset };
export default counter.reducer;
