import { useState } from "react";
import { Link } from "react-router-dom";
import { googleIcon, facebookIcon, xIcon, Logo } from ".";
import Button from "../components/common/Button";
import { useAuth } from "../context/AuthContext";


interface LoginProps {
  isFromReferral?: boolean;
}

const Login: React.FC<LoginProps> = ({ isFromReferral = false }) => {
  const pageTitle = isFromReferral ? "Create an account" : "Log in or sign up";

  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuth();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) setError("");
  };

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Please enter your email");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    // email auth logic
    setTimeout(() => {
      setIsLoading(false);
      setError("Email login not implemented yet");
    }, 1500);
  };

  const handleSocialLogin = (provider: string) => {
    if (provider === "google") {
      setIsGoogleLoading(true);
      login(provider);
    }
  };

  return (
    <div className="bg-[#171A1E] flex justify-center items-center py-10 min-h-screen">
      <div className="flex flex-col items-center w-full max-w-md px-6 md:px-10">
        <div className="flex flex-col gap-8">
          <img
            src={Logo}
            alt="Dezenmart Logo"
            className="w-[75px] h-[75px] mx-auto"
          />
          {isFromReferral && (
            <h1 className="text-2xl font-bold text-white mb-2">
              You've been invited!
            </h1>
          )}
          <h2 className="text-2xl text-white font-bold mb-6">{pageTitle}</h2>
          {isFromReferral && (
            <>
              <p className="text-gray-400">
                Sign up to receive points on your first purchase
              </p>
            </>
          )}
        </div>

        <form onSubmit={handleEmailLogin} className="w-full">
          <input
            type="email"
            className={`text-white bg-[#292B30] h-12 w-full border-none outline-none px-4 mb-2 ${
              error ? "border-l-4 border-l-Red" : ""
            }`}
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />

          {error && <p className="text-Red text-sm mb-3 mt-1">{error}</p>}

          <Button
            title={isLoading ? "Please wait..." : "Continue"}
            type="submit"
            className="bg-Red text-white h-12 flex justify-center w-full border-none outline-none text-center mb-5"
            disabled={isLoading}
          />
        </form>

        <div className="w-full">
          {/* Social Login Buttons */}
          <div className="space-y-3 w-full">
            <Button
              title={
                isGoogleLoading
                  ? "Redirecting to Google..."
                  : "Sign in with Google"
              }
              img={googleIcon}
              path=""
              className="bg-[#292B30] flex justify-center gap-2 text-white h-12 rounded-md w-full border-none"
              onClick={() => handleSocialLogin("google")}
              disabled={isGoogleLoading}
            />

            <Button
              title="Sign in with Facebook"
              img={facebookIcon}
              className="bg-[#292B30] flex justify-center gap-2 text-white h-12 rounded-md w-full border-none"
              onClick={() => handleSocialLogin("facebook")}
            />

            <Button
              title="Sign in with X"
              img={xIcon}
              className="bg-[#292B30] flex justify-center gap-2 text-white h-12 rounded-md w-full border-none mb-6"
              onClick={() => handleSocialLogin("x")}
            />
          </div>
        
        </div>

        <p className="text-sm text-center font-medium text-white mt-6">
          By logging in, you agree to our{" "}
          <Link to="/terms" className="text-[#4FA3FF]">
            Terms of Service
          </Link>{" "}
          &{" "}
          <Link to="/privacy" className="text-[#4FA3FF]">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
      {/* )} */}
    </div>
  );
};

export default Login;
