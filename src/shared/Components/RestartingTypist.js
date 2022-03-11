import React from "react";
import Typist from "react-typist";

export class RestartingTypist extends React.Component {
    state = { typing: true }

    done = () => {
      this.setState({ typing: false }, () => {
          this.timeouts.push(
               setTimeout(() => this.setState({ typing: true }), this.props.timeout || 1200)
          );
      });
    }

    componentWillMount() {
      this.timeouts = [];
    }

    componentWillUnmount() {
      this.timeouts.forEach(window.clearTimeout);
    }

    render() {
      const {children, timeout, ...props} = this.props;
      return this.state.typing ?
        <Typist {...props} onTypingDone={this.done}>{children}</Typist>
        : <span>{children}</span>;
    }
  }

