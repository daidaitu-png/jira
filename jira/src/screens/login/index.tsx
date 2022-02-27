import { useAuth } from "context/auth-context";
import { FormEvent } from "react"

const apiUrl = process.env.REACT_APP_URL;

export const LoginScreen = () => {
  const login = (param: { username: string, password: string }) => {
    fetch(`${apiUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(param)
    }).then(async (response) => {
      if (response.ok) {
      }
    });
  }

  // const { login, user } = useAuth()
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("e.currentTarget", e.currentTarget.elements);
    console.log("e.target", e.target);

    const username = (e.currentTarget.elements[0] as HTMLInputElement).value
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value
    login({ username, password })
  }
  return <form onSubmit={handleSubmit}>
    {/* {user ? <div>登录成功，username:{user?.name}</div> : null} */}
    <div>
      <label htmlFor="username">username</label>
      <input type="text" id="username" />
    </div>
    <div>
      <label htmlFor="password">password</label>
      <input type="password" id="password" />
    </div>
    <button type="submit">login</button>
  </form>
}