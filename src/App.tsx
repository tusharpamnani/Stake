import React from "react";
import { useMetaMaskStore, useGardenSetup } from "./store";
import Balances from "./Balances";
import StakeComponent from "./StakeComponent";
import './App.css'

const App: React.FC = () => {
  const { connectMetaMask } = useMetaMaskStore();

  useGardenSetup();

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={connectMetaMask}>Connect MetaMask</button>
        <Balances />
        {/* <StakeComponent /> */}
      </header>
    </div>
  );
};

export default App;
