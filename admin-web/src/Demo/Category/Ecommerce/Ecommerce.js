import React, { useCallback } from 'react'
import { ecommercegetAll, ecommerceAdd, ecommerceEdit, ecommerceDelete } from '../../../store/Category/ecommerce';
import ecommerceApi from '../../../api/Ecommerce/ecommerce';
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Form, Modal, Space, Table, Popconfirm, Tag, Input } from 'antd';
import Highlighter from 'react-highlight-words';
import { Pagination } from 'antd';
import { SearchOutlined, SyncOutlined, EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import EcommerceForm from './EcommerceForm';
import './ecommerce.scss'
const Ecommerce = () => {
  const { ecommercelist, loadingecom } = useSelector(state => state.ecommerceReducer)
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(ecommercegetAll())
  }, [dispatch])
  
  const [searchText, setsearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  //modal
  const [isModalAdd, setIsModalAdd] = useState(false);
  const [isModalEdit, setIsModalEdit] = useState(false);
  const [formAdd] = Form.useForm();    //form
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
      // dataIndex: <img src="ImageUrl" alt=""/>,
      dataIndex: 'ImageUrl',
      key: 'Image',
      width: '20%',
      render: text =>
        text
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
      title: 'Address',
      dataIndex: 'Address',
      key: 'Address',
      width: '20%',
      ...getColumnSearchProps('Address'),
      sorter: (a, b) => a.Address.length - b.Address.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Description',
      dataIndex: 'Description',
      key: 'Address',
      width: '20%',
      ...getColumnSearchProps('Description'),
    },
    {
      key: 'Action',
      title: <SyncOutlined onClick={() => dispatch(ecommercegetAll())} />,
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
    // const add = new FormData();
    // add.append("Name", data.name)
    // add.append("Email", data.email)
    // add.append("Phone", data.phone)
    // add.append("Address", data.address)
    // add.append("Description", data.description)   
    // add.append("ImageUrl", data.files[0])  
    // dispatch(ecommerceAdd(add))
    // setIsModalAdd(false)
    // formAdd.resetFields()
    // console.log(data)

    const newdata = {
      Name: data.name,
      Email: data.email,
      Phone: data.phone,
      Address: data.address,
      Description: data.description,
      ImageUrl:data.files[0]

    }
    console.log(data)
    dispatch(ecommerceAdd(newdata))
    dispatch(ecommercegetAll())
    setIsModalAdd(false)
    formAdd.resetFields()
  }

  const handleEditForm = useCallback((record) => {
    const editform = {
      id: record.Id,
      name: record.Name,
      email: record.Email,
      phone: record.Phone,
      address: record.Address,
      description: record.Description,
      files: record.ImageUrl
      
    
    }
    formEdit.setFieldsValue(editform)
    setIsModalEdit(true)

  }, [formEdit])
  const onFinishEdit = (data) => {
    const edit = {
      Id: data.id,
      Name: data.name,
      Email: data.email,
      Phone: data.phone,
      Address: data.address,
      Description: data.description,
      // ImageUrl:data.image
    }
 
    dispatch(ecommerceEdit(edit))
    setIsModalEdit(false)

  }
  const handleDelete = (id) => {
    dispatch(ecommerceDelete(id))
  }
  return (
    <div>
      <div className='addecommerce' >
        <Button type="primary" onClick={() => setIsModalAdd(true)}>
          Thêm Sàn
        </Button>
      </div>
      <br />
      <Modal className='modal-add' title="Thêm Sàn" visible={isModalAdd} footer="" centered onCancel={() => setIsModalAdd(false)}>
        <EcommerceForm
          onFinish={onFinishAdd}
          form={formAdd} />
      </Modal>

      <Modal className='modal-edit' title="Sửa Sàn" visible={isModalEdit} onCancel={() => setIsModalEdit(false)} centered footer="">
        <EcommerceForm
          onFinish={onFinishEdit}
          form={formEdit}
          idEdit={true}
        />
      </Modal>

      <Table scroll={{ x: 900 }} loading={loadingecom} columns={columns} dataSource={ecommercelist} rowKey={record => record.id} bordered />

    </div>
  )
}

export default Ecommerce;
