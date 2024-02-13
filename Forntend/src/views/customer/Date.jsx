// import React, { useState } from 'react'
// import DatePicker from 'react-datepicker'

// import 'react-datepicker/dist/react-datepicker.css'

// // CSS Modules, react-datepicker-cssmodules.css
// // import 'react-datepicker/dist/react-datepicker-cssmodules.css';

// export default const Date = () => {
//   const [startDate, setStartDate] = useState(new Date())
//   return <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
// }

import React, { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import PropTypes from 'prop-types'

const DatePiker = ({ onChange, selected }) => {
  DatePiker.propTypes = {
    onChange: PropTypes.func.isRequired,
    selected: PropTypes.func.isRequired,
  }
  // const [startDate, setStartDate] = useState(null)

  useEffect(() => {
    // setStartDate(new Date())
  }, []) // Empty dependency array ensures this effect runs only once

  return (
    <div>
      <DatePicker
        className="form-control form-search-control w-101"
        placeholderText="Geburtsdatum"
        selected={selected}
        onChange={onChange}
        dateFormat="dd.MM.yy"
      />
    </div>
  )
}

export default DatePiker
