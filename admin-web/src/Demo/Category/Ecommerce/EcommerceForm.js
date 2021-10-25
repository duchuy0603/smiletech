import React from 'react'
import { Input, Button, Form, InputNumber, Switch, Upload, message } from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import { useState } from 'react';
import './ecommerce.scss'
import axios from 'axios';
const EcommerceForm = ({ onFinish, form, idEdit }) => {
    const { TextArea } = Input;
    const [showAgeTotal, setShowAgeTotal] = useState(false);
    const [showAgeMore, setShowAgeMore] = useState(false);
    const validateMessages = {
        required: 'Không được để trống !',
        types: {
            string: '${label} không hợp lệ !',
            number: '${label} không hợp lệ !',

        },
        string: {
            max: '${label} tối đa 255 ký tự !',
        },
        number: {
            range: '${label} trong khoảng 1-100 !',
        },
        pattern: {
            mismatch: '${label} không hợp lệ !',
        },
    };

    const [loading, setUploading] = useState(false);
    const [fileList, setFileList] = useState([]);
    const normFile = (e) => {
            if (Array.isArray(e)) {
                return e;
            }
            return e && e.fileList;
        };
    const handleUpload = () => {
            const formData = new FormData();
            fileList.fileList ? fileList.fileList.forEach(file => {
              formData.append('files', file);
            }) : fileList.forEach(file => {
                    formData.append('files', file);
                  }); 
            setUploading(true);
            console.log(fileList);
            axios({
                method: 'post',
                url: `${process.env.REACT_APP_API_URL}/ecommerce`,
                data: formData,
            }).then(function (response) {
                    console.log(response);
                    setFileList([]);
                    setUploading(false);
                    message.success('Tải lên thành công !');
                })
                .catch(function (error) {
                    console.log(error);
                    setUploading(false);
                    message.error('Tải lên thất bại !');
                });
                console.log(formData.getAll('files'));
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
        <div>
            <Form className="ecommerce-form" validateMessages={validateMessages} onFinish={onFinish} form={form} method='POST' encType='multipart/form-data' >
                {
                    idEdit &&
                    <Form.Item name="id" hidden={true}>
                        <Input />
                    </Form.Item>
                }

                <Form.Item name="name" label="Tên" required rules={[{ required: true, whitespace: true }, { type: 'string', max: 255 }]}
                    style={{ width: '50%', paddingRight: "10px" }}>
                    <Input placeholder="Ví dụ: Eplaza" />
                </Form.Item>
                <Form.Item name="email" label="Email" required rules={[{ required: true }, { type: 'email', message: "không phải là Email" }, { max: 255 }]}
                    style={{ width: '50%' }}>
                    <Input placeholder="Ví dụ: Eplaza@gmail.com" />
                </Form.Item>
                <Form.Item name="phone" label="Phone" required rules={[{ required: true }, { pattern: /((09|03|07|08|05)+([0-9]{8})\b)/g }]}
                    style={{ width: '50%', paddingRight: "10px" }}>
                    <Input style={{ width: '100%' }} placeholder="Ví dụ: 0902174492" />
                </Form.Item>
                <Form.Item name="address" label="Address" required rules={[{ required: true }, { type: 'string', max: 255 }]}
                    style={{ width: '50%' }}>
                    <Input placeholder="Ví dụ: 172A Yên Lãng" />
                </Form.Item>
                <Form.Item name="description" label="Description" required rules={[{ required: true }, { type: 'string', max: 255 }]}
                    style={{ width: '50%', paddingRight: "10px" }}>
                    <TextArea></TextArea>
                </Form.Item>

                <Form.Item
                    name="files"
                    label="Image"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                    style={{ width: '50%', paddingRight: "10px" }}
                    required rules={[{ required: true }]}
                >
                     <Upload multiple {...propsUpload}>  
                                    <Button style={{ display: 'flex', alignItems: 'center'}} icon={<UploadOutlined />}>Chọn tài liệu</Button>
                                </Upload>
                </Form.Item>
                <Form.Item
                    style={{ width: '90%' }}>

                </Form.Item>
                <Form.Item className='button'>
                    <Button htmlType="submit" type="primary">Lưu lại</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default EcommerceForm
