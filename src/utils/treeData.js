export const sampleTreeData = [
  {
    id: "root-1",
    label: "Тема 1",
    children: [
      { id: "root-1-child-1", label: "Въпрос 1" },
      { id: "root-1-child-2", label: "Въпрос 2" },
      {
        id: "root-1-child-3",
        label: "Въпрос 3",
        children: [
          { id: "root-1-child-3-sub-1", label: "Подусловие А" },
          { id: "root-1-child-3-sub-2", label: "Подусловие Б" },
        ],
      },
      {
        id: "root-1-child-4",
        label: "Въпрос 4",
        children: [
          { id: "root-1-child-4-sub-1", label: "Отговор 1" },
          { id: "root-1-child-4-sub-2", label: "Отговор 2" },
          { id: "root-1-child-4-sub-3", label: "Отговор 3" },
        ],
      },
    ],
  },
  {
    id: "root-2",
    label: "Тема 2",
    children: [
      { id: "root-2-child-1", label: "Въпрос 5" },
      { id: "root-2-child-2", label: "Въпрос 6" },
    ],
  },
  {
    id: "root-3",
    label: "Тема 3",
  },
];
