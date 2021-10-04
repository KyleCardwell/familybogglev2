import React from 'react';
import { connect } from 'react-redux'

function Square (props) {

    return (
        <div className="squareContainer">

            {/* <div className="square">
                <h2>G</h2>

            </div>
            <div className="square">
                <h2>G</h2>

            </div> */}

            <div className="grid">
                <div className="square">
                    <div className="content">G</div>
                </div>
                <div className="square">
                    <div className="content">H</div>
                </div>
                <div className="square">
                    <div className="content">D</div>
                </div>
                <div className="square">
                    <div className="content">Z</div>
                </div>
                <div className="square">
                    <div className="content">G</div>
                </div>
                <div className="square">
                    <div className="content">H</div>
                </div>
                <div className="square">
                    <div className="content">D</div>
                </div>
                <div className="square">
                    <div className="content">Z</div>
                </div>
                
            </div>

        </div>

    )
}

export default Square;