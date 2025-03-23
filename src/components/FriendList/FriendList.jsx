import PropTypes from "prop-types";
import FriendListItem from "../FriendListItem/riendListItem"; // Виправлений імпорт!
import styles from "./FriendList.module.css";

const FriendList = ({ friends = [] }) => { // Додаємо значення за замовчуванням []
    return (
        <ul className={styles.friendList}>
            {friends.map(({ id, avatar, name, isOnline }) => (
                <li key={id} className={styles.friendListItem}>
                    <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
                </li>
            ))}
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    ),
};

export default FriendList;
