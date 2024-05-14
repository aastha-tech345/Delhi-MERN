// import React from 'react'
// import DatePicker from 'react-datepicker'
// import 'react-datepicker/dist/react-datepicker.css'
// import PropTypes from 'prop-types'

// const DatePiker = ({ onChange, selected, placeholderText }) => {
//   DatePiker.propTypes = {
//     onChange: PropTypes.func.isRequired,
//     selected: PropTypes.func.isRequired,
//     placeholderText: PropTypes.func.isRequired,
//   }

//   return (
//     <div>
//       <DatePicker
//         className="form-control form-search-control w-101"
//         placeholderText={placeholderText}
//         selected={selected}
//         onChange={onChange}
//         dateFormat="dd.MM.yyyy"
//       />
//     </div>
//   )
// }

// export default DatePiker

import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import PropTypes from 'prop-types'

const DatePiker = ({ onChange, selected, placeholderText }) => {
  const handleDateChange = (e) => {
    let yearString = e?.getFullYear()?.toString()
    const year = parseInt(yearString?.substring(0, 4), 10)
    if (yearString.length > 4) {
      yearString = yearString?.substring(0, 4)
    }
    const newDate = new Date(`${year}.${e?.getMonth() + 1}.${e?.getDate()}`)
    onChange(newDate)
  }

  const handleInputChange = (e) => {
    let inputValue = e.target.value
    let formattedValue = ''
    inputValue = inputValue?.replace(/\D/g, '')
    for (let i = 0; i < inputValue?.length; i++) {
      if (i === 2 || i === 4) {
        formattedValue += '.'
      }
      formattedValue += inputValue[i]
    }
    e.target.value = formattedValue
  }

  return (
    <div>
      <DatePicker
        className="form-control form-search-control w-101"
        placeholderText={placeholderText}
        selected={selected}
        onChange={handleDateChange}
        onChangeRaw={handleInputChange}
        dateFormat="dd.MM.yyyy"
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
      />
    </div>
  )
}

DatePiker.propTypes = {
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.instanceOf(Date).isRequired,
  placeholderText: PropTypes.string.isRequired,
}

export default DatePiker
