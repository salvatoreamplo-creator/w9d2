
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from '../../component/myNav'
import MyFooter from '../../component/myFooter'
import WelcomeAllert from '../../component/welcomeAllert'
import AllTheBook from '../../component/AllTheBook'
function App() {

  return (
    <>
      <MyNav />
      <welcomeAllert />
      <AllTheBook />

      <MyFooter />
    </>
  )
}

export default App
