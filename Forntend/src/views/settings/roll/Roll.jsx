import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { MdDelete, MdAdd } from 'react-icons/md'
import { LuFilePlus } from 'react-icons/lu'
import { IoMdAdd } from 'react-icons/io'
import { DownOutlined } from '@ant-design/icons'
import { Dropdown, Space, Typography } from 'antd'
export default function Roll() {
  const [show, setShow] = useState(false)
  // eslint-disable-next-line no-undef
  const handleClose = () => setShow(false)
  // eslint-disable-next-line no-undef
  const handleShow = () => setShow(true)
  const items = [
    {
      key: '1',
      label: 'Item 1',
    },
    {
      key: '2',
      label: 'Item 2',
    },
    {
      key: '3',
      label: 'Item 3',
    },
  ]
  return (
    <div>
      <div className="row ">
        <center className="mx-auto">
          <LuFilePlus style={{ fontSize: '50px', marginTop: '100px' }} />
          <p>Keine Rollen</p>
          <p>Beginnen Sie mit der Erstellung einer neuen Rolle.</p>
          {/* <button className="btn btn mb-3" style={{ background: '#0b5995', color: 'white' }}>
            <IoMdAdd />
            Rolle erstellen
          </button> */}
          <div className="col-sm-3">
            <button
              className="btn btn mb-5"
              style={{ background: '#0b5995', color: 'white' }}
              onClick={handleShow}
            >
              <MdAdd /> Neuen Kunden anlegen
            </button>
            <Modal show={show} onHide={handleClose} centered size="large">
              <Modal.Header closeButton>
                <Modal.Title>Rolle erstellen</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <input type="text" placeholder="Name" className="form-control" />
                <h5 className="mt-2 fw-bold">Berechtigungen</h5>
                <h5 className="mt-3 fw-bold">Textbausteine</h5>
                <div className="row">
                  <div className="col-sm-3 mt-2">Anzeigen Bearbeiten Löschen Exportieren</div>
                  <div className="col-sm-5"></div>
                  {/*dropdown*/}
                  <div className="col-sm-4 mt-2">
                    <Dropdown
                      menu={{
                        items,
                        selectable: true,
                        defaultSelectedKeys: ['3'],
                      }}
                    >
                      <Typography.Link>
                        <Space>
                          Nur im Besitz
                          <DownOutlined />
                        </Space>
                      </Typography.Link>
                    </Dropdown>
                    <Dropdown
                      menu={{
                        items,
                        selectable: true,
                        defaultSelectedKeys: ['3'],
                      }}
                    >
                      <Typography.Link>
                        <Space>
                          Nur im Besitz
                          <DownOutlined />
                        </Space>
                      </Typography.Link>
                    </Dropdown>
                    <Dropdown
                      menu={{
                        items,
                        selectable: true,
                        defaultSelectedKeys: ['3'],
                      }}
                    >
                      <Typography.Link>
                        <Space>
                          Nur im Besitz
                          <DownOutlined />
                        </Space>
                      </Typography.Link>
                    </Dropdown>
                    <Dropdown
                      menu={{
                        items,
                        selectable: true,
                        defaultSelectedKeys: ['3'],
                      }}
                    >
                      <Typography.Link>
                        <Space style={{ marginLeft: '15px' }}>
                          Widerrufen
                          <DownOutlined />
                        </Space>
                      </Typography.Link>
                    </Dropdown>
                  </div>
                </div>
                <h5 className="mt-3 fw-bold">E-mail Vorlage</h5>
                <div className="row">
                  <div className="col-sm-3 mt-2">Anzeigen Bearbeiten Löschen Exportieren</div>
                  <div className="col-sm-5"></div>
                  {/*dropdown*/}
                  <div className="col-sm-4 mt-2">
                    <Dropdown
                      menu={{
                        items,
                        selectable: true,
                        defaultSelectedKeys: ['3'],
                      }}
                    >
                      <Typography.Link>
                        <Space>
                          Nur im Besitz
                          <DownOutlined />
                        </Space>
                      </Typography.Link>
                    </Dropdown>
                    <Dropdown
                      menu={{
                        items,
                        selectable: true,
                        defaultSelectedKeys: ['3'],
                      }}
                    >
                      <Typography.Link>
                        <Space>
                          Nur im Besitz
                          <DownOutlined />
                        </Space>
                      </Typography.Link>
                    </Dropdown>
                    <Dropdown
                      menu={{
                        items,
                        selectable: true,
                        defaultSelectedKeys: ['3'],
                      }}
                    >
                      <Typography.Link>
                        <Space>
                          Nur im Besitz
                          <DownOutlined />
                        </Space>
                      </Typography.Link>
                    </Dropdown>
                    <Dropdown
                      menu={{
                        items,
                        selectable: true,
                        defaultSelectedKeys: ['3'],
                      }}
                    >
                      <Typography.Link>
                        <Space style={{ marginLeft: '15px' }}>
                          Widerrufen
                          <DownOutlined />
                        </Space>
                      </Typography.Link>
                    </Dropdown>
                  </div>
                </div>
                <h5 className="mt-3 fw-bold">Benutzer erstellen</h5>
                <div className="row">
                  <div className="col-sm-3 mt-2">Anzeigen Bearbeiten Löschen Exportieren</div>
                  <div className="col-sm-5"></div>
                  {/*dropdown*/}
                  <div className="col-sm-4 mt-2">
                    <Dropdown
                      menu={{
                        items,
                        selectable: true,
                        defaultSelectedKeys: ['3'],
                      }}
                    >
                      <Typography.Link>
                        <Space>
                          Nur im Besitz
                          <DownOutlined />
                        </Space>
                      </Typography.Link>
                    </Dropdown>
                    <Dropdown
                      menu={{
                        items,
                        selectable: true,
                        defaultSelectedKeys: ['3'],
                      }}
                    >
                      <Typography.Link>
                        <Space>
                          Nur im Besitz
                          <DownOutlined />
                        </Space>
                      </Typography.Link>
                    </Dropdown>
                    <Dropdown
                      menu={{
                        items,
                        selectable: true,
                        defaultSelectedKeys: ['3'],
                      }}
                    >
                      <Typography.Link>
                        <Space>
                          Nur im Besitz
                          <DownOutlined />
                        </Space>
                      </Typography.Link>
                    </Dropdown>
                    <Dropdown
                      menu={{
                        items,
                        selectable: true,
                        defaultSelectedKeys: ['3'],
                      }}
                    >
                      <Typography.Link>
                        <Space style={{ marginLeft: '15px' }}>
                          Widerrufen
                          <DownOutlined />
                        </Space>
                      </Typography.Link>
                    </Dropdown>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <button
                  className="btn btn"
                  onClick={handleClose}
                  style={{ background: '#d04545', color: 'white' }}
                >
                  Abbrechen
                </button>
                <button className="btn btn" style={{ background: '#0b5995', color: 'white' }}>
                  Einreichen
                </button>
              </Modal.Footer>
            </Modal>
          </div>
        </center>
      </div>
    </div>
  )
}
