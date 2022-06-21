let listaDePessoas = []
let grupo1 = []
let grupo2 = []
let grupo3 = []
let grupo4 = []


fetch("PessoasVacinacao.json")
.then(response => response.json())
.then(pessoas => {
    pessoas.pessoas.map((item) => {
        listaDePessoas.push(item);
        if(item.idade > 60) {
            listaDePessoas = []
            grupo1.push(item)
            
        }else if (item.areaDeAtuacao == "Educação" || item.areaDeAtuacao == "Saúde" || item.areaDeAtuacao == "Segurança" || item.areaDeAtuacao == "Alimentícios" ){
            if(grupo2.length < 5){

                grupo2.push(item)
            }else {
                grupo3.push(item)
                
            }
        }else {
            if(grupo3.length < 3) {
                grupo3.push(item)
            }else {
                grupo4.push(item)
            }             
        }
        
    })
    
});


// function maior60() {     
//     grupo1.length = 0    
//     listaDePessoas.map((item) => {
//         if(item.idade > 60){
//             grupo1.push(item)
//             console.log(grupo1)

//         }

//     })
//     criaTabela(grupo1)
    
// }


// function teste () {     
//     grupo1.length = 0    
//     listaDePessoas.map((item) => {
//         if(item.idade > 60){
//             grupo1.push(item)
//             console.log(grupo1)

//         }

//     })
//     criaTabela(grupo1)
    
// }

// function refresh(){
//     location.reload()
// }
  



function criaTabela(grupo = []) {   
    limparTabela() 
    let tbody = document.querySelector('#body')
    let i =0
    let tr = tbody.insertRow();

    let td_nome = tr.insertCell();
    let td_idade = tr.insertCell();
    let td_area = tr.insertCell();
    

    for(i; i < grupo.length; i ++) {
         tr = tbody.insertRow();

         td_nome = tr.insertCell();
         td_idade = tr.insertCell();
         td_area = tr.insertCell();

        td_nome.innerHTML =  grupo[i].nome
        td_idade.innerHTML =  grupo[i].idade
        td_area.innerHTML =  grupo[i].areaDeAtuacao
    }
};

function limparTabela(){
    let tbody = document.querySelector('#body')
    tbody.innerHTML = ''
}




// console.log(grupo1)
// console.log(grupo2)
// console.log(grupo3)
// console.log(grupo4)
// console.log(listaDePessoas)