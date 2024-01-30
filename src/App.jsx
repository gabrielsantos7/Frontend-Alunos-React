import GlobalStyle from './styles/GlobalStyles';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
