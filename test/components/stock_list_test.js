import { renderComponent, expect } from '../test_helper';
import StockList from '../../client/components/table';

describe('StockList', () => {
	let component;
	beforeEach(() => {
		component = renderComponent(StockList);		
	});
	it('should exist', () => {
		expect(component).to.have.class('.stock-list-container');
	});
	it('contains a table', () => {
		expect(component.find('table')).to.exist;
	});
});
