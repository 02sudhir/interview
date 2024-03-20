import React, { useState } from 'react';

const Folder = ({ folder, onFolderclick }) => {
  const [isOpen,setIsOpen] = useState(false);
  const toggelFolder = () => {
    setIsOpen(!isOpen);
    if(!isOpen){
      onFolderclick(folder);
    }
    
  };
  return (
    <div style={{ marginLeft: '20px' }}>
    <strong onClick={toggelFolder} style={{cursor:'pointer'}}>{folder.name}</strong>
    {isOpen && (
    
    <ul>
      {folder.children.map((item, index) => (
        <li key={index}>
          {item.type === 'folder' ? (
            <Folder folder={item}  onFolderclick={onFolderclick}/>
          ) : (
            <File file={item} />
          )}
        </li>
      ))}
    </ul>
    )}
  </div>
);
          
};
const File = ({ file }) => (
  <div style={{ marginLeft: '20px' }}>
    <em>{file.name}</em>
  </div>
);

const App = () => {
const [currenFolder,setcurrentFolder]=useState(null);
const handlerFolderClick = (folder) =>{
  setInterval(folder);
};
  
  // const handlerFolderClick =(folder) =>{

  //   setcurrentFolder(folder);
  // };

  return (<div>
    <h2>Folder Structure</h2>
    {folders.children.map((folder,index) =>(

    <Folder key={index} folder={folder} onFolderclick ={handlerFolderClick}/>
    ))}
  </div>
);
    };
  
      // <div>
      //   <button onClick={() => setcurrentFolder(null)}> back</button>
      //   <h2>{currenFolder.name}</h2>
      //   <Folder folder={currenFolder} onFolderclick ={handlerFolderClick}/>
      // </div>

      
   
      
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

export default App;
