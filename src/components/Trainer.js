import React from "react"

export default function Trainer(props) {
    return (
        <section className="trainer-section">
            <div className="card">
                <img src={`../images/${props.trainerImg}`} className="card--image" alt="trainerImg" />
                <div className="card--stats">
                    <img src="../images/star.png" className="card--star" alt="starImg" />
                    <span>{props.rating}</span>
                    <span className="grey">{props.reviewCount} • </span>
                    <span className="grey">{props.location}</span>
                </div>
                <p className="card--description">
                    {props.title}
                </p>
                <p className="card--pricing">
                    <strong>From ${props.price}</strong> / person
                </p>
            </div>
        </section>
    )
}