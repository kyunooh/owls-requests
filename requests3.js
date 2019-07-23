const axios = require('axios')


for(let i = 0; i < 200; i++) {
    try{
    axios.get("http://127.0.0.1:5003/")
        // .then(res => console.log(res))
        .catch(
            err => {
                console.log(`=================================================== ${i}`)
                console.error(err)
            }
        );
    } catch(err) {
        console.log(`=================================================== ${i}`)

        console.error(err);
    }
}