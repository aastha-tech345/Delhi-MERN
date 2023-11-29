import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
  PhoneOutlined,
  CheckCircleOutlined,
  PrinterOutlined,
  RedEnvelopeOutlined,
} from '@ant-design/icons'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import axios from 'axios'

const GetDescriptionData = ({ updateData, search }) => {
  const apiUrl = process.env.REACT_APP_API_URL
  const [page, setPage] = useState(1)
  const [activityData, setActivityData] = useState([])

  const handleChange = (event, value) => {
    setPage(value)
  }

  GetDescriptionData.propTypes = {
    search: PropTypes.array.isRequired,
    updateData: PropTypes.array.isRequired,
  }

  const getIconData = (iconName) => {
    if (iconName === 'PhoneOutlined') {
      return <PhoneOutlined />
    } else if (iconName === 'CheckCircleOutlined') {
      return <CheckCircleOutlined />
    } else if (iconName === 'PrinterOutlined') {
      return <PrinterOutlined />
    } else if (iconName === 'RedEnvelopeOutlined') {
      return <RedEnvelopeOutlined />
    }
  }

  const getData = async () => {
    try {
      const res = await axios.get(`${apiUrl}/activity/get_activity?keyword=${search}&page=${page}`)

      setActivityData(res?.data?.data)

      // setGetActivity(res.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [updateData, page, search])

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col" className="text-center">
              DATUM
            </th>
            <th scope="col" className="text-center">
              TITEL
            </th>
            <th scope="col" className="text-center">
              VERWALTUNG
            </th>
            <th scope="col" className="text-center">
              BEARBEITER
            </th>
          </tr>
        </thead>
        <tbody>
          {activityData?.map((elem) => {
            const { createdAt, icon, message, _id } = elem
            const inputDate = new Date(createdAt)
            const day = inputDate.getUTCDate()
            const month = inputDate.getUTCMonth() + 1
            const year = inputDate.getUTCFullYear() % 100

            const outputDateString = `${day}-${month < 10 ? '0' : ''}${month}-${
              year < 10 ? '0' : ''
            }${year}`

            return (
              <tr key={_id} style={{ margin: 'auto' }}>
                <td className="text-center">{getIconData(icon)}</td>
                <td className="text-center">{outputDateString}</td>
                <td className="text-center">Title</td>
                <td
                  style={{
                    maxWidth: '50px',
                    important: 'true',
                    wordWrap: 'break-word',
                  }}
                  className="text-center"
                >
                  {message}
                </td>

                <td className="text-center">Description</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <Stack spacing={2}>
        <Pagination count={10} color="secondary" page={page} onChange={handleChange} />
      </Stack>
    </>
  )
}

export default GetDescriptionData
