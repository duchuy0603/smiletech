import React, { useState } from 'react';
import { Input, Button, Form, Select, DatePicker, Checkbox, Space, message, Upload } from 'antd';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {
    ArrowLeftOutlined,
    PlusOutlined,
    MinusCircleOutlined,
    UploadOutlined,
  } from '@ant-design/icons';
import axios from 'axios';
import moment from 'moment';


const TournamentsListForm = ({name, onFinish, form, idEdit, onCloseAdd, onCloseEdit, currency}) => {
    const { Option } = Select;
    const { RangePicker } = DatePicker;
    
    const [fileList, setFileList] = useState([]);
    const [uploading, setUploading] = useState(false);

    const validateMessages = {
        required: 'Không được để trống !',
        types: {
            string: '${label} không hợp lệ !',
        },
        string: {
            max: '${label} tối đa 255 ký tự !',
        },
    };

    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    const normContent = (event, editor) => {
        const data = editor.getData();
        // console.log( { event, editor, data } );
        // console.log(data.toString())
        return data.toString()
    };

    const handleUpload = () => {
        // const formData = new FormData();
        // fileList.fileList ? fileList.fileList.forEach(file => {
        //   formData.append('files', file);
        // }) : fileList.forEach(file => {
        //         formData.append('files', file);
        //       }); 
        // setUploading(true);
        // console.log(fileList);
        // axios({
        //     method: 'post',
        //     url: `${process.env.REACT_APP_API_URL}/resources`,
        //     data: formData,
        // }).then(function (response) {
        //         console.log(response);
        //         setFileList([]);
        //         setUploading(false);
        //         message.success('Tải lên thành công !');
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //         setUploading(false);
        //         message.error('Tải lên thất bại !');
        //     });
        //     console.log(formData.getAll('files'));
    };
        
    const propsUpload = {
        onRemove: file => {
            setFileList(prevState => {
              const index = prevState.indexOf(file);
              const newFileList = prevState.slice();
              newFileList.splice(index, 1);
              return newFileList
            });
        },
        beforeUpload: file => {
            setFileList(prevState => 
                [...prevState, file]
            );
            return false;
        },
        fileList,
        name: 'fileUpload',
    };

    return (
        <>
            <Form
                layout="vertical"
                name={name}
                onFinish={onFinish}
                form={form}
                validateMessages={validateMessages}
            >
                {   
                    idEdit &&
                    <Form.Item name="id" hidden={true}>
                        <Input/>
                    </Form.Item>
                }
                <Form.Item>
                    <Button danger onClick={onCloseAdd ? onCloseAdd : onCloseEdit}><ArrowLeftOutlined /> Quay lại</Button>
                    <Button htmlType="submit" type="primary">Tạo giải đấu</Button>
                </Form.Item>
                <Form.Item name="name" label="Tên giải đấu" required rules={[{ required: true }, { type: 'string', max: 255 }]}
                    style={{ width: '80%'}}>
                    <Input placeholder="Ví dụ: Giải LCB Hà Nội"/>
                </Form.Item>
                <Form.Item name="address" label="Địa điểm" required rules={[{ required: true }, { type: 'string', max: 255 }]}
                    style={{ width: '80%'}}>
                    <Input placeholder="Ví dụ: Nhà thi đấu Hoàng Mai"/>
                </Form.Item>
                <Form.Item name="date" label="Thời gian diễn ra" required rules={[{ required: true }]}
                    style={{ width: '44%'}}>
                    <RangePicker 
                        disabledDate={(currentDate) => {
                            return currentDate && currentDate < moment().startOf('day'); 
                             //không được chọn ngày trước ngày hôm nay
                        }}/>
                </Form.Item>
                <Form.Item name="currency_name" label="Tiền tệ" 
                    style={{ width: '20%'}}>
                    <Select
                        showSearch
                        placeholder="Chọn tiền tệ"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                        allowClear
                        >
                        {
                            currency.map((item) => (
                                <Option key={item.id} value={item.name}>{item.name}</Option>
                            ))
                        }
                    </Select>
                </Form.Item>
                <Form.Item name="is_active" label="Kích hoạt" style={{ width: '16%'}} valuePropName='checked'>
                    <Checkbox/>
                </Form.Item>
                <Form.Item name="is_comment" label="Cho phép bình luận" style={{ width: '20%'}} valuePropName='checked'>
                    <Checkbox/>
                </Form.Item>
                <Form.List name="files">
                    {(fields, { add, remove }) => (
                    <>
                        {fields.map(({ key, name, fieldKey, ...restField }) => (
                        <div key={key} className="files-list-upload" style={{display: 'flex'}}>
                            <Form.Item>
                                <span>Tài liệu {key+1}:</span>
                            </Form.Item>
                            <Form.Item
                                {...restField} style={{ width: '44%'}}
                                name={[name, 'file_title']}
                                fieldKey={[fieldKey, 'file_title']}
                                rules={[{ type: 'string', max: 255 }]}
                                >
                                <Input style={{ minHeight: '37px' }} placeholder="Tiêu đề tài liệu" />
                            </Form.Item>
                            <Form.Item
                                style={{ maxWidth: '30%'}}
                                valuePropName="fileList"
                                getValueFromEvent={normFile}
                                {...restField}
                                name={[name, 'file_upload']}
                                fieldKey={[fieldKey, 'file_upload']}
                                >
                                <Upload multiple {...propsUpload}>  
                                    <Button style={{ display: 'flex', alignItems: 'center'}} icon={<UploadOutlined />}>Chọn tài liệu</Button>
                                </Upload>
                            </Form.Item>
                            <Form.Item style={{width: 'auto', textAlign: 'left'}}>
                                <MinusCircleOutlined style={{height: '37px', display: 'flex', alignItems: 'center'}} onClick={() => remove(name)} />
                            </Form.Item>
                        </div>
                        ))}
                        <Form.Item>
                            <Button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}} type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                Thêm tài liệu
                            </Button>
                        </Form.Item>
                        {/* <Form.Item>
                            <Button type="primary" onClick={handleUpload} 
                                disabled={fileList.length === 0} loading={uploading}>
                                {uploading ? 'Đang tải lên' : 'Tải lên'}
                            </Button>
                        </Form.Item> */}
                    </>
                    )}
                </Form.List>
                <Form.Item name="content" label="Nội dung chi tiết" getValueFromEvent={normContent}
                    required rules={[{ required: true }]} style={{ width: '100%'}}>
                    <CKEditor
                        editor={ ClassicEditor }
                    />
                </Form.Item>
            </Form>
        </>
    );
}
export default React.memo(TournamentsListForm);