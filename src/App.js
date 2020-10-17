import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Videos from './views/videos';
import Home from './views/home';

import IPFS from 'ipfs';
import DistrictSelector from './components/district-selector';

import logo from './logo.svg';
import './App.css';

function App() {
  let [ node, setId] =React.useState('')
  React.useEffect(() => {
    async function startIPFS(){ 
      let node = await IPFS.create({repo: 'sacred-realm'})
      let nodeId = await node.id()
      setId(nodeId.id)
      window.ipfs = node;      

      const stream = node.cat('QmSK6oyVsbQftJPuaKEczf2pCjYepj6nz1jWz4jef93y9y')
      let data = Buffer.from('') 

      for await (const chunk of stream) {
        // chunks of data are returned as a Buffer, convert it back to a string
        data = Buffer.concat([data, chunk])
      }

      console.log(data)
        /*      for await (const { cid } of results) {
        // CID (Content IDentifier) uniquely addresses the data
        // and can be used to get it again.

        console.log(cid.toString())
      }*/

    }
    startIPFS();
  }, [])
  return (
  <Router>
    <div className="App">
      <Route path="/videos" component={Videos} />
      <Route path="/" exact component={Home} />
    </div>
  </Router>
  );
}

export default App;
