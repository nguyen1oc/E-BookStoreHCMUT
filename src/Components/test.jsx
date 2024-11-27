const [isResetPassword, setIsResetPassword] = useState(false);
const [isSignUp, setIsSignUp] = useState(false);

const navigate = useNavigate(); 

const handleForgotPassword = () => {
  setIsResetPassword(true);
};

const handleSignUp = () => {
  setIsSignUp(true); 
};

const handleGoBackToLogin = () => {
  setIsResetPassword(false);
  setIsSignUp(false); 
};

const handleSubmit = (e) => {
  e.preventDefault();
  navigate("/loginpage");
};

return (
  <div
    id="overlay"
    className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50"
    onClick={(e) => {
      if (e.target.id === "overlay") togglePopup();
    }}
  >
    <div
      className="bg-white p-8 rounded-lg w-1/3 relative"
      onClick={(e) => e.stopPropagation()} 
    >
      {/* Nút đóng "X" */}
      <button
        className="absolute top-1.5 right-2.5 text-[#2D3250] hover:text-black text-xl"
        onClick={togglePopup}
      >
        X
      </button>

      {!isResetPassword && !isSignUp ? (
        // Form Login
        <>
          <h2 className="text-2xl font-bold mb-4 text-[#2D3250]">Log In</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              className="border border-[#2D3250] text-[#2D3250] focus:outline-none focus:ring-2 focus:ring-[#424769] hover:ring-2 hover:ring-[#424769] rounded-lg w-full p-2 mb-4"
            />
            <input
              type="password"
              placeholder="Password"
              className="border border-[#2D3250] text-[#2D3250] focus:outline-none focus:ring-2 focus:ring-[#424769] hover:ring-2 hover:ring-[#424769] rounded-lg w-full p-2 mb-4"
            />
            <div className="flex justify-between mb-4">
              <a
                href="#"
                className="text-[#7077A1] hover:text-black text-sm"
                onClick={handleForgotPassword} 
              >
                Forgot your password?
              </a>
              <a
                href="#"
                className="text-[#7077A1] hover:text-black text-sm"
                onClick={handleSignUp} 
              >
                Sign Up
              </a>
            </div>
            <hr style={{ border: "1px solid #2D3250", margin: "20px 0" }} />
            <button
              type="submit"
              className="border-2 border-[#7077A1] rounded-lg px-5 py-1 text-xl text-[#2D3250] font-bold bg-transparent hover:bg-[#7077A1]"
            >
              Submit
            </button>
          </form>
        </>
      ) : isResetPassword ? (
        // Form Reset Password
        <>
        <h2 className="text-2xl font-bold mb-4 text-[#2D3250]">Reset Password</h2>
        <form>
          <input
            type="email"
            placeholder="Email"
            className="border border-[#2D3250] text-[#2D3250] focus:outline-none focus:ring-2 focus:ring-[#424769] hover:ring-2 hover:ring-[#424769] rounded-lg w-full p-2 mb-4"
          />
          <input
            type="password"
            placeholder="Old Password"
            className="border border-[#2D3250] text-[#2D3250] focus:outline-none focus:ring-2 focus:ring-[#424769] hover:ring-2 hover:ring-[#424769] rounded-lg w-full p-2 mb-4"
          />
          <input
            type="password"
            placeholder="New Password"
            className="border border-[#2D3250] text-[#2D3250] focus:outline-none focus:ring-2 focus:ring-[#424769] hover:ring-2 hover:ring-[#424769] rounded-lg w-full p-2 mb-4"
          />
          <button
            type="submit"
            className="border-2 border-[#7077A1] rounded-lg px-5 py-1 text-xl text-[#2D3250] font-bold bg-transparent hover:bg-[#7077A1]"
          >
            Reset Password
          </button>
        </form>
        <div className="flex justify-between mt-4 mb-2">
          <button
            className="text-[#7077A1] hover:text-[#2D3250] text-sm"
            onClick={handleGoBackToLogin} // Quay lại form đăng nhập
          >
            Back to Login
          </button>
        </div>
      </>
      ) : (
        // Form Sign Up
        <>
          <h2 className="text-2xl font-bold mb-4 text-[#2D3250]">Sign Up</h2>
          <form>
            <input
              type="text"
              placeholder="Username"
              className="border border-[#2D3250] text-[#2D3250] focus:outline-none focus:ring-2 focus:ring-[#424769] hover:ring-2 hover:ring-[#424769] rounded-lg w-full p-2 mb-4"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-[#2D3250] text-[#2D3250] focus:outline-none focus:ring-2 focus:ring-[#424769] hover:ring-2 hover:ring-[#424769] rounded-lg w-full p-2 mb-4"
            />
            <input
              type="password"
              placeholder="Password"
              className="border border-[#2D3250] text-[#2D3250] focus:outline-none focus:ring-2 focus:ring-[#424769] hover:ring-2 hover:ring-[#424769] rounded-lg w-full p-2 mb-4"
            />
            <input
              type="password"
              placeholder="Verify Password"
              className="border border-[#2D3250] text-[#2D3250] focus:outline-none focus:ring-2 focus:ring-[#424769] hover:ring-2 hover:ring-[#424769] rounded-lg w-full p-2 mb-4"
            />
            <button
              type="submit"
              className="border-2 border-[#7077A1] rounded-lg px-5 py-1 text-xl text-[#2D3250] font-bold bg-transparent hover:bg-[#7077A1]"
            >
              Sign Up
            </button>
          </form>
          <div className="flex justify-between mt-4 mb-2">
            <button
              className="text-[#7077A1] hover:text-[#2D3250] text-sm"
              onClick={handleGoBackToLogin} // Quay lại form đăng nhập
            >
              Back to Login
            </button>
          </div>
        </>
      )}

      {/* Nút đóng popup */}
      <button
        className="mt-1 text-[#7077A1] hover:text-[#2D3250]"
        onClick={togglePopup} // Đóng popup khi nhấn vào nút này
      >
        Close
      </button>
    </div>
  </div>
);