
import { Menu } from '../../molecules/Menu/Menu'
import style from './m.module.scss'

const MenuSidebar = () => (
   <aside className={style.menu}>
      <div style={{textAlign: 'center', padding: '1rem', borderBottom: '1px solid var(--dark-light)'}}>
         Welcome to Seemly
      </div>
      <Menu />
   </aside>
)

module.exports = MenuSidebar
