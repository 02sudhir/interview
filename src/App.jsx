import React from 'react';

const Folder = ({ folder }) => (
  <div style={{ marginLeft: '20px' }}>
    <strong>{folder.name}</strong>
    <ul>
      {folder.children.map((item, index) => (
        <li key={index}>
          {item.type === 'folder' ? (
            <Folder folder={item} />
          ) : (
            <File file={item} />
          )}
        </li>
      ))}
    </ul>
  </div>
);

const File = ({ file }) => (
  <div style={{ marginLeft: '20px' }}>
    <em>{file.name}</em>
  </div>
);

const App = () => {
  const folders = {
    name: 'Main Folder',
    children: [
      {
        type: 'folder',
        name: 'Subfolder 1',
        children: [
          { type: 'file', name: 'File 1.txt' },
          { type: 'file', name: 'File 1.txt' },
        ],
      },
      {
        type: 'folder',
        name: 'Subfolder 2',
        children: [
          { type: 'file', name: 'File 2.txt' },
          { type: 'folder', name: 'Subfolder 2', children: [{ type: 'file', name: 'File 2.2.txt' }] },
        ],
      },
    ],
  };

  return (
    <div>
      <h2>Folder Structure</h2>
      <Folder folder={folders} />
    </div>
  );
};

export default App;
