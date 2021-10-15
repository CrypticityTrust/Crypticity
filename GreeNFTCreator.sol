// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract NFTMasterCreator is ERC721URIStorage, Ownable {
    address payable public contractOwner;
    address public toAddress;
    uint256 public tokenId;
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    uint256 price;
    string _tokenURI;


    event Minted(address indexed minter, uint price, uint GreeNFTID, string tokenURI);

    constructor() ERC721("GreeNFT", "GFT") {
        contractOwner = payable(msg.sender);
    }

    function mintGreeNFT() public payable returns (uint) {
        
        _tokenIds.increment();
        
        toAddress = (msg.sender);
        
        _tokenURI = "ipfs://QmVk8mrP3z8aSk6pLYiuE271N1vZXYngUR3pUQQp73mWCW";
        
        uint256 _tokenId = _tokenIds.current();
        
        require(msg.value >= 100000000000000000 wei, "Not enough ETH sent; check price!");
        
        _safeMint(toAddress, _tokenId);
        _setTokenURI(_tokenId, _tokenURI);
        
        contractOwner.transfer(msg.value);
        
        emit Minted(toAddress, price, _tokenId, _tokenURI);

        return _tokenId;
        
    }
    

}