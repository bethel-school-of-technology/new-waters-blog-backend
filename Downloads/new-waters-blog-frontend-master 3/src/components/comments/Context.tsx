import React from "react";
import { string } from "yup";

interface Action {
  type: string;
  itemToBeDeleted: string;
}

// const Context = React.createContext({
//   items: [],
//   Dispatch: (action: Action) => {
//     "REMOVE";
//     item;
//   }, //{ type: "REMOVE", itemToBeDeleted: item }
// });

const Context = React.createContext({
  items: [],
  Dispatch: () => {}, //{ type: "REMOVE", itemToBeDeleted: item }
});

export default Context;
