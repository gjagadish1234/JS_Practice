//Create a function that returns two functions getSecret and setSecret


function makeSecret(str) {
    let secret = str;
    function getSecret(){
        return secret;
    }

    function setSecret(str) {
        secret = str;
    }

    return {getSecret: getSecret, setSecret: setSecret};

}

const {getSecret, setSecret} = makeSecret("top");
console.log(getSecret());
setSecret("classified");
console.log(getSecret());