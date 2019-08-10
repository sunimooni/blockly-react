import React from 'react';
import './Tutorial.css';

class Tutorial extends React.Component{

    render(){
        return (
	<section className="course_container">
		<div className="course_title">
			<h3>Machine Learning</h3>
		</div>
		<div className="course_tutorial">
			2
		</div>
		<div className="course_progress">
			<div className="course_button">
				<button>previous</button>
			</div>
			<div className="course_button">
				<button>submit</button>
			</div>
			<div className="course_button">
				<button>next</button>
			</div>		
		</div>
	</section>	
	)
    }
}

export default Tutorial;
