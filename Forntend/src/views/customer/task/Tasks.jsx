import React, { useState } from 'react'
import { Button, Table } from 'antd'
import { BiFilterAlt, BiErrorCircle } from 'react-icons/bi'
import { MdAdd, MdDelete } from 'react-icons/md'
import { GrEdit } from 'react-icons/gr'
import Modal from 'react-bootstrap/Modal'
const columns = [
  {
    title: 'TITLE',
    dataIndex: 'name',
  },
  {
    title: 'Datum des Beginns',
    dataIndex: 'start_date',
  },
  {
    title: 'Deadline',
    dataIndex: 'deadline',
  },
  {
    title: 'Zugewiesen an',
    dataIndex: 'assigned_to',
  },
  {
    title: 'Mitarbeiter',
    dataIndex: 'employee',
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
  {
    title: 'AKTION',
    dataIndex: 'action',
    render: () => (
      <>
        <GrEdit />
        &nbsp; Bearbeiten &nbsp;&nbsp;&nbsp;
        <MdDelete />
        Löschen
      </>
    ),
  },
]

const data = []
for (let i = 0; i < 46; i++) {
  data.push({
    key: i.toString(),
    name: `Edward King ${i}`,
    start_date: '2023-01-01',
    deadline: '2023-01-31',
    assigned_to: `User ${i}`,
    employee: `Employee ${i}`,
    status: 'In Progress',
    action: 'View',
  })
}

const Tasks = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [show, setShow] = useState(false)
  // eslint-disable-next-line no-undef
  const handleClose = () => setShow(false)
  // eslint-disable-next-line no-undef
  const handleShow = () => setShow(true)
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [recurring, setRecurring] = useState()
  const [phone, setPhone] = useState()
  const [assigned_to, setAssignedTo] = useState()
  const [employee, setEmployee] = useState()
  const [statu, setStatu] = useState()
  const [priority, setPriority] = useState()
  const [start_date, setStartDate] = useState()
  const [deadline, setDeadline] = useState()

  const start = () => {
    setLoading(true)
    setTimeout(() => {
      setSelectedRowKeys([])
      setLoading(false)
    }, 1000)
  }
  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys)
    setSelectedRowKeys(newSelectedRowKeys)
  }
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  }
  const hasSelected = selectedRowKeys.length > 0

  const saveData = () => {
    let data = {
      title,
      description,
      deadline,
      statu,
      start_date,
      assigned_to,
      recurring,
      priority,
      phone,
      employee,
    }
    console.log(data)
  }
  return (
    <div>
      <div className="row m-4 p-4  shadow">
        <div className="col-sm-3">
          <input
            type="search"
            id="form1"
            placeholder="Ihre Suche eingeben"
            className="form-control"
          />
        </div>
        <div className="col-sm-5">
          <button className="btn btn text-light" style={{ background: '#0b5995' }}>
            {/* <i className="fas fa-search">Filter</i> */}
            <BiFilterAlt />
            &nbsp; Filter
          </button>
        </div>
        <div className="col-sm-3">
          <button
            className="btn btn"
            style={{ background: '#0b5995', color: 'white' }}
            onClick={handleShow}
          >
            <MdAdd />
            &nbsp;Neuen Kunden anlegen
            {/* Create new customer */}
          </button>
          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Aufgabe hinzufügen</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="row p-3">
                <div className="mb-2 row">
                  <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                    Titel
                    {/* first name */}
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => {
                        setTitle(e.target.value)
                      }}
                      placeholder="jo"
                      className="form-control"
                      id="inputPassword"
                    />
                  </div>
                </div>
                <div className="mb-2 row">
                  <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                    Description
                    {/* second name */}
                  </label>
                  <div className="col-sm-9">
                    <textarea
                      name=""
                      value={description}
                      onChange={(e) => {
                        setDescription(e.target.value)
                      }}
                      className="form-control"
                    ></textarea>
                  </div>
                </div>
                <div className="mb-2 row">
                  <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                    Punkte
                    {/* phone */}
                  </label>
                  <div className="col-sm-9">
                    <select
                      className="form-control"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value)
                      }}
                    >
                      <option value="">--select--</option>
                      <option value="Punkte">Punkte</option>
                    </select>
                  </div>
                </div>
                <div className="mb-2 row">
                  <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                    Zuordnen zu
                    {/* phone */}
                  </label>
                  <div className="col-sm-9">
                    <select
                      className="form-control"
                      value={assigned_to}
                      onChange={(e) => {
                        setAssignedTo(e.target.value)
                      }}
                    >
                      <option value="">--select--</option>
                      <option value="Russell Crowe">Russell Crowe</option>
                    </select>
                  </div>
                </div>
                <div className="mb-2 row">
                  <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                    Mitarbeiter
                    {/* first name */}
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      value={employee}
                      onChange={(e) => {
                        setEmployee(e.target.value)
                      }}
                      placeholder="jo"
                      className="form-control"
                      id="inputPassword"
                    />
                  </div>
                </div>
                <div className="mb-2 row">
                  <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                    Status
                    {/* phone */}
                  </label>
                  <div className="col-sm-9">
                    <select
                      className="form-control"
                      value={statu}
                      onChange={(e) => {
                        setStatu(e.target.value)
                      }}
                    >
                      <option value="">--select--</option>
                      <option value="Zu tun">Zu tun</option>
                    </select>
                  </div>
                </div>
                <div className="mb-2 row">
                  <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                    Priorität
                    {/* phone */}
                  </label>
                  <div className="col-sm-9">
                    <select
                      className="form-control"
                      value={priority}
                      onChange={(e) => {
                        setPriority(e.target.value)
                      }}
                    >
                      <option value="">--select--</option>
                      <option value="priority">priority</option>
                    </select>
                  </div>
                </div>
                <div className="mb-2 row">
                  <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                    Start date
                    {/* first name */}
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="date"
                      value={start_date}
                      onChange={(e) => {
                        setStartDate(e.target.value)
                      }}
                      placeholder="jo"
                      className="form-control"
                      id="inputPassword"
                    />
                  </div>
                </div>
                <div className="mb-2 row">
                  <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                    Deadline
                    {/* first name */}
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="date"
                      value={deadline}
                      onChange={(e) => {
                        setDeadline(e.target.value)
                      }}
                      placeholder="jo"
                      className="form-control"
                      id="inputPassword"
                    />
                  </div>
                </div>
                <div className="mb-2 row">
                  <div className="col-sm-9">
                    Wiederkehrende &nbsp;
                    <input
                      type="checkbox"
                      name="gender"
                      value={recurring}
                      onChange={(e) => {
                        setRecurring(e.target.value)
                      }}
                    />{' '}
                    {/* other */}
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
                {/* Add activity */}
              </button>
            </Modal.Footer>
          </Modal>{' '}
        </div>
      </div>

      <div>
        {/* <div
          style={{
            marginBottom: 16,
          }}
        >
          <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
            Reload
          </Button>
          <span
            style={{
              marginLeft: 8,
            }}
          >
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
        </div> */}
        <Table
          rowSelection={rowSelection}
          style={{ overflowX: 'auto' }}
          columns={columns}
          dataSource={data}
        />
      </div>
    </div>
  )
}
export default React.memo(Tasks)
