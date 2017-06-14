
// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
var API_KEY = 'fe83f3db0a7c4d6d95fb11f58f4a07e1';
var REQUEST_URL = function(state){
    return 'https://newsapi.org/v1/articles?source=' + state.source + '&sortBy='+ state.sortBy + '&apiKey=' + API_KEY;
} 
const NewsAPI = {
    players: [
     {id: 1, "author":"Darrell Etherington","title":"Take a first look at the Xbox One X hardware up close","description":"Microsoft revealed the Xbox One X to the world today, proving that it thinks X is just the best letter. The new console is mostly an Xbox One, but with 4K HDR..","url":"https://techcrunch.com/2017/06/11/take-a-first-look-at-the-xbox-one-x-hardware-up-close/","urlToImage":"https://tctechcrunch2011.files.wordpress.com/2017/06/xbox-one-x-p6110106.jpg?w=764&h=400&crop=1","publishedAt":"2017-06-12T02:02:45Z"},
     {id: 2,"author":"Lucas Matney","title":"Microsoft ignores VR at its Xbox One X launch event","description":"At its E3 Xbox One X reveal event on Sunday, Microsoft shared a relentless stream of boundary-pushing system specs for the new console, but it stayed..","url":"https://techcrunch.com/2017/06/11/microsoft-ignores-vr-at-its-xbox-one-x-launch-event/","urlToImage":"https://tctechcrunch2011.files.wordpress.com/2017/06/e3-xbox-2017-scorpio_280.jpg?w=764&h=400&crop=1","publishedAt":"2017-06-12T00:05:52Z"},
     {id: 3,"author":"Stefan Etienne","title":"Microsoft announces original Xbox backwards compatibility for the Xbox One X","description":"#BackwardCompatibility is expanding to include original #Xbox games. Watch #XboxE3 live: https://t.co/Z3I4CSvRn2 #XboxOneX pic.twitter.com/81NE0rZBUe — Xbox..","url":"https://techcrunch.com/2017/06/11/microsoft-announces-original-xbox-backwards-compatibility-for-the-xbox-one-x/","urlToImage":"https://s0.wp.com/wp-content/themes/vip/techcrunch-2013/assets/images/techcrunch.opengraph.default.png","publishedAt":"2017-06-11T22:54:12Z"},
     {id: 4,"author":"Jordan Crook","title":"Watch Bethesda’s E3 live stream right here","description":"Bethesda has made a name for itself with series like The Elder Scrolls, Fallout, Doom, and Wolfenstein. And today, the studio is set to show off what it's..","url":"https://techcrunch.com/2017/06/11/watch-bethesdas-e3-live-stream-right-here/","urlToImage":"https://tctechcrunch2011.files.wordpress.com/2017/06/screen-shot-2017-06-09-at-2-16-04-pm.png?w=764&h=400&crop=1","publishedAt":"2017-06-11T22:47:28Z"},
     {id: 5,"author":"Jonathan Shieber","title":"Minecraft is now available for cross-play on any device","description":"With the launch of Microsoft's new Xbox One X gamers got an update on the latest Minecraft news -- chiefly that Minecraft is now available across any..","url":"https://techcrunch.com/2017/06/11/minecraft-is-now-available-for-cross-play-on-any-device/","urlToImage":"https://tctechcrunch2011.files.wordpress.com/2016/10/photo-04-10-2016-19-17-10.png?w=764&h=400&crop=1","publishedAt":"2017-06-11T22:27:07Z"},
     {id: 6,"author":"Brian Heater","title":"The Xbox One X is Microsoft’s powerful new 4K console","description":"A full year after first teasing Project Scorpio at its last E3 event, Microsoft finally took the wraps of its new console, now called the Xbox One X...","url":"https://techcrunch.com/2017/06/11/the-xbox-one-x-is-microsofts-powerful-new-4k-console/","urlToImage":"https://tctechcrunch2011.files.wordpress.com/2017/06/xboxonex.jpg?w=764&h=400&crop=1","publishedAt":"2017-06-11T21:08:53Z"},
     {id: 7,"author":"Kobie Fuller","title":"Organizing your marketing tech stack","description":"Figuring out how to organize your marketing stack is almost like putting together a 1,000 piece blank jigsaw puzzle -- impossible.","url":"https://techcrunch.com/2017/06/11/organizing-your-marketing-tech-stack/","urlToImage":"https://tctechcrunch2011.files.wordpress.com/2016/12/gettyimages-511198640.jpg?w=764&h=400&crop=1","publishedAt":"2017-06-11T19:30:42Z"},
     {id: 8,"author":"Connie Loizos","title":"Uber’s board is discussing a leave of absence for Travis Kalanick; will Garrett Camp replace him?","description":"According to a variety of media reports, Uber’s board is meeting in Los Angeles today in what may be the most critical sit-down in the company’s..","url":"https://techcrunch.com/2017/06/11/ubers-board-is-discussing-a-leave-of-absence-for-travis-kalanick-will-garrett-camp-replace-him/","urlToImage":"https://tctechcrunch2011.files.wordpress.com/2017/02/gettyimages-5434068142.jpg?w=640&h=400&crop=1","publishedAt":"2017-06-11T19:07:45Z"},
     {id: 9,"author":"Jordan Crook","title":"Microsoft’s E3 “Project Scorpio” Xbox live blog","description":"HEY!!! \"Project Scorpio\" is the most hotly anticipated item at E3 this year, and Microsoft is set to show off the new console today at a 2pm PT / 5pm ET..","url":"https://techcrunch.com/2017/06/11/microsofts-e3-project-scorpio-xbox-live-blog/","urlToImage":"https://tctechcrunch2011.files.wordpress.com/2017/06/p61100731.jpg?w=658&h=400&crop=1","publishedAt":"2017-06-11T18:06:57Z"},
     {id: 10,"author":"Jordan Crook","title":"Tune in to Microsoft’s E3 “Project Scorpio” live stream","description":"It's a big week for gamers everywhere, and Xbox loyalists in particular have plenty to be excited about. Microsoft is going live with their E3 press..","url":"https://techcrunch.com/2017/06/11/project-scorpio-microsoft-e3-xbox-live-stream/","urlToImage":"https://tctechcrunch2011.files.wordpress.com/2017/04/xbox-scorpio.png?w=764&h=400&crop=1","publishedAt":"2017-06-11T17:56:21Z"}
    ],
    fetchData() {
        var state = {           
            source: 'techcrunch',
            sortBy: 'latest'
        };
        //  fetch('/api/foo')
        //.then(response => response.json())
        //.then((foo) => { this.setState({ foo }); });

        fetch(REQUEST_URL(state))
        .then((response) => response.json())
        .then((responseData) => {
            this.players = responseData.articles;
            return this.players;
        });
    },
    all: function () {
        return this.players;
    },
    get: function (id) {
        const isPlayer = p => p.id === id
        return this.players.find(isPlayer)
    }
}

export default NewsAPI