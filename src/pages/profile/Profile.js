import CardPro from '../../components/CardProfile/CardPro';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
function Profile(props) {
  const params = useParams();
  const [users, setUsers] = useState([])
  const [profil, setProfil] = useState([])
  const search = params.profile.replaceAll('-',' ')
  useEffect(() => {
    fetch('https://ayoube2323.github.io/dataDoctors/dataBase.json')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  useEffect(() => {
     const user = users.filter((item) =>
       item.name === search ? item : ''
     );
    setProfil(user)
  },[users,search])
 

  return (
    <div className=' container mx-auto '>
      {profil.map((user) => ( 
        <CardPro key={`Dr-id-${user.id}`} person={user} />
      ))}
    </div>
  );
}

export default Profile;