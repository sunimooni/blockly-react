export default function(state = null, action){
    switch(action.type){
        case 'STORE_WORK':
            return action.payload;
    }
    return state;
}