
import Link from 'next/link';
import { FaTasks, FaBolt, FaSyncAlt, FaCloud } from 'react-icons/fa';
import { PiRainbowCloudLight } from 'react-icons/pi';

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-pink-100 to-yellow-100">
      <div className="max-w-md w-full bg-white/90 p-8 rounded-2xl shadow-2xl border border-gray-200">
        <h1 className="flex items-center gap-2 text-3xl font-extrabold mb-8 text-pink-600 text-center tracking-tight drop-shadow">
          <PiRainbowCloudLight className="w-10 h-10" /> Afternoon Practices
        </h1>
        <ul className="space-y-5">
          <li>
            <Link
              href="/task-ssr"
              className="flex items-center gap-3 bg-blue-50 hover:bg-blue-100 transition rounded-xl px-5 py-4 font-semibold text-blue-700 shadow hover:shadow-lg"
            >
              <FaTasks className="text-blue-400 text-xl" />
              Task - SSR
            </Link>
          </li>
          <li>
            <Link
              href="/task-ssg"
              className="flex items-center gap-3 bg-pink-50 hover:bg-pink-100 transition rounded-xl px-5 py-4 font-semibold text-pink-700 shadow hover:shadow-lg"
            >
              <FaBolt className="text-pink-400 text-xl" />
              Task - SSG
            </Link>
          </li>
          <li>
            <Link
              href="/task-isr"
              className="flex items-center gap-3 bg-yellow-50 hover:bg-yellow-100 transition rounded-xl px-5 py-4 font-semibold text-yellow-700 shadow hover:shadow-lg"
            >
              <FaSyncAlt className="text-yellow-400 text-xl" />
              Task - ISR
            </Link>
          </li>
          <li>
            <Link
              href="/task-csr"
              className="flex items-center gap-3 bg-green-50 hover:bg-green-100 transition rounded-xl px-5 py-4 font-semibold text-green-700 shadow hover:shadow-lg"
            >
              <FaCloud className="text-green-400 text-xl" />
              Task - CSR
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}