import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../Context/AuthContext";
// FontAwesomeIcon
function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const { setUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast.error(data.error);
        }
        if (data.token) {
          setUser({
            token: data.token,
            isLogin: true,
          });
          localStorage.setItem("token", data.token);
          toast.success("Tabriklaymiz ro'xatga olindingiz !");
          navigate("/");
        }
      });
  };
  return (
    <div className="d-flex justify-content-center loginpage">
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="light"
      />
      <form
        required
        className="w-25 p-3 border border-0 rounded-4  bg-dark"
        style={{ marginTop: 100, marginBottom: 250 }}>
        <h1 className="d-flex justify-content-center text-primary mb-2">
          Log In
        </h1>
        {/* <!-- Email input --> */}
        <div required className="form-outline mb-4">
          <label className="form-label" htmlFor="form2Example1">
            Email address
          </label>
          <input
            required
            onChange={(e) => {
              setInput({
                ...input,
                email: e.target.value,
              });
            }}
            value={input.email}
            type="email"
            id="form2Example1"
            className="form-control"
            placeholder="Your email"
          />
        </div>

        {/* <!-- Password input --> */}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>
          <input
            required
            onChange={(e) => {
              setInput({
                ...input,
                password: e.target.value,
              });
            }}
            value={input.password}
            type="password"
            id="form2Example2"
            className="form-control"
            placeholder="Your Password"
          />
        </div>

        {/* <!-- 2 column grid layout htmlFor inline styling --> */}
        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            {/* <!-- Checkbox --> */}
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="form2Example31"
              />
              <label className="form-check-label" htmlFor="form2Example31">
                Remember me
              </label>
            </div>
          </div>

          <div className="col">
            {/* <!-- Simple link --> */}
            <a href="#!">Forgot password?</a>
          </div>
        </div>

        {/* <!-- Submit button --> */}
        <button
          onClick={(e) => {
            handleSubmit(e);
          }}
          type="button"
          className="btn w-100 btn-primary  btn-block  mb-4">
          Log in
        </button>

        <div>
          Vaqtinchalik foydalanish uchun ! <br />
          <div className="d-flex mt-2">
            Email:
            <p className="text-info ms-2">eve.holt@reqres.in</p>
          </div> 
          <div className="d-flex">
            Password: <p className="text-info ms-2">cityslicka</p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
