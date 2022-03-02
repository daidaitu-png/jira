import { useAuth } from "context/auth-context";
import { FormEvent } from "react"
import { Button, Form, Input } from "antd";
import { LongButton } from "unauthenticated-app";
import { useAsync } from "utils/use-async";

const apiUrl = process.env.REACT_APP_URL;

export const LoginScreen = ({ onError }: { onError: (error: Error) => void }) => {
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

  const { login, user } = useAuth()
  const { run, isLoading } = useAsync()

  const handleSubmit = async (values: { username: string, password: string }) => {
    // e.preventDefault()
    // console.log("e.currentTarget", e.currentTarget.elements);
    // console.log("e.target", e.target);

    // const username = (e.currentTarget.elements[0] as HTMLInputElement).value
    // const password = (e.currentTarget.elements[1] as HTMLInputElement).value
    try {
      await run(login(values))
    } catch (error: any) {
      onError(error)
    }
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
      <LongButton loading={isLoading} htmlType="submit" type="primary">login</LongButton>
    </Form.Item>
  </Form>
}