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

const GetActivityData = ({ updateData, search }) => {
  const notify = (dataa) => toast(dataa)
  const apiUrl = process.env.REACT_APP_API_URL
  const [page, setPage] = useState(1)
  const [activityData, setActivityData] = useState([])
  const [coountPage, setCountPage] = useState(0)
  const handleChange = (event, value) => {
    setPage(value)
  }

  GetActivityData.propTypes = {
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
      // console.log('ashish', res?.data?.pageCount)
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

      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="block-wrap">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="col-1 "></th>
                      <th className="col-1 ">DATUM</th>
                      <th className="col-2 ">TITEL</th>
                      <th className="col-4 ">VERWALTUNG</th>
                      <th className="col-4 ">BEARBEITER</th>
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
                        <tr
                          key={_id}
                          style={{
                            margin: 'auto',
                            width: '50%',

                            padding: ' 10px',
                          }}
                        >
                          <td>
                            <span
                              style={{
                                border: '1px solid #015291',
                                borderRadius: '5px',
                                width: '40px',
                                height: '40px',
                                padding: '5px',
                                textAlign: 'center',
                                color: '#015291',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}
                            >
                              {getIconData(icon)}
                            </span>
                          </td>
                          <td>{outputDateString} </td>
                          <td>Lorem Ipsum is simply dummy text </td>
                          <td>{message}</td>
                          <td>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing and typesetting
                              industry. Lorem Ipsum has been the industry standard dummy text ever
                              since the 1500s, when an unknown printer took a galley of type and
                              scrambled it to make a type specimen book.{' '}
                            </p>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="bottomBtnBg">
          <div className="row">
            <div className="col-sm-12">
              <div style={{ float: 'right' }}>
                <button
                  className="btn"
                  style={{ background: '#d04545', color: 'white' }}
                  // onClick={handleClose}
                >
                  Abbrechen
                </button>
                &nbsp;&nbsp;
                <button
                  className="btn mx-2"
                  style={{ background: '#0b5995', color: 'white' }}
                  // onClick={handleSubmit}
                >
                  Aktivität hinzufügen
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      {/* <div className="mx-3">
        <Stack spacing={2}>
          <Pagination
            count={coountPage}
            variant="outlined"
            shape="rounded"
            page={page}
            onChange={handleChange}
          />
        </Stack>
        <br />
      </div> */}

      <ToastContainer />
    </>
  )
}

export default GetActivityData
