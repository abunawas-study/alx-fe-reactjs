import ProfilePage from './ProfilePage';
import { UserContent } from '../UserContent';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContent.Provider value={userData}>
      <ProfilePage userData={userData} />
    </UserContent.Provider>
  );
}

export default App;
