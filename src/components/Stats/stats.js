import PropTypes from 'prop-types';
import StatCard from './stat_card';

export default function Statistics ({title, stats}) {
    return (
        <section className="statistics">
  {title && <h2 className="title">{title}</h2>}

  <ul className="stat-list">
    
    {stats.map(({id, label, percentage}) =>  (
         <li className="item" key={id}>
        <StatCard
        label = {label}
        percentage = {percentage}/></li>))}
        

    </ul>
    </section>
//

    );
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }),
      ),
}