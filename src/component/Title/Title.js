import React from 'react';

class Title extends React.Component {
    render(){
        return(
            <h2 className="widget-footer-title">{this.props.title}</h2>
        )
    }
}

export default Title;