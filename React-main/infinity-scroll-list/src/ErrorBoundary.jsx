import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render shows the fallback UI
        console.error('Error caught by ErrorBoundary:', error);
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // Log the error details to an error reporting service or console
        console.error('Error caught by ErrorBoundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <h2>Something went wrong.</h2>
                    <p>Please try again later.</p>
                </div>
            );
        }
        return this.props.children; // Render child components if no error
    }
}

// Add PropTypes validation
ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired, // Validates that children are React nodes and required
};

export default ErrorBoundary;
