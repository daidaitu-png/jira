import { Button, Form, Input } from "antd";
import { useAuth } from "context/auth-context";
import { FormEvent } from "react"
import { LongButton } from "unauthenticated-app";

const apiUrl = process.env.REACT_APP_URL;

export const RegisterScreen = () => {
  // const login = (param: { username: string, password: string }) => {
  //   fetch(`${apiUrl}/login`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(param)
  //   }).then(async (response) => {
  //     if (response.ok) {
  //     }
  //   });
  // }

  const { register, user } = useAuth()
  const handleSubmit = (values: { username: string, password: string }) => {
    // e.preventDefault()
    // console.log("e.currentTarget", e.currentTarget.elements);
    // console.log("e.target", e.targevaluest);

    // const username = (e.currentTarget.elements[0] as HTMLInputElement).value
    // const password = (e.currentTarget.elements[1] as HTMLInputElement).value
    register(values)
  }
  return <Form onFinish={handleSubmit}>
    {/* {user ? <div>登录成功，username:{user?.name}</div> : null} */}
    <Form.Item name="username" rules={[{ required: true, message: "please add username" }]}>
      {/* <label htmlFor="username">username</label> */}
      <Input type="text" id="username" placeholder="username" />
    </Form.Item>
    <Form.Item name="password" rules={[{ required: true, message: "please add password" }]}>
      {/* <label htmlFor="password">password</label> */}
      <Input type="password" id="password" placeholder="password" />
    </Form.Item>
    <Form.Item>
      {/* <button type="submit">login</button> */}
      <LongButton htmlType="submit" type="primary"> register </LongButton>
    </Form.Item>
  </Form>
}