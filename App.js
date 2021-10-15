import { React } from 'react';
import { useEffect, useState } from "react";
import { useMetamask } from "use-metamask";
import { ethers } from "ethers";
import Web3 from "web3";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Footer from "./Footer";
import Info  from "./Info";
import Navbar from './Navbar';
import Main from './Main';
import GreeNFT from './GreeNFT';
import PowerToken from './PowerToken';
import RoadMap from './RoadMap';
import WhitePaper from './WhitePaper';
import Donate from './Donate';
import InvestProsp from './InvestProsp';
import News from './News';
import './App.css';



function App() {
  const { connect, metaState } = useMetamask();
  const [ web3interface, setWeb3Interface ] = useState("ethers");

  useEffect(() => {
    if (metaState.isAvailable && !metaState.isConnected) {
      (async () => {
        try {
          if (web3interface === "ethers")
            await connect(ethers.providers.Web3Provider, "any");
          else if (web3interface === "web3")
            await connect(Web3);
          else 
            throw Error(`Unknown web3 interface: ${web3interface}`);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [metaState.isAvailable, web3interface]);

  const handleWeb3Selector = (event) => setWeb3Interface(event.target.value);


  return (
    <div className="Navbar">
          <Router>
            
            <Navbar />
            <Switch>
              <Route path='/' exact component={Main} />
              <Route path='/GreeNFT' exact component={GreeNFT} />
              <Route path='/PowerToken' exact component={PowerToken} />
              <Route path='/RoadMap' exact component={RoadMap} />
              <Route path='/WhitePaper' exact component={WhitePaper} />
              <Route path='/InvestProsp' exact component={InvestProsp} />
              <Route path='/News' exact component={News} />
              <Route path='/Donate' exact component={Donate} />
            </Switch>
            </Router>
          );
        <Footer />
        
        {
        metaState.isAvailable
        ? <Info state={metaState} web3Handler={handleWeb3Selector}/>
        : <div>
          <p>Metamask required for Crypticity.io!</p>
          <p>Download it:</p>
          <p>
            <code>
              <a href="https://metamask.io/">https://metamask.io</a>
            </code>
          </p>
        </div>
      }
    </div>
    

  )
}

export default App;