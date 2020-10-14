import React from 'react';
import {AllHtmlEntities} from 'html-entities';
import unified from 'unified';
import parse from 'remark-parse';
import reactRenderer from 'remark-react';
import PropTypes from 'prop-types';

import Toolbar from './toolbar';
import HtmlEditor from './html_editor';
import 'brace/mode/html';

export default class HtmlCodeArea extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    code: PropTypes.string.isRequired,
    file: PropTypes.string,
    name: PropTypes.string,
    noToolbar: PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.state = {
      code: props.code,
      showEditor: false,
      remark: unified().use(parse).use(reactRenderer)
    };
  }

  changeHandler(value) {
    this.setState({code: AllHtmlEntities.decode(value)});
  }

  toggleEditor() {
    this.setState({showEditor: !this.state.showEditor});
  }

  render() {
    const {code, remark} = this.state;
    const {title, file, name, description, noToolbar} = this.props;

    let content;

    if (!noToolbar) {
      content = (
        <div>
          <Toolbar showReact={false}
                   showHtml={this.state.showEditor}
                   title={title}
                   file={file}
                   name={name}
                   toggleHtmlPreview={this.toggleEditor.bind(this)}/>
          <div className="code-area-description">
            {remark.processSync(description).contents}
          </div>
          {this.state.showEditor &&
          <HtmlEditor code={code} readOnly={false} changeHandler={this.changeHandler.bind(this)}/> }
        </div>
      );
    }

    return (
      <div className="code-editor">
        {content}
        <div className="code-editor--live-preview" dangerouslySetInnerHTML={{__html: code}}></div>
      </div>
    );
  }
}