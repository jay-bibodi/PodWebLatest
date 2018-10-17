pragma solidity ^0.4.25;

contract Regulator {
    mapping(string => string) private emailAddressMapping;

    function storeEmailAddressMapping (
        string emailAddress,
        string userAddress) returns(bool)
        {
            emailAddressMapping[emailAddress] = userAddress;
            return true;
        }
    
    function getAddress(
        string emailAddress) returns(string userAddress) 
    {
        userAddress = emailAddressMapping[emailAddress];
    }
}