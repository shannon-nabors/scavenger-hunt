import React from 'react'

class LetterCell extends React.Component {
  constructor() {
    super()
    this.state = {highlight: false}
  }

  handleClick = () => {
    let highlighted = this.state.highlight
    this.setState({highlight: !highlighted})
  }

  render() {
    let cell = this.props.cell
    return (
      <g onClick={this.handleClick}>
        <rect
          x={ (23 * cell.column - 20).toString() }
          y={ (23 * cell.row - 20).toString() }
          width="23.00"
          height="23.00"
          fill={this.state.highlight ? "#F1DF4B" : "white"}>
        </rect>

        <text
          x={ (23 * cell.column) - 8.5 }
          y={ (23 * cell.row) + 1.08 }
          textAnchor="middle"
          fontSize="15.33"
          fill="#1b1c1d"
          >{ cell.letter }</text>
      </g>
    )
  }
}

export default LetterCell