import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import ActiveStock from '../containers/active_stock';
import StockList from '../containers/stock_list';

export default class App extends Component {
  render() {
    return (
    	<div>
	    	<SearchBar />
	    	<StockList />
	    	<ActiveStock />
    	</div>
    );
  }
}
