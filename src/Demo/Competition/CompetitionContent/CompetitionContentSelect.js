import { Button, Space, Table, Tag, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { createCompetitionContent, deleteCompetitionContent, editCompetitionContent, getAllCompetitionContent, getByIdCompetitionContent } from '../../../store/Competition/competitionContentSlice';
import { createCategoryContent, deleteCategoryContent, editCategoryContent, getAllCategoryContent, getAllPreparedCategoryContent } from '../../../store/Category/categoryContentSlice';
import React, { useEffect, useState, useCallback } from 'react';
import FilterDropdown from '../../_components/FilterDropdown';
import Highlighter from 'react-highlight-words';

function CompetitionContentSelect({loadingCategoryContent, categoryContentList, setSelectModalShow, categoryContentSelected, currentCompetition}) {
    const dispatch = useDispatch();
    
    const [searchText, setSearchText] = useState('');      //table
    const [searchedColumn, setSearchedColumn] = useState('');
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const [loading, setLoading] = useState(false);
    const [categoryContentData, setCategoryContentData] = useState([]);

    useEffect(() => {
        setLoading(true)
        if(categoryContentSelected && categoryContentSelected.length!==0) {
            const idSelected = categoryContentSelected.map(item => item.id);
            const newCategoryContent = categoryContentList.filter(categoryContent => {
                if(!idSelected.some(item => (
                    categoryContent.id === item    //lấy ra những nội dung chưa nằm trong giải đấu
                ))) {
                    return categoryContent
                }
                return null
            });
            setCategoryContentData(newCategoryContent);
        } else {
            setCategoryContentData(categoryContentList); 
        }
        setLoading(false)
    },[categoryContentSelected,categoryContentList])

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
          <FilterDropdown dataIndex={dataIndex} setSelectedKeys={setSelectedKeys}
            selectedKeys={selectedKeys} confirm={confirm} clearFilters={clearFilters}
            handleSearch={handleSearch} handleReset={handleReset}
          />
        ),
        filterIcon: filtered => dataIndex === 'name'
            ? <SearchOutlined style={{ color: filtered ? '#1890ff' : '#555555' }} />
            : null,
        onFilter: (value, record) => {
          if (dataIndex === 'dances') {
            return record['grade_id'].dance_id
              ? record['grade_id'].dance_id.map((dance) => (dance.symbol)).toString().replace(/,/g, ' ').toLowerCase().includes(value.toLowerCase())
              : ''
          } else if (dataIndex === 'dance_type') {
            return record['grade_id'].dance_type
              ? record['grade_id'].dance_type.name.toString().replace(/,/g, ' ').toLowerCase().includes(value.toLowerCase())
              : ''
          } if (dataIndex === 'grade') {
            return record['grade_id']
              ? record['grade_id'].name.toString().replace(/,/g, ' ').toLowerCase().includes(value.toLowerCase())
              : ''
          } else return record[dataIndex]
            ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
            : ''
        },
        render: (text, record, index) => {
          if(searchedColumn === dataIndex && searchText) {
             return <Highlighter
                      highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                      searchWords={[searchText]}
                      autoEscape
                      textToHighlight={text ? text.toString() : ''}
                    />
          } else {
            if (dataIndex === 'dances') {
              return text.dance_id.map((dance) => (
                <Space size="middle" key={dance.id}>
                    <Tag color="cyan">{dance.symbol}</Tag>
                </Space>
              ));
            }
            if (dataIndex === 'dance_type') {
                return text.dance_type.name
            }
            if (dataIndex === 'grade') {
                return text.name
            } 
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
            title: 'Nội Dung',
            dataIndex: 'name',
            width: '32%',
            ...getColumnSearchProps('name'),
        },
        {
            key: 'grade',
            title: 'Hạng',
            dataIndex: 'grade_id',
            width: '14%',
            ...getColumnSearchProps('grade'),
        },
        {
            key: 'dance_type',
            title: 'Loại',
            dataIndex: 'grade_id',
            width: '14%',
            ...getColumnSearchProps('dance_type'),
        },
        {
          key: 'dances',
          title: 'Điệu',
          dataIndex: 'grade_id',
          width: '26%',
          ...getColumnSearchProps('dances'),
        },
        {
            key: 'formality_name',
            title: 'Hình Thức',
            dataIndex: 'formality_name',
            width: '14%',
            ...getColumnSearchProps('formality_name'),
        },
    ];

    const onSelectChange = selectedRowKeys => {
        setSelectedRowKeys(selectedRowKeys)
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    const submitSelect = useCallback(() => {
        const newData = {
            tournament_id: currentCompetition.id,
            content_competition_id: selectedRowKeys.toString()
        }
        dispatch(createCompetitionContent(newData));
        setSelectedRowKeys([]);
        setSelectModalShow(false);
    },[currentCompetition, selectedRowKeys, dispatch, setSelectModalShow])

    return (
        <div className="modal-select-cus">
            <div className="modal-select-action">
                {
                    selectedRowKeys.length > 0 &&
                    <span className="modal-select-length">
                        Đã chọn <span>{selectedRowKeys.length}</span> nội dung
                    </span>
                }
                <Button onClick={submitSelect}
                    disabled={selectedRowKeys.length > 0 ? false : true} type="primary">
                    Lưu lại
                </Button>
            </div>
            <Table scroll={{ x: 900 }} rowKey={record => record.id} loading={loading} rowSelection={rowSelection} columns={columns} dataSource={categoryContentData} bordered/>
        </div>
    );
}

export default CompetitionContentSelect;