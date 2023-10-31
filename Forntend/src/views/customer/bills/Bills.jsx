import React from 'react'
import { Table } from 'antd'
import Dropdown from 'react-bootstrap/Dropdown'
import { MdAdd } from 'react-icons/md'
import { DatePicker, Space } from 'antd'

const { RangePicker } = DatePicker
const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'PROJECT',
    dataIndex: 'project',
    key: 'project',
  },
  {
    title: 'DATUM DER RECHNUNG',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'FALLIGKEITS DATUM',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'RECHNUNG INSGESAMT',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'FALLIG',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'STATUS',
    dataIndex: 'address',
    key: 'address',
  },
]
const data = [
  {
    project: 'HVD',
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    project: 'HVD',
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    project: 'HVD',
    key: '123',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
]
const Bills = () => {
  return (
    <div>
      <div className="row m-4 p-4  shadow">
        <div className="col-sm-2">
          <input
            type="search"
            id="form1"
            placeholder="Ihre Suche eingeben"
            className="form-control"
          />
        </div>
        <div className="col-sm-3">
          <div className="d-flex">
            <Dropdown>
              <Dropdown.Toggle style={{ background: '#0b5995' }} id="dropdown-basic">
                status
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">success</Dropdown.Item>
                <Dropdown.Item href="#/action-2">pending</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            &nbsp;
            <Dropdown>
              <Dropdown.Toggle style={{ background: '#0b5995' }} id="dropdown-basic">
                type
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">success</Dropdown.Item>
                <Dropdown.Item href="#/action-2">pending</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            &nbsp;
            <Space direction="vertical" size={12}>
              <div className="d-flex mt-1">
                <DatePicker renderExtraFooter={() => 'extra footer'} placeholder="" />
                &nbsp;<span>-</span>&nbsp;
                <DatePicker renderExtraFooter={() => 'extra footer'} placeholder="" />
              </div>
            </Space>
          </div>
        </div>
        <div className="col-sm-2"></div>
        <div className="col-sm-4">
          <div className="d-flex">
            <button className="btn btn" style={{ background: '#0b5995', color: 'white' }}>
              <MdAdd /> &nbsp;Rechnung hinzufügen
            </button>{' '}
            &nbsp;
            <button className="btn btn" style={{ background: '#0b5995', color: 'white' }}>
              Excel
            </button>
            &nbsp;
            <button className="btn btn" style={{ background: '#0b5995', color: 'white' }}>
              Drucken
            </button>
          </div>
        </div>
      </div>
      <div>
        <Table columns={columns} style={{ overflowX: 'auto' }} dataSource={data} />
      </div>
    </div>
  )
}
export default Bills
