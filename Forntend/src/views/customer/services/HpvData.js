import React, { useState } from 'react'

const HpvData = () => {
  const [motivation, setMotivation] = useState('')

  const rowData = [
    { field1: 'Selbstbestimmung', field2: 'Diagnose', field3: <input type="checkbox" /> },
    { field1: 'Angehörige', field2: 'Ablehnung', field3: <input type="checkbox" /> },
    { field1: 'Angst', field2: 'Textfeld Motivation', field3: <input type="checkbox" /> },
    {
      field1: 'Textfeld Motivation',
      field2: '',
      field3: (
        <input
          type="text"
          value={motivation}
          name="motivation"
          onChange={(e) => {
            setMotivation(e.target.value)
          }}
          style={{
            width: '80%',
            border: '1px solid lightgray',
            height: '30px',
            borderRadius: '4px',
          }}
        />
      ),
    },
    {
      field1: (
        <h5 className="mt-2">
          <b>Geltungsbereich</b>
        </h5>
      ),
      field2: '',
      field3: '',
    },
    { field1: 'Sterbeprozess', field2: 'Demenz', field3: <input type="checkbox" /> },
    {
      field1: 'Gehirnschädigung',
      field2: 'Schwerstpflegebedürftigkeit',
      field3: <input type="checkbox" />,
    },
  ]

  return rowData
}

export { HpvData }
