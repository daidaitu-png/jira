/** @jsxImportSource @emotion/react */
import { Form, Input, Select } from "antd";

interface SearchPanelProps {
  users: User[]
  param: {
    name: string
    personId: string
  }
  setParam: (param: SearchPanelProps["param"]) => void
}
export interface User {
  id: string
  name: string
  email: string
  title: string
  organization: string
  token: string
}


export const SearchPanel = ({ users, param, setParam }: SearchPanelProps) => {

  return (
    <Form layout="inline" css={{ marginBottom: "2rem", ">*": "" }}>
      <Form.Item>
        <Input
          placeholder="project name"
          type="text"
          value={param.name}
          onChange={(e) =>
            setParam({
              ...param,
              name: e.target.value,
            })
          }
        />
      </Form.Item>
      <Form.Item>
        <Select
          value={param.personId}
          onChange={(value) =>
            setParam({
              ...param,
              personId: value,
            })
          }
        >
          <Select.Option value="">负责人</Select.Option>
          {users.map((user) => (
            <Select.Option key={user.id} value={user.id}>{user.name}</Select.Option>
          ))}
        </Select>
      </Form.Item>
    </Form>
  );
};
