import PropTypes from 'prop-types';

export default function StatCard({label, percentage }) {
  return (
   <>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
      </>
  );
}

StatCard.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
