import React, { useContext, useEffect } from 'react';
import Profiles from '../profiles/Profiles';
import ProfileForm from '../profiles/ProfileForm';
import ProfileFilter from '../profiles/ProfileFilter';
import AuthContext from '../../context/auth/authContext';

const Profilepg = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='grid-2'>
      <div>
        <ProfileForm />
      </div>
      <div>
        <ProfileFilter />
        <Profiles />
      </div>
    </div>
  );
};

export default Profilepg;
