import { Switch, Route } from 'react-router-dom';
import HomeView from '../views/HomeView';

function RouterComponent() {  
    return (
        <Switch>
            <Route path="/" element={<HomeView />} />
        </Switch>
    );
}
  
export default RouterComponent;  