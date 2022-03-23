"use strict";
exports.__esModule = true;
exports.Login = void 0;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var authAction_1 = require("../../../store/redux/auth/actions/authAction");
var rootReducer_1 = require("../../../store/redux/rootReducer");
var Login = function () {
    var dispatch = (0, react_redux_1.useDispatch)();
    var state = (0, rootReducer_1.useTypedSelector)(function (state) { return state.auth; });
    var _a = (0, react_1.useState)(""), value = _a[0], setValue = _a[1];
    var _b = (0, react_1.useState)(""), password = _b[0], setPassword = _b[1];
    var submitHandler = function (event) {
        event.preventDefault();
        dispatch((0, authAction_1.asyncAuthAction)(value, password));
    };
    return (<div className="h-screen pt-16 md:pt-32 px-4">
      <form onSubmit={function (event) { return submitHandler(event); }} className="max-w-md mx-auto p-4 py-8 md:p-10 rounded shadow-lg bg-base-200 flex flex-col gap-6">
        {state.error ? (<p className="text-error">Username or password invalid</p>) : null}
        <div className="form-control">
          <label htmlFor="username" className="label">
            <span className="label-text">
              <span className="text-error">*</span> Your Username
            </span>
          </label>
          <input type="text" id="username" value={value} onChange={function (event) { return setValue(event.target.value); }} placeholder="@username" className="input input-bordered"/>
        </div>
        <div className="form-control">
          <label htmlFor="password" className="label">
            <span className="label-text">
              <span className="text-error">*</span> Your Password
            </span>
          </label>
          <input type="text" id="password" value={password} onChange={function (event) { return setPassword(event.target.value); }} placeholder="password" className="input input-bordered"/>
        </div>
        <button className={"btn btn-accent mt-4 gap-1 ".concat(state.loading ? "loading" : "")}>
          LOGIN
        </button>
        <p className="text-left">
          CREATE A NEW ACCOUNT{" "}
          <react_router_dom_1.Link className="text-info underline underline-offset-2" to="/">
            HERE
          </react_router_dom_1.Link>
        </p>
      </form>
    </div>);
};
exports.Login = Login;
