import { Button, Form, Input } from "antd";
import { useAuth } from "context/auth-context";
import { FormEvent } from "react"
import { LongButton } from "unauthenticated-app";
import { useAsync } from "utils/use-async";

const apiUrl = process.env.REACT_APP_URL;

export const RegisterScreen = ({ onError }: { onError: (error: Error) => void }) => {
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
  const { run, isLoading } = useAsync(undefined, { throwOnError: true })
  const handleSubmit = async ({ repassword, ...values }: { username: string, password: string, repassword: string }) => {
    // e.preventDefault()
    // console.log("e.currentTarget", e.currentTarget.elements);
    // console.log("e.target", e.targevaluest);

    // const username = (e.currentTarget.elements[0] as HTMLInputElement).value
    // const password = (e.currentTarget.elements[1] as HTMLInputElement).value
    if (repassword !== values.password) {
      onError(new Error('请确认两次输入的密码相同'))
      return
    }
    try {
      await run(register(values))
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
    <Form.Item name="repassword" rules={[{ required: true, message: "please add repassword" }]}>
      {/* <label htmlFor="password">password</label> */}
      <Input type="password" id="repassword" placeholder="repassword" />
    </Form.Item>
    <Form.Item>
      {/* <button type="submit">login</button> */}
      <LongButton loading={isLoading} htmlType="submit" type="primary"> register </LongButton>
    </Form.Item>
  </Form>
}