import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import ActiveStock from '../containers/active_stock';
import StockList from '../containers/stock_list';

export default class App extends Component {
  render() {
    return (
    	<div className="application-container">
    		<div className="row">
    			<div className="col-md-7 list-and-search">
    				<SearchBar />
	                <StockList />
    			</div>
                <ActiveStock />
            </div>
    	</div>
    );
  }
}
