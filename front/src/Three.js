import React from 'react';

class Three extends React.Component{
    state = {
        isLoading : true
    };
    componentDidMount(){
        setTimeout(() => {
            this.setState({ isLoading : false });
        }, 6000);
    }
    render() {
        const { isLoading } = this.state;
        return <div>{isLoading ? "Loading" : "We are ready"}</div>
    }
}

export default Three;
