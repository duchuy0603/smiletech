import React from 'react'
import { ecommercegetAll } from '../../../store/Category/ecommerce';
import ecommerceApi from '../../../api/Ecommerce/ecommerce';
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

const Ecommerce = () => {
    useEffect(() => {
     dispatch(ecommercegetAll())
        
    }, [ecommercelist])
 
    const {ecommercelist,loadingecom}=useSelector(state=>state.ecommerceReducer)
  console.log(ecommercelist)
    const dispatch=useDispatch();
    const [searchText,setsearchText]=useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
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
    
    const  handleReset = clearFilters => {
        clearFilters();
      setsearchText('')
      };
    
      
        const columns = [
          {
            title: 'Name',
            dataIndex: 'Name',
            key: 'name',
            width: '30%',
            ...getColumnSearchProps('Name'),
          },
      
       
        ];
    return (
        <div>
            <Table scroll={{ x: 900 }} loading={loadingecom} columns={columns} dataSource={ecommercelist} bordered  />
        </div>
    )
}

export default Ecommerce;
