import React, { useEffect, useState } from 'react'
import { Divider, Table } from 'antd'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { GrEdit } from 'react-icons/gr'
import { MdDelete, MdAdd } from 'react-icons/md'
import { BiFilterAlt } from 'react-icons/bi'
import { AiOutlineMail } from 'react-icons/ai'
import { BiErrorCircle } from 'react-icons/bi'
import { useParams } from 'react-router-dom'
import { CListGroup } from '@coreui/react'
import axios from 'axios'
import DeleteModal from './DeleteModal'
import { postFetchData } from 'src/Api'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { TRUE } from 'sass'
import EditModal from './EditModal'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

const Contact = () => {
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      name: record.name,
    }),
  }

  const columns = [
    {
      title: 'Name des Kunden',
      dataIndex: 'fname',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Kunden-ID',
      dataIndex: '_id',
    },
    {
      title: 'E-Mail',
      dataIndex: 'email',
    },
    {
      title: 'Telefon',
      dataIndex: 'phone',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
    {
      title: 'AKTION',
      dataIndex: 'action',
      render: (_, record) => (
        <>
          <GrEdit onClick={() => handleEdit(record)} />
          &nbsp; Bearbeiten &nbsp;&nbsp;&nbsp;
          <MdDelete onClick={() => handleDelete(record._id)} />
          Löschen
        </>
      ),
    },
  ]

  let res = localStorage.getItem('customerDatat')
  let result = JSON.parse(res)
  const [data, setData] = useState({
    fname: '',
    lname: '',
    phone: '',
    email: '',
    gender: '',
    customer_id: result?._id,
  })
  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)
  const apiUrl = process.env.REACT_APP_API_URL
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [contactRecord, setContactRecord] = useState([])
  const [searchKey, setSearchKey] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [selectionType] = useState('checkbox')
  const [hide, setHide] = useState(false)
  const [edit, setEdit] = useState(false)
  const [contactId, setContactId] = useState('')
  const [page, setPage] = useState(1)
  const [countPage, setCountPage] = useState(0)
  const params = useParams()

  const handlePageChange = (event, value) => {
    setPage(value)
  }

  const handleChange = (e) => {
    const { name, value, type } = e.target

    const newValue = type === 'radio' ? e.target.value : value

    setData({ ...data, [name]: newValue })
  }

  const handleDelete = (customerId) => {
    console.log(`Deleting customer with ID: ${customerId}`)
    setContactId(customerId)
    setHide(true)
  }

  const handleEdit = (record) => {
    let data = JSON.stringify(record)
    localStorage.setItem('ContactEditDetails', data)
    setEdit(true)
  }
  const notify = (dataa) => toast(dataa)

  const saveData = async () => {
    try {
      if (!data?.email || !data?.fname || !data?.lname || !data?.gender || !data?.phone) {
        return notify('Please Fill All Details')
      }

      console.log('ashshihh', data.email)

      const response = await postFetchData(`${apiUrl}/contact/create_contact`, data)
      // let result = await response.json()
      console.log(response)
      getDetails()
      handleClose()
      if (response.response.status == 406) {
        notify('Email Already Exists')
      }
    } catch (error) {
      console.error('Error during API call:', error)
    }
  }

  const getDetails = async () => {
    try {
      const result = await fetch(`${apiUrl}/contact/get_contact?page=${page}`)
      const data = await result.json()
      setCountPage(data?.pageCount)
      const activeRecords = data?.result?.filter((record) => record.status === 'active')

      setContactRecord(activeRecords)
    } catch (error) {
      console.error('Error fetching customer record:', error)
    }
  }

  const handleSearch = async () => {
    try {
      const response = await axios.get(`${apiUrl}/contact/search/${searchKey}`)
      setSearchResults(response.data)
    } catch (error) {
      console.error('Error searching for contact info:', error)
    }
  }

  //console.log(contactRecord)
  let dataa = contactRecord
  useEffect(() => {
    getDetails()
  }, [page])

  return (
    <div>
      {hide ? <DeleteModal setHide={setHide} contactId={contactId} getDetails={getDetails} /> : ''}
      {edit ? <EditModal setEdit={setEdit} getDetails={getDetails} /> : ''}
      <div className="row m-4 p-4" style={{ borderRadius: '5px', border: '1px solid lightgray' }}>
        <div className="col-sm-3">
          <input
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
            type="search"
            id="form1"
            placeholder="Ihre Suche eingeben"
            className="form-control"
          />
        </div>
        <div className="col-sm-4">
          <button className="btn btn text-light" style={{ background: '#0b5995' }}>
            <BiFilterAlt onClick={handleSearch} />
            &nbsp; Filter
          </button>
        </div>
        <div className="col-sm-2"></div>
        <div className="col-sm-3">
          &nbsp;&nbsp;
          <button
            className="btn btn"
            style={{ background: '#0b5995', color: 'white' }}
            onClick={handleShow}
          >
            <MdAdd />
            &nbsp;Neuen Kunden anlegen
          </button>
          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Kontakt hinzufügen</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="row p-3">
                <div className="mb-2 row">
                  <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                    Vorname
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      name="fname"
                      value={data.fname}
                      onChange={handleChange}
                      placeholder="jo"
                      className="form-control"
                      id="inputPassword"
                    />
                    {error && data.fname.trim().length === 0 && (
                      <p style={{ color: 'red' }}>
                        <BiErrorCircle /> required
                      </p>
                    )}
                  </div>
                </div>
                <div className="mb-2 row">
                  <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                    Nachname
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      name="lname"
                      value={data.lname}
                      onChange={handleChange}
                      placeholder="verma"
                      className="form-control"
                      id="inputPassword"
                    />
                    {error && data.lname.trim().length === 0 && (
                      <p style={{ color: 'red' }}>
                        <BiErrorCircle /> required
                      </p>
                    )}
                  </div>
                </div>
                <div className="mb-2 row">
                  <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                    Telefon
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="tel"
                      name="phone"
                      value={data.phone}
                      onChange={handleChange}
                      placeholder="91+ 8354568464"
                      className="form-control"
                      id="inputPassword"
                    />
                    {error && data.phone.trim().length === 0 && (
                      <p style={{ color: 'red' }}>
                        <BiErrorCircle /> required
                      </p>
                    )}
                  </div>
                </div>
                <div className="mb-2 row">
                  <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                    Mail
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="email"
                      name="email"
                      value={data.email}
                      onChange={handleChange}
                      placeholder="jo@gmail.com"
                      className="form-control"
                      id="inputPassword"
                    />
                    {error && data.email.trim().length === 0 && (
                      <p style={{ color: 'red' }}>
                        <BiErrorCircle /> required
                      </p>
                    )}
                  </div>
                </div>
                <div className="mb-2 row">
                  <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                    Geschlecht
                  </label>
                  {error && data.gender.trim().length === 0 && (
                    <p style={{ color: 'red' }}>
                      <BiErrorCircle /> required
                    </p>
                  )}
                  <div className="col-sm-9">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      onChange={handleChange}
                      checked={data.gender === 'male'}
                    />{' '}
                    &nbsp; Männlich
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      onChange={handleChange}
                      checked={data.gender === 'female'}
                    />{' '}
                    &nbsp; Weiblich
                    <input
                      type="radio"
                      name="gender"
                      value="other"
                      onChange={handleChange}
                      checked={data.gender === 'other'}
                    />
                    &nbsp; Andere
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <button
                className="btn btn"
                onClick={handleClose}
                style={{ background: '#d04545', color: 'white' }}
              >
                {' '}
                Abbrechen
              </button>
              &nbsp; &nbsp;
              <button
                className="btn btn"
                onClick={saveData}
                style={{ background: '#0b5995', color: 'white' }}
              >
                Aktivität hinzufügen
              </button>
            </Modal.Footer>
          </Modal>{' '}
        </div>
      </div>
      <div>
        <Divider />

        <Table
          rowSelection={{
            type: selectionType,
            ...rowSelection,
          }}
          style={{ overflowX: 'auto' }}
          columns={columns}
          dataSource={dataa}
          pagination={false}
        />
        <Stack spacing={2}>
          <Pagination
            count={countPage}
            variant="outlined"
            shape="rounded"
            page={page}
            onChange={handlePageChange}
          />
        </Stack>
      </div>
      <ToastContainer />
    </div>
  )
}

export default React.memo(Contact)
