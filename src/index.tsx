import {createRoot} from 'react-dom/client';
import {App} from './app/App';
import {BrowserRouter} from 'react-router-dom';
import ThemeProvider from './app/providers/ThemeProvider/ui/ThemeProvider';
import './shared/config/i18n/i18n';

const domNode = document.getElementById('root');

const root = createRoot(domNode);

root.render(
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>,
);
