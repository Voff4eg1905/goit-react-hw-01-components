import PropTypes from 'prop-types';
import css from 'components/Friends/FriendListItem.module.css'
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
        <li className={css.item} >
  <span className={css.status} style={{backgroundColor: bGC(isOnline)}}>{isOnline}</span>
  <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
  <p className={css.name} >{name}</p>
  </li>
  );
}


FriendListItem.propTypes = {
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired
}