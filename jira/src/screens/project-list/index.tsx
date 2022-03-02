import { useState, useEffect } from "react";
import { List, Project } from "./list";
import { SearchPanel } from "./search-panel";
import { cleanObj, useMount, useDebounce } from "../../utils";
import * as qs from "qs";
import { useHttp } from "utils/http";
import styled from "@emotion/styled"
import { Typography } from "antd";
import { useAsync } from "utils/use-async";
import { useProjects } from "./project";
import { useUsers } from "./user";

const apiUrl = process.env.REACT_APP_URL;

export const ProjectListScreen = () => {
  // const [list, setList] = useState([]);
  // const [users, setUsers] = useState([]);
  // const [isLoading, setIsLoading] = useState(false)
  // const [error, setError] = useState<null | Error>(null)

  // const client = useHttp()

  const [param, setParam] = useState({
    name: "",
    personId: "",
  });

  const debouncedParam = useDebounce(param, 200)
  const { isLoading, error, data: list } = useProjects(debouncedParam)
  const { data: users } = useUsers()
  // useEffect(() => {
  //   run(client('projects', { data: cleanObj(debouncedParam) }))
  //   // setIsLoading(true)
  //   // // client('projects', { data: cleanObj(debouncedParam) }).then(setList)
  //   // //   .catch(error => {
  //   // //     setList([])
  //   // //     setError(error)
  //   // //   })
  //   // //   .finally(() => setIsLoading(false))
  //   //   fetch(
  //   //     // `${apiUrl}/projects?name=${param.name}&personId=${param.personId}`
  //   //     `${apiUrl}/projects?${qs.stringify(cleanObj(debouncedParam))}`
  //   //   ).then(async (response) => {
  //   //     if (response.ok) {
  //   //       setList(await response.json());
  //   //     }
  //   //   });
  // }, [debouncedParam]);
  // useEffect(() => {
  //   fetch(`${apiUrl}/users`).then(async (response) => {
  //     if (response.ok) {
  //       setUsers(await response.json());
  //     }
  //   });
  // }, []);
  // useMount(() => {
  //   // fetch(`${apiUrl}/users`).then(async (response) => {
  //   //   if (response.ok) {
  //   //     setUsers(await response.json());
  //   //   }
  //   // });
  //   client('users').then(setUsers)
  // });

  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel users={users || []} param={param} setParam={setParam} />
      {error ? <Typography.Text type="danger">{error.message}</Typography.Text> : null}
      <List users={users || []} loading={isLoading} dataSource={list || []} />
    </Container>
  );
};

const Container = styled.div`
  padding: 0.2rem;
`
