import PropTypes from 'prop-types';
import {
  Description,
  Avatar,
  UserName,
  Tag,
  Location,
} from './ProfileDescription.styled';

export const ProfileDescription = ({ avatar, username, tag, location }) => {
  return (
    <Description>
      <Avatar src={avatar} alt={username} />
      <UserName>{username}</UserName>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
    </Description>
  );
};

ProfileDescription.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
