import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute right-4 top-4">
      <ul className="flex mt-6 space-x-4">
        <li>
          <Link href="/step1" className="text-white hover:text-blue-200">
            Step 1
          </Link>
        </li>
        <li>
          <Link href="/step2" className="text-white hover:text-blue-200">
            Step 2
          </Link>
        </li>
        <li>
          <Link href="/step3" className="text-white hover:text-blue-200">
            Step 3
          </Link>
        </li>
        <li>
          <Link href="/training" className="text-white hover:text-blue-200">
            Trainings
          </Link>
        </li>
        <li>
          <Link href="/funnels" className="text-white hover:text-blue-200">
            Funnels
          </Link>
        </li>
        <li>
          <Link href="/members" className="text-white hover:text-blue-200">
            Members
          </Link>
        </li>
        <li>
          <Link href="/leaderboard" className="text-white hover:text-blue-200">
            Leaderboard
          </Link>
        </li>
        <li>
          <Link href="/account" className="text-white hover:text-blue-200">
            Account
          </Link>
        </li>
      </ul>
    </nav>
  );
}
