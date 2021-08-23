// import React from "react";

// interface Action {
//   type: string;
//   itemToBeDeleted: string;
// }

// const Context = React.createContext({
//   items: [],
//   Dispatch: (action: Action) => {
//     "REMOVE";
//     item;
//   }, //{ type: "REMOVE", itemToBeDeleted: item }
// });

// const Context = React.createContext({
//   items: [],
//   Dispatch: () => {}, //{ type: "REMOVE", itemToBeDeleted: item }
// });

// export default Context;

import * as React from "react";
interface ContextState {
  // set the type of state you want to handle with context e.g.
  items: any | null;
  Dispatch: any | null;
}

const Context = React.createContext({
  items: [],
  Dispatch: () => {},
} as unknown as ContextState);

export default Context;

