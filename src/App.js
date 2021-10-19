import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header";
import SignIn from "./components/signin";
import Home from "./components/home";
import "./styles.css";
import { AuthProvider } from "./context/auth";
import { Container } from "react-bootstrap";

export default function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <BrowserRouter>
          <Header />
          <AuthProvider>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/signin" component={SignIn} />
            </Switch>
          </AuthProvider>
        </BrowserRouter>
      </div>
    </Container>
  );
}
