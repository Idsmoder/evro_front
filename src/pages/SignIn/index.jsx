import { Form, Input, Button, Checkbox, Row, Col, Flex } from 'antd';
import './style.css';
import { api } from '../../utils/api';
import { toast } from 'react-toastify';

export default function SignIn() {

    const onFinish = (values) => {
        api.post('login', values)
            .then((response) => {
                    sessionStorage.setItem('access_token', response.data);
                    toast.success('Muvaffaqiyatli kirdingiz!', {
                        position: "top-right",

                        
                    });
                    setTimeout(() => {
                        window.location.href = '/home';
                    }, 2000);
            })
            .catch((error) => {
                toast.error(error.response.data.message, {
                    position: "top-right",
                    hideProgressBar: false,
                });
            });
    }
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    }

    return (
        <div className="back-img">
        <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
            <Col span={8}>
                <Form
                    layout="vertical"
                    // labelCol={{ span: 8 }}
                    // wrapperCol={{ span: 16 }}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="Login"
                        name="name"
                        rules={[{ required: true, message: 'Iltimos Logini kiriting!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        
                        label="Parol"
                        name="password"
                        rules={[{ required: true, message: 'Iltimos parolni kiriting!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 10, span: 16 }}>
                        <Checkbox>Eslab qolish</Checkbox>
                    </Form.Item>

                    <Form.Item >
                        <Button type="primary" htmlType="submit" block>
                            Kirish
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
        </div>
    );
  }
