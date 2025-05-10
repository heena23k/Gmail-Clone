// App.js
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inbox from './components/Inbox';
import Body from './components/Body';
import Mail from './components/Mail';
import SendEmail from './components/SendEmail';
import Login from './components/Login';
import Signup from './components/Signup';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Inbox />
      },
      {
        path: "/mail/:id",
        element: <Mail />
      }
    ]
  },{
    path:"/login",
    element:<Login/>
  }
  ,{
    path:"/signup",
    element:<Signup/>
  }
]);

function App() {
  return (
    <div className='relative bg-[#F6F8FC] h-screen'>
      <Navbar />
      <RouterProvider router={appRouter} />

      {/* Floating SendEmail popup */}
      <div className='fixed w-[30%] bottom-0 right-20 z-50'>
        <SendEmail />
      </div>
    </div>
  );
}

export default App;
