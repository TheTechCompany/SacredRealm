import React from 'react';
import IPFSDropzone from 'react-ipfs-dropzone';

export default function Videos(props){
  return (
    <div>
      <IPFSDropzone onLoad={(items) => console.log(items)} />      
    </div>
  );
} 
