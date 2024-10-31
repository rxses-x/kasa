import PropTypes from 'prop-types';

const Tags = ({ tag }) => {
    return (
        <div className="tags">
            {tag.map((t, index) => (
                <span key={index} className="tag">
                    {t}
                </span>
            ))}
        </div>
    )
}

Tags.propTypes = {
    tag: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Tags