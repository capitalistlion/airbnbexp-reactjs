import React from "react"

export default function Trainer(props) {

    let badgeText
    if (props.element.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.element.location === "Online") {
        badgeText = "ONLINE"
    }
    
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../images/${props.element.coverImg}`} className="card--image" alt="coverImg" />
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" alt="starImg" />
                <span>{props.element.stats.rating}</span>
                <span className="grey">{props.element.stats.reviewCount} • </span>
                <span className="grey">{props.element.location}</span>
            </div>
            <p className="card--description">
                {props.element.title}
            </p>
            <p className="card--pricing">
                <strong>From ${props.element.price}</strong> / person
            </p>
        </div>
    )
}