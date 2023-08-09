import { GlobalStyles } from "./styles/global-styles"
import { Footer } from "./components/Footer" 
import { Header } from "./components/Header"

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <p style={{height:'80vh'}}>Criação TS</p>
      <Footer />
    </>
  )
}

export default App
