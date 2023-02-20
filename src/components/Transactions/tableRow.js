import PropTypes from 'prop-types';

export default function TableRow ({type, amount, currency}) {
    return (
        <>
         <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
        </>
    )

}


TableRow.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}