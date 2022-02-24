const category = [
  {
    id: 1,
    parentId: -1,
    name: "sdaf",
    children: [
      {
        name: "fsa",
        id: 10,
        parentId: 1,
        children: [
          {
            name: "fssdjhga",
            id: 100,
            parentId: 10,
          },
          {
            name: "fdeljga",
            id: 101,
            parentId: 10,
          },
        ],
      },
      {
        name: "fsads",
        id: 11,
        parentId: 1,
      },
      {
        name: "fsjmghma",
        id: 12,
        parentId: 1,
      },
    ],
  },
  {
    id: 2,
    parentId: -1,
    name: "sd都是af",
    children: [
      {
        name: "f机会sa",
        id: 20,
        parentId: 1,
      },
      {
        name: "fsa得分ds",
        id: 21,
        parentId: 1,
        children: [
          {
            name: "fssdjetewtehga",
            id: 210,
            parentId: 21,
          },
          {
            name: "fdiouyijeljga",
            id: 211,
            parentId: 21,
          },
        ],
      },
      {
        name: "的啊fsjmghma",
        id: 22,
        parentId: 1,
      },
    ],
  },
];

let obj = {};

category.map((item) => {
  obj[item.name] = item.id;
  item.children
    ? item.children.map((item2) => {
        obj[item2.name] = item2.id;
        item2.children
          ? item2.children.map((item3) => {
              obj[item3.name] = item3.id;
            })
          : null;
      })
    : null;
});
console.log(obj);
