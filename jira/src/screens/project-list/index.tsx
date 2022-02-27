import { useState, useEffect } from "react";
import { List } from "./list";
import { SearchPanel } from "./search-panel";
import { cleanObj, useMount, useDebounce } from "../../utils";
import * as qs from "qs";
import { useHttp } from "utils/http";

const apiUrl = process.env.REACT_APP_URL;

export const ProjectListScreen = () => {
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  const client = useHttp()

  const [param, setParam] = useState({
    name: "",
    personId: "",
  });

  const debouncedParam = useDebounce(param, 200)

  useEffect(() => {
    client('projects', { data: cleanObj(debouncedParam) }).then(setList)
    //   fetch(
    //     // `${apiUrl}/projects?name=${param.name}&personId=${param.personId}`
    //     `${apiUrl}/projects?${qs.stringify(cleanObj(debouncedParam))}`
    //   ).then(async (response) => {
    //     if (response.ok) {
    //       setList(await response.json());
    //     }
    //   });
  }, [debouncedParam]);
  // useEffect(() => {
  //   fetch(`${apiUrl}/users`).then(async (response) => {
  //     if (response.ok) {
  //       setUsers(await response.json());
  //     }
  //   });
  // }, []);
  useMount(() => {
    // fetch(`${apiUrl}/users`).then(async (response) => {
    //   if (response.ok) {
    //     setUsers(await response.json());
    //   }
    // });
    client('users').then(setUsers)
  });

  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  );
};
