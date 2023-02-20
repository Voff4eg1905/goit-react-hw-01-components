import PropTypes from 'prop-types';
const defaultAvatar = "https://cdn-icons-png.flaticon.com/512/1998/1998592.png"

export default function FriendListItem ({avatar = defaultAvatar, name, isOnline }) {
    return (
        <>
  <span className="status">{isOnline}</span>
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
  <p className="name">{name}</p>
  </>
  );
}


FriendListItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired
}