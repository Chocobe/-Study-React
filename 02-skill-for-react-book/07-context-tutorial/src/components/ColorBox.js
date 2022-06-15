import React, {
  useContext,
} from "react";

import ColorContext from "../context/color";

const ColorBox = () => {
  const { state } = useContext(ColorContext);

  return (
    <>
      <div
        style={{
          width: 64,
          height: 64,
          backgroundColor: state.color,
        }}
      />

      <div
        style={{
          width: 32,
          height: 32,
          backgroundColor: state.subColor,
        }}
      />
    </>
  );
};

export default ColorBox;

// import React from "react";
// import { ColorConsumer } from "../context/color";

// const ColorBox = () => {
//   return (
//     <ColorConsumer>
//       {
//         ({ state }) => (
//           <>
//             <div
//               style={{
//                 width: 64,
//                 height: 64,
//                 backgroundColor: state.color,
//               }}
//             />

//             <div
//               style={{
//                 width: 32,
//                 height: 32,
//                 backgroundColor: state.subColor,
//               }}
//             />
//           </>
//         )
//       }
//     </ColorConsumer>
//   );
// };

// export default ColorBox;