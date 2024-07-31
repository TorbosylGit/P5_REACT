const Card = ({ title, image }) => {
    return (
        <>
            <div className="grid">
                <div className="apartment">
                    <div className="apartment__subtitle">{title}</div>
                </div>
            </div>
        </>
    );
};

export default Card;
