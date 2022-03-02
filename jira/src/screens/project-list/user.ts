import { useEffect } from "react";
import { cleanObj } from "utils";
import { useHttp } from "utils/http";
import { useAsync } from "utils/use-async";
import { User } from "./search-panel";

export const useUsers = (param?: Partial<User>) => {
  const client = useHttp();
  const { run, ...result } = useAsync<User[]>();

  useEffect(() => {
    run(client("users", { data: cleanObj(param || {}) }));
  },[param]);

  return result
};
