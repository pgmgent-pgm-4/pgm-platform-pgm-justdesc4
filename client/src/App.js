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
  Education,
  Blog,
  Curriculum,
  Portfolio,
  Services,
  Team,
  Search,
  Project,
  BlogPost,
} from "./pages";
import Root from "./layouts/Root";
import { ROUTES } from "./routes/routes";
import { MenuProvider } from "./context/MenuContext";
import { ThemeArea } from "./context/ThemeContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      errorElement={<div>404 - Sorry this page does not exist</div>}
    >
      <Route path={ROUTES.home.path} element={<Home />} />
      <Route path={ROUTES.education.path} element={<Education />} />
      <Route path={ROUTES.blog.path} element={<Blog />} />
      <Route path={ROUTES.curriculum.path} element={<Curriculum />} />
      <Route path={ROUTES.portfolio.path} element={<Portfolio />} />
      <Route path={ROUTES.services.path} element={<Services />} />
      <Route path={ROUTES.team.path} element={<Team />} />
      <Route path={ROUTES.search.path} element={<Search />} />
      <Route path={ROUTES.project.path} element={<Project />} />
      <Route path={ROUTES.blogpost.path} element={<BlogPost />} />
      <Route path={ROUTES.service.path} element={<Services />} />
    </Route>
  )
);

function App() {
  return (
    <ThemeArea>
      <MenuProvider>
        <RouterProvider router={router}>
          {/* Other components */}
        </RouterProvider>
      </MenuProvider>
    </ThemeArea>
  );
}

export default App;
