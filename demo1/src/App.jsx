import './index.css';

function App() {
  return (
    <div className="container">
      <div className="form-left">
        <h2>Welcome back</h2>
        <p>Chào mừng bạn trở lại với phòng khám của chúng tôi</p>
      </div>
      <div className="form-right">
        <h2>Sign in</h2>
        <div className="social-icons">
          <a href="#">
            <img src="src/img/fb2.png" alt="Facebook" />
          </a>
          <a href="#">
            <img src="src/img/gg1.png" alt="Google" />
          </a>
          <a href="#">
            <img src="src/img/git.png" alt="LinkedIn" />
          </a>
        </div>
        <form>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="sign-in-btn">
            Sign in
          </button>
        </form>
        <p className="forgot-password">
          <a href="#">Forgot Password?</a>
        </p>
      </div>
    </div>
  );
}

export default App;
