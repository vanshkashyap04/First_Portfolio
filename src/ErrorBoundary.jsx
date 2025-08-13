import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    this.setState({ info });
    // Optionally log error to an external service here
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ color: "red", padding: 24 }}>
          <h1>Something went wrong.</h1>
          <details>
            <summary>Error details</summary>
            <pre>
              {this.state.error && this.state.error.toString()}
              {"\n"}
              {this.state.info && this.state.info.componentStack}
            </pre>
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}