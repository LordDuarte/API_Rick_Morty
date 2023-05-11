let apiResp1 = []
let resultBusca = []
const busca = document.getElementById("pesquisa")
const id = document.getElementById('resultado')

busca.addEventListener("focusout",(evt) => {
    acessaAPI(valor = busca.value)
    id.style.display= 'block'
    }
)

busca.addEventListener("search",(evt) => {
    acessaAPI(valor = busca.value)
    id.style.display= 'block'
    }
)

async function acessaAPI(busca){
    const charactersAPI = 'https://rickandmortyapi.com/api/character/'
    const resp1 = await fetch(charactersAPI)
    apiResp1 = await resp1.json()
    bodyJson = apiResp1.results;

    console.log(bodyJson)


    const resultado = bodyJson.filter(el => el.name == valor)


    if (resultado.length ==0){
        limpa()
        console.log(resultado)
        console.log("Limpado")
    }

    else if (resultado.length>0){
    resultado.map((el) => {
        const {image, name, status, species, type, gender} = el
        console.log(resultado)
        exibirResult(image, name, status, species, type, gender)
    })
    }

}

function limpa(){
    id.style.display = 'none'
}



const elementoParaExibir = document.getElementById("resultado")

function exibirResult(image ,name, status, species, type, gender) {

        elementoParaExibir.innerHTML =`
        <div class="caixa_resultado">
        <img id="image" src="${image}" alt="">
        <h1 id="nome">
            ${name}
        </h1>
        <div id="infos">
            <p id="status">Status: ${status}</p>
            <p id="species">Specie: ${species}</p>
            <p id="type">Type: ${type}</p>
            <p id="gender">Gender: ${gender}</p>
        </div>
        `
}
