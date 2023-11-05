import React, { useEffect, useState } from 'react';
import { Button, Col, ConfigProvider, Form, Input, Row, Select, message } from 'antd';
import "./style.css";
import { userAPI } from '../../service/axios/api';
import { getLocaleStorage } from '../../base/base';


const Register = () => {
    const [loaiNguoiDung, setLoaiNguoiDung] = useState([]);

    useEffect(() => {
        try {
            userAPI.getTypeUser()
                .then(res => {
                    let data = res.data.content;
                    let options = data.map(typeUser => ({ value: typeUser?.maLoaiNguoiDung, label: typeUser?.tenLoai }));
                    setLoaiNguoiDung(options)
                })
                .catch(error => { throw error })
        } catch (error) {
            console.log(error);
        }
    }, [])


    const onFinish = async (values) => {
        //         {
        //     "taiKhoan": "admin321",
        //     "matKhau": "admin321",
        //     "email": "admin321@gmail.com",
        //     "soDt": "0123456789",
        //     "maNhom": "GP01",
        //     "maLoaiNguoiDung": "QuanTri",
        //     "hoTen": "admin min"
        //   }

        try {
            if (!getLocaleStorage("User")) throw "Bạn chưa đăng nhập";
            else {
                await userAPI.postNewUser(values)
                    .then(res => message.open({ type: "success", content: res?.data.message }))
                    .catch(err => { console.log(err); throw err?.response.data.content });
            }

        } catch (error) {
            message.open({ type: "error", content: error })
        }
    }

    const onFinishFailed = (error) => {
        console.log(error);
    }

    return (
        <ConfigProvider theme={{
            // Globale Token
            token: {
                colorText: "#fff",
                colorPrimaryHover: "#fff",
            },
            // Components Token
            components: {
                Input: {
                    colorBgContainer: "transparent",
                    colorBorder: "gray",
                    hoverBorderColor: "#fff",
                    hoverBg: "rgb(255, 255, 255, 0.5)",
                    activeBorderColor: "#fff",
                    activeShadow: "none",
                },
                Select: {
                    colorBgContainer: "transparent",
                    colorBorder: "gray",

                    optionSelectedColor: "#fff",
                    optionActiveBg: "transparent",
                    optionActiveColor: "red",
                    optionSelectedBg: "rgb(255, 255, 255, 0.5)",
                },
            },
        }}>
            <main className='register py-5'>
                <div className='container flex items-center justify-center md:justify-end'>
                    <div className='register-content p-5'>
                        <h3 className='title pb-2'>Đăng Ký</h3>
                        <Form className='frmRegister px-5 py-5 mx-auto'
                            name='formRegister'
                            layout="vertical"
                            initialValues={{
                                taiKhoan: "",
                                matKhau: "",
                                hoTen: "",
                                soDt: "",
                                maNhom: "",
                                maLoaiNguoiDung: "",
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"


                        >
                            {/* Tai Khoan */}
                            <Form.Item label="Tài Khoản :" name="taiKhoan"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your account!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Row >
                                {/* Mat Khau */}
                                <Col className='w-full lg:pr-2 lg:w-1/2'>
                                    <Form.Item label="Mật Khẩu :" name="matKhau"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your password!',
                                            }]}>
                                        <Input type='password' />
                                    </Form.Item>
                                </Col>
                                {/* Nhâp lai mat khau */}
                                <Col className='w-full lg:pl-2 lg:w-1/2'>
                                    <Form.Item label="Nhập Lại Mật Khẩu" name={"rematKhau"}
                                        rules={
                                            [{
                                                required: true,
                                                message: "Please input your password!",
                                            },
                                            ({ getFieldValue }) => ({
                                                validator(_, value) {
                                                    if (!value || getFieldValue('matKhau') === value) {
                                                        return Promise.resolve();
                                                    }
                                                    return Promise.reject(new Error('The new password that you entered do not match!'));
                                                }
                                            }),
                                            ]}>
                                        <Input type='password' />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                {/* Ho Ten */}
                                <Col className='w-full lg:pr-2 lg:w-1/2'>
                                    <Form.Item label="Họ và Tên : " name={"hoTen"}>
                                        <Input />
                                    </Form.Item>
                                </Col>
                                {/* So Dien Thoai */}
                                <Col className='w-full lg:pl-2 lg:w-1/2'>
                                    <Form.Item label="Số Điện Thoại : " name={"soDt"} rules={[{ message: 'Please input your Phone', }]}>
                                        <Input />
                                    </Form.Item>
                                </Col>
                            </Row>

                            {/* Email */}
                            <Form.Item label="Email :" name={"email"} rules={[{ type: "email", required: true, message: 'Please input your Email!', }]}>
                                <Input />
                            </Form.Item>
                            <Row>
                                {/* maNhom */}
                                <Col className='w-full lg:pr-2 lg:w-1/2'>
                                    <Form.Item label="Mã Nhóm : " name={"maNhom"}>
                                        <Select
                                            showSearch
                                            placeholder="Search to Select"
                                            optionFilterProp="children"
                                            filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                            filterSort={(optionA, optionB) =>
                                                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                            }
                                            options={[
                                                {
                                                    value: 'GP01',
                                                    label: 'GP01',
                                                },
                                                {
                                                    value: 'GP02',
                                                    label: 'GP02',
                                                },
                                                {
                                                    value: 'GP03',
                                                    label: 'GP03',
                                                },

                                            ]}>


                                        </Select>
                                    </Form.Item>
                                </Col>
                                {/* Loai Nguoi Dung */}
                                <Col className='w-full lg:pl-2 lg:w-1/2'>
                                    <Form.Item label="Mã Loại Người Dùng :" name={"maLoaiNguoiDung"}>
                                        <Select
                                            showSearch
                                            placeholder="Search to Select"
                                            optionFilterProp="children"
                                            filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                            filterSort={(optionA, optionB) => (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())}
                                            options={loaiNguoiDung}>
                                        </Select>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Form.Item className='w-full flex justify-center items-center'>
                                <Button className='px-3 lg:px-7' htmlType='submit'>Đăng Ký</Button>
                                <Button htmlType='reset' className='px-3 lg:px-7' >Xóa</Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </main >
        </ConfigProvider >
    );
};
export default Register;