import '../../spec_helper';
import LinkRenderer from '../../../src/components/renderers/link_renderer';
import {Link} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';

describe('LinkRenderer', () => {
  let href, children;

  beforeEach(() => {
    spyOnRender(Link).and.callThrough();
  });

  describe('when the href is external', () => {
    beforeEach(() => {
      href = 'http://www.some_website.com';
      children = ['external link'];
      ReactDOM.render(<LinkRenderer {...{href, children}}/>, root);
    });

    it('renders an <a> tag', () => {
      expect('#root > a').toHaveAttr('href', 'http://www.some_website.com');
      expect('#root > a').toHaveText('external link');
    });
  });

  describe('when the href starts with /static/', () => {
    beforeEach(() => {
      href = '/static/versions/v205';
      children = ['Version 205'];
      ReactDOM.render(<LinkRenderer {...{href, children}}/>, root);
    });

    it('renders an <a> tag', () => {
      expect('#root > a').toHaveAttr('href', '/static/versions/v205');
      expect('#root > a').toHaveText('Version 205');
    });
  });

  describe('when the href is internal to the styleguide', () => {
    beforeEach(() => {
      href = '/some/page/on/this/domain';
      children = ['name of page'];
      ReactDOM.render(<Router><LinkRenderer {...{href, children}}/></Router>, root);
    });

    it('renders a react router Link', () => {
      expect(Link).toHaveBeenRenderedWithProps({to: href, replace: false});
      expect('#root > a').toHaveText('name of page');
    });
  });


});