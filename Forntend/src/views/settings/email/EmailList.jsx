import React, { useEffect, useMemo, useRef, useState } from 'react'
import { GrEdit } from 'react-icons/gr'
import { Table } from 'antd'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Stack from '@mui/material/Stack'
import Pagination from '@mui/material/Pagination'
import { useNavigate } from 'react-router-dom'
import { MdOutlineEdit } from 'react-icons/md'

const EmailList = () => {
  const navigate = useNavigate()
  const [emailRecord, setEmailRecord] = useState([])
  const apiUrl = process.env.REACT_APP_API_URL
  const [page, setPage] = useState(1)
  const [countPage, setCountPage] = useState(0)
  const getDetails = async () => {
    try {
      const result = await fetch(`${apiUrl}/email/get_email?page=${page}`)
      const data = await result.json()
      setCountPage(data?.pageCount)
      const activeRecords = data?.result?.filter((record) => record.status === 'active')
      setEmailRecord(activeRecords)
    } catch (error) {
      console.error('Error fetching customer record:', error)
    }
  }
  const handleEdit = (record) => {
    let recordData = JSON.stringify(record)
    localStorage.setItem('EmailEditDetails', recordData)
    navigate(`/settings/email_info`)
  }

  useEffect(() => {
    getDetails()
  }, [page])
  const columns = [
    {
      title: 'Name des Kunden',
      dataIndex: 'designation',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'AKTION',
      dataIndex: 'action',
      render: (text, record) => (
        <>
          <button style={{ background: 'none', border: 'none' }} onClick={() => handleEdit(record)}>
            <MdOutlineEdit className="fs-5" style={{ color: '#5C86B4' }} />
            &nbsp;&nbsp;Bearbeiten
          </button>
        </>
      ),
    },
  ]

  return (
    <>
      <div className="row">
        <div
          className="col-sm-12 ms-3"
          style={{
            background: 'white',
            Height: '640px',
            // width: '1210px',
            borderRadius: '5px 5px 5px 5px ',
          }}
        >
          <h4 className="ms-1 mt-3">E-Mail-Vorlagen</h4>
          <hr className="mx-2" />
          <div className="mx-2">
            <Table
              columns={columns}
              pagination={false}
              dataSource={emailRecord}
              rowKey={(record) => record._id}
              rowSelection={{
                type: 'checkbox',
                onChange: (selectedRowKeys, selectedRows) => {
                  // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
                },
                getCheckboxProps: (record) => ({
                  disabled: record.name === 'Disabled User',
                  name: record.name,
                }),
              }}
            />
            <Stack spacing={2}>
              <Pagination variant="outlined" shape="rounded" />
              <br />
            </Stack>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  )
}

export default React.memo(EmailList)
