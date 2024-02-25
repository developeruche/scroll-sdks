// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts@5.0.1/token/ERC721/ERC721.sol";


interface IScrollERC721 {
  /// @notice Return the address of Gateway the token belongs to.
  function gateway() external view returns (address);

  /// @notice Return the address of counterpart token.
  function counterpart() external view returns (address);

  /// @notice Mint some token to recipient's account.
  /// @dev Gateway Utilities, only gateway contract can call
  /// @param _to The address of recipient.
  /// @param _tokenId The token id to mint.
  function mint(address _to, uint256 _tokenId) external;

  /// @notice Burn some token from account.
  /// @dev Gateway Utilities, only gateway contract can call
  /// @param _tokenId The token id to burn.
  function burn(uint256 _tokenId) external;
}


contract MyToken is ERC721, IScrollERC721 {
    constructor() ERC721("MyToken", "MTK") {}
    address counterPartAddress;


    function gateway() external pure returns (address) {
        // l1 erc721 scroll gateway
        return 0xEF27A5E63aa3f1B8312f744b9b4DcEB910Ba77AC;
    } 

    function counterpart() external view returns (address) {

        return counterPartAddress; // l2 counter part address
    }

    function mint(address _to, uint256 _tokenId) external {
        _mint(_to, _tokenId);
    }

    // @dev allowing anyone to burn including the gate 
    function burn(uint256 _tokenId) external {
        _burn(_tokenId);
    }

    function setCounterPart(address newCounterPart) external {
        counterPartAddress = newCounterPart;
    }
}
