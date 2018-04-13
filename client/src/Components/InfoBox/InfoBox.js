import React, { Component } from 'react';
import './info-box.css';

class InfoBox extends Component {
    render() {
        return (
            <div className="infoBox">
                <h3 className="infoBoxTitle">{this.props.title}</h3>
                <p className="infoBoxDescription">
                    {this.props.description}
                </p>
            </div>
        );
    }
}

export default InfoBox;
