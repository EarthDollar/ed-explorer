angular.module('ethExplorer')
    .controller('addressInfosCtrl', function ($rootScope, $scope, $location, $routeParams,$q) {

        $scope.init=function()
        {


            $scope.AddressId=$routeParams;


            if($scope.AddressId!==undefined) {
            	$scope.address = $scope.AddressId.addressId; 
            	$scope.balance = web3.fromSeed(web3.eth.getBalance($scope.address));
               $scope.txCount = web3.eth.getTransactionCount($scope.address);
               
                    //$scope.result = result;
                    
                    //$scope.hello = $injector.currentTarget;
                    
                    /*

                    if(result.hash!==undefined){
                        $scope.hash = result.hash;
                    }
                    else{
                        $scope.hash ='pending';
                    }
                    if(result.miner!==undefined){
                        $scope.miner = result.miner;
                    }
                    else{
                        $scope.miner ='pending';
                    }
                    $scope.gasLimit = result.gasLimit;
                    $scope.gasUsed = result.gasUsed;
                    $scope.nonce = result.nonce;
                    $scope.difficulty = ("" + result.difficulty).replace(/['"]+/g, '');
                    $scope.gasLimit = result.gasLimit; // that's a string
                    $scope.nonce = result.nonce;
                    $scope.number = result.number;
                    $scope.parentHash = result.parentHash;
                    $scope.blockNumber = result.number;
                    $scope.timestamp = result.timestamp;
                    $scope.extraData = result.extraData;
                    $scope.dataFromHex = hex2a(result.extraData);
                    $scope.size = result.size;
                    if($scope.blockNumber!==undefined){
                        $scope.conf = number - $scope.blockNumber + " Confirmations";
                        if($scope.conf===0 + " Confirmations"){
                            $scope.conf='Unconfirmed';
                        }
                    }
                    if($scope.blockNumber!==undefined){
                        var info = web3.eth.getBlock($scope.blockNumber);
                        if(info!==undefined){
                            var newDate = new Date();
                            newDate.setTime(info.timestamp*1000);
                            $scope.time = newDate.toUTCString();
                        }
                    }



                */

            }



            else{
                $location.path("/");
            }
        };
        $scope.init();

        // parse transactions
        $scope.transactions = []
        web3.eth.getBlockTransactionCount($scope.AddressId, function(error, result){
          var txCount = result

          for (var blockIdx = 0; blockIdx < txCount; blockIdx++) {
            web3.eth.getTransactionFromBlock($scope.blockId, blockIdx, function(error, result) {

              var transaction = {
                id: result.hash,
                hash: result.hash,
                from: result.from,
                to: result.to,
                gas: result.gas,
                input: result.input,
                value: result.value
              }
              $scope.$apply(
                $scope.transactions.push(transaction)
              )
            })
          }
        })


function hex2a(hexx) {
    var hex = hexx.toString();//force conversion
    var str = '';
    for (var i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}
});
