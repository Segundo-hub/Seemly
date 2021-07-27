import { store } from './../store'
import { Provider } from 'react-redux'
import { Header } from './../components/layout/Header.jsx'
import { MainMenu } from '../components/design/organisms'
import { MainContent } from '../components/design/templates/MainContent'
import { Footer } from '../components/layout/Footer'

export const Layout = ({ children }) => (
	<Provider store={ store }>
		<Header/>
      <div id="main--content">
         <MainMenu />
		   <MainContent>{children}</MainContent>
      </div>
      <Footer />
	</Provider>
)
