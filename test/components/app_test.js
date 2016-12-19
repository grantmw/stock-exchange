import { renderShallowComponent, renderComponent, expect } from '../test_helper';
import App from '../../client/components/app';

describe('App Component', () => {
	let component;
	beforeEach(() => {
		component = renderShallowComponent(App);
	});
	it('contains the header component in (top) row', () => {
		expect(component.props.children[0].props.className).to.equal('row header-row');
	});
	it('has the application container', () => {
		expect(component.props.className).to.equal('application-container');
	});	
	it('contains content components', () => {
		expect(component.props.children[1].props.className).to.equal('row content-container');
	});
});
