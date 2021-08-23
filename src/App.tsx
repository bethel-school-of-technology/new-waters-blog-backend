import * as React from "react";
import { Component, useState } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

// import createHashHistory from 'history/createHashHistory';

// const hashHistory = createHashHistory({ basename: process.env.PUBLIC_URL });

// class App extends Component {
function App(props: any) {
  // const [articles, setArticles] = useState<IArticle[]>([]);

  // const fetchData = async () => {
  //   try {
  //     const resp = await client.getEntries({ content_type: "easysite" });
  //     setArticles(resp.items as any);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // render() {
  return (
    <>
      <Router 
      // history={hashHistory}
      >
        <Switch>
          <PublicRoute
            restricted={true}
            component={SignUp}
            path="/sign-up"
            exact
          />
          <PublicRoute
            restricted={true}
            component={SignIn}
            path="/sign-in"
            exact
          />
          <PrivateRoute component={Home} path="/" exact />
        </Switch>
      </Router>
      <div>
        {/* <UsersDbPull uri="http://localhost:5000/users" />
        <BlogPostsDbPull uri="http://localhost:5000/blog-posts" /> */}
      </div>
    </>
  );
}
// }

export default App;
