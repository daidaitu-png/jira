import { useEffect, useState } from "react";

export const isFalsy = (value: any) => (value === 0 ? false : !value);
export const isVoid = (value: unknown) =>
  value === undefined || value === null || value === "";

export const cleanObj = (obj: { [key: string]: unknown }) => {
  const resultObj = { ...obj };
  Object.keys(resultObj).forEach((key) => {
    const value = resultObj[key];
    if (isVoid(value)) {
      delete resultObj[key];
    }
  });
  return resultObj;
};

export const useMount = (cb: () => void) => {
  useEffect(() => {
    cb();
  }, []);
};

export const debounce = (func: (param: any) => void, delay: number) => {
  let timeout: number;
  return (...param: any) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = window.setTimeout(() => {
      func(param);
    }, delay);
  };
};

const log = debounce(() => {
  console.log(123);
}, 2000);

log();
log();
log();
log();

export const useDebounce = <V>(value: any, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debouncedValue;
};

export const useArray = <T>(initialArray: T[]) => {
  const [value, setValue] = useState(initialArray);

  useEffect(() => {}, []);
  return {
    value,
    setValue,
    removeIndex: (index: number) => {
      const copy = [...value];
      copy.splice(index, 1);
      setValue([...copy]);
    },
    add: (item: T) => setValue([...value, item]),
    clear: () => setValue([]),
  };
};
