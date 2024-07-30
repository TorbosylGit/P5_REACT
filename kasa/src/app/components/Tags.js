const Tags = ({ content }) => {

    return (
        <>
            <div class="tags">
                {content.map((tag, index) => (
                    <span key={index}>{tag}</span>
                ))}
            </div>
        </>
    );
};

export default Tags;
