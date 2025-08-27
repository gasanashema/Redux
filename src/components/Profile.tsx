import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.user.value);

  return (
<>

        <h1 className="text-3xl font-bold text-gray-800 mb-6">Profile</h1>
        
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-700">
            Name: <span className="font-normal text-gray-600">{user.name}</span>
          </h2>
          <h2 className="text-lg font-semibold text-gray-700">
            Age: <span className="font-normal text-gray-600">{user.age}</span>
          </h2>
          <h2 className="text-lg font-semibold text-gray-700">
            Email: <span className="font-normal text-gray-600">{user.email}</span>
          </h2>
        </div>
    
</>
    
  );
};

export default Profile;
