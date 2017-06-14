import React from 'react';


// an API that returns a player object
import NewsAPI from '../../services/NewsAPI/NewsAPI'

import { Link } from 'react-router-dom'
//import { Switch, Route } from 'react-router-dom'



// The Player looks up the player using the number parsed from
// the URL's pathname. If no player is found with the given
// number, then a "player not found" message is displayed.
const ArticleDetail = (props) => {
    const player = NewsAPI.get(
      parseInt(props.match.params.number, 10)
    )
    if (!player) {
        return <div>Sorry, but the article was not found</div>
    }
    return (
        <div className="post">
                  <div className="title">
                      <h1>
                        <a href={player.url} target="_blank">{player.title} (#{player.id})</a>
                      </h1>        
                  </div>
                  <div className="user-block">
                        <span className="username">
                          <a href="#"> {player.author}</a>
                          <a href="#" className="pull-right btn-box-tool"><i className="fa fa-times"></i></a>
                        </span>
                    <span className="description">Posted - {player.publishedAt}</span>
                  </div>
                  <div className="row margin-bottom">
                    <div className="col-sm-12">
                      <img className="img-responsive" src={player.urlToImage} 
                      alt="Photo" />
                    </div>
                    
                     <div className="col-sm-12">                       
                         <div className="description">                                
                              {player.description}                                
                         </div>
                    </div>
                  </div>
                
                  <div>        
                    <Link to='/article'>Back</Link>
                  </div>    
           </div>
  )
}


export default ArticleDetail;