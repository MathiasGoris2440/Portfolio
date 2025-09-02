import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Cursor from "./Components/Cursor.jsx";
import {CursorProvider} from "./components/CursorContext.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <CursorProvider>
          <Cursor />
        <App />
      </CursorProvider>
  </StrictMode>,
)
