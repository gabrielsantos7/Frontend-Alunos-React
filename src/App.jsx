import GlobalStyle from './styles/GlobalStyles';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
