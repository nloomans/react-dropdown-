import React, { Component } from 'react';

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
    };
  }

  render() {
    console.log(this.state.isVisible);
    return (
      <div>
        <button onClick={() => {
          this.setState({
            isVisible: !this.state.isVisible,
          });
        }}>
          {this.props.initialText}
        </button>
        {this.state.isVisible && (+
          <div>
            Options:
            {this.props.options.map((option, index) =>
              <div>
                <button onClick={() => {
                  this.props.onSelect(option, index);

                  console.log("hey")
                }}>
                  {option}
                </button>
            </div>)}
          </div>
        )}
      </div>
    );
  }
}

export default Dropdown;
