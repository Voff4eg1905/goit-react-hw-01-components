import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

export default function FriendList ({friends}) {
    return (
<ul className="friend-list">
        {friends.map(({id, ...components}) => (
            <li className="item" key ={id}>
                <FriendListItem {...components}/>

            </li>
        ) )}
</ul>
    );
}



FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,

        })
    ),
}