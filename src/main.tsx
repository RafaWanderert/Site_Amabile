import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
// Playfair Display (títulos), Lexend (texto) e Shantell Sans (anotações à mão, com o eixo
// "bounce"), servidas pelo próprio site com font-display: swap
import '@fontsource-variable/playfair-display/wght.css'
import '@fontsource-variable/lexend/wght.css'
import '@fontsource-variable/shantell-sans/bnce.css'
import './index.css'
import App from './App.tsx'

const raiz = document.getElementById('root')!
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// No build, o HTML já vem pré-renderizado: o React só "acorda" a página.
if (raiz.hasChildNodes()) hydrateRoot(raiz, app)
else createRoot(raiz).render(app)
