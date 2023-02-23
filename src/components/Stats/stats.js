import PropTypes from 'prop-types';
import StatCard from './stat_card';
import css from 'components/Stats/stats.module.css'

export default function Statistics ({title, stats}) {
    return (
        <section className={css.statistics}>
  {title && <h2 className={css.title}>{title}</h2>}

  <ul className={css.statList}>
    
    {stats.map(({id, label, percentage}) =>  (
        
        <StatCard
        key={id}
        label = {label}
        percentage = {percentage}/>))}
        

    </ul>
    </section>


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