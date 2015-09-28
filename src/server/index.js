let express = require('express');
let app = express();

app.use((req, res, next) => res.send({message: 'awesome'}));

console.log(process.env.FOONAR)
app.listen(3000)
