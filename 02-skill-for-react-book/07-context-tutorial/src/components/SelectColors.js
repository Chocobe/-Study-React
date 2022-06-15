import { Component } from "react";
import ColorContext from "../context/color";

const colors = [
  "red", "orange", "yellow", "green",
  "blue", "indigo", "violet",
];

export default class SelectColors extends Component {
  static contextType = ColorContext;

  handleSetColor = color => {
    this.context.actions.setColor(color);
  }

  handleSetSubColor = color => {
    this.context.actions.setSubColor(color);
  }
  
  render() {
    return (
      <div>
        <h2>색상을 선택하세요.</h2>
        <div style={{ display: "flex" }}>
          {colors.map(color => (
            <div
              key={color}
              style={{
                width: 24,
                height: 24,
                backgroundColor: color,
                cursor: "pointer",
              }}
              onClick={() => this.handleSetColor(color)}
              onContextMenu={e => {
                e.preventDefault();
                this.handleSetSubColor(color);
              }}
            />
          ))}
        </div>
      </div>
    );
  }
}

// import React from "react";
// import { ColorConsumer } from "../context/color";

// const colors = [
//   "red", "orange", "yellow", "green",
//   "blue", "indigo", "violet",
// ];

// const SelectColors = () => {
//   return (
//     <div>
//       <h2>색상을 선택하세요.</h2>
//       <ColorConsumer>
//         {({ actions }) => (
//           <div style={{ display: "flex" }}>
//             {colors.map(color => (
//               <div
//                 key={color}
//                 style={{
//                   width: 24,
//                   height: 24,
//                   backgroundColor: color,
//                   cursor: "pointer",
//                 }}
//                 onClick={() => actions.setColor(color)}
//                 onContextMenu={e => {
//                   e.preventDefault();
//                   actions.setSubColor(color);
//                 }}
//               />
//             ))}
//           </div>
//         )}
//       </ColorConsumer>
//     </div>
//   );
// };

// export default SelectColors;