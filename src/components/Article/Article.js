import React from 'react';
import { Switch, Route } from 'react-router-dom'

import FullArticle from '../Article/FullArticle'

import ArticleDetail from '../ArticleDetail/ArticleDetail'


// The Roster component matches one of two different routes
// depending on the full pathname
const Article = () => (
  <Switch>
    <Route exact path='/article' component={FullArticle}/>
    <Route path='/article/:number' component={ArticleDetail}/>
  </Switch>
)

export default Article