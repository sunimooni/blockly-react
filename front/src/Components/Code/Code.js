import React from 'react';

import Blockly from 'node-blockly/browser';
import BlocklyDrawer, {Block, Category} from 'react-blockly-drawer';

import './Code.css';

class Code extends React.Component{
    render(){
        return (
	<section className="code_blank">
		<BlocklyDrawer>	
	</section>
	)
    }
}

export default Code;
