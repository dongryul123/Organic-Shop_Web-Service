import React from 'react'
// import NavBar from './component/route/NavBar';
import AppRouter from './component/route/RouterComponent';
import Container from '@material-ui/core/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Container>
        <AppRouter/>
      </Container>
    </div>
  );
}

export default App;
