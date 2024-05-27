import "./reset.css";
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
  Curriculum,
  Portfolio,
  Services,
  Team,
  Search,
  Project,
} from "./pages";
import Root from "./layouts/Root";
import { ROUTES } from "./routes/routes";
import { MenuProvider } from "./context/MenuContext";
import Header from "./components/Header";
import Menu from "./components/Menu";

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
      <Route path={ROUTES.curriculum.path} element={<Curriculum />} />
      <Route path={ROUTES.portfolio.path} element={<Portfolio />} />
      <Route path={ROUTES.services.path} element={<Services />} />
      <Route path={ROUTES.team.path} element={<Team />} />
      <Route path={ROUTES.search.path} element={<Search />} />
      <Route path={ROUTES.project.path} element={<Project />} />
    </Route>
  )
);

function App() {
  return (
    <MenuProvider>
      <RouterProvider router={router}>
        <Header />
        <Menu />
        {/* Other components */}
      </RouterProvider>
    </MenuProvider>
  );
}

export default App;
