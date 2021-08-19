import './styles.css';
import { useSelectRandomColor } from '@/state/modules/ColorGenerator/selectors';
import useColors from '@/state/modules/ColorGenerator/actions';

const Home = () => {
  const { getRandomColor } = useColors();
  const randomColor = useSelectRandomColor();

  const handleGetPhotos = () => {
    getRandomColor();
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="colorContainer">
          <div className="colorFrame" style={{ backgroundColor: randomColor.hex_value }} />
          <div className="colorInfoSection">
            <p style={{ display: 'flex', alignItems: 'center' }}>
              Hex code:&nbsp; <p style={{ fontWeight: 'normal' }}>{randomColor.hex_value}</p>
            </p>
            <p style={{ marginLeft: 10, display: 'flex', alignItems: 'center' }}>
              Name:&nbsp; <p style={{ fontWeight: 'normal' }}>{randomColor.color_name}</p>
            </p>
          </div>
        </div>

        <p>Click and discover awesome colors</p>
        <div onClick={handleGetPhotos} className="Home-GetRandomColor">
          Get Random Color
        </div>
      </header>
    </div>
  );
};

export default Home;
