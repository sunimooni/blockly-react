import React from 'react';

import Blockly from 'node-blockly/browser';
import BlocklyDrawer, {Block, Category} from 'react-blockly-drawer';

import './Code.css';

class Code extends React.Component{
    render(){
        return (
			<section className="code_blank">
				<BlocklyDrawer
					tools={[helloWorld, test_print]}
					onChange={(code, workspace) => {console.log(code, workspace);}}
					appearance={
						{
							categories: {
								Demo: {
									colour: '270'
								},
								test : {
									colour: '160'
								},
							},
						}
					}
				>
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

const helloWorld =  {
    name: 'HelloWorld',
    category: 'Demo',
    block: {
      init: function () {
        this.jsonInit(
		{
          message0: 'Hello %1 is %2',
          args0: [{
              type: 'field_input',
              name: 'NAME',
			  check: 'String', 
			},],
          output: 'String',
          colour: 160,
          tooltip: 'Says Hello',
		}
		);
      },
    },
    generator: (block) => {
      const message = `'${block.getFieldValue('NAME')}'` || '\'\'';
      const code = `console.log('Hello ${message}')`;
      return [code, Blockly.JavaScript.ORDER_MEMBER];
    },
  };

const test_print = {
	name : 'test_print',
	category : 'test',
	block : {
		init : function() {
			this.jsonInit(
				{
						message0 : 'print %1',
						args0 : [{
							type : 'field_input',
							name : 'print',
						},],
						colour : 100,
						tooltip : 'print(_)',
				}
			);
		},
	},
};


export default Code;
