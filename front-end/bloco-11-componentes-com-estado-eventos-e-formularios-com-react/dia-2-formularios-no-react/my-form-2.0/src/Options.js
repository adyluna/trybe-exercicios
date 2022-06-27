import React from "react";

class Options extends React.Component {
  render() {
    const selectOptions = document.querySelector('.states');
    const { options } = this.props;
    return (
        options.map((elem) => {
          const option = document.createElement('option');
          option.innerHTML = elem;
          selectOptions.appendChild(option);
        })
      );
  }
}

export default Options;
