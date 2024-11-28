import { useNavigate } from "react-router-dom";

const LogIn = () => {

    const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center md:mt-20 p-6 bg-white">
      <main className="bg-white p-8 rounded-lg w-full max-w-md text-center">
        <h1 className="text-xs mb-6 text-left">MY ACCOUNT</h1>
        <form className="space-y-6">
          <div className="relative flex flex-col mb-4">
            <input
              type="text"
              id="username"
              className="peer h-10 w-full border-b border-gray-600 text-black-300 placeholder-transparent transition-colors focus:outline-none text-left"
              placeholder="Email Adress"
            />
            <label
              htmlFor="username"
              className="absolute cursor-text left-0 -top-3.5 text-gray-600 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-xs duration-500"
            >
              Email Address
            </label>
          </div>
          <div className="relative flex flex-col mb-4">
            <input
              type="password"
              id="password"
              className="peer h-10 w-full border-b border-gray-600 focus:border-black-600 text-black-600 placeholder-transparent focus:outline-none text-left"
              placeholder="Password"
            />
            <label
              htmlFor="password"
              className="absolute cursor-text left-0 -top-3.5 text-gray-600 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-black-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-black-600 peer-focus:text-xs duration-500"
            >
              Password
            </label>
          </div>

            
          <a
            href="#"
            className="block mt-4 text-xs text-gray-600 text-underline underline"
          >
            FORGOT PASSWORD?
          </a>
          <button   type="submit" 
                    className="w-full text-white bg-black border border-white tranasition-all duration-300 ease-in-out py-3 hover:bg-white hover:text-black hover:border-black"
                    onClick={()=> navigate('/')}>
            SIGN IN
          </button>
        </form>
        <button
          type="submit"
          className="mt-3 w-full bg-white text-black border border-black transition-all duration-300 ease-in-out py-3 hover:bg-black hover:text-white"
          onClick={() => navigate("/register")}
        >
          CREATE ACCOUNT
        </button>
      </main>
    </div>
  );
};

export default LogIn;
