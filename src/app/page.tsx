import Image from "next/image";
// pages/index.tsx
import ThreeCanvasWrapper from '../components/ThreeCanvasWrapper'


export default function Home() {
  return (
    <div>
      <nav className="block sm:hidden flex justify-Round " style={{ padding: '20px' }} >
        <div className="flex justify-start">
          <img className="mx-auto block h-10 rounded-full sm:mx-0 sm:shrink-0" src="/img/home.jpg" alt="" />
        </div>
        <div className="flex justify-end">
          <a href="/dashboard" className="font-medium sm:font-xs rounded-lg px-2 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">
            Home
          </a>
          <a href="/team" className="font-medium rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">
            Product
          </a>
          <a href="/projects" className="font-medium rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">
            Contact Us
          </a>
          <a href="/reports" className="font-medium rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">
            About Us
          </a>
        </div>
      </nav>
      <div className="hidden sm:block">
        <nav className="flex justify-between" style={{ padding: '20px' }} >
          <div className="flex justify-start">
            <img className="mx-auto block h-10 rounded-full sm:mx-0 sm:shrink-0" src="/img/home.jpg" alt="" />
            <div className="">
              <p className=" font-medium text-lg antialiased  rounded-lg px-2 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">A Green Space</p>

            </div>
          </div>
          <div className="">
            <a href="/dashboard" className="font-medium rounded-lg px-2 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">
              Home
            </a>
            <a href="/team" className="font-medium rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">
              Product
            </a>
            <a href="/projects" className="font-medium rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">
              Contact Us
            </a>
            <a href="/reports" className="font-medium rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">
              About Us
            </a>
          </div>
        </nav>
      </div>
      <div className="flex justify-center p-8 ">
        <div className="w-1/2 p-12 grid grid-flow-col grid-rows-3 gap-4 ">
          <div className="col-span-2">
            <p className="text-6xl"> We <a className="font-bold text-lime-600 underline decoration-lime-500/30"> Create</a>,<br />
              Cool <a className="font-bold text-sky-500 underline decoration-sky-500/30">Stuff</a></p>
          </div>
          <div className="col-span-2 ">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  </p></div>
          <div className="col-span-1 ">
            <button className="p-2 text-stone-50 rounded-md bg-lime-950 hover:bg-green-900 ">Shop Now</button></div>
        </div>
        <div className="p-2">
          <img width={500}  // Width in pixels
            height={500} // Height in pixels
            className="rounded-md" src="/img/1.jpg" ></img>
        </div>
        <div>

        </div>
      </div>
      <main>
        <ThreeCanvasWrapper />
      </main>
    </div>
  );
}
