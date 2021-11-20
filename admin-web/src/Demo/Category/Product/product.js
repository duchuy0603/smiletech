import React, { useCallback } from 'react'
import { productAdd,productEdit,productDelete,productgetAll } from '../../../store/Category/product';

import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { Button, Form, Modal, Space, Table, Popconfirm, Tag, Input,Select } from 'antd';
import Highlighter from 'react-highlight-words';
import { Pagination } from 'antd';
import { SearchOutlined, SyncOutlined, EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import './product.scss'
import ProductForm from './productForm';
import PropertyForm from '../Property/propertyForm';

const Product = () => {
  const { productlist, loadingproduct } = useSelector(state => state.productReducer)
  
  const { Option } = Select;
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(productgetAll())
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
      key: 'ImageUrl',
      width:'20%',
      render: text =>  <img src={`${process.env.REACT_APP_API_URL}/${text}` }  style={{width:"100%",height:"100%"}} alt=""/>
        
    },
   
    {
      title: 'Price',
      dataIndex: 'Price',
      key: 'Price',
      width: '20%',
      sorter: (a, b) => a.Price - b.Price,
      sortDirections: ['descend', 'ascend'],
      ...getColumnSearchProps('Price'),
    },
    {
      title: 'Content',
      dataIndex: 'Content',
      key: 'Content',
      width: '20%',
      ...getColumnSearchProps('Content'),
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
      sorter: (a, b) => a.EcomerceId - b.EcomerceId,
      sortDirections: ['descend', 'ascend'],
      ...getColumnSearchProps('EcomerceId'),
    },
    {
      key: 'Action',
      title: <SyncOutlined onClick={() => dispatch(productgetAll())} />,
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
const add={
  Name:data.name,
  Price:data.price,
  Description:data.description,
  Content:data.content,
  StoreId:data.storeId,
  CategoryId:data.categoryId,
  ParentId:data.parentId,
  image:data.image
}
    dispatch(productAdd(add))
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
      
      name:record.Name,
      price:record.Price,
      description:record.Description,
      content:record.Content,
      storeId:record.StoreId,
      categoryId:record.CategoryId,
      parentId:record.ParentId,
      image:record.image
      
    
    }
    formEdit.setFieldsValue(editform)
    setIsModalEdit(true)

  }, [formEdit])
  const onFinishEdit = (data) => {
    const edit={
      Id:data.id,
      Name:data.name,
      Price:data.price,
      Description:data.description,
      Content:data.content,
      StoreId:data.storeId,
      CategoryId:data.categoryId,
      ParentId:data.parentId,
      image:data.image
    }
    dispatch(productEdit(edit))
    setIsModalEdit(false)
    formAdd.resetFields()
    console.log(edit)
  }
  const handleDelete = (id) => {
    dispatch(productDelete(id))
  }
  return (
    <div>
      <div className='addecommerce' >
        <Button type="primary" onClick={() => setIsModalAdd(true)}>
          Thêm Brand
        </Button>
      </div>
      <br />
      <Modal className='modal-add' title="Thêm Brand" visible={isModalAdd} footer="" centered onCancel={() => setIsModalAdd(false)}>
        <ProductForm
          onFinish={onFinishAdd}
          form={formAdd} />
      </Modal>

      <Modal className='modal-edit' title="Sửa Brand" visible={isModalEdit} onCancel={() => setIsModalEdit(false)} centered footer="">
        <ProductForm
          onFinish={onFinishEdit}
          form={formEdit}
          idEdit={true}
        />
      </Modal>

      <Table scroll={{ x: 900 }} 
       pagination= {{defaultCurrent:30,defaultPageSize:10,hideOnSinglePage:true,pageSizeOptions:[10,30,50,100]}}
      loading={loadingproduct} columns={columns} dataSource={productlist} rowKey={record => record.id} bordered />

    </div>
  )
}

export default Product;
