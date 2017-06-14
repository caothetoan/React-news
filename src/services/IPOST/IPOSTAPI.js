
// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.

//http://localhost:54076/pos/pos_token
//http://localhost:54076/pos/all_data

var API_KEY = 'fe83f3db0a7c4d6d95fb11f58f4a07e1';
var REQUEST_URL = function(source){
    return 'http://apimc.foodizzi.dev/pos/' + source;
} 
const IPOSTAPI = {
    players: [
      { number: 1, name: "Ben Blocker", position: "G" },
      { number: 2, name: "Dave Defender", position: "D" },
      { number: 3, name: "Sam Sweeper", position: "D" },
      { number: 4, name: "Matt Midfielder", position: "M" },
      { number: 5, name: "William Winger", position: "M" },
      { number: 6, name: "Fillipe Forward", position: "F" }
    ],
    fetchData() {
        fetch(REQUEST_URL('all_data'))
        .then((response) => response.json())
        .then((responseData) => {

                return responseData;
            })
        .done();
    },
    all: function () { return this.players },
    get: function (id) {
        const isPlayer = p => p.number === id
        return this.players.find(isPlayer)
    }
}

export default IPOSTAPI