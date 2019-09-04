import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './App.css';

class SimpleContainer extends React.Fragment {
  render() {
    (
      <React.Fragment>
        <CssBaseline/>
        <Container maxWidth="sm">
          <Typography component="div" style={{backgroundColor: '#cfe8fc', height: '100vh'}}/>
        </Container>
      </React.Fragment>
    )
  };
}

function App() {
  return (
    <SimpleContainer/>
  );
}

export default App;
