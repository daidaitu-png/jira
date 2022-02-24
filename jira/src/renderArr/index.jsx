import React, { useState, useEffect } from "react";
const apiUrl = process.env.REACT_APP_URL;
export default function RenderArr() {
  const [category, setCategory] = useState([]);
  const [mapobj, setMapobj] = useState({});

  useEffect(() => {
    fetch(`${apiUrl}/category`).then(async (response) => {
      if (response.ok) {
        setCategory(await response.json());
      }
    });
  }, []);
  useEffect(() => {
    let obj = {};

    category.map((item) => {
      obj[item.name] = item.id;
      item.children &&
        item.children.map((item2) => {
          obj[item2.name] = item2.id;
          item2.children &&
            item2.children.map((item3) => {
              obj[item3.name] = item3.id;
            });
        });
    });
    setMapobj(obj);
  }, [category]);
  
  useEffect(() => {
    console.log(mapobj);
  }, [mapobj]);

  return (
    <div>
      <p>mapobj</p>
    </div>
  );
}
