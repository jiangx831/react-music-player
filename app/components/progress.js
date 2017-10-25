import React from 'react';

class Progress extends React.Component {
  render() { 
    return (
      <div className="component-progress">{this.props.progress}</div>
    )
  }
}
 
export default Progress;