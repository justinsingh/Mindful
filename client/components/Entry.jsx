import React from 'react';

class Entry extends React.Component {
  render() {
    const { idea, i } = this.props;
    return (
      <div className="listEntry listEntry--blue">
        <q className="listEntry__quotation">
          <div className="listEntry__title">
            {idea.title}
          </div>
        </q>
        { idea.category.length > 0 ?
          <div className="listEntry__category">- {idea.category}</div>
          :
          <div />
        }
      </div>
    );
  }
}

export default Entry;
