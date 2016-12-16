import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import ActiveStock from '../containers/active_stock';
import StockList from '../containers/stock_list';
import Header from './header';

export default class App extends Component {
    render() {
        return (
        	<div className="application-container">
                <div className="row">
                    <Header />
                </div>
        		<div className="row content-container">
                    <div className="col-md-3 main-active">
                        <ActiveStock />
                    </div>
                    <div className="col-md-7 list-and-search">
                        <SearchBar />
                        <StockList />
                    </div>
                </div>
        	</div>
        );
    }
}
