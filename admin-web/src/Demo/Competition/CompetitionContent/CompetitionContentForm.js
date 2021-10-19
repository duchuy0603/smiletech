import React, { useState, useCallback, useEffect } from 'react';
import { Input, Button, Form, Select, InputNumber, Checkbox } from 'antd';
import { useSelector } from 'react-redux';
import { formality } from '../../_components/otherData';

const CompetitionContentForm = ({name, onFinish, form, idEdit, currentCompetition, loadingCategoryContentPrepared, categoryContentPrepared}) => {
    const { Option } = Select;

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
          range: '${label} trong khoảng 0-9999999 !',
        },
    };
    
    const [isClosed, setIsClosed] = useState(false)
 
    const onChangeClosed = (e) => {
        form.setFieldsValue({
            is_closed: e.target.checked,
        })
        setIsClosed(e.target.checked);
    }

    const handleGrade = useCallback((value, option) => {
        if (value) {
            const dataGrade = categoryContentPrepared.grades.find(grade => grade.id === value);
            form.setFieldsValue({
                dance_types: dataGrade.dance_type_id,
                dances: JSON.parse("[" + dataGrade.dance_id + "]"), 
            })
        };
    },[form, categoryContentPrepared]);

    useEffect(() => {
        form.setFieldsValue({
            tournament_id: currentCompetition.id,
        })
        setIsClosed(form.getFieldValue('is_closed'));
        if (idEdit) {
            const valueGradeID = form.getFieldValue('grade_id');
            const dataGrade = categoryContentPrepared.grades.find(grade => grade.id === valueGradeID);
            form.setFieldsValue({
                dance_types: dataGrade.dance_type_id,
                dances: JSON.parse("[" + dataGrade.dance_id + "]"), 
            })
        }                                        
    },[idEdit, form, categoryContentPrepared, isClosed, currentCompetition])

    return (
        <>
            <Form
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
                <Form.Item name="tournament_id" label="Giải đấu"
                    required rules={[{ required: true }]} style={{ width: '100%'}}>
                    <Select disabled>
                        <Option value={currentCompetition.id}>{currentCompetition.name}</Option>
                    </Select>
                </Form.Item>
                <Form.Item name="symbol" label="Ký hiệu" required rules={[{ required: true }, { type: 'string', max: 255 }]}
                    style={{ width: '50%'}}>
                    <Input placeholder="VD: D13K"/>
                </Form.Item>
                <Form.Item name="formality_name" label="Hình thức"  required rules={[{ required: true }]}
                    style={{ width: '50%'}}>
                    <Select
                        showSearch
                        placeholder="Chọn hình thức"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                        allowClear
                        loading={loadingCategoryContentPrepared}
                        >
                        {
                            formality.map((item) => (
                                <Option key={item.id} value={item.name}>{item.name}</Option>
                            ))
                        }
                    </Select>
                </Form.Item>
                <Form.Item name="age_id" label="Tuổi" 
                    rules={[{ required: true }]}
                    style={{ width: '70%'}}>
                    <Select
                        showSearch
                        mode="multiple"
                        placeholder='Chọn lứa tuổi'
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                        allowClear
                        showArrow={true}   //trên mode="multiple" set default là false nên phải set thành true để hiện thị mũi tên xuống
                        maxTagCount="responsive"
                        loading={loadingCategoryContentPrepared}
                        >
                        {
                            categoryContentPrepared.ages.map(age => (
                                <Option key={age.id} value={age.id}>{age.name}</Option>
                            ))
                        }
                    </Select>
                </Form.Item>
                <Form.Item name="minimum_athletes" label="Số VĐV tối thiểu" required rules={[{ required: true }, { type: 'number', min: 0, max: 9999999 }]}
                    style={{ width: '30%'}}>
                    <InputNumber min={0} max={9999999}/>
                </Form.Item>
                <Form.Item name="name" label="Nội dung" rules={[{ type: 'string', max: 255 }]}
                    style={{ width: '70%'}}>
                    <Input placeholder="VD: Nhi đồng Hạng A Latin"/>
                </Form.Item>
                <Form.Item name="grade_id" label="Hạng" required rules={[{ required: true }]}
                    style={{ width: '30%'}}>
                    <Select
                        showSearch
                        placeholder="Chọn hạng"
                        optionFilterProp="children"
                        onChange={handleGrade}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                        allowClear
                        loading={loadingCategoryContentPrepared}
                        >
                        {
                            categoryContentPrepared.grades.map(categoryDance => (
                                <Option key={categoryDance.id} value={categoryDance.id}>{categoryDance.name}</Option>
                            ))
                        }
                    </Select>
                </Form.Item>
                <Form.Item name="dance_types" label="Loại điệu nhảy"  rules={[{ required: true }]}
                    style={{ width: '40%'}}>
                    <Select
                        showSearch
                        placeholder="Hãy chọn hạng thi đấu"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                        allowClear
                        disabled={true}
                        loading={loadingCategoryContentPrepared}
                        >
                        {
                            categoryContentPrepared.dance_types.map(categoryDance => (
                                <Option key={categoryDance.id} value={categoryDance.id}>{categoryDance.name}</Option>
                            ))
                        }
                    </Select>
                </Form.Item>
                <Form.Item name="dances" label="Điệu nhảy" required
                    rules={[{ required: true }]}
                    style={{ width: '60%'}}>
                    <Select
                        showSearch
                        mode="multiple"
                        placeholder="Hãy chọn hạng thi đấu"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                        allowClear
                        showArrow={true}
                        maxTagCount="responsive"
                        disabled={true}
                        loading={loadingCategoryContentPrepared}
                        >
                        {
                            categoryContentPrepared.dances.map(dance => (
                                <Option key={dance.id} value={dance.id}>{dance.name}</Option>
                            ))
                        }
                    </Select>
                </Form.Item>
                <Form.Item name="is_closed" style={{ width: '100%', paddingLeft: '40px'}} valuePropName='checked'>
                    <Checkbox onChange={onChangeClosed}>Nội dung đóng</Checkbox>
                </Form.Item>
                {
                    isClosed && form.getFieldValue('is_closed') &&
                    <>
                    <Form.Item name="unit" label="Đơn vị"  required rules={[{ required: true }, { type: 'string', max: 255 }]}
                        style={{ width: '80%'}}>
                        <Input placeholder="VD: CLB Hà Nội"/>
                    </Form.Item>
                    <Form.Item name="is_register" style={{ width: '20%'}} valuePropName='checked'>
                        <Checkbox>Cho đăng ký</Checkbox>
                    </Form.Item>
                    </>
                }
                <Form.Item>
                    <Button htmlType="submit" type="primary">Lưu lại</Button>
                </Form.Item>
            </Form>
        </>
    );
}
export default CompetitionContentForm;