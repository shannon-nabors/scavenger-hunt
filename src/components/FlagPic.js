import React from 'react'

class FlagPic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colorNum: 1,
            color: "gray"
        }
    }

    colors = {
        1: "gray",
        2: "red",
        3: "orange",
        4: "yellow",
        5: "green",
        6: "blue",
        7: "black",
        8: "white"
    } 

    handleClick = () => {
        let newNum = this.state.colorNum
        newNum ++
        if (newNum === 9) { newNum = 1 }
        let newColor = this.colors[newNum]
        this.setState({colorNum: newNum, color: newColor})
    }
  
    render() {
        let num = this.props.number
        let color = this.state.color
        return (
            <img onClick={this.handleClick} src={require(`../flag-${num}-${color}.png`)}/>
        )
    }
}

export default FlagPic