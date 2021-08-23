// import React, { useContext } from "react";
// import ItemsContext from "./items-context";

// interface RemoveItem {
//   type: any;
//   itemToBeDeleted: any;
//   item: any;
// }

// const blah = ""

// const Item = (props: RemoveItem) => {
//   const { Dispatch } = useContext();

//   return (
//     <div>
//       <span>{props.item}</span>
//       <button
//         onClick={() =>
//           Dispatch(ItemsContext)
//         }
//       >

//       </button>
//     </div>
//   );
// };

// export default Item;

import * as React from "react";
import { useContext } from "react";
import Context from "./Context";
import ClearOutlinedIcon from "@material-ui/icons/ClearOutlined";
import HighlightOffOutlinedIcon from "@material-ui/icons/HighlightOffOutlined";
import { Typography, IconButton } from "@material-ui/core";
import styled from "styled-components";

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
// display: flex;
// justify-content: center;
// align-item: center;
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 20px;
  margin: 10px 0px;
  cursor: pointer;
  }
`;

const Comments = ({ item }: { item: string }) => {
  const { Dispatch } = useContext(Context);
  return (
    <div>
      <CenterDiv>
        <Typography variant="h5">{item}</Typography>
        <IconButton
          onClick={() => Dispatch({ type: "REMOVE", itemToBeDeleted: item })}
        >
          <ClearOutlinedIcon />
        </IconButton>
        {/* <Button>
        </Button> */}
      </CenterDiv>
    </div>
  );
};

export default Comments;

// import React, { useContext } from "react";
// import ItemsContext from "./items-context";
// import ClearOutlinedIcon from "@material-ui/icons/ClearOutlined";
// import HighlightOffOutlinedIcon from "@material-ui/icons/HighlightOffOutlined";
// import { Button, Typography } from "@material-ui/core";
// import styled from "styled-components";

// const CenterDiv = styled.div`
//   display: flex;
//   justify-content: center;
// `;

// const Column = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding: 0.25rem;
// `;

// interface RemoveItem {
//   type: any;
//   itemToBeDeleted: any;
// }

// function Item({type: "REMOVE", itemToBeDeleted: item}: RemoveItem) {
//   const { Dispatch } = useContext(ItemsContext);

//   return (
//     <div>
//       <CenterDiv>
//         <Typography variant="h3">{item}</Typography>
//         <Button>
//           <button
//             onClick={() =>
//               Dispatch(RemoveItem)
//             }
//           >
//             <ClearOutlinedIcon />
//           </button>
//         </Button>
//       </CenterDiv>
//     </div>
//   );
// };

// export default Item;
