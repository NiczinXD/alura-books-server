const { Router } = require("express")
const { getLivros } = require("../controladores/livro")

const router = Router()

router.get('/', (req, res) => {
    res.send("Olá mundo da Alura do Brasil!")
})

router.post('/', getLivros)

router.patch('/', (req, res) => {
    res.send('Você fez uma requisição do tipo patch')
})

router.delete('/', (req, res) => {
    res.send('Você fez uma requisição do tipo delete')
})

module.exports = router