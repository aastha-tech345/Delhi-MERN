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
  DatePiker.propTypes = {
    onChange: PropTypes.func.isRequired,
    selected: PropTypes.instanceOf(Date).isRequired,
    placeholderText: PropTypes.string.isRequired,
  }

  const handleDateChange = (date) => {
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear() % 100

    year += year < 50 ? 2000 : 1900
    day = day.toString().padStart(2, '0')
    month = month.toString().padStart(2, '0')
    const parsedDate = new Date(year, month - 1, day)

    onChange(parsedDate)
  }

  return (
    <div>
      <DatePicker
        className="form-control form-search-control w-101"
        placeholderText={placeholderText}
        selected={selected}
        onChange={handleDateChange}
        dateFormat="dd.MM.yyyy"
      />
    </div>
  )
}

export default DatePiker
