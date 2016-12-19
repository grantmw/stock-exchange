import reducers from '../client/reducers';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import jquery from 'jquery';
import chai, { expect } from 'chai';
import chaiJquery from 'chai-jquery';
import jsdom from 'jsdom';
import TestUtils from 'react-addons-test-utils';

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
global.navigator = global.window.navigator;
const $ = jquery(window);

chaiJquery(chai, chai.util, $);

function renderComponent(ComponentClass, props = {}, state = {}) {
  const componentInstance =  TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );

  return $(ReactDOM.findDOMNode(componentInstance));
}

function renderShallowComponent(ComponentClass, props = {}, state = {}) {
  const componentInstance = TestUtils.createRenderer();
  componentInstance.render(<ComponentClass store={createStore(reducers, state)} {...props} />)

  return componentInstance.getRenderOutput();
}

$.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
};

export { renderShallowComponent, renderComponent, expect};