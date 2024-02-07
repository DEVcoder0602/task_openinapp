import Image from "next/image";
import Link from "next/link";
import leftBackground from "@/../public/assets/Left side.png";
import {
  LogoIcon,
  GithubIcon,
  XIcon,
  LinkedInIcon,
  DiscordIcon,
  GithubIconDark,
  XIconDark,
  LinkedInIconDark,
  DiscordIconDark,
  GoogleIcon,
  AppleIcon,
} from "@/ui/icons";

const Login = () => {
  return (
    <div className="flex sm:flex-row flex-col bg-background_white">
      <div className="sm:flex-1">
        <Image
          priority
          src={leftBackground}
          alt="background"
          className="relative w-full h-screen sm:block hidden"
        />
        <div className="sm:block flex flex-row items-center bg-backgroud_purple sm:p-0 p-5">
          <div className="sm:absolute static left-5 top-5">
            <div className="flex justify-center items-center bg-white rounded-[50%] h-[40px] w-[40px] md:h-[68px] md:w-[68px]">
              {LogoIcon}
            </div>
          </div>
          <h1 className="text-red-500 font-bold text-xl md:text-3xl lg:text-5xl sm:absolute static sm:top-[40%] sm:left-[18%] lg:left-[20%] sm:ml-0 ml-4">
            BASE
          </h1>
        </div>
        <div className=" sm:block hidden sm:absolute static bottom-5 left-[8%] md:left-[12%] lg:left-[14%]">
          <div className="flex flex-row items-center gap-4 lg:gap-8">
            <a href="github.com">{GithubIcon}</a>
            <a href="twitter.com">{XIcon}</a>
            <a href="linkedin.com">{LinkedInIcon}</a>
            <a href="discord.com">{DiscordIcon}</a>
          </div>
        </div>
      </div>
      <div className="sm:flex-1 w-full">
        <div className="md:w-3/5 w-[90%] md:p-0 p-6 m-auto">
          <h1 className="font-bold md:text-3xl text-xl mt-6">Sign In</h1>
          <p className="my-2">Sign in to your account</p>
          <div className="flex flex-row flex-wrap items-center gap-4 my-8">
            <button className="flex-1 flex flex-row justify-center items-center bg-white p-2 rounded-lg">
              {GoogleIcon}{" "}
              <span className="text-text_secondary whitespace-nowrap md:text-sm text-xs">
                Sign in with Google
              </span>
            </button>
            <button className="flex-1 flex flex-row justify-center items-center bg-white p-2 rounded-lg">
              {AppleIcon}
              <span className="text-text_secondary whitespace-nowrap md:text-sm text-xs">
                Sign in with Apple
              </span>
            </button>
          </div>
          <form className=" m-auto bg-white rounded-lg p-8">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-black"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="johndoe@gmail.com"
                required
                className="w-full px-3 py-2 my-2 rounded-lg outline-none focus:bg-input_background_active bg-input_background"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-black"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                className="w-full px-3 py-2 my-2 rounded-lg outline-none focus:bg-input_background_active bg-input_background"
              />
            </div>

            <button className="text-text_link text-sm">Forgot password?</button>
            <button
              type="submit"
              className="w-full bg-backgroud_purple text-white py-2 my-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 font-bold"
            >
              <Link href="/dashboard">Sign In</Link>
            </button>
            <p className="text-text_secondary text-sm my-6 text-center">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="text-text_link">
                Register here
              </Link>
            </p>
          </form>
        </div>
      </div>
      <div className="md:hidden block">
        <div className="flex flex-row justify-center items-center gap-4 p-4">
          <a href="github.com">{GithubIconDark}</a>
          <a href="twitter.com">{XIconDark}</a>
          <a href="linkedin.com">{LinkedInIconDark}</a>
          <a href="discord.com">{DiscordIconDark}</a>
        </div>
      </div>
      <button>
        Go to <Link href="/">Home Page</Link> or{" "}
        <Link href="/register">Register Page</Link>
      </button>
    </div>
  );
};

export default Login;