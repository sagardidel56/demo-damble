import { useLocation } from 'react-router-dom';
import AppHeader from './components/AppHeader/AppHeader';
import RoutesComp from './routes/Routes';
import AppFooter from './components/AppFooter/AppFooter';

function App() {
  const location = useLocation()
  return (
    <>
      {
        location.pathname === '/' ? (<></>) : (<AppHeader />)
      }
      <RoutesComp />
    </>
  );
}

export default App;
