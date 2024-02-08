import React, { useState } from 'react'
import Multiselect from 'multiselect-react-dropdown'

const Date = () => {
  const [options, setOptions] = useState([
    { name: 'Option 1️', id: 1 },
    { name: 'Option 2️', id: 2 },
    { name: 'Option 23', id: 2 },
    { name: 'Option 2s3', id: 2 },
    { name: 'Option wre2️wer', id: 2 },
    { name: 'Option rew2️', id: 2 },
  ])
  const [selectedValues, setSelectedValues] = useState([])

  //   const onSelect = (selectedList, selectedItem) => {
  //     setSelectedValues(selectedList)
  //     // Your additional logic here
  //   }

  //   const onRemove = (selectedList, removedItem) => {
  //     setSelectedValues(selectedList)
  //     // Your additional logic here
  //   }

  const customRender = (selected, displayValue, key) => {
    return (
      <div key={key}>
        <input
          type="checkbox"
          checked={selected}
          onChange={() => {}}
          //   style={{ marginRight: '5px' }}
        />
        <span>{displayValue}</span>
      </div>
    )
  }

  return (
    <Multiselect
      options={options}
      selectedValues={selectedValues}
      //   onSelect={onSelect}
      //   onRemove={onRemove}
      displayValue="name"
      showCheckbox={true}
      closeIcon="close"
      customRender={customRender}
    />
  )
}

export default Date
