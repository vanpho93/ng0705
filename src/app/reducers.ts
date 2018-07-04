import { Word } from './words/types';

export function valueReducer(state = 1, action) {
    if (action.type === 'INCREASE') return state + 1;
    if (action.type === 'DECREASE') return state - 1;
    if (action.type === 'RESET') return 1;
    return state;
}

export function filterModeReducer(state = 'SHOW_ALL', action): string {
    if (action.type === 'SET_FILTER_MODE') return action.filterMode;
    return state;
}

export function shouldShowFormReducer(state = false, action): boolean {
    if (action.type === 'TOGGLE_FORM') return !state;
    if (action.type === 'ADD_WORD') return false;
    return state;
}

const defaultWords = [
    { _id: 'a', en: 'Ten', vn: 'Mot', isMemorized: true },
    { _id: 'b', en: 'Two', vn: 'Hai', isMemorized: false },
    { _id: 'c', en: 'Three', vn: 'Ba', isMemorized: false },
    { _id: 'd', en: 'Four', vn: 'Bon', isMemorized: true },
];

export function wordsReducer(state: Word[] = defaultWords, action): Word[] {
    if (action.type === 'ADD_WORD') return [...state, action.word];
    if (action.type === 'REMOVE_WORD') {
        return state.filter(word => word._id !== action._id);
    }
    if (action.type === 'TOGGLE_WORD') {
        return state.map(word => {
            if (word._id !== action._id) return word;
            return { ...word, isMemorized: !word.isMemorized };
        });
    }
    return state;
}

// khai bao ra reducer
// tao ra store tu reducer
// lay gia tri tu store show ra component
// thay doi gia tri tu component
