import { INITIALIZE_ENVIRONMENT, NORMAL_SUMMON, SET_SUMMON, TRIBUTE, DRAW_CARD, PERFORM_ATTACK } from "../actions/actionTypes";
import { SIDE, ENVIRONMENT } from '../../Components/Card/utils/constant';

import Core from '../../Core'

const initialState = {
    environment: undefined,
}

export default function(state = initialState, action) {

    if (action.type == INITIALIZE_ENVIRONMENT) {
        const { environment } = action.payload;
        return {
            environment: {
                ...environment
            }
        };
    } else if (action.type == NORMAL_SUMMON || action.type == SET_SUMMON) {
        const { info } = action.payload;
        const new_environment = Core.Summon.summon(info, action.type, state.environment)
        return {
            environment: {
                ...new_environment
            }
        }
    }  else if (action.type == TRIBUTE) {
        const { info } = action.payload;
        const tributed_monsters = info.cardEnvs
        const new_environment = Core.Summon.tribute(tributed_monsters, info.side, ENVIRONMENT.MONSTER_FIELD, state.environment)
        return {
            environment: {
                ...new_environment
            }
        }
    } else if (action.type == DRAW_CARD) {
        const { info } = action.payload;
        const new_environment = Core.utils.draw_card_from_deck(state.environment, info);
        return {
            environment: {
                ...new_environment
            }
        }
    } else if (action.type == PERFORM_ATTACK) {
        const { info } = action.payload;
        const new_environment = Core.Battle.battle(info, state.environment);
        return {
            environment: {
                ...new_environment
            }
        }
    }
    
    else {
        return state;
    }
};
