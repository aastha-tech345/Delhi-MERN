import React, { useEffect, useState } from 'react'
import { Divider, Radio, Table } from 'antd'
import { GrFormAdd, GrAdd } from 'react-icons/gr'
import Modal from 'react-bootstrap/Modal'
import { MdAdd, MdDelete } from 'react-icons/md'
import { GrEdit } from 'react-icons/gr'
import { Switch } from 'antd'
import { AiOutlineMail, AiFillSetting } from 'react-icons/ai'

export default function CreateUser() {
  const [record, setRecord] = useState([])
  const [user_email, setUserEmail] = useState()
  const apiUrl = process.env.REACT_APP_API_URL
  const [user_name, setUserName] = useState()
  const [roll, setRoll] = useState()
  const [selectionType, setSelectionType] = useState('checkbox')
  const [showInviteUserModal, setShowInviteUserModal] = useState(false)
  const [show, setShow] = useState(false)
  const [activeTab, setActiveTab] = useState('nav-home')

  const handleTabClick = (tabId) => {
    setActiveTab(tabId)
  }
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const onChange = (checked) => {
    //console.log(`switch to ${checked}`)
  }
  const handleShowInviteUserModal = () => {
    setShowInviteUserModal(true)
  }

  const handleCloseInviteUserModal = () => {
    setShowInviteUserModal(false)
  }
  let value = localStorage.getItem('record')
  value = JSON.parse(value)
  let id = value.user._id
  //console.log(id)

  const saveData = async () => {
    try {
      if (!user_email || !user_name || !roll) {
        return
      }

      const data = {
        user_email,
        user_name,
        roll,
      }

      const response = await fetch(`${apiUrl}/user/register/record/adduser/${id}`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()
      //console.log(result)
      setUserEmail('')
      setUserName('')
      setRoll('')
      handleCloseInviteUserModal()
      // window.location.reload()
    } catch (error) {
      //console.error('Error:', error)
      alert('An error occurred. Please try again later.')
    }
  }

  const getDetails = async () => {
    try {
      const result = await fetch(`${apiUrl}/user/register/record/${id}`)
      const data = await result.json()
      setRecord(data)
      getDetails()
    } catch (error) {
      //console.error('Error fetching customer record:', error)
    }
  }

  let creation = record.user_creation
  let data
  if (Array.isArray(creation)) {
    data = creation.map((item) => {
      console.log(item.users)
      return item.users
    })

    console.log(data)
  } else {
    console.log('record.user_creation is not an array or is undefined')
  }
  console.log(data)

  useEffect(() => {
    getDetails()
    handleTabClick('nav-benutzer')
  }, [])

  const columns = [
    {
      title: 'ID',
      dataIndex: '_id',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'NAME',
      dataIndex: 'user_name',
    },
    {
      title: 'E-Mail Adresse',
      dataIndex: 'user_email', // Change 'email address' to 'emailAddress'
    },
    {
      title: 'Super Verwalter',
      dataIndex: 'superVerwalter', // Change 'super verwalter' to 'superVerwalter'
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

  // const data = [
  //   {
  //     key: '1',
  //     name: 'John Brown',
  //     age: 32,
  //     emailAddress: 'john@example.com', // Adjust to a valid email address
  //     superVerwalter: 'Yes',
  //     action: 'Edit', // Provide appropriate action value
  //   },
  //   {
  //     key: '2',
  //     name: 'Jim Green',
  //     age: 42,
  //     emailAddress: 'jim@example.com', // Adjust to a valid email address
  //     superVerwalter: 'No',
  //     action: 'Delete', // Provide appropriate action value
  //   },
  //   {
  //     key: '3',
  //     name: 'Joe Black',
  //     age: 32,
  //     emailAddress: 'joe@example.com', // Adjust to a valid email address
  //     superVerwalter: 'Yes',
  //     action: 'View', // Provide appropriate action value
  //   },
  //   {
  //     key: '4',
  //     name: 'Disabled User',
  //     age: 99,
  //     emailAddress: 'disabled@example.com', // Adjust to a valid email address
  //     superVerwalter: 'No',
  //     action: 'Activate', // Provide appropriate action value
  //   },
  // ]

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      //console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      name: record.name,
    }),
  }
  return (
    <>
      <div
        className="row  m-4 p-4"
        style={{
          border: '1px solid lightgray',
          borderRadius: '5px 5px 5px 5px ',
        }}
      >
        <div className="col-sm-5">
          <button
            className="btn btn"
            onClick={handleShowInviteUserModal}
            style={{ background: '#0b5995', color: 'white' }}
          >
            <MdAdd />
            &nbsp; Benutzer erstellen
          </button>
          <Modal size="lg" show={showInviteUserModal} onHide={handleCloseInviteUserModal} centered>
            <Modal.Header closeButton>
              <Modal.Title>
                Benutzer einladen
                <br />
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="row" style={{ background: 'white' }}>
                <div className="col-sm-12">
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <button
                        className={`nav-link ${activeTab === 'nav-benutzer' ? 'active' : ''}`}
                        id="nav-benutzer-tab"
                        data-bs-toggle="tab"
                        role="tab"
                        aria-selected={activeTab === 'nav-benutzer'}
                        onClick={() => handleTabClick('nav-benutzer')}
                        style={{ marginRight: '10px', marginLeft: '20px' }}
                      >
                        Benutzer
                      </button>
                      <button
                        className={`nav-link ${activeTab === 'nav-rollen' ? 'active' : ''}`}
                        id="nav-rollen-tab"
                        data-bs-toggle="tab"
                        role="tab"
                        aria-controls="nav-rollen"
                        aria-selected={activeTab === 'nav-rollen'}
                        onClick={() => handleTabClick('nav-rollen')}
                        style={{ marginRight: '10px' }}
                      >
                        Passwort
                      </button>
                      <button
                        className={`nav-link ${activeTab === 'nav-lokalisierung' ? 'active' : ''}`}
                        id="nav-lokalisierung-tab"
                        data-bs-toggle="tab"
                        role="tab"
                        aria-controls="nav-lokalisierung"
                        aria-selected={activeTab === 'nav-lokalisierung'}
                        onClick={() => handleTabClick('nav-lokalisierung')}
                        style={{ marginRight: '10px' }}
                      >
                        Lokalisierung
                      </button>
                      <button
                        className={`nav-link ${
                          activeTab === 'nav-benachrichtigungen' ? 'active' : ''
                        }`}
                        id="nav-benachrichtigungen-tab"
                        data-bs-toggle="tab"
                        role="tab"
                        aria-controls="nav-benachrichtigungen"
                        aria-selected={activeTab === 'nav-benachrichtigungen'}
                        onClick={() => handleTabClick('nav-benachrichtigungen')}
                        style={{ marginRight: '10px' }}
                      >
                        Benachrichtigungen
                      </button>
                      <button
                        className={`nav-link ${
                          activeTab === 'nav-fortgeschrittene' ? 'active' : ''
                        }`}
                        id="nav-fortgeschrittene-tab"
                        data-bs-toggle="tab"
                        role="tab"
                        aria-controls="nav-fortgeschrittene"
                        aria-selected={activeTab === 'nav-fortgeschrittene'}
                        onClick={() => handleTabClick('nav-fortgeschrittene')}
                        style={{ marginRight: '10px' }}
                      >
                        Fortgeschrittene
                      </button>
                    </div>
                  </nav>
                </div>
              </div>
              <br />
              <div className="tab-content" id="nav-tabContent">
                <div
                  className={`tab-pane fade ${activeTab === 'nav-benutzer' ? 'show active' : ''}`}
                  id="nav-benutzer"
                  role="tabpanel"
                  aria-labelledby="nav-benutzer-tab"
                >
                  <div className="row">
                    <div className="col-sm-6">
                      <label>User Name: </label>
                      <input
                        className="form-control"
                        type="text"
                        name="user_name"
                        value={user_name}
                        onChange={(e) => {
                          setUserName(e.target.value)
                        }}
                      />

                      <br />
                      <br />
                      <label>Rollen:</label>
                      <select
                        className="form-control"
                        type="text"
                        name="roll"
                        value={roll}
                        onChange={(e) => {
                          setRoll(e.target.value)
                        }}
                      >
                        <option value="">--select--</option>
                        <option value="employee">ROllen</option>
                      </select>
                    </div>
                    <div className="col-sm-6">
                      <label>User Email:</label>
                      <input
                        className="form-control"
                        type="email"
                        name="user_email"
                        value={user_email}
                        onChange={(e) => {
                          setUserEmail(e.target.value)
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className={`tab-pane fade ${activeTab === 'nav-rollen' ? 'show active' : ''}`}
                  id="nav-rollen"
                  role="tabpanel"
                  aria-labelledby="nav-rollen-tab"
                ></div>
                <div
                  className={`tab-pane fade ${
                    activeTab === 'nav-mannschaften' ? 'show active' : ''
                  }`}
                  id="nav-mannschaften"
                  role="tabpanel"
                  aria-labelledby="nav-mannschaften-tab"
                ></div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <button
                type="button"
                className="btn btn"
                style={{ background: '#d04545', color: 'white' }}
                onClick={handleClose}
              >
                Abbrechen
              </button>
              <button
                type="button"
                onClick={saveData}
                style={{ background: '#0b5995', color: 'white' }}
                className="btn btn"
              >
                Einladung versenden
              </button>
            </Modal.Footer>
          </Modal>
          &nbsp; &nbsp;
          <button
            className="btn btn"
            style={{ background: '#0b5995', color: 'white' }}
            onClick={handleShow}
          >
            <AiOutlineMail />
            &nbsp; Benutzer einladen
          </button>
          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>
                Benutzer einladen
                <br />
                <span style={{ fontSize: '13px', lineBreak: 'none' }}>
                  Eine E-Mail mit einem Einladungslink wird an den Benutzer geschickt, um ein Konto
                  zu erstellen. Der Link ist 3 Tage lang gültig und wird nach der Erstellung des
                  Kontos ungültig.
                </span>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="row p-3">
                <div className="col-sm-6">
                  <input type="email" className="form-control" placeholder="E-Mail Adresse" />

                  <br />
                  <select className="form-control">
                    <option value="">Mannschaften</option>
                  </select>
                </div>
                <div className="col-sm-6">
                  <select className="form-control">
                    <option value="">Mannschaften</option>
                  </select>
                </div>
              </div>
              <div className="row m-2">
                <p>Super Verwalter</p>
                <div className="col-sm-10">
                  <p>
                    Wenn Sie den Super-Admin-Zugang für den Benutzer aktivieren, erhalten Sie vollen
                    Zugriff auf alle Funktionen ohne jegliche Einschränkungen.
                  </p>
                </div>
                <div className="col-sm-2">
                  <Switch defaultChecked onChange={onChange} />
                </div>
              </div>
              <div className="row m-2">
                <p>Super Verwalter</p>
                <div className="col-sm-10">
                  <p>
                    Wenn Sie den Super-Admin-Zugang für den Benutzer aktivieren, erhalten Sie vollen
                    Zugriff auf alle Funktionen ohne jegliche Einschränkungen.
                  </p>
                </div>
                <div className="col-sm-2">
                  <Switch defaultChecked onChange={onChange} />
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <button
                type="button"
                className="btn btn"
                style={{ background: '#d04545', color: 'white' }}
                onClick={handleClose}
              >
                Abbrechen
              </button>
              <button
                type="button"
                style={{ background: '#0b5995', color: 'white' }}
                className="btn btn"
              >
                Einladung versenden
              </button>
            </Modal.Footer>
          </Modal>
        </div>
        <div className="col-sm-3">
          <input type="search" id="form1" placeholder="Suche" className="form-control" />
        </div>
        <div className="col-sm-4">
          <button type="button" className="btn btn text-light" style={{ background: '#0b5995' }}>
            <AiFillSetting />
          </button>
        </div>
      </div>
      <div className="row card p-4 m-4">
        {/* <Radio.Group
          onChange={({ target: { value } }) => {
            setSelectionType(value)
          }}
          value={selectionType}
        >
          <Radio value="checkbox">Checkbox</Radio>
          <Radio value="radio">radio</Radio>
        </Radio.Group> */}

        {/* <Divider /> */}

        <Table
          rowSelection={{
            type: selectionType,
            ...rowSelection,
          }}
          style={{ overflowX: 'auto' }}
          columns={columns}
          dataSource={data}
        />
      </div>
    </>
  )
}
