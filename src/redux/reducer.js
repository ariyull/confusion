import { DISHES } from '../shared/dishes';
import { DRINKS } from '../shared/drinklist';
import { LEADERS } from '../shared/Leaders';
import { COMMENTS } from '../shared/Comments';
import { PROMOTIONS } from '../shared/Promotions';

export const initialState = {
    dishes: DISHES,
    drinks: DRINKS,
    selectedDishId: null,
    selectedDrinkId: null,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
};

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_DISH:
            return {
                ...state,
                selectedDishId: action.payload.selectedDishId
            }
        case SELECT_DRINK:
            return {
                ...state,
                selectedDrinkId: action.payload.selectedDrinkId
            }
        default:
            return state
    }
};

export const SELECT_DISH = "select_dish"
export const SELECT_DRINK = "select_drink"