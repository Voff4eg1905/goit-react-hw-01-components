import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import css from 'components/Friends/FriendList.module.css'

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <FriendListItem key = {friend.id}{...friend} />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};
