const initialState = {
    data: [],
    myUser:{},
    isLoading: false,
    isError: false,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_LIST_USER_PENDING":
            return {
                ...state,
                isLoading: true,
            };
        case "GET_LIST_USER_FULFILLED":
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data,
            };
        case "GET_LIST_USER_REJECTED":
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        case "LOGIN_USER_PENDING":
            return {
                ...state,
                isLoading: true,
            };
        case "LOGIN_USER_FULFILLED":
            return {
                ...state,
                isLoading: false,
                isError: false,
                myUser: action.payload.data,
            };
        case "LOGIN_USER_REJECTED":
            return {
                ...state,
                isLoading: false,
                isError: true,
            }

        default:
            return state;
    }
  };
  
  export default userReducer;
  