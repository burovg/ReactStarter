export default function CheckState(state = {},action){
    switch(action.type){
        case "perform_action":
            return {...state,myval : action.payload};
        default:
            return state;
    }
    
}