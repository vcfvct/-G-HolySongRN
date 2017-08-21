/**
 * Created by xex766 on 8/21/17.
 */
import {StackNavigator} from 'react-navigation';
import SongList from "./components/SongListScreen";
import LyricScreen from "./components/LyricScreen";

const Navigation = StackNavigator({
  SongList: {screen: SongList},
  Lyric: {screen: LyricScreen}
});

export default Navigation;
