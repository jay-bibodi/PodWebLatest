contract NewRegulator {
    
    address public authorizedRegulator;

    struct IpfsAndAmount{
        string ipfsPath;
        string ipfsAddress;
        string amount;
    }
    
    function NewRegulator() { 
        authorizedRegulator = msg.sender;
    }

    modifier onlyIfRegulator() {
        if (msg.sender == authorizedRegulator)
            _;
        else
          throw;
    }

    mapping(address => string) public emailAddressMapping;
    mapping(address => uint256) public addrToIpfsCount;
    mapping(address => IpfsAndAmount[]) public addressToIpfsStruct;
    
    function storeEmailAddressMapping(address userAddress,string emailAddress) public onlyIfRegulator returns (bool success) {
        emailAddressMapping[userAddress] = emailAddress;
        return true;
    }
    
    function storeAddressAndIpfsStruct(address _userAddress,string ipfsPath,string ipfsAddr,string amount) public onlyIfRegulator returns (bool success){
        IpfsAndAmount memory ipfsAndAmountObject;
        ipfsAndAmountObject.ipfsAddress = ipfsAddr;
        ipfsAndAmountObject.ipfsPath = ipfsPath;
        ipfsAndAmountObject.amount = amount;
        
        IpfsAndAmount[] arrObject = addressToIpfsStruct[_userAddress];
        arrObject.push(ipfsAndAmountObject);
        
        uint256 count = addrToIpfsCount[_userAddress];
        addrToIpfsCount[_userAddress] = (count + 1);
        
        return true;
    }
}