import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import PropTypes from 'prop-types'

const DatePiker = ({ onChange, selected, placeholderText }) => {
  DatePiker.propTypes = {
    onChange: PropTypes.func.isRequired,
    selected: PropTypes.func.isRequired,
    placeholderText: PropTypes.func.isRequired,
  }

  return (
    <div>
      <DatePicker
        className="form-control form-search-control w-101"
        placeholderText={placeholderText}
        selected={selected}
        onChange={onChange}
        dateFormat="dd.MM.yyyy"
      />
    </div>
  )
}

export default DatePiker
// import React from 'react'
// import DatePicker from 'react-datepicker'
// import 'react-datepicker/dist/react-datepicker.css'
// import PropTypes from 'prop-types'

// const DatePiker = ({ onChange, selected, placeholderText }) => {
//   DatePiker.propTypes = {
//     onChange: PropTypes.func.isRequired,
//     selected: PropTypes.instanceOf(Date).isRequired,
//     placeholderText: PropTypes.string.isRequired,
//   }

//   const handleDateChange = (date) => {
//     if (!date) {
//       onChange(null)
//       return
//     }

// const inputValue = date.toLocaleDateString('en-GB').split('/').join('')

// const parsedDate = new Date(
//   inputValue?.slice(-2),
//   parseInt(inputValue?.slice(2, 4), 10) - 1,
//   inputValue?.slice(0, 2),
// )
// // console.log('parsedDate', inputValue.slice(4, 6))
//     onChange(parsedDate)
//   }

//   return (
//     <div>
//       <DatePicker
//         className="form-control form-search-control w-101"
//         placeholderText={placeholderText}
//         selected={selected}
//         onChange={handleDateChange}
//         dateFormat="dd.MM.yyyy"
//       />
//     </div>
//   )
// }

// export default DatePiker
