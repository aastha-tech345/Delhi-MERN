// // import React from 'react'
// // import DatePicker from 'react-datepicker'
// // import 'react-datepicker/dist/react-datepicker.css'
// // import PropTypes from 'prop-types'

// // const DatePiker = ({ onChange, selected, placeholderText }) => {
// //   DatePiker.propTypes = {
// //     onChange: PropTypes.func.isRequired,
// //     selected: PropTypes.func.isRequired,
// //     placeholderText: PropTypes.func.isRequired,
// //   }

// //   return (
// //     <div>
// //       <DatePicker
// //         className="form-control form-search-control w-101"
// //         placeholderText={placeholderText}
// //         selected={selected}
// //         onChange={onChange}
// //         dateFormat="dd.MM.yyyy"
// //       />
// //     </div>
// //   )
// // }

// // export default DatePiker

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
//     let day = date.getDate()
//     let month = date.getMonth() + 1
//     let year = date.getFullYear()

//     if (year < 1000 || year > 9999) {
//       console.error('Invalid year. Year must consist of 4 digits.')
//       return
//     }

//     day = day.toString().padStart(2, '0')
//     month = month.toString().padStart(2, '0')

//     const parsedDate = new Date(`${year}.${month}.${day}`)
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

// //mui date piker

// // import React from 'react'
// // import PropTypes from 'prop-types'
// // import { DatePicker } from '@mui/x-date-pickers/DatePicker'
// // import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
// // import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

// // export default function DatePiker({ onChange, selected, placeholderText }) {
// // const handleDateChange = (date) => {
// //   let day = date.getDate()
// //   let month = date.getMonth() + 1
// //   let year = date.getFullYear() % 100

// //   year += year < 50 ? 2000 : 1900
// //   day = day.toString().padStart(2, '0')
// //   month = month.toString().padStart(2, '0')
// //   const parsedDate = new Date(year, month - 1, day)

// //   onChange(parsedDate)
// // }

// //   return (
// //     <LocalizationProvider dateAdapter={AdapterDayjs}>
// //       <DatePicker
// //         label="name"
// //         format="DD.MM.YYYY"
// //         value={selected}
// //         onChange={handleDateChange}
// //         name="startDate"
// //         renderInput={(params) => <input {...params} placeholder={placeholderText} />}
// //       />
// //     </LocalizationProvider>
// //   )
// // }

// // DatePiker.propTypes = {
// //   onChange: PropTypes.func.isRequired,
// //   selected: PropTypes.instanceOf(Date).isRequired,
// //   placeholderText: PropTypes.string.isRequired,
// // }

// //ant design

// // import React from 'react'
// // import PropTypes from 'prop-types'
// // import { DatePicker, Space } from 'antd'
// // import moment from 'moment'

// // export default function DatePiker({ onChange, selected, placeholder }) {
// //   const handleDateChange = (date) => {
// //     if (date && moment.isMoment(date) && date.isValid()) {
// //       onChange(date.format('YYYY-MM-DD'))
// //     } else {
// //       onChange(null)
// //     }
// //     // onChange(date)
// //   }

// //   return (
// //     <div>
// //       <Space direction="vertical">
// //         <DatePicker
// //           // format={{
// //           //   format: 'DD.MM.YYYY',
// //           //   type: 'mask',
// //           // }}
// //           format={{
// //             format: 'YYYY-MM-DD',
// //             type: 'mask',
// //           }}
// //           onChange={handleDateChange}
// //           // value={selected}
// //           value={selected ? moment(selected, 'YYYY-MM-DD') : null}
// //           // placeholder={placeholder}
// //           // className="form-control w-100"
// //         />
// //       </Space>
// //     </div>
// //   )
// // }

// // DatePiker.propTypes = {
// //   onChange: PropTypes.func.isRequired,
// //   selected: PropTypes.string,
// //   placeholder: PropTypes.string.isRequired,
// // }
// // DatePiker.defaultProps = {
// //   placeholder: 'Geburtsdatum',
// //

import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

export default function DatePic({ onChange, value, placeholder }) {
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    if (value instanceof Date && !isNaN(value.getTime())) {
      setInputValue(formatDate(value))
    } else if (typeof value === 'string') {
      const date = new Date(value)
      setInputValue(formatDate(date))
    } else {
      setInputValue('')
    }
  }, [value])

  const handleInputChange = (e) => {
    let inputValue = e.target?.value
    let formattedValue = ''

    inputValue = inputValue?.replace(/\D/g, '')

    for (let i = 0; i < inputValue?.length; i++) {
      if (i === 2 || i === 4) {
        formattedValue += '.'
      }
      formattedValue += inputValue[i]
    }

    setInputValue(formattedValue)
  }

  const handleDateChange = (e) => {
    const parts = inputValue?.split('.')?.map((part) => parseInt(part, 10))
    let [day, month, year] = parts
    if (parts?.length === 3) {
      if (year < 100) {
        year += 1900
      } else if (year >= 2000 && year <= new Date().getFullYear()) {
      } else {
        year = new Date().getFullYear()
      }

      const newDate = new Date(year, month - 1, day)
      onChange(newDate)
    } else if (parts?.length === 1) {
      const year = parts[0]
      if (year < 100) {
        let fullYear
        if (year < 50) {
          fullYear = year + 2000
        } else {
          fullYear = year + 1900
        }
        const newDate = new Date(fullYear, 0, 1)
        onChange(newDate)
      }
    }
  }

  const formatDate = (date) => {
    const day = date?.getDate()?.toString()?.padStart(2, '0')
    const month = (date?.getMonth() + 1)?.toString()?.padStart(2, '0')
    const year = date?.getFullYear()?.toString()
    return `${day}.${month}.${year}`
  }

  return (
    <div>
      <input
        type="text"
        onChange={handleInputChange}
        onBlur={handleDateChange}
        value={inputValue}
        placeholder={placeholder}
        className="form-control"
      />
    </div>
  )
}

DatePic.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.instanceOf(Date).isRequired,
  placeholder: PropTypes.string.isRequired,
}
