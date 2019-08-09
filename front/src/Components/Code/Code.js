import React from 'react';

import Blockly from 'node-blockly/browser';
import BlocklyDrawer, {Block, Category} from 'react-blockly-drawer';

import './Code.css';

class Code extends React.Component{
    render(){
        return (
			<section className="code_blank">
				<BlocklyDrawer 
					tools = {[helloWorld]} 
					onChange = {(code, workspace) => {console.log(code, workspace);}}
					appearance = {
						{
							categories: {
								Demo : {
									colour : '270'
								},
							},
						}
					}>
					<Category name="Variables" custom="VARIABLE" />
					<Category name="Values">
						<Block type="math_number" />
						<Block type="text" />
					</Category>	
				</BlocklyDrawer>
			</section>
		)
    }
}

export default Code;
