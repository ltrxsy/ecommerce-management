import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./login.less";
import axios from "axios";
import {withRouter} from 'react-router-dom';


const LoginForm = (props) => {
  const {setUser} =props;



  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    axios
      .post("/api/login", values)
      .then((res) => {
        if (res.status === 200 ) {
          // login successfully, jump to /
          setUser(res.data.user)
          props.history.push('/');
        }
      })
      .catch((err) => {
        console.log("fail to login");
      });
  };

  return (
    <div className="login-wrapper">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
            {
              type: "regexp",
              pattern: new RegExp(/\w+/g),
              message: "Sepcial Characters!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};

export default withRouter(LoginForm);

/*
 API:/login
 Method: post
 payload: {username:'', password:''}

 GET: get data;
 POST: sumbit data;
 PUT: Update Data;
 DELETE: remove data
*/
