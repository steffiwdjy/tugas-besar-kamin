import React from "react";
import "./Login.css";
import { Button, Form, Input, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const Login = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    // console.log(values);
    const { email, password } = values;
    if (email === "test@gmail.com" && password === "test123") navigate("/");
  };

  return (
    <main>
      <div className="wrapperLogin">
        <Title
          style={{
            fontFamily: "Montserrat",
          }}>
          Login
        </Title>
        <Form
          labelCol={{
            span: 0,
          }}
          style={{
            width: "100%",
          }}
          onFinish={onFinish}
          autoComplete="off">
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
              {
                required: true,
                type: "email",
                message: "The input is not valid email!",
              },
            ]}>
            <Input placeholder="email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}>
            <Input.Password placeholder="password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </main>
  );
};

export default Login;
