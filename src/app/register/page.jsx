import Link from "next/link";

const Register = () => {
  return (
    <div>
      <h1>Register</h1>
      <button>
        Go to <Link href="/">Home Page</Link> or{" "}
        <Link href="/login">Login Page</Link>
      </button>
    </div>
  );
};

export default Register;
