import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
  PhoneOutlined,
  CheckCircleOutlined,
  PrinterOutlined,
  RedEnvelopeOutlined,
} from '@ant-design/icons'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import axios from 'axios'
import { MdAdd } from 'react-icons/md'

const GetDescriptionData = ({ updateData, search }) => {
  const notify = (dataa) => toast(dataa)
  const apiUrl = process.env.REACT_APP_API_URL
  const [page, setPage] = useState(1)
  const [activityData, setActivityData] = useState([])
  const [coountPage, setCountPage] = useState(0)
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
      console.log('ashish', res?.data?.pageCount)
      setCountPage(res?.data?.pageCount)
      // if (res?.data?.data?.length === 0) {
      //   console.log('ashihsh')
      //   notify(`Page ${page} There is no Data Left`)
      //   setPage(page - 1)
      // }

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
      {/* <table className="table">
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
        <tbody className="shadow p-3 mb-5 bg-body rounded m-3">
          {activityData?.map((elem) => {
            const { createdAt, icon, message, _id } = elem
            const inputDate = new Date(createdAt)
            const day = inputDate?.getUTCDate()
            const month = inputDate?.getUTCMonth() + 1
            const year = inputDate?.getUTCFullYear() % 100

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
      </table> */}

      <div className="row m-3">
        <div style={{ border: '1px solid lightgray', borderRadius: '5px' }}>
          <table className="table table">
            <thead>
              <tr>
                <th>
                  <div className="row">
                    <div className="col-1"></div>
                    <div className="col-1">DATUM</div>
                    <div className="col-3 text-center">TITEL</div>
                    <div className="col-4 text-center">VERWALTUNG</div>
                    <div className="col-3 text-center">BEARBEITER</div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {activityData?.map((elem) => {
                const { createdAt, icon, message, _id } = elem
                const inputDate = new Date(createdAt)
                const day = inputDate?.getUTCDate()
                const month = inputDate?.getUTCMonth() + 1
                const year = inputDate?.getUTCFullYear() % 100

                const outputDateString = `${day}-${month < 10 ? '0' : ''}${month}-${
                  year < 10 ? '0' : ''
                }${year}`
                return (
                  <tr key={_id}>
                    <td>
                      <div className="row">
                        <div className="col-sm-1 m-auto">
                          <div
                            style={{
                              border: '1px solid #015291',
                              borderRadius: '5px',
                              width: '30px',
                              height: '30px',
                              textAlign: 'center',
                            }}
                          >
                            {getIconData(icon)}
                          </div>
                        </div>
                        <div className="col-sm-1 m-auto">{outputDateString} </div>
                        <div className="col-sm-3 text-center m-auto">
                          Lorem Ipsum is simply dummy text{' '}
                        </div>
                        <div className="col-sm-4 m-auto">
                          <p>{message}</p>
                        </div>
                        <div className="col-sm-3 m-auto">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry standard dummy text ever
                            since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.{' '}
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      <Stack spacing={2}>
        <Pagination
          count={coountPage}
          variant="outlined"
          shape="rounded"
          page={page}
          onChange={handleChange}
        />
      </Stack>
      <ToastContainer />
    </>
  )
}

export default GetDescriptionData
