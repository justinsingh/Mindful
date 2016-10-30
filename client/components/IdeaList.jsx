import React from 'react';
import Textarea from 'react-textarea-autosize';
import Entry from './Entry.jsx';
import AddEntryButton from './AddEntryButton.jsx';

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}
function renderNoEntries() {
  return (
    <div className="emptyList">
      <p>Nothing here yet.</p>
    </div>
  );
}

class IdeaList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addMode: false,
      emptyList: isEmpty(this.props.ideas),
    };
    this.toggleAddMode = this.toggleAddMode.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  toggleAddMode() {
    console.log('toggling');
    this.setState({ addMode: !this.state.addMode });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log('submitting form');
    const title = this.title.value;
    const category = this.category.value;
    this.props.addIdea(title, category);
    this.setState({
      addMode: false,
      emptyList: false,
    });
  }
  renderAddEntry() {
    return (
      <div className="listEntry listEntry--addEntry">
        <form
          id="confirmationText" ref={(c) => { this.entryForm = c; }}
          onSubmit={this.handleSubmit}
        >
          <div>
            <Textarea
              form="confirmationText"
              className="listEntryTextArea"
              type="text"
              ref={(c) => { this.title = c; }}
              placeholder="Enter a quote"
              autoFocus
            />
          </div>
          <div>
            <Textarea
              form="confirmationText"
              className="listEntryTextArea"
              type="text"
              ref={(c) => { this.category = c; }}
              placeholder="Who said it?"
            />
          </div>
          <input className="btn btn--submit" type="submit" />
        </form>
      </div>
    );
  }
  render() {
    return (
      <div>
        <div className="centerList">
          <div className="listContainer">
            {this.props.ideas.map((idea, i) => <Entry {...this.props} key={i} i={i} idea={idea} />)}
            {this.state.addMode ? this.renderAddEntry() : <div />}
            {this.state.emptyList && this.state.addMode === false ? renderNoEntries() : <div />}
          </div>
        </div>
        <btn onClick={this.toggleAddMode} >
          <AddEntryButton />
        </btn>
      </div>

    );
  }
}

export default IdeaList;
