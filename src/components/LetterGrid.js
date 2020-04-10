import React from 'react'
import Cell from './LetterCell'

class LetterGrid extends React.Component {
    letters = [
    "B", "C", "T", "H", "U", "B", "G", "C", "E", "Z", "F", "T", "Q", "C", "Y",
    "U", "H", "C", "E", "A", "S", "Y", "O", "C", "L", "O", "M", "C", "W", "T",
    "C", "T", "M", "I", "M", "G", "B", "L", "A", "G", "A", "T", "N", "B", "O",
    "Y", "P", "K", "R", "O", "I", "O", "D", "R", "I", "D", "S", "Y", "G", "W",
    "H", "F", "C", "P", "W", "Y", "F", "K", "U", "S", "H", "A", "R", "K", "H",
    "E", "X", "S", "T", "A", "A", "S", "U", "N", "H", "B", "U", "L", "I", "G",
    "R", "O", "Y", "G", "N", "N", "B", "I", "S", "O", "Y", "U", "V", "H", "G",
    "R", "L", "V", "W", "C", "T", "H", "C", "M", "S", "N", "S", "M", "C", "Q",
    "I", "G", "H", "J", "T", "P", "M", "A", "N", "A", "T", "E", "E", "R", "U",
    "N", "O", "E", "X", "L", "G", "K", "O", "K", "Y", "L", "A", "O", "B", "I",
    "G", "C", "U", "O", "V", "V", "G", "B", "I", "R", "W", "H", "E", "P", "T",
    "S", "F", "D", "I", "R", "S", "C", "I", "L", "D", "H", "I", "A", "W", "E",
    "L", "N", "A", "S", "P", "Z", "I", "D", "H", "W", "C", "R", "E", "J", "L",
    "C", "T", "G", "V", "F", "M", "K", "H", "D", "Y", "S", "A", "Y", "G", "N",
    "H", "X", "M", "I", "W", "H", "O", "N", "M", "R", "P", "U", "U", "L", "I"]

    cellObjects() {
        let cellObjects = []
        for (let i = 0; i < this.letters.length; i++) {
            let cellObj = {}
            cellObj.id = i
            cellObj.letter = this.letters[i]
            cellObj.row = Math.floor(i/15) + 1
            cellObj.column = (i%15) + 1
            cellObjects.push(cellObj)
        }
        return cellObjects
    }

    makePathData(num) {
        let pathData = ""
        for (let n = num; n > 1; n--) {
            pathData = pathData.concat(" ", ` M 3 ${23*n-20} l ${23*num + 3} 0 M ${23*n-20} 3 l 0 ${23*num + 3}`)
        }
        return pathData
    }

    render() {
        let dimension = 15
        return (
            <svg
            viewBox={`0 0 ${23 * dimension + 6} ${23 * dimension +6}`}
            preserveAspectRatio="xMidYMin meet"
            xmlns="http://www.w3.org/2000/svg"
            display={this.props.invisible ? "none":"inline"}
            >
                <g>{this.cellObjects().map(c => <Cell key={c.id} cell={c}/>)}</g>
                <g>
                <path
                    d={this.makePathData(dimension)}
                    stroke="dimgray">
                </path>
                <rect
                    x="1.50"
                    y="1.50"
                    width={ (23 * dimension + 3).toString() }
                    height={ (23 * dimension + 3).toString() }
                    stroke="#1b1c1d"
                    strokeWidth="3.00"
                    fill="none">
                </rect>
                </g>
            </svg>
        )
    } 
}

export default LetterGrid