import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const stateCopy = [...state].sort((a, b) => {
                if (a.name > b.name) {
                    return 1;
                } else if (a.name < b.name) {
                    return -1;
                } else {
                    return 0;
                }
            });
            if (action.payload === "up") {
                return stateCopy;
            } else if (action.payload === "down") {
                return stateCopy.reverse();
            }
            return state;
        }
        case 'check': {
            return state.filter((s) => s.age > action.payload);
        }
        default:
            return state
    }
}
