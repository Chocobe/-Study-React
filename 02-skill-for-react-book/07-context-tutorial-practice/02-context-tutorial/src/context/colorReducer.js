/**
 * @param {{
 *  mainColor: string;
 *  subColor: string;
 * }} prevColors 
 * @param {{
 *  type: "MAIN_COLOR" | "SUB_COLOR";
 *  color?: string;
 * }} actions 
 * @returns 
 */
const colorReducer = (prevColors, actions) => {
  const { type } = actions;

  switch (type) {
    case "MAIN_COLOR": {
      return {
        ...prevColors,
        mainColor: actions.color,
      }
    }

    case "SUB_COLOR": {
      return {
        ...prevColors,
        subColor: actions.color,
      };
    }

    default: {
      return prevColors;
    }
  }
};

export default colorReducer;