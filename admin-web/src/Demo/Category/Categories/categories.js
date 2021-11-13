import React, { useCallback } from 'react'
import { categoriesAdd, categoriesgetEdit, categoriesgetDelete, categoriesgetAll } from '../../../store/Category/categories';

import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Form, Modal, Space, Table, Popconfirm, Tag, Input } from 'antd';
import Highlighter from 'react-highlight-words';
import { Pagination } from 'antd';
import { SearchOutlined, SyncOutlined, EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import CategoriesForm from './catogoriesForm';
import './categories.scss'

const Categories = () => {
  const { categorieslist, loadingecom } = useSelector(state => state.categoriesReducer)
  
  console.log(categorieslist)
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(categoriesgetAll())
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
      dataIndex: 'name',
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
      render: text =>  <img src={`${process.env.REACT_APP_API_URL}/${text}` }  style={{width:"100%",height:"40%"}} alt=""/>
        
    },


    {
      title: 'Content',
      dataIndex: 'Content',
      key: 'Content',
      width: '20%',
      ...getColumnSearchProps('Content'),
    },
    {
      title: 'ParentId',
      dataIndex: 'ParentId',
      key: 'ParentId',
      width: '20%',
      ...getColumnSearchProps('ParentId'),
      sorter: (a, b) => a.ParentId.length - b.ParentId.length,
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
      title: <SyncOutlined onClick={() => dispatch(categoriesgetAll())} />,
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
    const add = new FormData();
    add.append("Name", data.name)
    add.append("Email", data.email)
    add.append("Phone", data.phone)
    add.append("Address", data.address)
    add.append("Description", data.description)   
    add.append("ImageUrl", data.image[0])  
    dispatch(categoriesAdd(add))
    setIsModalAdd(false)
    formAdd.resetFields()
    console.log(add)

  //   const newdata = {
  //     Name: data.name,
  //     Email: data.email,
  //     Phone: data.phone,
  //     Address: data.address,
  //     Description: data.description,
  //     // ImageUrl:data.files[0]

  //   }
  //   console.log(data)
  //   dispatch(ecommerceAdd(newdata))
   
  //   setIsModalAdd(false)
  //   formAdd.resetFields()
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
 
    dispatch(categoriesgetEdit(edit))
    setIsModalEdit(false)

  }
  const handleDelete = (id) => {
    dispatch(categoriesgetDelete(id))
  }
  return (
    <div>
      <div className='addecommerce' >
        <Button type="primary" onClick={() => setIsModalAdd(true)}>
          Thêm Danh Mục
        </Button>
      </div>
      <br />
      <Modal className='modal-add' title="Thêm Sàn" visible={isModalAdd} footer="" centered onCancel={() => setIsModalAdd(false)}>
        <CategoriesForm
          onFinish={onFinishAdd}
          form={formAdd} />
      </Modal>

      <Modal className='modal-edit' title="Sửa Sàn" visible={isModalEdit} onCancel={() => setIsModalEdit(false)} centered footer="">
        <CategoriesForm
          onFinish={onFinishEdit}
          form={formEdit}
          idEdit={true}
        />
      </Modal>

      <Table scroll={{ x: 900 }} loading={loadingecom} columns={columns} dataSource={categorieslist} rowKey={record => record.id} bordered />

    </div>
  )
}

export default Categories;
