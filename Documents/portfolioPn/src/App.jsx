
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import DefaultLayout from './layout/DefaultLayout';



function App() {

  return (
      <Router>
        <div className='App'>
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              return <Route
              path={route.path}
              key={index}
              element={
                <DefaultLayout about={route.path === '/about' ? true : ''} >
                    <Page />
                  </DefaultLayout>
                } />
              })}
          </Routes>
        </div>
      </Router>
  );
}

export default App;
