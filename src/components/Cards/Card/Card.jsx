import PropTypes from "prop-types";
import "./Card.css";

function Card({ title, redirectUrl }) {
  return (
    <div className="card">
      <a href={redirectUrl} className="card-title">
        {title}
      </a>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  redirectUrl: PropTypes.string.isRequired,
};

export default Card;
