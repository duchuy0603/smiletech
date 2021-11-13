import React, { useCallback } from 'react'
import { teamAdd, teamEdit, teamDelete, teamgetAll } from '../../../store/Category/team';
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import reactRouterDom, { useHistory } from 'react-router-dom';
import { Button, Form, Modal, Space, Table, Popconfirm, Tag, Input } from 'antd';
import Highlighter from 'react-highlight-words';
import { Pagination } from 'antd';
import { SearchOutlined, SyncOutlined, EditOutlined, DeleteOutlined, PlusOutlined,LoadingOutlined } from '@ant-design/icons';
import TeamForm from './teamForm';
import './team.scss'

const Team = () => {
  // const { register,reset ,handleSubmit, setValue,formState:{errors}, } = useForm();
  
  const { teamlist, loadingteam } = useSelector(state => state.teamReducer)
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(teamgetAll())
  }, [dispatch])
  
  const [searchText, setsearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  //modal
  const [isModalAdd, setIsModalAdd] = useState(false);
  const [isModalEdit, setIsModalEdit] = useState(false);
  const [formAdd] = Form.useForm();    
  const [formEdit] = Form.useForm();
  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 12 }}>
        <Input
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',


    render: text =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {

    confirm();
    setsearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);

  };
  const handleReset = clearFilters => {
    clearFilters();
    setsearchText('')
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'Name',
      key: 'Name',
      width: '20%',
      ...getColumnSearchProps('Name'),
    },
    {
      title: 'Image',
      
 dataIndex: 'ImageUrl',
      key: 'Image',
      width: '20%',
    
      render: text => <img src={`${process.env.REACT_APP_API_URL}/${text}` }  style={{width:"100%",height:"40%"}} alt=""/>
    },

    {
      title: 'Phone',
      dataIndex: 'Phone',
      key: 'Phone',
      width: '20%',
      sorter: (a, b) => a.Phone - b.Phone,
      sortDirections: ['descend', 'ascend'],
      ...getColumnSearchProps('Phone'),
    },
    {
      title: 'Email',
      dataIndex: 'Email',
      key: 'Email',
      width: '20%',
      ...getColumnSearchProps('Email'),
    },
    {
      title: 'Owner',
      dataIndex: 'Owner',
      key: 'Owner',
      width: '20%',
      ...getColumnSearchProps('Owner'),
      sorter: (a, b) => a.Owner.length - b.Owner.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Description',
      dataIndex: 'Description',
      key: 'Description',
      width: '20%',
      ...getColumnSearchProps('Description'),
    },
    {
      title: 'EcomerceId',
      dataIndex: 'EcomerceId',
      key: 'EcomerceId',
      width: '20%',
      ...getColumnSearchProps('EcomerceId'),
    },
    {
    title:'Status',
    dataIndex: 'Status',
    key: 'Status',
    width: '20%',
    ...getColumnSearchProps('Status'),
  },
  {
    title:'Deleted',
    dataIndex: 'Deleted',
    key: 'Deleted',
    width: '20%',
    ...getColumnSearchProps('Deleted'),
  },
    {
      key: 'Action',
      title: <SyncOutlined onClick={() => dispatch(teamgetAll())} />,
      align: 'center',
      width: '10%',
      render: (text, record, index) => (
        <Space size="middle">
          <EditOutlined style={{ color: "blue" }} onClick={() => handleEditForm(record)} />
          <Popconfirm
            placement="bottomRight"
            title={`Bạn muốn xóa ${record.Name} ?`}
            onConfirm={() => handleDelete(record.Id)}
            okText="Xóa"
        
            cancelText="Hủy"
          >
            <DeleteOutlined style={{ color: "red" }} />
          </Popconfirm>
        </Space>
      ),

    },
  ];
  // actionform
  const onFinishAdd = (data) => {
   
    const files = new FormData();
    files.append("Name", data.name)
    files.append("Email", data.email)
    files.append("Phone", data.phone)
    files.append("Address", data.address)
    files.append("Description", data.description)   
    files.append("ImageUrl", data.files[0])  
    console.log(data.files);
    console.log(files.getAll('ImageUrl'))
    console.log(data)
    dispatch(teamAdd(files))
   
    setIsModalAdd(false)
    formAdd.resetFields()
   }

   const handleEditForm = (record) => {
    const editform = {    
      id: record.Id,
      name: record.Name,
      email: record.Email,
      phone: record.Phone,
      address: record.Address,
      description: record.Description,
      //  files: record.ImageUrl
    }
    formEdit.setFieldsValue(editform)
    setIsModalEdit(true)
  }

  const onFinishEdit = (data) => {
    const edit = new FormData();
    edit.append("Id", data.id)
    edit.append("Name", data.name)
    edit.append("Email", data.email)
    edit.append("Phone", data.phone)
    edit.append("Address", data.address)
    edit.append("Description", data.description)   
    edit.append("ImageUrl", data.files[0])  
    dispatch(teamEdit(edit))
    setIsModalEdit(false)
    
    console.log(edit)
 
  }
  const handleDelete = (id) => {
    dispatch(teamDelete(id))
  }
  return (
    <div>
      <div className='addecommerce' >
        <Button type="primary" onClick={() => 
         
          setIsModalAdd(true)}>
          Thêm Brand
        </Button>
      </div>
      <br />
      <Modal className='modal-add' title="Thêm Sàn" visible={isModalAdd} footer="" centered onCancel={() => setIsModalAdd(false)}>
        <TeamForm
          onFinish={onFinishAdd}
          form={formAdd} />
      </Modal>

      <Modal className='modal-edit' title="Sửa Sàn" visible={isModalEdit} onCancel={() => setIsModalEdit(false)} centered footer="">
        <TeamForm
          onFinish={onFinishEdit}
          form={formEdit}
          idEdit={true}
          id={handleEditForm}
       
        />
      </Modal>

      <Table scroll={{ x: 900 }} loading={loadingteam} columns={columns} dataSource={teamlist} rowKey={record => record.id} bordered />

    </div>
  )
}

export default Team;
