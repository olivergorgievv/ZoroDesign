import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../config/firebase";

function LoginModal({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async (event) => {
    event.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async (event) => {
    event.preventDefault();
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const dialog = useRef();
  useEffect(() => {
    const modal = dialog.current;
    modal.showModal();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      modal.close(); // needed to avoid error being thrown
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return createPortal(
    <>
      <dialog
        className="w-full rounded-lg max-w-md py-6 px-4 mx-auto lg:py-4 "
        ref={dialog}
      >
        <button
          onClick={onClose}
          type="button"
          className="text-gray-600 bg-center content-center flex gap-3 border border-gray-300 hover:border-gray-500 font-medium rounded-lg text-sm px-6 py-2 text-center "
        >
          back
        </button>
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
          Sign in to your account
        </h1>
        <a
          onClick={signInWithGoogle}
          href="#"
          className="w-full inline-flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-200 "
        >
          <svg
            className="w-5 h-5 mr-2"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.3081 10.2303C20.3081 9.55056 20.253 8.86711 20.1354 8.19836H10.7031V12.0492H16.1046C15.8804 13.2911 15.1602 14.3898 14.1057 15.0879V17.5866H17.3282C19.2205 15.8449 20.3081 13.2728 20.3081 10.2303Z"
              fill="#3F83F8"
            />
            <path
              d="M10.7019 20.0006C13.3989 20.0006 15.6734 19.1151 17.3306 17.5865L14.1081 15.0879C13.2115 15.6979 12.0541 16.0433 10.7056 16.0433C8.09669 16.0433 5.88468 14.2832 5.091 11.9169H1.76562V14.4927C3.46322 17.8695 6.92087 20.0006 10.7019 20.0006V20.0006Z"
              fill="#34A853"
            />
            <path
              d="M5.08857 11.9169C4.66969 10.6749 4.66969 9.33008 5.08857 8.08811V5.51233H1.76688C0.348541 8.33798 0.348541 11.667 1.76688 14.4927L5.08857 11.9169V11.9169Z"
              fill="#FBBC04"
            />
            <path
              d="M10.7019 3.95805C12.1276 3.936 13.5055 4.47247 14.538 5.45722L17.393 2.60218C15.5852 0.904587 13.1858 -0.0287217 10.7019 0.000673888C6.92087 0.000673888 3.46322 2.13185 1.76562 5.51234L5.08732 8.08813C5.87733 5.71811 8.09302 3.95805 10.7019 3.95805V3.95805Z"
              fill="#EA4335"
            />

            <defs>
              <clipPath id="clip0_13183_10121">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          Sign in with Google
        </a>
        <form className="space-y-4 md:space-y-6" action="#">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="name@company.com"
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              required=""
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                  required=""
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="remember" className="text-gray-500">
                  Remember me
                </label>
              </div>
            </div>
            <a
              href="#"
              className="text-sm font-medium text-primary-600 hover:underline"
            >
              Forgot password?
            </a>
          </div>
          <button
            onClick={signIn}
            type="button"
            className="w-full text-white bg-primary-red hover:bg-primary-hover focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Sign in
          </button>

          <p className="text-sm font-light text-gray-500">
            Dont have an account yet?{" "}
            <a
              href="#"
              className="font-medium text-primary-600 hover:underline"
            >
              Sign up
            </a>
          </p>
        </form>
      </dialog>
    </>,
    document.getElementById("modal")
  );
}

export default LoginModal;
