
const ModalOne = ({card}) => {

return (
    <div className="box_inner">
        <div className="description_wrap scrollable">
        {/* <div className="image">
            <img src={card.img} alt="tumb" />
            <div
            className="main"
            style={{
                backgroundImage: "url("+card.img+")",
            }}
            ></div>
        </div> */}
        {/* END IMAGE */}
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
            {/* <div className="textbox">
            <p>
                {card.desc}
            </p>
            </div> */}
            {/* <div className="detailbox">
            <ul>
                <li>
                <span className="first">Category</span>
                <span>{type}</span>
                </li>
                <li id="github">
                <span className="first">GitHub</span>
                <div className="tokyo_tm_button" data-position="left">
                    <a href={card.github} target="_blank">
                    <span>View Repo</span>
                    </a>
                </div>
                </li>
                <li id="host">
                <span className="first">Host</span>
                <div className="tokyo_tm_button" data-position="left">
                    <a href={card.host} target="_blank">
                    <span>Visit Website</span>
                    </a>
                </div>
                </li>
            </ul>
            </div> */}
        </div>
        </div>
    </div>
    );
};

export default ModalOne;
