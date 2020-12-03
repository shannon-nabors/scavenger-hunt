import React from 'react'

class FlagPic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: false
        }
    }

    handleClick = () => {
        let hidden = this.state.hidden
        this.setState({hidden: !hidden})
    }
  
    render() {
        let hidden = this.state.hidden
        return (
        <span className="letter" onClick={this.handleClick} style={hidden ? {color: "linen"} : {color: "black"}}>{this.props.letter}</span>
        )
    }
}

export default FlagPic