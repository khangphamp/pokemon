import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import HomePage from "./components/HomePage/HomePage";
import Loading from "./components/Loading/Loading";
import PlayPage from "./components/PlayPage/PlayPage";


function App() {
  const isStarted = useSelector((state:RootState)=>state.start.isStarted)
  return (
    <div className="app">
      <Loading />
      {!isStarted ?  <HomePage /> : <PlayPage />}
    </div>
  )
}

export default App;
