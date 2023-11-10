import React, { useMemo, useRef, useState } from 'react'
import JoditEditor from 'jodit-react'
import { Divider, Radio, Table } from 'antd'
import Modal from 'react-bootstrap/Modal'
import { GrEdit } from 'react-icons/gr'
import { MdDelete, MdAdd } from 'react-icons/md'

export default function PrintTemplate() {
  const [selectionType, setSelectionType] = useState('checkbox')
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedRecord, setSelectedRecord] = useState(null)
  const [show, setShow] = useState(false)
  // eslint-disable-next-line no-undef
  const handleClose = () => setShow(false)
  // eslint-disable-next-line no-undef
  const handleShow = () => setShow(true)
  // Move the function definition above its usage
  const handleDelete = (record) => {
    setIsModalVisible(true)
    setSelectedRecord(record)
  }

  const handleDeleteConfirm = () => {
    setIsModalVisible(false)
  }

  const handleDeleteCancel = () => {
    setIsModalVisible(false)
    setSelectedRecord(null)
  }
  const columns = [
    {
      title: 'Name des Kunden',
      dataIndex: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'AKTION',
      dataIndex: 'action',
      render: (_, record) => (
        <>
          <GrEdit />
          &nbsp; Bearbeiten &nbsp;&nbsp;&nbsp;
          <MdDelete onClick={() => handleDelete(record)} />
          Löschen
        </>
      ),
    },
  ]
  const data = [
    {
      key: '1',
      name: 'Hinterlegungsvertrag',
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Gesundheitsvollmacht',
    },
    {
      key: '3',
      name: 'Vorsorgevollmacht',
    },
    {
      key: '4',
      name: 'Betreuungsverfügung',
    },
    {
      key: '5',
      name: 'Digitales Erbe',
    },
    {
      key: '6',
      name: 'SPV-StandardPatientenVerfügung',
    },
    {
      key: '7',
      name: 'Notfallpass',
    },
  ]
  const editor = useRef(null)
  const [content, setContent] = useState('')
  const placeholder = `Hallo {{ activity.user }}

  Ihre {{ activity.title }} Aktivität ist fällig am {{ activity.due_date }}
  
  {{#action_button}}Aktivität ansehen{{/action_button}}`

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: placeholder,
    }),
    [placeholder],
  )
  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      // Column configuration not to be checked
      name: record.name,
    }),
  }
  return (
    <>
      <div className="row">
        <div
          className="col-sm-12 ms-3"
          style={{
            // background: 'white',
            // Height: '640px',
            // width: '1210px',
            borderRadius: '5px 5px 5px 5px ',
          }}
        >
          <h3 className="ms-1 mt-1">Druckvorlage</h3>
          {/* <hr /> */}
          <div className="row serchBox text-right"
            // style={{
            //   border: '1px solid #ebedef',
            //   height: '55px',
            //   borderRadius: '5px 5px 5px 5px ',
            // }}
          >
            <div className="col-sm-12">
            <button
              className="btn btn ms-3 mt-2"
              style={{ background: '#0b5995', color: 'white' }}
              onClick={handleShow}
            >
              <MdAdd /> Neue Druckvorlage anlegen
            </button>
            </div>
            <Modal show={show} onHide={handleClose} centered>
              <Modal.Title className="mt-3 mx-4">Neue E-Mail Vorlage anlegen</Modal.Title>
              <div className="row px-4">
                <div className="col-sm-12">
                  <label>Thema</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="{{ activity.title }} Aktivität ist fällig am {{ activity.due_date }}"
                  />
                </div>
              </div>
              <div className="row px-4">
                <label>Nachricht</label>
                <div className="col-sm-12">
                  <JoditEditor
                    ref={editor}
                    value={content}
                    config={config}
                    tabIndex={1}
                    onBlur={(newContent) => setContent(newContent)}
                  />
                </div>
              </div>
              <Modal.Body></Modal.Body>
              <Modal.Footer>
                <button
                  className="btn btn"
                  onClick={handleClose}
                  style={{ background: '#d04545', color: 'white' }}
                >
                  Abbrechen
                </button>
                <button className="btn btn" style={{ background: '#0b5995', color: 'white' }}>
                  einreichen
                </button>
              </Modal.Footer>
            </Modal>
          </div>
          <div>
            <Divider />

            <Table
              rowSelection={{
                type: selectionType,
                ...rowSelection,
              }}
              columns={columns}
              dataSource={data}
            />
            <Modal show={isModalVisible} onHide={handleDeleteCancel} centered size="sm">
              <Modal.Title>
                <svg
                  style={{ marginLeft: '130px', marginTop: '45px' }}
                  width="44"
                  height="53"
                  viewBox="0 0 44 53"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.9193 0C19.9914 0 24.0636 0 28.1357 0C28.1978 0.0248302 28.2599 0.0620762 28.322 0.0744913C30.5194 0.397284 32.2948 2.30921 32.3941 4.50668C32.4313 5.13985 32.4562 5.77302 32.481 6.44343C32.7169 6.44343 32.928 6.44343 33.1266 6.44343C35.1751 6.46826 37.236 6.4186 39.2845 6.51792C41.4199 6.62966 43.158 8.35535 43.4808 10.5032C43.7912 12.6634 42.5745 14.8236 40.5632 15.5561C40.1287 15.7175 40.017 15.9286 40.017 16.3631C40.0294 26.1586 40.0294 35.9541 40.0294 45.7496C40.0294 46.271 40.0046 46.78 39.9425 47.3015C39.6569 50.008 37.7202 52.2179 35.0882 52.851C34.9144 52.8883 34.7281 52.9503 34.5543 53C26.199 53 17.856 53 9.50069 53C9.40137 52.9628 9.31446 52.9131 9.21514 52.9007C8.03571 52.6896 6.99284 52.1806 6.11137 51.3488C4.59673 49.9211 4.0008 48.1333 4.0008 46.0848C4.0008 36.1651 4.00081 26.2455 4.01322 16.3258C4.01322 15.8913 3.88907 15.7051 3.47937 15.5685C2.62273 15.283 1.9399 14.7243 1.41847 13.9918C0.363183 12.4896 0.164543 10.8632 0.946693 9.19958C1.67918 7.62286 2.95794 6.61724 4.70846 6.51792C6.76937 6.40618 8.84269 6.45585 10.916 6.43102C11.1146 6.43102 11.3133 6.43102 11.574 6.43102C11.574 5.922 11.5616 5.48747 11.574 5.04053C11.5988 3.35207 12.1948 1.91192 13.6101 0.955961C14.3053 0.521433 15.1495 0.310377 15.9193 0ZM37.5464 15.9286C27.1674 15.9286 16.8504 15.9286 6.50865 15.9286C6.50865 16.1024 6.50865 16.2389 6.50865 16.3755C6.50865 26.2952 6.50865 36.2148 6.50865 46.1345C6.50865 46.4821 6.53348 46.8297 6.59556 47.1649C6.90593 49.1637 8.44541 50.517 10.4442 50.517C18.1788 50.5294 25.901 50.517 33.6356 50.517C34.604 50.517 35.4606 50.219 36.1807 49.561C37.2112 48.6175 37.5464 47.4008 37.5464 46.06C37.5464 36.19 37.5464 26.32 37.5464 16.45C37.5464 16.2886 37.5464 16.1272 37.5464 15.9286ZM21.9779 13.4083C27.4157 13.4083 32.841 13.4083 38.2789 13.4083C38.5396 13.4083 38.8003 13.3959 39.0486 13.371C40.1039 13.2593 40.886 12.4647 40.9978 11.4219C41.1095 10.3542 40.4887 9.36098 39.4707 9.06301C39.1355 8.96369 38.763 8.93886 38.403 8.93886C27.4901 8.92645 16.5649 8.93886 5.65201 8.93886C5.3913 8.93886 5.13058 8.95128 4.88228 8.98852C3.82699 9.14992 3.06967 10.0066 3.00759 11.0867C2.94552 12.0923 3.6656 13.0855 4.65881 13.3214C5.00643 13.4083 5.37888 13.4083 5.73891 13.4083C11.1395 13.4083 16.5649 13.4083 21.9779 13.4083ZM14.0446 6.40619C19.3955 6.40619 24.6595 6.40619 29.9235 6.40619C29.9235 5.7606 29.9732 5.16468 29.9111 4.56875C29.7869 3.41415 28.8558 2.50785 27.6888 2.50785C23.9146 2.48302 20.128 2.48302 16.3538 2.50785C15.2489 2.52026 14.3177 3.31483 14.1439 4.40736C14.0322 5.05294 14.0694 5.72336 14.0446 6.40619Z"
                    fill="#C20F0F"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.9322 32.217C15.9322 35.9787 15.9322 39.7405 15.9322 43.4899C15.9322 44.5576 15.5101 45.1287 14.7156 45.1411C13.9086 45.1535 13.4492 44.5576 13.4492 43.4775C13.4492 35.9415 13.4492 28.4055 13.4492 20.8696C13.4492 20.6337 13.474 20.3854 13.5237 20.1495C13.6479 19.5784 14.1072 19.2308 14.6783 19.2308C15.237 19.2184 15.7212 19.566 15.8577 20.1123C15.9198 20.3481 15.9198 20.584 15.9198 20.8323C15.9322 24.6189 15.9322 28.418 15.9322 32.217Z"
                    fill="#C20F0F"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.7852 32.2046C20.7852 28.3807 20.7852 24.5444 20.7852 20.7206C20.7852 20.1495 20.9217 19.6653 21.4556 19.3674C22.1012 19.0073 22.9702 19.3549 23.1813 20.0626C23.2558 20.3233 23.2806 20.6089 23.2806 20.882C23.2806 28.4179 23.2806 35.9539 23.2806 43.4899C23.2806 43.7257 23.2682 43.974 23.2061 44.2099C23.0695 44.781 22.5729 45.1659 22.0143 45.1535C21.468 45.1411 20.9838 44.7686 20.8597 44.2099C20.81 43.974 20.7976 43.7257 20.7976 43.4899C20.7852 39.7281 20.7852 35.9663 20.7852 32.2046Z"
                    fill="#C20F0F"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M28.1113 32.1548C28.1113 28.393 28.1113 24.6312 28.1113 20.8819C28.1113 19.7893 28.5459 19.2183 29.3653 19.2307C30.1598 19.2431 30.5943 19.8142 30.5943 20.8695C30.5943 28.4054 30.5943 35.9414 30.5943 43.4773C30.5943 44.5574 30.135 45.1534 29.328 45.141C28.5334 45.1285 28.1113 44.5574 28.1113 43.4897C28.1113 39.7156 28.1113 35.9414 28.1113 32.1548Z"
                    fill="#C20F0F"
                  />
                </svg>
                <br />
                <br />
                <h4 style={{ marginLeft: '80px', color: 'black' }}>Sind Sie sicher?</h4>
              </Modal.Title>
              <Modal.Body>
                <p style={{ textAlign: 'center', fontSize: '18px', marginBottom: '30px' }}>
                  Dieser Vorgang kann nicht ruckgangig gemacht werden.
                </p>
                <button
                  className="btn btn w-30 ms-4"
                  style={{ background: '#d04545', color: 'white', marginRight: '18px' }}
                  onClick={handleDeleteCancel}
                >
                  Löschen
                </button>
                <button
                  className="btn btn w-30"
                  style={{ background: '#015291', color: 'white', marginRight: '20px' }}
                  onClick={handleDeleteConfirm}
                >
                  Abbrechen
                </button>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
    </>
  )
}
