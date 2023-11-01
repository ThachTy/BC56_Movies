import React, { useRef, useState, memo } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { userAPI } from '../../service/axios/api';
import { message } from 'antd';
import { useDispatch } from 'react-redux';
/* */
import "./style.css";
import { getLocaleStorage, setLocaleStorage } from "../../base/base";
import { SET_USER } from "../../service/redux/constant/constant";


function Login() {
    /* Hook */
    const navigate = useNavigate();
    const [user, setUser] = useState({ taiKhoan: getLocaleStorage('User')?.taiKhoan, matKhau: getLocaleStorage('User')?.matKhau });
    const isRememberRef = useRef(true);
    const dispatch = useDispatch();


    /* Function */
    const onFinish = async (values) => {
        try {
            await userAPI.postLoginUser(values)
                .then(res => {
                    console.log(res.data.content);
                    /* User check Remember */
                    let infoUser = (isRememberRef.current) ? { accessToken: res?.data.content.accessToken, taiKhoan: values?.taiKhoan, matKhau: values?.matKhau }
                        : { accessToken: res?.data.content.accessToken };
                    /* Save into LocaleStorage*/
                    let isLogin = setLocaleStorage("User", infoUser);
                    /* */
                    isLogin && message.open({ type: "success", content: "Đăng nhập thành công" })
                        && dispatch({ type: SET_USER, payload: res?.data.content });
                    // && setTimeout(() => navigate("/Home"), 1500);
                }).catch(err => { throw err?.response.data.content });
        } catch (error) {
            message.open({ type: "error", content: error });
        }
    };

    const onFinishFailed = (errorInfo) => {
        errorInfo && message.open({ type: "error", content: "Tài khoản , mật khẩu không được trống !!!" });
    };

    const handleOnchange = (e) => {
        isRememberRef.current = e.target.checked;
    }

    return (
        <main className='login'>
            <div className="container">
                <div className="login-content mx-auto">
                    <h3 className='title text-center my-5'>Đăng Nhập</h3>
                    <Form className='frmLogin'
                        name="formLogin"
                        style={{
                            maxWidth: "100%",
                            minWidth: 250,
                        }}
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 14,
                        }}

                        initialValues={{
                            taiKhoan: user.taiKhoan,
                            matKhau: user.matKhau,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        {/* Username */}
                        <Form.Item
                            label="Username"
                            name="taiKhoan"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        {/* Password */}
                        <Form.Item
                            label="Password"
                            name="matKhau"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            wrapperCol={{
                                offset: 7,
                                span: 16,
                            }}
                        >
                            <Checkbox defaultChecked={isRememberRef.current} onChange={handleOnchange}  >Nhớ Mật Khẩu !</Checkbox> <Link className='underline' to={"/Register"}>Đăng Ký ?</Link>
                        </Form.Item>
                        <Form.Item
                            wrapperCol={{
                                offset: 7,
                                span: 16,
                            }}
                        >
                            <Button className='btn-submit' htmlType='submit'>
                                Đăng Nhập
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </main >
    )
};
export default memo(Login);