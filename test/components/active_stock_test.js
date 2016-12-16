import { renderComponent, expect } from '../test_helper';
import ActiveStock from '../../client/containers/active_stock';

describe('ActiveStock Container', () => {
	let component;
	beforeEach(() => {
		component = renderComponent(ActiveStock);		
	});
	it('should exist', () => {
		expect(component).to.have.class('active-stock-container');
	});
});


