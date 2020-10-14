function createStartArray()
{
  var t = document.getElementById("usuario_number_start");
  number_start = parseInt(t.value);
  var e = document.getElementById("usuario_number_elements");
  number_elements = parseInt(e.value);

  var element_array = number_start;
  for (var i = 0; i < number_elements; i++)
  {
    startArray.push(element_array);
    element_array++;
  }
}
function createFinalArray()
{
  var p = document.getElementById("usuario_number_plus");
  number_plus = parseInt(p.value);
  var newValue = 0;
  finalArray = startArray.slice();//Esta linea utiliza el metodo slice para crear una copia independiente de un array en JS
  for(var i = 0; i < finalArray.length; i++)
  {
    console.log(startArray);
    newValue = finalArray[i] + number_plus;
    finalArray[i] = newValue;
    // console.log(finalArray[i])
  }
}

function displayArrays()
{
  startArray = [];
  finalArray = [];
  createStartArray();
  createFinalArray();
  document.getElementById("resultado").innerHTML = "<br>";
  for (var i = 0; i < finalArray.length; i++)
  {
    var posicion = 0;
    var valorInicial = 0;
    var valorFinal = 0;
    posicion = i;
    valorInicial = startArray[i];
    valorFinal = finalArray[i];
    console.log(i);
    console.log(startArray[i]);
    console.log(finalArray[i]);

    resultado.insertAdjacentHTML("beforeend","<br>El elemento " +posicion +" del arreglo es " +valorInicial+" y su valor final es "+valorFinal+"." );
  }
}
var number_start = 0;
var number_elements = 0;
var number_plus = 0;
var startArray = [];
var finalArray = [];
var resultado = document.getElementById("resultado");
var b = document.getElementById("play");
b.addEventListener("click", displayArrays);
