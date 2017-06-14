
// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
var REQUEST_URL = function(state){
    return 'http://apimc.foodizzi.dev/' + state.source;
} 
const MerchantAPI = {
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

export default MerchantAPI