document.getElementById("formulario").addEventListener('submit', cadastrarVeiculo);
function cadastrarVeiculo(e){
    var nomeCliente = document.getElementById("nomeCliente").value;
    var modeloCarro = document.getElementById("modeloCarro").value;
    var placaCarro = document.getElementById("placaCarro").value;
    var nomeCarro = document.getElementById("nomeCarro").value;
    var marcaCarro = document.getElementById("marcaCarro").value;
    var time = new Date();

    if(!modeloCarro && !placaCarro)
    {
        alert("Preencha os dados corretamente");
        return false;
    }
     carro = null;
     var datestring = ("0" + time.getDate()).slice(-2) + "/" + ("0"+(time.getMonth()+1)).slice(-2) + "/" +
     time.getFullYear() + " " + ("0" + time.getHours()).slice(-2) + ":" + ("0" + time.getMinutes()).slice(-2);

    carro = {
        nome1: nomeCliente,
        nome2: nomeCarro,
        marca: marcaCarro,
        modelo: modeloCarro,
        placa: placaCarro,
        hora: time.getHours(),
        minutos: time.getMinutes(),
        dia: time.getDay(),
        mes: time.getUTCMonth(),
        ano: time.getFullYear(),
        todo: datestring
    }

    if(localStorage.getItem("carro") === null){
        var carros =[];
        carros.push(carro);
        localStorage.setItem("carro", JSON.stringify(carros));
    }
    else{
        var carros = JSON.parse(localStorage.getItem("carro"));
        carros.push(carro);
        localStorage.setItem("carro", JSON.stringify(carros));
    }

    document.getElementById('formulario').reset()

    mostraPatio();

    e.preventDefault();
}

function apagarVeiculo(placa){
    var carros = JSON.parse(localStorage.getItem("carro"));

    if(carros != null){


        for (var i=0;i<carros.length; i++)
        {
            if(carros[i].placa == placa){
                carros.splice(i, 1);
            }

            localStorage.setItem("carro", JSON.stringify(carros));
        }
    }
    mostraPatio();
}

function mostraPatio(){
    
    // if (localStorage.getItem("carro")!= null)
    // {
        var carros = JSON.parse(localStorage.getItem("carro"));
        var carrosResultado = document.getElementById("resultado");
        carrosResultado.innerHTML = "";

        if(carros.length > 0){

            for(var i=0; i<carros.length; i++)
            {

                var nomeCliente = carros[i].nome1;
                var nomeCarro = carros[i].nome2;
                var marcaCarro = carros[i].marca;
                var modelo = carros[i].modelo;
                var placa = carros[i].placa;
                var hora = carros[i].hora;
                var minutos = carros[i].minutos;
                var dia = carros[i].dia;
                var mes = carros[i].mes;
                var ano = carros[i].ano;
                var todo = carros[i].todo;
                carrosResultado.innerHTML += "<tr><td>" + nomeCliente +
                                            "</td><td>" + nomeCarro +
                                            "</td><td>" + marcaCarro +
                                            "</td><td>" + modelo +
                                            "</td><td>" + placa +
                                            "</td><td>" + todo +
                                            '</td><td><button class="btn btn-danger" onclick="apagarVeiculo(\'' + placa +'\')">Excluir</button>' +
                                            "</td></tr>";
            }
        }
    }
// }
function validarPlaca(entradaDoUsuario) {

        var placa = entradaDoUsuario.value; // Passa para a variável 'placa' o que o usuário digitar no formulário
        
        if (placa.length === 1 || placa.length === 2) {   
            console.log("1")                    // Quando a string possuir 1 ou 2 dígitos
                placaMaiuscula = placa.toUpperCase();                      // Passa a string para letras maiúsculas
                document.getElementById("placaCarro").value = placaMaiuscula; // Coloca a nova string de volta no formulário
                return true;
        }
 
        if (placa.length === 3){             
            console.log('2')                                           // Quando a string possuir 3 dígitos
                placa += "-";                                                                 // Adiciona um hífen
                placaMaiuscula = placa.toUpperCase();                   // Passa a string para letras maiúsculas
                document.getElementById("placaCarro").value = placaMaiuscula; // Coloca a nova string de volta no formulário
                return true;
    }
}
