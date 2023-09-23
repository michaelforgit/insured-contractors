import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

type FieldType = {
  FirstName?: string;
  LastName?: string;
  CompanyEmail?: string;
  CompanyName?: string;
  CompanyAddress?: string;
  City?:string;
  State?:string;
  ZipCode?:Number;
  InsureName?:string;
  InsureEmail?:string;
  InsurePhone?:Number;
};

const App: React.FC = () => (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label="FirstName"
      name="FirstName"
      rules={[{ required: true, message: 'Please input your First Name: ' }]}
    >
      <Input />
    </Form.Item>


    <Form.Item<FieldType>
      label="LastName"
      name="LastName"
      rules={[{ required: true, message: 'Please input your password: ' }]}
    >
      <Input />
    </Form.Item>
  

    <Form.Item<FieldType>
      label="CompanyEmail"
      name="CompanyEmail"
      rules={[{ required: true, message: 'Please input your CompanyEmail: ' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="CompanyName"
      name="CompanyName"
      rules={[{ required: true, message: 'Please input your CompanyName: ' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="CompanyAddress"
      name="CompanyAddress"
      rules={[{ required: true, message: 'Please input your CompanyAddress: ' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="City"
      name="City"
      rules={[{ required: true, message: 'Please input your City: ' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="State"
      name="State"
      rules={[{ required: true, message: 'Please input your State: ' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="InsureName"
      name="InsureName"
      rules={[{ required: true, message: 'Please input your InsureName: ' }]}
    >
      <Input />
    </Form.Item>


    <Form.Item<FieldType>
      label="InsureEmail"
      name="InsureEmail"
      rules={[{ required: true, message: 'Please input your Insurers Email: ' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="InsurePhone"
      name="InsurePhone"
      rules={[{ required: true, message: 'Please input your Insurers Phone Number: ' }]}
    >
      <Input />
    </Form.Item>
        
    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);

export default App;