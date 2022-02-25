import { useEffect, useState } from "react";

export const isFalsy = (value) => (value === 0 ? false : !value);

export const cleanObj = (obj) => {
  const resultObj = { ...obj };
  Object.keys(resultObj).forEach((key) => {
    const value = resultObj[key];
    if (isFalsy(value)) {
      delete resultObj[key];
    }
  });
  return resultObj;
};

export const useMount = (cb) => {
  useEffect(() => {
    cb();
  }, []);
};

export const debounce = (func, delay) => {
  let timeout;
  return (...param) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      func(...param);
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

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debouncedValue;
};
