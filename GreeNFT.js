import React from 'react';
import Web3 from 'web3';
import './Button.css';
import './GreeNFT.css';
import loadContract from './Contract';


export default function GreeNFT () {

    async function loadWeb3() {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            window.ethereum.enable();
        }
    }
    
    async function load() {
        await loadWeb3();
        window.web3.eth.Contract = await loadContract();
    }
    
    async function getCurrentAccount() {
        const accounts = await window.ethereum.getAccounts();
        return accounts[0];
    }

    async function mintGreeNFT() {
        const _price = "250000000000000000000 wei";
        const account = await getCurrentAccount();
        const MintGreeNFT = await window.ethereum.Contract.methods.mintGreeNFT(_price).send({ from: account });
     }

    load();
    
return (
    <div className="gftcontainer">
        <div class="gftwrapper">
            <div class="gftboxheader"></div>
            <div class="gftboxheader1"><gp9><u>GreeNFT Gallery</u></gp9></div>
            <div class="gftboxheader"></div>
            <div class="box gfta"></div>
            <div class="box gftb"></div>
            <div class="box gftc"></div>
            <div class="box gftd">
                    <a href="https://crypticity.io/wp-content/uploads/2021/09/Transfer-of-P.O.W.E.R..jpg" 
                               target="_blank"
                               rel="noopener noreferrer"><gp8><u>Transfer of P.O.W.E.R.</u></gp8></a>
                    <br />
                    <gp3><i><b>"The Prince of Fire was thought to be immortal, having never been bested by man."</b></i></gp3>
                    <br />
                    <gp3>Titan Activation Protocol - Elementals #2 - The Prince of Fire
                    <br /> 
                    <br />
                    Owner of this one of a kind <gp5>GreeNFT</gp5> is rewarded with one free <gp5>GreeNFT</gp5> of <u>every</u> project that Crypticity releases.
                    <br />
                    <br />
                    100 ETH - Pre-order is available</gp3><br />
                    <a href="mailto:Donate@crypticity.io"><gp10><u>Contact us to pre-order!</u></gp10></a>
                    </div>
            <div class="box gfte">
                            <a href="https://crypticity.io/wp-content/uploads/2021/09/An-Offering-of-Power.jpg" 
                               target="_blank"
                               rel="noopener noreferrer"><gp1><u>An Offering of P.O.W.E.R.</u></gp1></a>
                    <br />
                    <gp3><i><b>"The sermon of the Prophets often spoke of the rewards of giving more than you can afford. You had no idea just how great the rewards would be!"</b></i>
                    <br />
                    <br />
                    Owner of this <gp5>GreeNFT</gp5> is granted an invite to the private presell of the first land aquisition drop of <gp7>Project Helios</gp7>.
                    <br />
                    <br />
                    This <gp5>GreeNFT</gp5> can be purchased for 250 MATIC during the open donation period.</gp3>
                    <br />
                    <c><button className="button MintGreeNFT" onclick={() => mintGreeNFT()}>Purchase & Mint</button></c>
                </div>
            <div class="box gftf">
                    <a href="https://crypticity.io/wp-content/uploads/2021/09/Kiss-of-the-Lady.jpg" 
                       target="_blank"
                       rel="noopener noreferrer"><gp4><u>Kiss Of The Lady</u></gp4></a>
                    <br />
                    <gp3><i><b>"They said it would only take a kiss, but you had to be sure."</b></i></gp3>
                    <br />
                    <gp3>Titan: Activation Drop - Water Elemental #1 - Lady of the Lake  
                    <br />
                    <br />
                    Owner of this one of a kind <gp5>GreeNFT</gp5> is rewarded with one free <gp5>GreeNFT</gp5> of <u>every</u> project that Crypticity releases.
                    <br />
                    <br />
                    100 ETH - Pre-order is available</gp3><br />
                    <a href="mailto:Donate@crypticity.io"><gp10><u>Contact us to pre-order!</u></gp10></a>
                </div>
            <div class="box gftg"></div>
            <div class="box gfth"></div>
            <div class="box gfti"></div>
            <div class="box gftj"></div>
            <div class="box gftk">
                <a href="https://crypticity.io/wp-content/uploads/2021/09/Crypticity.jpg"
                target="_blank"
                rel="noopener noreferrer"><gp6><u>Titan: Activated</u></gp6></a>
                <br />
                <gp3><i><b>"Long have the followers been forsaken by those who were sworn to serve and protect them, long have they paid more than their fair share for too little, and long have they searched for another way. Could this be it… Could <u>now</u> be the time...”</b></i></gp3>
                <br />
                <gp3>This <gp5>GreeNFT</gp5> is the reward for anyone participating in either the Offering of P.O.W.E.R. or Titan: Activation phases. Owner of this <gp5>GreeNFT</gp5> is invited to our private presell of the first Facilities <gp5>GreeNFT</gp5> drop for <gp7>Project Helios</gp7>.</gp3>
                <br />
                <br />
            </div>
            <div class="box gftl"></div>
        </div>
    </div> );
}