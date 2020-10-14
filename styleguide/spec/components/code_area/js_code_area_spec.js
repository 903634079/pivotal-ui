import '../../spec_helper';

describe('JsCodeArea', () => {
  let code, description, JsCodeArea, noToolbar;

  beforeEach(() => {
    code = '<div>Hi</div>';
    JsCodeArea = require('../../../src/components/code_area/js_code_area');
  });

  describe('rendering a description without markdown', () => {
    beforeEach(() => {
      description = 'some-description';
      ReactDOM.render(<JsCodeArea {...{description, code}}/>, root);
    });

    it('renders the description', () => {
      expect('.code-area-description').toHaveText(description);
    });
  });

  describe('rendering a description with markdown', () => {
    beforeEach(() => {
      description = 'not bold **some-description** also not bold';
      ReactDOM.render(<JsCodeArea {...{description, code}}/>, root);
    });

    it('correctly renders the markdown', () => {
      expect('strong').toHaveText('some-description');
    });
  });

  describe('rendering invalid JSX', () => {
    beforeEach(() => {
      ReactDOM.render(<JsCodeArea {...{
        description,
        code: '<div><span></div>'
      }}/>, root);
    });

    it('renders an error message', () => {
      expect('.code-editor--live-preview pre').toContainText('SyntaxError');
      expect('.code-editor--live-preview pre').toContainText('JSX closing tag');
    });
  });

  describe('rendering invalid javascript', () => {
    beforeEach(() => {
      ReactDOM.render(<JsCodeArea {...{
        description,
        code: 'throw "JS Error"'
      }}/>, root)
    });

    it('renders an error message', () => {
      expect('.code-editor--live-preview pre').toContainText('JS Error');
    });
  });

  describe('rendering without a toolbar', () => {
    beforeEach(() => {
      noToolbar = true;
      ReactDOM.render(<JsCodeArea {...{code, noToolbar}}/>, root);
    });

    it('does not render the toolbar', () => {
      expect('.toolbar').not.toExist();
    });
  });
});