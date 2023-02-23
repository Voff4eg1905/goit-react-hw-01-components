import PropTypes from 'prop-types';
const defaultAvatar = "https://cdn-icons-png.flaticon.com/512/1998/1998592.png"
const bGC = isOnline => {
    switch (isOnline) {
        case true:
            return "green";
            case false: 
            return "red";
            default: 
            return "orange"
    }
}
export default function FriendListItem ({id, avatar = defaultAvatar, name, isOnline }) {
    return (
        <li className="item" >
  <span className="status" >{isOnline}</span>
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
  <p className="name" style={{backgroundColor: bGC(isOnline)}}>{name}</p>
  </li>
  );
}


FriendListItem.propTypes = {
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired
}