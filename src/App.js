import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<MainContainer/>
      },
      {
        path:"/watch",
        element:<WatchPage/>
      }
    ]
  }
])


function App() {
  return (
    <Provider store={store}>
    <div>
      {
        /**
        -Head-done
        -Body-done
          -SideBar-done
            -Menu Items-done
          -MainContainer-done
            -ButtonList-done
            -VideoContainer-done
              -VideoCard-done
         */
      }
        <Head/>
         <RouterProvider router={appRouter}/>
        
    </div>
    </Provider>
  );
}

export default App;
