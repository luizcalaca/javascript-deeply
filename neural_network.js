const { Layer, Network } = window.synaptic;

var inputLayer  = new Layer(2);
var hiddenLayer = new Layer(3);
var outputLayer = new Layer(1);

inputLayer.project(hiddenLayer);
hiddenLayer.project(outputLayer);
var myNetwork = new Network({
 input:  inputLayer,
 hidden: [hiddenLayer],
 output: outputLayer
});

var learningRate = .3;
for (var i = 0; i < 20000; i++) {
// 0 xor 0 => 0
  myNetwork.activate([0,0]);
  myNetwork.propagate(learningRate, [0]);
// 0 xor 1 => 1
  myNetwork.activate([0,1]);
  myNetwork.propagate(learningRate, [1]);
// 1 xor 0 => 1
  myNetwork.activate([1,0]);
  myNetwork.propagate(learningRate, [1]);
// 1 xor 1 => 0
  myNetwork.activate([1,1]);
  myNetwork.propagate(learningRate, [0]);
}

console.log(myNetwork.activate([0,0])); 
console.log(myNetwork.activate([0,1]));
console.log(myNetwork.activate([1,0]));
console.log(myNetwork.activate([1,1]));