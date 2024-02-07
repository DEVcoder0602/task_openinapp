import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      Go to{" "}
      <Link href="/login">
        <button>Login Page</button>
      </Link>{" "}
      or{" "}
      <Link href="/register">
        <button>Register Page</button>
      </Link>
    </div>
  );
}
