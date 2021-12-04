import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import store from "redux/store"
import Views from "views"

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Views />
      </BrowserRouter>
    </Provider>
  )
}

export default App
