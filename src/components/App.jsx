import user from '../data/user';
import data from '../data/data'
import Profile from './Social_media_profile/profile';
import Statistics from './Stats/stats';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile {...user} />
      <Statistics title="Upload stats" stats={data} />
<Statistics stats={data} />
    </div>
  );
};
