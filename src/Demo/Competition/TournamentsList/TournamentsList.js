import { DeleteOutlined, EditOutlined, SyncOutlined, SearchOutlined, AppstoreAddOutlined } from '@ant-design/icons';
import { Button, Form, Input, Modal, Space, Table, Popconfirm, Drawer, Checkbox, Tag } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import Highlighter from 'react-highlight-words';
import FilterDropdown from '../../_components/FilterDropdown';
import { useDispatch, useSelector } from 'react-redux';
import TournamentsListForm from './TournamentsListForm';
import { currency } from '../../_components/otherData';
import { createTournamentsList, deleteTournamentsList, editTournamentsList, getAllTournamentsList } from '../../../store/Competition/tournamentsListSlice';


const TournamentsListComponent = () => {
    const [searchText, setSearchText] = useState('');      //table
    const [searchedColumn, setSearchedColumn] = useState('');

    const [visibleAdd, setVisibleAdd] = useState(false)    //drawer
    const [visibleEdit, setVisibleEdit] = useState(false)
    
    const [formAdd] = Form.useForm();    //form
    const [formEdit] = Form.useForm();

    const {loadingTournamentsList, tournamentsList} = useSelector(state => state.tournamentsListReducer);  //data  

    const dispatch = useDispatch();

    useEffect(() => {
      if(tournamentsList.length===0){
        dispatch(getAllTournamentsList());
      }
    }, [dispatch, tournamentsList])

    const onCloseAdd = () => {
        setVisibleAdd(false)
    };
    const onCloseEdit = () => {
        setVisibleEdit(false)
    };

    //Table
    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
          <FilterDropdown dataIndex={dataIndex} setSelectedKeys={setSelectedKeys}
            selectedKeys={selectedKeys} confirm={confirm} clearFilters={clearFilters}
            handleSearch={handleSearch} handleReset={handleReset}
          />
        ),
        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : '#555555' }} />,
        onFilter: (value, record) => 
          record[dataIndex]
            ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
            : '',
        render: (text, record, index) => {
          if(searchedColumn === dataIndex && searchText) {
            return <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                  />
          } else {
            return text
          }
        },
    });
    
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    
    const handleReset = clearFilters => {
        clearFilters();
        setSearchText('');
    };

    const columns = [
        {
          key: 'name',
          title: 'Tên Giải Đấu',
          dataIndex: 'name',
          width: '28%',
          ...getColumnSearchProps('name'),
        },
        {
            key: 'address',
            title: 'Địa Điểm',
            dataIndex: 'address',
            width: '24%',
            ...getColumnSearchProps('address'),
        },
        {
            key: 'date',
            title: 'Thời Gian',
            width: '30%',
            children: [
                {
                  key: 'start_date',
                  title: 'Bắt Đầu',
                  dataIndex: 'start_date',
                  width: '15%',
                  ...getColumnSearchProps('start_date'),
                },{
                  key: 'end_date',
                  title: 'Kết Thúc',
                  dataIndex: 'end_date',
                  width: '15%',
                  ...getColumnSearchProps('end_date'),
                }
            ],
        },
        {
            key: 'is_active',
            title: 'Kích Hoạt',
            dataIndex: 'is_active',
            width: '10%',
            align: "center",
            render: (text) => (
              <Space size="middle">
                <Checkbox checked={text}/>
              </Space>
            ),
          },
        {
          key: 'action',
          align: "center",
          title: <SyncOutlined onClick={() => dispatch(getAllTournamentsList())}/>,
          width: '8%',
          render: (text, record, index) => (
            <Space size="middle">
              {/* <EditOutlined onClick={() => handleEditForm(record)}/> */}
              <Popconfirm
                placement="topRight"
                title={`Bạn muốn xóa ${record.name} ?`}
                onConfirm={() => handleDelete(record.id)}
                okText="Xóa"
                cancelText="Hủy"
              >
                <DeleteOutlined/>
              </Popconfirm>
            </Space>
          ),
        },
    ];
    //End Table
  
    //Data
    const onFinishAdd = useCallback((values) => {
      // console.log(values);
      // let newFiles = [];
      // if(values.files) {
      //     newFiles = values.files.map(item => {
      //     let formData = new FormData();
      //     item.file_upload.forEach(file => {
      //         formData.append('files', file);
      //     });
      //     return {
      //       file_title: item.file_title,
      //       file_upload: formData,
      //     }
      //   });
      // }
      // console.log(newFiles);
      const newData = {
        name: values.name,
        address: values.address,
        start_date: values.date[0].format("YYYY-MM-DD"),   //format data từ moment 
        end_date: values.date[1].format("YYYY-MM-DD"),
        currency_name: values.currency_name,
        content: values.content,
        is_active: values.is_active  ? 1 : 0,
        is_comment: values.is_comment  ? 1 : 0,
        files: values.files
      };
      console.log(newData);
      dispatch(createTournamentsList(newData));
      onCloseAdd();
      formAdd.resetFields();
    }, [formAdd, dispatch]);

    const handleEditForm = useCallback((record) => {
      // const editFormValue = {
      //   id: record.id,
      //   name: record.name,
      // }
      // formEdit.setFieldsValue(editFormValue);
      setVisibleEdit(true);
    }, [formEdit]);

    const onFinishEdit = useCallback((values) => {
      const dataEdited = {
        id: values.id,
        name: values.name,
      }
      dispatch(editTournamentsList(dataEdited));
    }, [dispatch]);

    const handleDelete = useCallback((id) => {
      dispatch(deleteTournamentsList(id));
    }, [dispatch]);
    //End Data
    
    return (
        <div className="table-cus-component tournaments-list-component">
            <div className="add-drawer">
              <div className="total-content">
                {
                  tournamentsList.length===0 ?
                    <span>Chưa có giải đấu</span>
                  : <span>Tổng<Tag color="gold">{tournamentsList.length}</Tag>giải đấu</span>
                }
              </div>
              <Button type="primary" onClick={() => setVisibleAdd(true)}>
                <AppstoreAddOutlined /> Thêm giải đấu
              </Button>
              <Drawer
                title="Tạo giải đấu"
                className="drawer-cus"
                placement="top"
                onClose={onCloseAdd}
                visible={visibleAdd}
                height="100%"
                key="add-drawer-tournaments-list"
                >
                <TournamentsListForm
                    name="tournaments-list-form-add"
                    onFinish={onFinishAdd}
                    form={formAdd}
                    onCloseAdd={onCloseAdd}
                    currency={currency}
                />
              </Drawer>
              <Drawer
                title="Sửa thông tin giải đấu"
                className="drawer-cus"
                placement="top"
                onClose={onCloseEdit}
                visible={visibleEdit}
                height="100%"
                key="edit-drawer-tournaments-list"
                >
                <TournamentsListForm
                    name="tournaments-list-form-edit"
                    onFinish={onFinishEdit}
                    form={formEdit}
                    onCloseEdit={onCloseEdit}
                    currency={currency}
                />
              </Drawer>
            </div>
            <div className="table-data">
              <Table scroll={{ x: 1080 }} loading={loadingTournamentsList} rowKey={record => record.id} columns={columns} dataSource={tournamentsList} bordered/>
            </div>
        </div>
    );
}
export default React.memo(TournamentsListComponent);