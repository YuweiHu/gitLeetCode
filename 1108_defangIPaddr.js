// 48ms >86.86%
var defangIPaddr = function(address) {
    return address.split('.').join('[.]');
};