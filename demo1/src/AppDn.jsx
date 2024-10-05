import './indexdn.css';

function Register() {
    return (
      <div className="container">
        <div className="form-left">
          <h2>Welcome back</h2>
          <p>Chào mừng bạn đến với phòng khám của chúng tôi</p>
          <button className="sign-in-btn" onClick={() => window.location.href = './indexdn.html'}>
            Sign in
          </button>
        </div>
        <div className="form-right">
          <h2>Sign up</h2>
          <div className="social-icons">
            <a href="#"><img src="src/img/fb2.png" alt="Facebook" /></a>
            <a href="#"><img src="src/img/gg1.png" alt="Google" /></a>
            <a href="#"><img src="src/img/git.png" alt="LinkedIn" /></a>
          </div>
          <form>
            <div className="form-group">
              <input type="text" id="first_name" name="first_name" placeholder="First Name" required />
              <input type="text" id="last_name" name="last_name" placeholder="Last Name" required />
            </div>
            <div className="form-group">
              <input type="email" id="email" name="email" placeholder="Email" required />
              <input type="text" id="phone" name="phone" placeholder="Phone" required />
            </div>
            <div className="form-group">
              <input type="text" id="address" name="address" placeholder="Address" required />
              <select id="gender" name="gender" required>
                <option value="" disabled selected>Gender</option>
                <option value="male">Nam</option>
                <option value="female">Nữ</option>
                <option value="other">Khác</option>
              </select>
            </div>
            <div className="form-group">
              <input type="password" id="password" name="password" placeholder="Password" required />
              <input type="date" id="birthdate" name="birthdate" required />
            </div>
            <button type="submit" className="sign-up-btn">Sign up</button>
          </form>
        </div>
      </div>
    );
  }
  
  export default Register;

