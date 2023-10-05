import React from "react";
import './CardProfileBack.css'

function CardProfileBack({cvc}){
    return(
        <div className="backcontainer">
            <div className="blackbar"></div>
            <div className="cvcbar">{cvc}</div>
            <div className="dots">
                <div className="indots1">
                    <div className="one"></div>
                    <div className="two"></div>
                    <div className="three"></div>
                </div>
                <div className="indots2">
                    <div className="one"></div>
                    <div className="two"></div>
                    <div className="three"></div>
                </div>
                <div className="indots3">
                    <div className="one"></div>
                    <div className="two"></div>
                    <div className="three"></div>
                </div>
            </div>
        </div>
    )
}

export default CardProfileBack