import PropTypes from 'prop-types';
import { ProfileDescription } from '../ProfileDescription/ProfileDescription';
import { Stats } from '../Stats/Stats';
import { ProfileCard } from './Profile.styled';

const Profile = ({ userInfo }) => {
    return (
        <ProfileCard>
            <ProfileDescription
                username={userInfo.username}
                tag={userInfo.tag}
                location={userInfo.location}
                avatar={userInfo.avatar}
            />
            <Stats
                followers={userInfo.stats.followers}
                views={userInfo.stats.views}
                likes={userInfo.stats.likes}
            />
        </ProfileCard>
    );
};

Profile.propTypes = {
    userInfo: PropTypes.object.isRequired,
};

export default Profile;
