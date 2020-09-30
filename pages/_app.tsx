import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from 'store';
import { GlobalStyle } from 'components/Layout/Global.styled';
import App from 'modules/app/components';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <App.Provider>
        <>
          <GlobalStyle />
          <Component {...pageProps} />
        </>
      </App.Provider>
    </Provider>
  );
};

export default MyApp;
