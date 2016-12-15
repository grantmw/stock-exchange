import { renderComponent, expect } from '../test_helper';
import App from '../../client/components/app';

describe('App Component', () => {
	let component;
	beforeEach(() => {
		component = renderComponent(App);
	});
	it('should show a search bar', () => {
		expect(component.find('.search-bar-container')).to.exist;
	});
});
