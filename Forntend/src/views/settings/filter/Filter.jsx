import React, { useEffect, useRef, useState } from 'react'
import { Divider, Table } from 'antd'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { GrEdit } from 'react-icons/gr'
import { MdDelete, MdAdd } from 'react-icons/md'
import { BiFilterAlt } from 'react-icons/bi'
import { AiOutlineMail } from 'react-icons/ai'
import { BiErrorCircle } from 'react-icons/bi'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

const columns = [
  {
    title: 'NACHNAME',
    dataIndex: 'fname',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'VORNAMEN',
    dataIndex: 'lname',
  },
  {
    title: 'GEBURTSDATUM',
    dataIndex: 'dob',
  },
  {
    title: 'PLZ',
    dataIndex: 'plz',
  },
  {
    title: 'TELEFON',
    dataIndex: 'telephone',
  },
  {
    title: 'MOBIL',
    dataIndex: 'mobil',
  },
  {
    title: 'STATUS',
    dataIndex: 'status',
  },
  {
    title: 'ID KLIENTINNEN',
    dataIndex: 'client_id',
  },
  {
    title: 'VERSAND NACHSTE MARKE',
    dataIndex: 'next_shipping',
  },
  {
    title: 'DAUERSPENDERINNEN',
    dataIndex: 'permanent_donors',
  },
]

const data = [
  {
    key: '1',
    name: 'Russell Crowe',
    email: 'russellcrowe@left4code.com',
    status: 'done',
    phone: '+3 809 291 4525',
    action: 'active',
  },
  {
    key: '2',
    name: 'Jim Green',
    email: 'user@gmail.com',
    status: 'done',
    phone: '2934289354',
    action: 'active',
  },
  {
    key: '3',
    name: 'Joe Black',
    email: 'user@gmail.com',
    status: 'done',
    phone: '2934289354',
    action: 'active',
  },
  {
    key: '4',
    name: 'Disabled User',
    email: 'user@gmail.com',
    status: 'done',
    phone: '2934289354',
    action: 'active',
  },
]

const Filter = () => {
  const [search, setSearch] = useState('')
  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)
  const [filterRecord, setFilterRecord] = useState([])
  const apiUrl = process.env.REACT_APP_API_URL
  const [page, setPage] = useState(1)
  const [countPage, setCountPage] = useState(0)
  const searchInputRef = useRef()
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [selectionType] = useState('checkbox')

  const getDetails = async () => {
    try {
      const result = await fetch(`${apiUrl}/filter/get_filter?page=${page}`)
      const data = await result.json()
      setCountPage(data?.pageCount)
      const activeRecords = data?.result?.filter((record) => record.status === 'active')
      setFilterRecord(activeRecords)
    } catch (error) {
      console.error('Error fetching customer record:', error)
    }
  }
  const handlePageChange = (event, value) => {
    setPage(value)
  }
  // console.log('aastha', filterRecord)
  useEffect(() => {
    getDetails()
  }, [page])

  const searchHandle = async () => {
    try {
      if (search === '') {
        return getDetails()
      }

      const response = await fetch(`${apiUrl}/filter/search/${search}`)
      const data = await response.json()

      const activeRecords = data.filter((record) => record.status === 'active')

      if (activeRecords.length > 0) {
        setFilterRecord(activeRecords)
      } else {
        getDetails()
        setFilterRecord(data)
      }
    } catch (error) {
      console.error('Error searching data:', error.message)
    }
  }

  return (
    <div style={{ background: 'white', borderRadius: '5px' }}>
      <h4 className="px-3 pt-3">Filter</h4>
      <hr />
      <div className="m-2">
        <div
          className="row m-3 p-3"
          style={{ border: '1px solid lightgray', borderRadius: '5px ' }}
        >
          <div className="col-sm-3">
            <input
              ref={searchInputRef}
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              id="form1"
              placeholder="Ihre Suche eingeben"
              className="form-control"
            />
          </div>
          <div className="col-sm-3">
            <button
              className="btn btn text-light"
              onClick={searchHandle}
              style={{ background: '#0b5995' }}
            >
              <BiFilterAlt />
              &nbsp; Filter
            </button>
          </div>

          <div className="col-sm-6 text-right">
            {/* <button
              className="btn btn"
              style={{ background: '#0b5995', color: 'white', marginLeft: '30px' }}
            >
              <AiOutlineMail />
              &nbsp; Einladung versenden
            </button>{' '}
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
                        value={fname}
                        onChange={(e) => {
                          setFname(e.target.value)
                        }}
                        placeholder="jo"
                        className="form-control"
                        id="inputPassword"
                      />
                      {error && fname.trim().length === 0 && (
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
                        value={lname}
                        onChange={(e) => {
                          setLname(e.target.value)
                        }}
                        placeholder="verma"
                        className="form-control"
                        id="inputPassword"
                      />
                      {error && lname.trim().length === 0 && (
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
                        type="number"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value)
                        }}
                        placeholder="91+ 8354568464"
                        className="form-control"
                        id="inputPassword"
                      />
                      {error && phone.trim().length === 0 && (
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
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value)
                        }}
                        placeholder="jo@gmail.com"
                        className="form-control"
                        id="inputPassword"
                      />
                      {error && email.trim().length === 0 && (
                        <p style={{ color: 'red' }}>
                          <BiErrorCircle /> required
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mb-2 row">
                    <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                      Skype
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        value={skype}
                        onChange={(e) => {
                          setSkype(e.target.value)
                        }}
                        placeholder="Skype"
                        className="form-control"
                        id="inputPassword"
                      />
                      {error && skype.trim().length === 0 && (
                        <p style={{ color: 'red' }}>
                          <BiErrorCircle /> Required
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mb-2 row">
                    <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                      Geschlecht
                    </label>
                    {error && gender.trim().length === 0 && (
                      <p style={{ color: 'red' }}>
                        <BiErrorCircle /> required
                      </p>
                    )}
                    <div className="col-sm-9">
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        onChange={(e) => {
                          setGender(e.target.value)
                        }}
                      />{' '}
                      &nbsp; Männlich
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        onChange={(e) => {
                          setGender(e.target.value)
                        }}
                      />{' '}
                      &nbsp; Weiblich
                      <input
                        type="radio"
                        name="gender"
                        value="other"
                        onChange={(e) => {
                          setGender(e.target.value)
                        }}
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
            </Modal>{' '} */}
          </div>
        </div>
        <div className="m-3">
          <Table
            rowKey={(record) => record._id}
            rowSelection={{
              type: 'checkbox',
              onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
              },
              getCheckboxProps: (record) => ({
                disabled: record.name === 'Disabled User',
                name: record.name,
              }),
            }}
            style={{ overflowX: 'auto' }}
            columns={columns}
            dataSource={filterRecord}
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
          <br />
        </div>
      </div>
    </div>
  )
}

export default React.memo(Filter)
