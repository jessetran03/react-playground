import React from'react';
import './Accordion.css';

class Accordion extends React.Component {
    static defaultProps = {
        sections: [],
    };
    state = {
        activeSectionIndex: null,
    };
    handleButtonClick(index) {
        this.setState({ activeSectionIndex: index})
    }
    renderContent(content, index) {
        if (index === this.state.activeSectionIndex) {
            return (
                <p>{content}</p>
            )
        }
    }
    renderListItems() {
        return this.props.sections.map((section, index) => (
            <li>
                <button key={index} onClick={() => this.handleButtonClick(index)}>
                    {section.title}
                </button>
                {this.renderContent(section.content, index)}
            </li>
        ))
    }
    render() {
        return(
            <ul>
                {this.renderListItems()}
            </ul>
        );
    }
}

export default Accordion;