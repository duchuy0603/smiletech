import React from 'react'
import { Input, Button, Form, InputNumber, Switch, Upload, message } from 'antd';
import { UploadOutlined, InboxOutlined ,PlusOutlined,LoadingOutlined} from '@ant-design/icons';
import { useEffect } from 'react';
import { useState } from 'react';
import './brand.scss'
import axios from 'axios';


const BrandForm = ({ onFinish, form, idEdit }) => {
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

    const [loading, setLoading] = useState(false);
    const [fileList, setFileList] = useState([]);
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        if(idEdit) {
            const imageUrl = form.getFieldValue('image');
            setImageUrl(imageUrl)
            console.log(imageUrl);
        }
    }, [form, idEdit])

    const handleChange = info => {
        if (info.file.status === 'uploading') {
            setLoading(true);
          }
    };
    const propsUpload = {
        name: 'file',
        maxCount: 1,
        action: `${process.env.REACT_APP_API_URL}/ecommerce`,
        headers: {
            'Authorization': 'Bearer ' ,
        },
        onSuccess: (result) => {
            console.log(result);
            if(result.success) {
                form.setFieldsValue({
                    image: result.data,
                })
                setImageUrl(result.data);
                message.success('Tải ảnh lên thành công !');
            } else {
                form.setFieldsValue({
                    image: '',
                })
                setImageUrl('');
                if(result.error.message === "File too large") {
                    message.error('Dung lượng ảnh không quá 5mb !');
                } if(result.error.message === "Images Only!") {
                    message.error('Chỉ tải lên định dạng ảnh .jpg, .png, .jpeg !');
                } else {
                    message.error('Tải ảnh lên thất bại ! Hãy thử lại !');
                }
            }
            setLoading(false);
        },
        onError: () => {
            form.setFieldsValue({
                image: '',
            })
            setImageUrl('');
            message.error('Tải ảnh lên thất bại ! Hãy thử lại');
            setLoading(false);
        }
    };


    const normContent = (value) => {
        return value.text;
    };
    const normFile = (e) => {
        return e && e.file;
    };
  
  

    console.log(fileList)
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
            
            
                <Form.Item name="description" label="Description" required rules={[{ required: true }, { type: 'string', max: 255 }]}
                    style={{ width: '50%', paddingRight: "10px" }}>
                    <TextArea></TextArea>
                </Form.Item>

                <Form.Item name="EcomerceId" label="EcomerceId" required rules={[{ required: true }, { type: 'string', max: 255 }]}
                    style={{ width: '50%', paddingRight: "10px" }}>
                     <Input placeholder="" />
                </Form.Item>
                {
                    idEdit ?
                    <Form.Item name="new_img" required label="Ảnh tin tức" valuePropName="file" getValueFromEvent={normFile}
                        style={{ width: '50%',paddingRight: "10px"}} >
                        <Upload
                            {...propsUpload}
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            onChange={handleChange}
                        >
                            {imageUrl && imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%', height: '100%', objectFit: 'cover'  }} /> 
                                    : <div>
                                        {loading ? <LoadingOutlined /> : <PlusOutlined />}
                                        <div style={{ marginTop: 8 }}>Upload</div>
                                    </div>}
                        </Upload>
                    </Form.Item>
                    :<Form.Item name="new_img" label="Ảnh tin tức" valuePropName="file" getValueFromEvent={normFile}
                    rules={[{ required: true }]} style={{ width: '50%',paddingRight: "10px"}} >
                        <Upload
                            {...propsUpload}
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            onChange={handleChange}
                        >
                            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> 
                                    : <div>
                                        {loading ? <LoadingOutlined /> : <PlusOutlined />}
                                        <div style={{ marginTop: 8 }}>Upload</div>
                                    </div>}
                        </Upload>
                    </Form.Item>
                }

            
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

export default BrandForm
