import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ContextProvider from './components/context/ContextProvider.jsx'
import {GoogleOAuthProvider} from '@react-oauth/google'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId='463902843083-or8id62sf058cjmpv7ju7ro3rcmnfdis.apps.googleusercontent.com'>

    <BrowserRouter>
      <ContextProvider> 
        <App />
      </ContextProvider>
    </BrowserRouter>
    </GoogleOAuthProvider>
  </StrictMode>,
)
