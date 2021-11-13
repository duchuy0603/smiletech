import React from 'react'
import { Input, Button, Form, InputNumber, Switch, Upload, message } from 'antd';
import { UploadOutlined, InboxOutlined ,LoadingOutlined,PlusOutlined} from '@ant-design/icons';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './property.scss'
import { useEffect } from 'react';
import axios from 'axios';
import { ecommerceAdd } from '../../../store/Category/ecommerce';
import { useDispatch } from 'react-redux';

const PropertyForm = ({ onFinish, form, idEdit}) => {
   
 

    const { TextArea } = Input;
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
    return (
        <div>
       

             <Form className="property-form"
            
                onFinish={onFinish }
               
                validateMessages={validateMessages}
                form={form} >
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


              
                 <Form.Item
                    style={{ width: '90%' }}>

                </Form.Item>
                <Form.Item className='button'>
                    <Button htmlType="submit"
                        type="primary">Lưu lại</Button>
                </Form.Item>
            </Form>  
        </div>
    )
}

export default PropertyForm
