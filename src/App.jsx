import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import JobsPage from './pages/JobsPage'
import NotFoundPage from './pages/NotFoundPage';

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>
    <Route path='/jobs' element={<JobsPage />} />
    <Route index element={<HomePage />} />
    <Route path='*' element={<NotFoundPage />} />
  </Route>

)
)
const App = () => {
  return <RouterProvider router={router}/>
}

export default App
