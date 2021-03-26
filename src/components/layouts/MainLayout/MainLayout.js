import Header from '../Header';

const MainLayout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
)

export default MainLayout;