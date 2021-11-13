import { useState, useEffect } from 'react'

const Box = ({x, y,  selectedBoxes, setSelectedBoxes, color}) => {

    const [selectBox, setSelectBox] = useState(false)

    const check = () => {
        for (let i=0; i<selectedBoxes.length; i++) 
            if (selectedBoxes[i].x === x && selectedBoxes[i].y === y) return true  
        
        return false
    }

    const removeSelectedBox = () => {
        let temp = selectedBoxes
        for (let i=0; i<selectedBoxes.length; i++) 
            if (selectedBoxes[i].x === x && selectedBoxes[i].y === y) {
                return temp.slice(0,i).concat(temp.slice(i+1, -1))
            }
    }

    useEffect(() => {
        if (selectedBoxes.length === 0)
            setSelectBox(false)

    }, [selectedBoxes])

    return (
        <div className="box" style={{background: (selectBox? color:'rgb(139, 139, 139)')}} onClick={() => {setSelectBox(!selectBox); setSelectedBoxes([...selectedBoxes, {x:x, y:y}])}}>
            {x}, {y}
        </div>
    )
}

export default Box
