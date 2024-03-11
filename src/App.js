import './App.css';
import Navigator from "./components/Navigator/Navigator";
import Player from "./components/Player/Player";
import {Route, Routes} from "react-router";
import Playlist from "./pages/Playlist/Playlist";
import DeletedSongs from "./pages/DeletedSongs/DeletedSongs";

function App() {
    return (
        <div className={'app'}>
            <div className={'container'}>
                <Navigator/>
                <Routes>
                    <Route path="/playlist" element={<Playlist/>}/>
                    <Route path="/deleted-songs" element={<DeletedSongs/>}/>
                </Routes>
                <Player/>
            </div>
        </div>
    );
}

export default App;
