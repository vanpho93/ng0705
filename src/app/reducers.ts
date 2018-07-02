export function valueReducer(state = 1, action) {
    if (action.type === 'INCREASE') return state + 1;
    if (action.type === 'DECREASE') return state - 1;
    if (action.type === 'RESET') return 1;
    return state;
}

// khai bao ra reducer
// tao ra store tu reducer
// lay gia tri tu store show ra component
// thay doi gia tri tu component
