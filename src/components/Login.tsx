import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";

const Login = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-center space-x-4">

      <button
        onClick={() =>
          dispatch(
            login({
              name: "pedro",
              age: 30,
              email: "pedro@gmail.com",
            })
          )
        }
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
        >
        Login
      </button>

      <button
        onClick={() =>
          dispatch(
            logout()
          )
        }
        className="px-6 py-3 bg-red-600 text-white font-semibold rounded-xl shadow-md hover:bg-red-700 transition duration-300 ease-in-out"
      >
        Logout
      </button>
        </div>
  );
};

export default Login;
