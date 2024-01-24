import styles from "../styles/ygo.module.css";
const ModalOne = ({ card }) => {
  console.log(card);
  return (
    <div className="box_inner">
      <div className="description_wrap scrollable">
        <div className="portfolio_main_title">
          <h3>{card.name}</h3>
          <span>Details</span>
        </div>
        {/* END portfolio_main_title */}
        <div className="main_details">
          <div className={styles.cardInfo}>
            <p>
              Name: {card.name}
              <br />
              Type: {card.type}
              <br />
              Attribute: {card.attribute}
              <br />
              Flavour Text: {card.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalOne;
