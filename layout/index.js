import { store } from "store"
import { Provider } from "react-redux"
import { Header } from "components/layout/Header.jsx"
import { Footer } from "components/layout/Footer"

export const Layout = ({ children }) => (
   <Provider store={store}>
      <Header />
      <main id='main--content'>{children}</main>
      <Footer />
   </Provider>
)
