import { combineReducers } from 'redux';
import Blocks from './reducer_blocks';
import Workspace from './reducer_workspace';

const rootReducer = combineReducers({
    blocks : Blocks,
    workspace : Workspace
});

export default rootReducer;