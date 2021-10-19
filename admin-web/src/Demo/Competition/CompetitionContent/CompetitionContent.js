import { DeleteOutlined, EditOutlined, SyncOutlined, SearchOutlined, HourglassOutlined, AppstoreAddOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Button, Form, Modal, Space, Table, Popconfirm, Checkbox, Tooltip, Tag, Select, Empty, Result } from 'antd';
import React, { useCallback, useState, useEffect } from 'react';
import Highlighter from 'react-highlight-words';
import CompetitionContentForm from './CompetitionContentForm';
import FilterDropdown from '../../_components/FilterDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { createCategoryContent, deleteCategoryContent, editCategoryContent, getAllCategoryContent, getAllPreparedCategoryContent } from '../../../store/Category/categoryContentSlice';
import { createCompetitionContent, createCompetitionContentHandmade, deleteCompetitionContent, editCompetitionContent, getAllCompetitionContent, getByIdCompetitionContent } from '../../../store/Competition/competitionContentSlice';
import { getAllTournamentsList } from '../../../store/Competition/tournamentsListSlice';
import './CompetitionContent.scss';
import CompetitionContentSelect from './CompetitionContentSelect';

const CompetitionContent = () => {
    const dispatch = useDispatch();

    const [searchText, setSearchText] = useState('');      //table
    const [searchedColumn, setSearchedColumn] = useState('');

    const [addModalShow, setAddModalShow] = useState(false);    //modal
    const [editModalShow, setEditModalShow] = useState(false); 
    const [selectModalShow, setSelectModalShow] = useState(false); 
    
    const {loadingCategoryContent, categoryContentList, loadingCategoryContentPrepared, categoryContentPrepared} = useSelector(state => state.categoryContentReducer);  //data 
    const {loadingCompetitionContent, competitionContentById } = useSelector(state => state.competitionContentReducer);
    const {loadingTournamentsList, tournamentsList} = useSelector(state => state.tournamentsListReducer); 
    
    const [emptyData, setEmptyData] = useState(false);
    const [currentCompetition, setCurrentCompetition] = useState({});

    const [formAdd] = Form.useForm();    //form
    const [formEdit] = Form.useForm();
    const [formSelect] = Form.useForm();

    const { Option } = Select;

    useEffect(() => {
      setEmptyData(true);
      dispatch(getAllTournamentsList());
      dispatch(getAllCategoryContent());
      dispatch(getAllPreparedCategoryContent());
    }, [dispatch])

    //Table
    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
          <FilterDropdown dataIndex={dataIndex} setSelectedKeys={setSelectedKeys}
            selectedKeys={selectedKeys} confirm={confirm} clearFilters={clearFilters}
            handleSearch={handleSearch} handleReset={handleReset}
          />
        ),
        filterIcon: filtered => dataIndex !== 'index' || dataIndex !== 'is_register'
            ? <SearchOutlined style={{ color: filtered ? '#1890ff' : '#555555' }} />
            : null,
        onFilter: (value, record) => {
          if (dataIndex === 'grade_id') {
            return record[dataIndex].dance_id
              ? record[dataIndex].dance_id.map((dance) => (dance.symbol)).toString().replace(/,/g, ' ').toLowerCase().includes(value.toLowerCase())
              : ''
          } else if (dataIndex === 'age_id') {
            return record[dataIndex]
              ? record[dataIndex].map(age => age.name).toString().replace(/,/g,', ').toLowerCase().includes(value.toLowerCase())
              : ''
          } else return record[dataIndex]
            ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
            : ''
        },
        render: (text, record, index) => {
          if(searchedColumn === dataIndex && searchText) {
            if (dataIndex === 'grade_id') {
              return text.dance_id.map((dance) => (
                <Space size="middle" key={dance.id}>
                  {
                    dance.symbol.toString().toLowerCase().includes(searchText.toLowerCase())
                    ? <Tooltip title={dance.name} color="volcano">
                        <Tag color="volcano">{dance.symbol}</Tag>
                      </Tooltip>
                    : <Tooltip title={dance.name} color="cyan">
                        <Tag color="cyan">{dance.symbol}</Tag>
                      </Tooltip>
                  }
                </Space>
              ));
            }
            if (dataIndex === 'age_id') {
              const newText = text.map(age => age.name).toString().replace(/,/g,', ')
              return <Highlighter
                      highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                      searchWords={[searchText]}
                      autoEscape
                      textToHighlight={newText ? newText.toString() : ''}
                    />
            }
             return <Highlighter
                      highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                      searchWords={[searchText]}
                      autoEscape
                      textToHighlight={text ? text.toString() : ''}
                    />
          } else {
            if (dataIndex === 'grade_id') {
              return text.dance_id.map((dance) => (
                <Space size="middle" key={dance.id}>
                  <Tooltip title={dance.name} color="cyan">
                    <Tag color="cyan">{dance.symbol}</Tag>
                  </Tooltip>
                </Space>
              ));
            }
            if (dataIndex === 'age_id') {
              return text.map(age => age.name).toString().replace(/,/g,', ');
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
            key: 'index',
            title: 'STT',
            width: '4%',
            align: "center",
            render: (text, record, index) => (
                index + 1
            ),
        },
        {
            key: 'symbol',
            title: 'Ký Hiệu',
            dataIndex: 'symbol',
            width: '9%',
            ...getColumnSearchProps('symbol'),
        },
        {
            key: 'name',
            title: 'Nội Dung',
            dataIndex: 'name',
            width: '15%',
            ...getColumnSearchProps('name'),
        },
        {
            key: 'unit',
            title: 'Đơn Vị',
            dataIndex: 'unit',
            width: '10%',
            ...getColumnSearchProps('unit'),
        },
        {
            key: 'formality_name',
            title: 'Hình Thức',
            dataIndex: 'formality_name',
            width: '10%',
            ...getColumnSearchProps('formality_name'),
        },
        {
          key: 'dances',
          title: 'Điệu',
          dataIndex: 'grade_id',
          width: '14%',
          ...getColumnSearchProps('grade_id'),
        },
        {
          key: 'age_id',
          title: 'Tuổi',
          dataIndex: 'age_id',
          width: '14%',
          ...getColumnSearchProps('age_id'),
        },
        {
          key: 'is_register',
          title: 'Cho Đ.Ký',
          dataIndex: 'is_register',
          width: '8%',
          align: "center",
          render: (text) => (
            <Space size="middle">
              <Checkbox checked={text}/>
            </Space>
          ),
        },
        // {
        //   key: '',
        //   title: 'Số Đôi',
        //   dataIndex: '',
        //   width: '8%',
        //   ...getColumnSearchProps(''),
        // },
        {
          key: 'action',
          align: "center",
          title: <SyncOutlined onClick={() => dispatch(getByIdCompetitionContent({tournament_id: currentCompetition.id}))}/>,
          width: '8%',
          render: (text, record, index) => (
            <Space size="middle">
              <EditOutlined onClick={() => handleEditForm(record)}/>
              <Popconfirm
                placement="topRight"
                title={`Bạn muốn xóa ${record.name} ?`}
                onConfirm={() => handleDelete({
                  tournament_detail_id: record.tournament_detail_id,
                  content_competition_id: record.id
                })}
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
    const onChangeTour = useCallback((value) => {
      const idTour = JSON.parse(value).id
      const params = {
        tournament_id: idTour,
      }
      dispatch(getByIdCompetitionContent(params));
      formSelect.setFieldsValue({
        natures: "all",
      });
      setCurrentCompetition(JSON.parse(value));
      setEmptyData(false);
    }, [dispatch, formSelect]);
    
    const onChangeNature = useCallback((value) => {
      const idTour = currentCompetition.id;
      const params = {
        tournament_id: idTour,
        is_closed: value,
      }
      if (value === "all") {
        dispatch(getByIdCompetitionContent({tournament_id: idTour}));
      } else {
        dispatch(getByIdCompetitionContent(params));
      }
      setEmptyData(false);
    }, [dispatch, currentCompetition]);

    const onFinishAdd = useCallback((values) => {
      const newData = {
        tournament_id: values.tournament_id,
        age_id: values.age_id.toString(),
        formality_name: values.formality_name,
        grade_id: values.grade_id,
        is_closed: values.is_closed ? 1 : 0,
        is_register: values.is_register ? 1 : 0,
        minimum_athletes: values.minimum_athletes,
        name: values.name,
        symbol: values.symbol,
        unit: values.unit,
      };
      dispatch(createCompetitionContentHandmade(newData));
      formAdd.resetFields();
      setAddModalShow(false);
    }, [formAdd, dispatch]);

    const handleEditForm = useCallback((record) => {
      const editFormValue = {
        id: record.id,
        age_id: record.age_id.map((age) => age.id),
        formality_name: record.formality_name,
        grade_id: record.grade_id.id,
        is_closed: record.is_closed ? true : false,
        is_register: record.is_register ? true : false,
        minimum_athletes: record.minimum_athletes,
        name: record.name,
        symbol: record.symbol,
        unit: record.unit,
      }
      formEdit.setFieldsValue(editFormValue);
      setEditModalShow(true);
    }, [formEdit]);

    const onFinishEdit = useCallback((values) => {
      const dataEdited = {
        id: values.id,
        age_id: values.age_id.toString(),
        formality_name: values.formality_name,
        grade_id: values.grade_id,
        is_closed: values.is_closed ? 1 : 0,
        is_register: values.is_register ? 1 : 0,
        minimum_athletes: values.minimum_athletes,
        name: values.name,
        symbol: values.symbol,
        unit: values.unit,
      }
      const params = {
        tournament_id: values.tournament_id,
      }
      dispatch(editCategoryContent(dataEdited));
      dispatch(getByIdCompetitionContent(params));
      setEditModalShow(false);
    }, [dispatch]);

    const handleDelete = useCallback((ids) => {
      const paramsID = {
        tournament_id: currentCompetition.id,
        tournament_detail_id: ids.tournament_detail_id,
        content_competition_id: ids.content_competition_id,
      }
      dispatch(deleteCompetitionContent(paramsID));
    }, [dispatch, currentCompetition]);
    //End Data
    
    return (
        <div className="table-cus-component competition-content-component">
            <div className="add-modal">
              <Form
                  name="competition-content-form-select"
                  form={formSelect}
                >
                  <Form.Item name="tournaments" label="Giải đấu">
                      <Select
                        showSearch
                        loading={loadingTournamentsList}
                        optionFilterProp="children"
                        onChange={onChangeTour}
                        filterOption={(input, option) =>
                          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        {
                          tournamentsList.map((item) => (
                            <Option key={item.id} value={JSON.stringify(item)}>{item.name}</Option>
                          ))
                        }
                      </Select>
                  </Form.Item>
                  <Form.Item name="natures" label="Tính chất">
                      <Select
                        disabled={emptyData}
                        onChange={onChangeNature}
                        loading={loadingCompetitionContent}
                      >
                        <Option key="all" value="all">Tất cả</Option>
                        <Option key="1" value={1}>Nội dung đóng</Option>
                        <Option key="0" value={0}>Nội dung mở</Option>
                      </Select>
                  </Form.Item>
              </Form>
              {
                emptyData ?
                <div className="total-content"></div>
                : <div className="total-content">
                  {
                    competitionContentById.length===0 ?
                      <span>Chưa có nội dung thi đấu</span>
                    : <span>Tổng<Tag color="gold">{competitionContentById.length}</Tag>nội dung thi đấu</span>
                  }
                </div>
              }
              <div className="list-button">
                <Button type="primary" disabled={emptyData}
                  onClick={() => setAddModalShow(true)}>
                  <AppstoreAddOutlined /> Thêm
                </Button>
                <Button type="primary" disabled={emptyData}
                  onClick={() => setSelectModalShow(true)}>
                  <PlusCircleOutlined /> Thêm nội dung có sẵn
                </Button>
              </div>

              <Modal
                wrapClassName="modal-cus modal-competition-content modal-cus-select"
                title="Thêm nội dung có sẵn"
                centered
                footer={null}
                onCancel={() => setSelectModalShow(false)}
                visible={selectModalShow}
              >
                <CompetitionContentSelect
                  setSelectModalShow={setSelectModalShow}
                  loadingCategoryContent={loadingCategoryContent}
                  categoryContentList={categoryContentList}
                  categoryContentSelected={competitionContentById}
                  currentCompetition={currentCompetition}
                />
              </Modal>

              <Modal
                wrapClassName="modal-cus modal-competition-content"
                title="Thêm nội dung thi đấu"
                centered
                footer={null}
                onCancel={() => setAddModalShow(false)}
                visible={addModalShow}
              >
                <CompetitionContentForm
                  name="competition-content-form-add"
                  onFinish={onFinishAdd}
                  form={formAdd}
                  loadingCategoryContentPrepared={loadingCategoryContentPrepared}
                  categoryContentPrepared={categoryContentPrepared}
                  currentCompetition={currentCompetition}
                />
              </Modal>

              <Modal
                wrapClassName="modal-cus modal-competition-content"
                title="Sửa nội dung thi đấu"
                centered
                footer={null}
                onCancel={() => setEditModalShow(false)}
                visible={editModalShow}
              >
                <CompetitionContentForm
                  name="competition-content-form-edit"
                  onFinish={onFinishEdit}
                  form={formEdit}
                  idEdit={true}
                  loadingCategoryContentPrepared={loadingCategoryContentPrepared}
                  categoryContentPrepared={categoryContentPrepared}
                  currentCompetition={currentCompetition}
                />
              </Modal>
            </div>
            <div className="table-data">
              {
                emptyData ? <Result
                              status="404"
                              title="Hãy chọn giải đấu bạn muốn xem !"
                            />
                : <Table scroll={{ x: 1200 }} loading={loadingCompetitionContent} rowKey={record => record.tournament_detail_id} columns={columns} dataSource={competitionContentById} bordered/>
              }
            </div>
        </div>
    );
}
export default React.memo(CompetitionContent);