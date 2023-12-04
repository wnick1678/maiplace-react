import { Routes, Route } from 'react-router-dom';
import HomeView from '../views/HomeView';

function RouterComponent() {
    function renderRoutes() {
        return (
            <Routes>
                <Route path="/" element={<HomeView />} />
            </Routes>
        );
    }
  
    return (
        renderRoutes()
    );
  }
  
  export default RouterComponent;
  