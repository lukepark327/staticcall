// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.19;

contract Test {
    uint256 slot0 = 123;
    bool public key;

    function get(uint256 num) public returns (uint256) {
        key = true;
        return slot0 + num;
    }
}
