import React from 'react';
import DistrictSelector from '../../components/district-selector';
export default function Home(props){
  const [ cid, setCid ] = React.useState('')

  return (
    <div> 
      <input value={cid} onChange={(e) => setCid(e.target.value)} />
      <button onClick={() => {
        async function checkFile(){
        const stream = window.ipfs.cat(cid)
        let data = Buffer.from('')

        for await (const chunk of stream) {
          // chunks of data are returned as a Buffer, convert it back to a string
          data = Buffer.concat([data, chunk])
        }

        console.log(data)
        }
        checkFile()
      }} >Check</button>
      <DistrictSelector />   
    </div>
  )
}
