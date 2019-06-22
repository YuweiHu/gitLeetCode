var isPalindrome = function(x) {
    let a= x.toString();
    let rev=[];
    for(i=a.length-1;i>=0;i--){
        rev=rev+a[i];
    }
    
    if(rev==a){
        return true;
    }else{
        return false;
    }
    
};