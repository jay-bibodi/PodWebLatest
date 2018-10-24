contract Regulator {
    
    mapping(address => string) public emailAddressMapping;

    function storeEmailAddressMapping(address userAddress,string emailAddress) public returns (bool success) {
        emailAddressMapping[userAddress] = emailAddress;
        return true;
    }
}