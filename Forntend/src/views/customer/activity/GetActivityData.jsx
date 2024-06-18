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
import { MdAdd, MdOutlineEdit } from 'react-icons/md'
import { RiDeleteBinLine } from 'react-icons/ri'
import DeleteModal from './DeleteModal'
import Activity from './Activity'
import EditModal from './EditModal'

const GetActivityData = ({ updateData, search, openText }) => {
  const apiUrl = process.env.REACT_APP_API_URL
  const [hide, setHide] = useState(false)
  const [editHide, setEditHide] = useState(false)
  const [activityId, setActivityId] = useState('')
  const [activityEditId, setActivityEditId] = useState('')
  const [page, setPage] = useState(1)
  const [activityData, setActivityData] = useState([])

  const [coountPage, setCountPage] = useState(0)
  let ress = localStorage.getItem('record')
  let resultt = JSON.parse(ress)
  let custoRecord = localStorage.getItem('customerRecord')
  let getResult = JSON.parse(custoRecord)
  // console.log('custoRecord', getResult._id)
  let user = resultt?.user?.username
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
      const res = await fetch(
        `${apiUrl}/activity/get_activity/${getResult?._id}?keyword=${search}&page=${page}`,
      )
      const data = await res.json()
      setCountPage(data?.pageCount)
      const activeRecords = data?.data?.filter((record) => record.is_deleted === 'active')
      setActivityData(activeRecords)
      // console.log('activity data', activityData)
    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete = (activityId) => {
    setActivityId(activityId)
    setHide(true)
  }

  const handleEdit = (activityEditId) => {
    setActivityEditId(activityEditId)
    setEditHide(true)
  }
  // console.log('first', activityEditId)
  useEffect(() => {
    getData()
  }, [updateData, page, search])

  return (
    <>
      {hide ? <DeleteModal setHide={setHide} activityId={activityId} getData={getData} /> : ''}
      {editHide ? (
        <EditModal setEditHide={setEditHide} getData={getData} activityEditId={activityEditId} />
      ) : (
        ''
      )}
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
                      <th className="col-1 ">MITARBEITERIN</th>
                      <th className="col-5">NOTIZ</th>
                      <th className="col-3">AKTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activityData?.map((elem, index) => {
                      const { createdAt, icon, message, _id } = elem
                      const inputDate = new Date(createdAt)
                      const day = inputDate?.getUTCDate()
                      const month = inputDate?.getUTCMonth() + 1
                      const year = inputDate?.getUTCFullYear()

                      const outputDateString = `${day < 10 ? '0' : ''}${day}.${
                        month < 10 ? '0' : ''
                      }${month}.${year < 10 ? '0' : ''}${year}`
                      console.log('aastha', outputDateString)
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
                          <td>{user}</td>
                          <td>{message}</td>
                          <td>
                            <>
                              <button
                                style={{ background: 'none', border: 'none' }}
                                onClick={() => handleEdit(_id)}
                              >
                                <MdOutlineEdit className="fs-5" style={{ color: '#5C86B4' }} />
                                &nbsp;&nbsp;Bearbeiten
                              </button>
                              &nbsp;
                              <button
                                style={{ background: 'none', border: 'none' }}
                                onClick={() => handleDelete(_id)}
                              >
                                <RiDeleteBinLine className="text-danger text-bold fs-5" /> Löschen
                              </button>
                            </>
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
      </div>

      <ToastContainer />
    </>
  )
}
GetActivityData.propTypes = {
  updateData: PropTypes.bool.isRequired,
  search: PropTypes.string.isRequired,
  openText: PropTypes.func.isRequired,
}

export default GetActivityData
