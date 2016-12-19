import { renderShallowComponent, renderComponent, expect } from '../test_helper';
import StockList from '../../client/containers/stock_list';

describe('StockList Component', () => {
	let component;
	beforeEach(() => {
		component = renderShallowComponent(StockList);
	});
	it('should have $100,000 before a purchase', () => {
		expect(component.props.cash).to.equal(100000);
	});
	it('should have no stocks before a purchase', () => {
		expect(component.props.stocks.length).to.equal(0);
	});
});



