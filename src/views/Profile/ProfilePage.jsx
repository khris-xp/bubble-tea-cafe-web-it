import { useUserProfile } from '../../layouts/BaseLayout';
import './Profile.css';

export default function ProfilePage() {
  const userProfile = useUserProfile();
  return (
    <div class='card'>
      <h1>{userProfile?.username}</h1>
      <img
        src='https://img.freepik.com/premium-vector/anonymous-user-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1931.jpg'
        style={{ width: '100%' }}
      />
      <p class='title'>Email : {userProfile?.email}</p>
      <p>Role: {userProfile?.role}</p>
      <a href='#'>
        <i class='fa fa-dribbble'></i>
      </a>
      <p>
        <button>Contact</button>
      </p>
    </div>
  );
}