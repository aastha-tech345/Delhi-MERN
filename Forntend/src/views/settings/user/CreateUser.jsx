import React, { useEffect, useState } from 'react'
import { Table } from 'antd'
import Modal from 'react-bootstrap/Modal'
import { MdAdd, MdDelete } from 'react-icons/md'
import { GrEdit } from 'react-icons/gr'
import { AiFillSetting } from 'react-icons/ai'
import User from '../User'

const CreateUser = () => {
  const [showInviteUserModal, setShowInviteUserModal] = useState(false)
  const [show, setShow] = useState(false)
  const [activeTab, setActiveTab] = useState('nav-home')

  const handleTabClick = (tabId) => {
    setActiveTab(tabId)
  }
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleShowInviteUserModal = () => {
    setShowInviteUserModal(true)
  }

  const handleCloseInviteUserModal = () => {
    setShowInviteUserModal(false)
  }

  const columns = [
    {
      title: 'ID',
      dataIndex: 'employee_id',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'NAME',
      dataIndex: 'username',
    },
    {
      title: 'E-Mail Adresse',
      dataIndex: 'email',
    },
    {
      title: 'Super Verwalter',
      dataIndex: 'superVerwalter',
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

  return (
    <div style={{ background: 'white' }}>
      <User />
      <h4 className="m-3">Benutzer</h4>
      <div style={{ background: 'white' }}>
        <div className="topBtnBox mx-3">
          {/* <br /> */}
          <div className="mx-2 p-2">
            <button
              className="btn btn"
              onClick={handleShowInviteUserModal}
              style={{ background: '#0b5995', color: 'white' }}
            >
              <MdAdd />
              &nbsp; Benutzer erstellen
            </button>
            <Modal
              size="lg"
              show={showInviteUserModal}
              onHide={handleCloseInviteUserModal}
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title> Benutzer einladen</Modal.Title>
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
                          className={`nav-link ${
                            activeTab === 'nav-lokalisierung' ? 'active' : ''
                          }`}
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
                        <input className="form-control" placeholder="Name" type="text" />
                        <br />
                        <input
                          className="form-control"
                          placeholder="Straße mit Hausnummer"
                          type="text"
                        />
                        <br />
                        <input className="form-control" />

                        <br />
                        <input className="form-control" />
                        <br />
                        <select className="form-control" type="text" name="roll">
                          <option value="employee">Rolle</option>
                        </select>
                      </div>
                      <div className="col-sm-6">
                        <input className="form-control" />
                        <br />
                        <input className="form-control" />
                        <br />
                        <input className="form-control" placeholder="E-Mail Adresse" type="email" />
                        <br />

                        <input className="form-control" placeholder="Telefon" />
                        <br />
                        <input className="form-control" placeholder="Mobil" type="tel" />
                      </div>
                      <div className="row mb-2">
                        <div className="col-sm-12">
                          <div style={{ float: 'right' }}>
                            <button
                              className="btn"
                              onClick={handleClose}
                              style={{ background: '#d04545', color: 'white' }}
                            >
                              Abbrechen
                            </button>
                            &nbsp;&nbsp;
                            <button
                              className="btn mx-2"
                              style={{ background: '#0b5995', color: 'white' }}
                            >
                              Speichern
                            </button>
                          </div>
                        </div>
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
              <Modal.Footer></Modal.Footer>
            </Modal>
            &nbsp; &nbsp;
            <input
              type="search"
              id="form1"
              placeholder="Suche"
              className="form-control boxSearchBtn"
            />
            &nbsp; &nbsp;
            <button type="button" className="btn btn text-light" style={{ background: '#0b5995' }}>
              <AiFillSetting />
            </button>
          </div>
        </div>
        <div className="row p-3">
          <Table
            columns={columns}
            pagination={false}
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
          />
        </div>
      </div>
    </div>
  )
}

export default React.memo(CreateUser)
