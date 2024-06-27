const express = require('express');
const dotenv = require('dotenv');
const supabase = require('supabase');

dotenv.config({ "path": "../config/config.env" });

const app = express();


const supabase_client = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

let { members, error } = await supabase
    .from('members');

console.log(members);


// const members = [{ id: "1", name: "Bootcamp for Node" },
// { id: "2", name: "Bootcamp for React" }
// ]

app.get('/api/vi/members', (req, res) => {
    res.status(200).json({ success: true, data: bootCamps })
})

app.get('/api/vi/bootcamps/:id', (req, res) => {
    console.log("req.params.id: ", req.params.id);
    console.log("typeof req.params.id: ", typeof req.params.id);

    const bootCamp = bootCamps.find((item) => { console.log("item.id: ", item.id); console.log("typeof item.id: ", typeof item.id); return item.id === req.params.id ? item : undefined })
    console.log(bootCamp);
    if (bootCamp != undefined)
        res.status(200).json({ success: true, data: bootCamp })
    else
        res.status(404).json({ success: false, error: { msg: "Id not found" } })
})

app.post('/api/vi/bootcamps')

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server start in mode: ${process.env.NODE_ENV}, on port: ${PORT}`));