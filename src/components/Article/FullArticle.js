import React from 'react';
import { Link } from 'react-router-dom'
import NewsAPI from '../../services/NewsAPI/NewsAPI'

// The FullRoster iterates over all of the players and creates
// a link to their profile page.
const FullArticle = () => (
  <div className="">
    <ul className="todo-list ui-sortable">
      {
          NewsAPI.all().map(props => (
            <li key={props.id}>
                
                <div className="row">
				    <img className="col-md-3" src={props.urlToImage} />

                    <div  className="col-md-9">
                        <div >
                           <Link to={`/article/${props.id}`}>{props.title}</Link>
                
                        </div>
                        <div >
                          <span >
{`${props.author}`}
                        </span>
                        </div>
                        <div >
                          <span >
{`${props.description}`}
                            </span>
                        </div>

                    </div>
                   
                </div>
          </li>
        ))
}
    </ul>
  </div>
)

export default FullArticle;