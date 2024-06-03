import CardPro from '../../components/CardProfile/CardPro';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
function Profile(props) {
  const params = useParams();
  const url = process.env.REACT_APP_DOCTORS;
  const [users, setUsers] = useState([]);
  const [profil, setProfil] = useState([]);
  const search = params.profile.replaceAll('-', ' ');
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  useEffect(() => {
    const user = users.filter((item) => (item.name === search ? item : ''));
    setProfil(user);
  }, [users, search]);

  return (
    <div className=' container mx-auto '>
      {profil.map((user) => (
        <CardPro
          key={`Dr-id-${user._id}`}
          person={user}
        />
      ))}
    </div>
  );
}

export default Profile;
