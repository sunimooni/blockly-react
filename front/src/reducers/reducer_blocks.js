export default function(state = null, action){
    switch(action.type){
        case 'STORE_STATE':
            return action.payload;
    }
    return state;
}