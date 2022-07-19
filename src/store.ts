import {
  configureStore,
  ThunkAction,
  Action,
} from "@reduxjs/toolkit";
// import { createWrapper, HYDRATE } from "next-redux-wrapper";

import { postsReducer } from "slices";

// const combinedReducer = combineReducers({
//   posts: postsReducer,
// });

// const reducer: Reducer = (
//   state: ReturnType<typeof combinedReducer>,
//   action: AnyAction
// ) => {
//   if (action.type === HYDRATE) {
//     const nextState = {
//       ...state, // use previous state
//       ...action.payload, // apply delta from hydration
//     };
//     return nextState;
//   } else {
//     return combinedReducer(state, action);
//   }
// };

export function makeStore() {
  return configureStore({
    reducer: {
      posts: postsReducer,
    },
  });
}

// const wrapper = createWrapper(makeStore, { debug: true });
const store = makeStore();

// type Store = ReturnType<typeof makeStore>;

// export type AppState = ReturnType<Store["getState"]>;
export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
