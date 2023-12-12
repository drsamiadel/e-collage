import {
  HelpCircle,
  History,
  LayoutDashboard,
  Library,
  LucideBell,
  MenuIcon,
  User2,
} from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="px-2">
      <div className="navbar bg-accent max-w-7xl min-w-[300px] mx-auto my-2 rounded-3xl">
        <div className="navbar-start">
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label
                htmlFor="my-drawer"
                className="btn btn-ghost drawer-button rounded-3xl"
              >
                <MenuIcon />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <div className="p-2 h-full">
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content rounded-3xl">
                  <li>
                    <Link href="/">
                      <LayoutDashboard
                        size={18}
                        className="text-gray-600 mr-1"
                      />
                      Dashboard
                    </Link>
                  </li>
                  <div className="divider my-1" />
                  <li>
                    <Link href="/">
                      <Library size={18} className="text-gray-600 mr-1" />
                      My courses
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <History size={18} className="text-gray-600 mr-1" />
                      MS PowerPoint for Beginers
                      <div
                        className="radial-progress w-5 h-5 text-primary"
                        style={
                          {
                            "--value": "70",
                            "--size": "12rem",
                            "--thickness": "2px",
                          } as React.CSSProperties
                        }
                        role="progressbar"
                      />
                    </Link>
                  </li>
                  <div className="divider my-2" />
                  <li>
                    <Link href="/">All courses</Link>
                  </li>
                  <li>
                    <Link href="/">Web developing</Link>
                  </li>
                  <li>
                    <Link href="/">Motion graphic</Link>
                  </li>
                  <li>
                    <Link href="/">Web developing</Link>
                  </li>
                  <div className="flex-grow flex flex-col justify-end">
                    <div className="divider my-1" />
                    <li>
                      <Link href="/">
                        <HelpCircle size={18} className="text-gray-600 mr-1" />
                        Support
                      </Link>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-center">
          <Link href="/" className="btn btn-ghost text-xl">
            e-Collage
          </Link>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <LucideBell />
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <User2 />
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/">Profile</Link>
              </li>
              <li>
                <Link href="/">Settings</Link>
              </li>
              <li>
                <Link href="/" className="text-error">
                  Logout
                </Link>
              </li>
              <li>
                <Link href="/">Login</Link>
              </li>
              <li>
                <Link href="/">Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
