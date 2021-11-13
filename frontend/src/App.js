import './App.css';
import Box from './Box'
import Table from './Table';
import { useState } from 'react'

function App() {

	const [noOfRows, setNoOfRows] = useState(1)
	const [noOfColumns, setNoOfColumns] = useState(1)
	const [color, setColor] = useState('#000')
	const [category, setCateogry] = useState('')
	const [selectedBoxes, setSelectedBoxes] = useState([])
	const [fixedSelection, setFixSelection] = useState([])
	const [planogramName, setPlanogramName] = useState('')
	const [planogram, setPlanogram] = useState({})
	

	const getBoxes = () => {
		var boxes = []

		for (let i=0; i<noOfRows; i++) {
			let rows = []

			for (let j=0; j<noOfColumns; j++) {
				rows.push(<Box 
					x={i} 
					y={j} 
					selectedBoxes={selectedBoxes} 
					setSelectedBoxes={setSelectedBoxes} 
					color={color} 
					key={`${i}-${j}`}
				/>)
			}
			boxes.push(<div className="box-row-container">{rows}</div>)
		}

		return boxes
	}

	const addSelection = () => {
		setFixSelection([...fixedSelection, {
			color: color, 
			category: category, 
			selectedBoxes: selectedBoxes
		}])

		setSelectedBoxes([])
		setCateogry('')
	}


	const savePlanogram = () => {
		setPlanogram({
			name: planogramName,
			rows: noOfRows,
			columns: noOfColumns,
			planogram: fixedSelection
		})

		for (let i=0; i<10; i++)
		console.log(planogram);

	}

	
	return (
		<div className="app">
			<div className="left-container">
				<h3> Planogram Boxes </h3>

				<div className="box-container">
					{getBoxes()
					}
				</div>

			</div>

			<div className="right-container">
				<h3> Planogram UI </h3>

				<form  action= "/" method='post' encType="multipart/form-data">
					<div className="input-container">
						<label for="rows"> Enter Rows </label>
						<input id="rows" type="text" name="rows" value={noOfRows} onChange={e => setNoOfRows(e.target.value)} />
					</div>

					<div className="input-container">
						<label for="columns"> Enter Columns </label>
						<input id="columns" type="text" name="columns" value={noOfColumns} onChange={e=> setNoOfColumns(e.target.value)} />
					</div>

					<div className="input-container">
						<label for="category"> Name a category </label>
						<input id="category" type="text" name="category" value={category} onChange={ e => setCateogry(e.target.value)} />
					</div>
						
					<div className="input-container">
						<label for="color"> Box Color </label>
						<input id="color" type="color" name="color"  value={color} onChange={e => setColor(e.target.value)}/>
					</div>

				</form>

				<input type="submit" value="Fix Selection" onClick={() => addSelection()} />

				{
					fixedSelection.length !== 0? (
						<div>
							<form action="" className="planogram-form">	
								<div className="input-container">
									<label for="planogram"> Enter Planogram Name </label>
									<input id="planogram" type="text" name="planogram" value={planogramName} onChange={ e => setPlanogramName(e.target.value)} />
								</div>
							</form>

							<input type="submit" value="Save Planogram" onClick={() => savePlanogram()} />
						</div>
					): ''
				}

			</div>
			{
				fixedSelection.length !== 0? <Table selections={fixedSelection} /> : ''
			}	
			
		</div>
	);
}

export default App