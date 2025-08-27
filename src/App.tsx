import { useSelector } from "react-redux"
import ChangeColor from "./components/ChangeColor"
import Login from "./components/Login"
import Profile from "./components/Profile"

function App() {
  const themeColor = useSelector((state)=>state.theme.value)


  return (
    <div className={`flex flex-col justify-center items-center min-h-screen`} style={{ backgroundColor: themeColor || "#f3f4f6" }}>
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">

        <Profile />
        <Login />
        <ChangeColor />
      </div>
    </div>
  )
}

export default App
