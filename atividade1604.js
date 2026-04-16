const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let salvar = [];

    function menu(){
    console.log('\n===MENU===')
    console.log('1 - Adicionar')
    console.log('2 - Listar')
    console.log('3 - Editar')
    console.log('4 - Marcar como concluido')
    console.log('9 - Encerrar programa!')

    rl.question('Digite a opção desejada: ', (input)=>{
        switch(input){
            case '1':
            Adicionar();
            break;
            case'2':
            listar();
            break;
            case'3':
            editar();
            break;
            case'4':
            marcar();
            break;
            case'9':
            console.log('Encerrando...');
            rl.close();
            break;
            default:
                console.log('Opção inválida...');
                menu()

        }
    })
}

    function Adicionar(){
    rl.question('Lembrete: ', (lembrete) => {
        rl.question('Prazo: ',(prazo) => {
        let lembretes = {
            lembrete:lembrete,
            prazo:prazo,
            concluido:false
        }
        salvar.push(lembretes)
        console.log('=Seu lembrete foi salvo com sucesso=')
        
        menu()
       })
    })
 }


    function listar(){
    if(salvar.length === 0){
        console.log('==Você não tem nenhum lembrete salvo==')
        menu()
    }else{
        console.log('\n==SEUS LEMBRETES==')
        salvar.forEach((item, index) => {
        console.log(`${index} | Lembrete - ${item.lembrete} | Prazo - ${item.prazo} | Concluido - ${item.concluido}`)
             menu()   
           })
        }
 }

    function marcar(){
        if(salvar.length === 0){
            console.log('Não há lembretes')
            menu()
        }

        listarLembretes()
        rl.question('Digite o indice do lembrete', (i) =>{
            const index = parseInt(i)
            if(salvar[index]){
                salvar[index].concluido = true 
                    console.log('Lembrete concluido com sucesso!')
                } else {
                    console.log('Indice invalido')
                
                }
                menu()
            })
        }
    function editar(){
        if(salvar.length === 0){
            console.log('Não há lembretes')
            menu()
            return
        }
        listarLembretes()
        rl.question('Digite o indice que deseja editar: ', (i) =>{
            const indice = parseInt(i)
            if(salvar[indice]){
                rl.question('Novo lembrete: ', (novoTexto) => {
                    rl.question('Novo prazo: ', (novoPrazo)=>{
                        salvar[indice].lembrete = novoTexto
                        salvar[indice].prazo = novoPrazo

                        console.log('Lembrete alterado com sucesso')
                        menu()
                    })
                })
            }else{
                console.log('Indice invalido!')
               menu()
            
              }
            })
        }
        
    

    function listarLembretes(){
        console.log('Escolha seu lembrete')
            salvar.forEach((item, index) => {
                console.log(`${index} - ${item.lembrete}`)
         })
        }
    
    
        
        menu()