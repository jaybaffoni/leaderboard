
import Menu from './components/menu';
import { colors } from './config';

function App() {
  return (
    <div style={{backgroundColor: colors.dark, minHeight: '100vh'}}>
      <div style={{maxWidth: 500, marginLeft: 'auto', marginRight: 'auto'}}>
        <div style={{backgroundColor: colors.light, padding: 12, display: 'grid', placeItems: 'center'}}>
          <p style={{color: colors.medium, fontSize: 36, fontWeight: 'bold', margin: 0}}>Menu</p>
        </div>
        {/* <Board /> */}
        <Menu/>
      </div>
    </div>
  );
}

export default App;
