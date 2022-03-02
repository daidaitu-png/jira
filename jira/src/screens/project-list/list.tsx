import { Table, TableProps } from "antd";
import dayjs from "dayjs";
import { User } from "./search-panel";

export interface Project {
  id: string
  name: string
  personId: string
  pin: boolean
  organization: string
  created: number
}
interface ListProps extends TableProps<Project> {
  // list: Project[]
  users: User[]
}


export const List = ({ users, ...props }: ListProps) => {
  return (
    <Table pagination={false} columns={[{
      title: "名称",
      dataIndex: "name",
      sorter: (a, b) => a.name.localeCompare(b.name)
    }, {
      title: "部门",
      dataIndex: "organization",
    }, {
      title: "创建时间",
      render(value, project) {
        return <span>
          {project.created ? dayjs(project.created).format('YYYY-MM-DD') : "no"}
        </span>
      }
    }, {
      title: "负责人",
      render(value, project) {
        return <span>{users.find((user) => user.id === project.personId)?.name ||
          "未知"}</span>
      }
    }]} {...props}>
      {/* <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map((project) => (
          <tr key={project.id}>
            <td>{project.name}</td>
            <td>
              {users.find((user) => user.id === project.personId)?.name ||
                "未知"}
            </td>
          </tr>
        ))}
      </tbody> */}
    </Table>
  );
};
