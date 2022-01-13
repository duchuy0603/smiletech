import React from 'react'
import { Input, Button, Form, InputNumber, Switch, Upload, message, Select } from 'antd';
import { UploadOutlined, InboxOutlined, PlusOutlined, LoadingOutlined } from '@ant-design/icons';
import { ecommercegetAll } from '../../../store/Category/ecommerce';
import { useEffect } from 'react';
import { useState } from 'react';
import './feature.scss'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';


const FeatureForm = ({ onFinish, form, idEdit }) => {
    const { TextArea } = Input;
    const {Option}=Select;
    const dispatch=useDispatch();
    const {ecommercelist}=useSelector(state=>state.ecommerceReducer)
    const [showAgeTotal, setShowAgeTotal] = useState(false);
    const [showAgeMore, setShowAgeMore] = useState(false);

    useEffect(() => {
dispatch(ecommercegetAll())
        
    }, [])
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
                 
                    <Form.Item name="ecommerceId" label="EcommerceId" required rules={[{ required: true }]}
                    style={{ width: '50%' }}>
                    <Select
                       
                        showSearch
                        style={{ width: 200 }}
                        placeholder="ecommerceId"
                        optionFilterProp="children"
                       
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                        filterSort={(optionA, optionB) =>
                            optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                        }>
                        {ecommercelist.map((x,index)=>(
                                <Option  key={index} value={x.Id}>{x.name}</Option>
                                
                            ))}
                    </Select>
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

export default FeatureForm
