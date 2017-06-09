import AppBarMain from './AppBarMain'

const Layout = (props) => (
  <div>
    <AppBarMain />
    {props.children}
  </div>  
)

export default Layout