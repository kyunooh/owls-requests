const axios = require('axios')


for(let i = 0; i < 500; i++) {
    try{
    axios.get("http://127.0.0.1:5000/")
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