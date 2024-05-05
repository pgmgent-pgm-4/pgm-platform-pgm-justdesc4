import "./App.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import {
  Home,
  Course,
  Blog,
  Program,
  Portfolio,
  Services,
  Team,
  Search,
} from "./pages";
import Root from "./layouts/Root";
import { ROUTES } from "./routes/routes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      errorElement={<div>404 - Sorry this page does not exist</div>}
    >
      <Route path={ROUTES.home.path} element={<Home />} />
      <Route path={ROUTES.course.path} element={<Course />} />
      <Route path={ROUTES.blog.path} element={<Blog />} />
      <Route path={ROUTES.program.path} element={<Program />} />
      <Route path={ROUTES.portfolio.path} element={<Portfolio />} />
      <Route path={ROUTES.services.path} element={<Services />} />
      <Route path={ROUTES.team.path} element={<Team />} />
      <Route path={ROUTES.search.path} element={<Search />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
