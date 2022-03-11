import React, { lazy, Suspense } from "react";
import {
  useRouteMatch,
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";

const App = () => {
  let { path } = useRouteMatch();
  const routes = [
    { path: `${path}puzzles`, comp: "./shared/pages/hub" },
    { path: `${path}upload/pre-1`, comp: "./shared/Hubs/computerHub/UploadContent", name: 'PreUploadFake' },
    { path: `${path}upload/1`, comp: "./shared/Hubs/computerHub/UploadContent", name: "UploadFake"},
    { path: `${path}shared`, comp: "./shared/pages/Shared" },
    { path: `${path}upload/2`, comp: "./shared/Hubs/computerHub/UploadContent", name: "UploadReal" },
    { path: `${path}ending`, comp: "./shared/pages/Ending" },
    { path: `${path}doctorvideo`, comp: "./shared/pages/in-person-pages/inPersonUploadFake" },
    { path: `${path}videoshare`, comp: "./shared/pages/Shared" },
    { path: `${path}viralvideo`, comp: "./shared/pages/in-person-pages/inPersonHub" },
    { path: `${path}newvideo`, comp: "./shared/pages/in-person-pages/inPersonUploadReal" },
    { path: `${path}ending_`, comp: "./shared/pages/in-person-pages/inPersonEnding" },
    { path: `public`, comp: "./shared/pages/Welcome" },
    { path: `${path}`, comp: "./shared/pages/Welcome" },
  ];

  // TODO: put loading bar in vefore props are received
  return (
    <Router>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          {routes.map((r) => {
            // console.log(r.path)
            return <Route key={r.path} path={r.path} component={renderComponent(r)} />;
          })}
        </Switch>
      </Suspense>
    </Router>
  );
};

function renderComponent(route) {
  if (route.name){
    return lazy(() => import(`${route.comp}`).then(module => ({ default: module[route.name] })));
  }
  return lazy(() => import(`${route.comp}`));
}

export default App;
