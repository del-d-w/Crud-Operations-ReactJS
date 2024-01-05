// reducers/upDown.js
const initialState = { counter: 5 };

const changeTheNumber = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { ...state, counter: state.counter + 1 };
        case "DECREMENT":
            return { ...state, counter: state.counter - 1 };
        default:
            return state;
    }
};

export default changeTheNumber;
