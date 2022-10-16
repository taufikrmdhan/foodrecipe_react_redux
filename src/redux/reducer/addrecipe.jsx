const initialState = {
  fileImage: {},
  pathImage: "Add image",
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPLOAD_IMAGE":
      return {
        fileImage: action.payload,
        pathImage: action.payload.name,
      };
    case "RESET_IMAGE":
      return {
        fileImage: state.fileImage,
        pathImage: "Add image",     
      };
    default:
      return state;
  }
};

export default recipeReducer;
