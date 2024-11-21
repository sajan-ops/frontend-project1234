import { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/profile`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUser(res.data);
        } catch (err) {
          alert('Error fetching profile');
        }
      }
    };
    fetchProfile();
  }, []);

  return (
    <div>
      {user ? (
        <>
          <h1>{user.name}'s Profile</h1>
          <p>Email: {user.email}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;

