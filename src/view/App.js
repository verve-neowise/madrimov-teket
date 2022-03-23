"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var rootReducer_1 = require("../store/redux/rootReducer");
var Layout_1 = require("./pages/layout/Layout");
var Login_1 = require("./pages/login/Login");
function App() {
    var _a = (0, rootReducer_1.useTypedSelector)(function (state) { return state; }), auth = _a.auth, theme = _a.theme;
    var navigate = (0, react_router_dom_1.useNavigate)();
    (0, react_1.useEffect)(function () {
        var local = localStorage.getItem("auth");
        var themes = localStorage.getItem("theme");
        document.documentElement.setAttribute('data-theme', themes ? themes : theme);
        if (auth.success || local === "true") {
            return navigate("/");
        }
        else if (auth.error ||
            auth.error === null ||
            local === "false" ||
            local === null) {
            return navigate("/login");
        }
    }, [auth, navigate, theme]);
    return (<div className="app">
      <react_router_dom_1.Routes>
        <react_router_dom_1.Route index element={<Layout_1.Layout />}/>
        <react_router_dom_1.Route path="/login" element={<Login_1.Login />}/>
      </react_router_dom_1.Routes>
    </div>);
}
exports["default"] = App;
