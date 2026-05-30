// CLI: Command Line Interface
// import TodoListClass from "./core"
// import { Item, TodoList } from "./core"
// import { Item as Item1, TodoList as TodoList1 } from "./core"

import TodoListClass, { Item } from "./core"

const todolist = new TodoListClass("todolist.json")
const params = process.argv
const command = params[2]

// ------------------------------------------------------------------------------
// --- Comando List
// ------------------------------------------------------------------------------

if (command === "list") {
    const items = await todolist.getItems()
    console.log("Lista de itens:")

    // for (let index = 0; index < items.length; index++) {
    //     const item = items[index] as Item
    //     console.log(`${index}: ${item.title}`)
    // }

    items.forEach((item, index) => {
        console.log(`${index}: ${item.title}`)
    })

    process.exit(0)
}

// ------------------------------------------------------------------------------
// --- Comando Add
// ------------------------------------------------------------------------------

if (command === "add") {
    const value = params[3]

    if (!value) {
        console.error("Valor do item é obrigatório")
        process.exit(1)
    }

    try {
        await todolist.addItem(new Item(value))
    } catch (error) {
        console.error("Erro ao adicionar item:", error)
        process.exit(1)
    }

    console.log(`Item "${value}" adicionado com sucesso!`)
    process.exit(0)
}

// ------------------------------------------------------------------------------
// --- Comando Remove
// ------------------------------------------------------------------------------

if (command === "remove") {
    const indexStr = params[3]
    if (!indexStr) {
        console.error("Índice do item é obrigatório")
        process.exit(1)
    }
    const index = parseInt(indexStr)
    if (isNaN(index)) {
        console.error("Índice inválido, precisa ser um número inteiro")
        process.exit(1)
    }
    await todolist.removeItem(index)
    console.log(`Item no índice ${index} removido com sucesso!`)
    process.exit(0)
}

// ------------------------------------------------------------------------------
// --- Fallback para comandos não reconhecidos
// ------------------------------------------------------------------------------

if (command)
    console.log(`Comando não reconhecido: ${command}`)

console.log(`Comandos disponíveis:
- add <item>: Adiciona um item à lista
- remove <index>: Remove um item da lista por indice
- list: Lista os itens atuais
`)

//capturar oque o usuario digitou
//ver se digitou certo
//chamar o core.ts

if(command === "update") {
    const indexStr = params[3]
    const newTitle = params[4]

    const index = parseInt(indexStr)
}
if (!indexStr or !newTitle or isNaN(index)) {
        console.error("dados incorretos para update")
        process.exit(1)
    }

    try {
        await todolist.updateItem(index, newTitle)
        console.log("atualizção realizada com sucesso")
    } catch (error) {
        console.error("Erro ao atualizar item:", error)
        process.exit(1)
     }
