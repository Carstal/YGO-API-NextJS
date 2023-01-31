import React from "react";
import {useCallback} from "react";
import styles from "../styles/ygo.module.css";

export default function Card({ card }) {
    const handleSelectCard = useCallback(
        (card) => window.alert(card.name),
        []
        )

function getCard(ygoCard) {
    const type = ygoCard.type;
    var output = "Default Output, Successful output failed"
    if (type.includes("Monster")) {
        console.log("Monster");
        if (type.includes("Effect")) {
        console.log("Has Effect");
        output = (
            <div className={styles.selectedM}>
            <div className={styles.img}>
                <img src={card.card_images[0].image_url_large} alt="Card Image" />
            </div>
            <div className={styles.cardInfo}>
            <p>
                Name: {card.name}
                <br />
                Type: {card.type}
                <br />
                Level: {card.level}
                <br />
                Type: {card.race}
                <br />
                Attribute: {card.attribute}
                <br />
                Effect: {card.desc}
                <br />
                Attack: {card.atk}
                <br />
                Defense: {card.def}
            </p>
            </div>
        </div>
        );
        }
        else {
        console.log("Has Flavour Text");
        output = (
            <div className={styles.selectedM}>
            <div className={styles.img}>
                <img src={card.card_images[0].image_url_large} alt="Card Image" />
            </div>
            <div className={styles.cardInfo}>
            <p>
                Name: {card.name}
                <br />
                Type: {card.type}
                <br />
                Level: {card.level}
                <br />
                Type: {card.race}
                <br />
                Attribute: {card.attribute}
                <br />
                Flavour Text: {card.desc}
                <br />
                Attack: {card.atk}
                <br />
                Defense: {card.def}
            </p>
            </div>
        </div>
        );
        }
        return output;
    }
    else {
        console.log("Spell/Trap Card");
        output = (
            <div className={styles.selectedST}>
            <div className={styles.img}>
                <img src={card.card_images[0].image_url_large} alt="Card Image" />
            </div>
            <div className={styles.cardInfo}>
            <p>
                Name: {card.name}
                <br/>
                Type: {card.type}
                <br/>
                Effect: {card.desc}
            </p>
            </div>
        </div>
        );
    }
    console.log(ygoCard.type);
}
return (
    // <div className={styles.card} onClick={toggle}>
    // <div className={styles.card} onClick={handleSelectCard}>
        <div className={styles.info}>
        {/* <div className={styles.id}>ID:{card.id}</div> */}
        <div className={styles.img}>
            <img
            src={card.card_images[0].image_url_small}
            alt="Card Image"
            height="200"
            width="150"
            />
        </div>
        <div className={styles.name}>{card.name}</div>
        <div className={styles.type}>{card.type}</div>
        </div>
    // </div>
);
}
