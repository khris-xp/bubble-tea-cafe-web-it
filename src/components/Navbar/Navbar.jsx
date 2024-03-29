import { useUserProfile } from '../../layouts/BaseLayout';
import './Navbar.css';

export default function Navbar() {
  const userProfile = useUserProfile();
  console.log('userProfile', userProfile);
  return (
    <>
      <div className='navbar'>
        <ul>
          <li>
            <a href='/'>Bubble Tea Cafe</a>
          </li>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/about'>About</a>
          </li>
          <div className='login'>
            {userProfile ? (
              <a href='/profile'>{userProfile.username}</a>
            ) : (
              <a href='/login'>Login</a>
            )}
          </div>
        </ul>
      </div>
    </>
  );
}
