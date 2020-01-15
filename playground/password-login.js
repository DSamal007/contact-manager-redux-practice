const bcryptjs = require('bcryptjs')

const encrypted = '$2a$10$yhWAvLC23bfyRcz2TQ0vSejNJiz9nK/fULpKC/2eOITBr8aHhkvLW'
const password = 'secret123'

bcryptjs.compare(password, encrypted)
    .then(function(result){
        console.log(result)
    })
