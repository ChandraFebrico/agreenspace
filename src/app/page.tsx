import Image from 'next/image';
// pages/index.tsx
import ThreeCanvasWrapper from '../components/ThreeCanvasWrapper'
import ZoomImage from '../components/ZoomableImage'

export default function Home() {
  return (
    <div>
      {/* //Website View */}
      <div className="hidden sm:block bg-[url('/img/background.jpg')] bg-cover bg-center bg-fixed h-screen">
        {/* //Showing Navigation */}
        <div className="hidden sm:block">
          <nav className="flex justify-between fixed top-0 left-0 w-full shadow z-50 " style={{ padding: '20px' }} >
            <div className="flex justify-start">
              <Image width={40}  // Width in pixels
                height={40} // Height in pixels 
                className="mx-auto block h-10 rounded-full sm:mx-0 sm:shrink-0" src="/img/home.jpg" alt="" />
              <div className="">
                <p className=" font-medium text-lg antialiased  rounded-lg px-2 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">A Green Space</p>

              </div>
            </div>
            <div className="">
              <a href="/dashboard" className="font-bold rounded-lg px-2 py-2 text-gray-900 hover:bg-gray-100 hover:text-gray-900">
                Home
              </a>
              <a href="/team" className="font-bold rounded-lg px-3 py-2 text-gray-900 hover:bg-gray-100 hover:text-gray-900">
                Product
              </a>
              <a href="/projects" className="font-bold rounded-lg px-3 py-2 text-gray-900 hover:bg-gray-100 hover:text-gray-900">
                Contact Us
              </a>
              <a href="/reports" className="font-bold rounded-lg px-3 py-2 text-gray-900 hover:bg-gray-100 hover:text-gray-900">
                About Us
              </a>
            </div>
          </nav>
        </div>
        <div className="flex justify-center p-8  mt-20">
          <div className="w-1/2 p-12 grid grid-flow-col grid-rows-3 gap-4 ">
            <div className="col-span-2">
              <p className="text-6xl font-empirez leading-[1.3]">
                <span className="inline-block overflow-hidden whitespace-nowrap animate-typing1">
                  <span className="inline-block border-r-2 border-black pr-1 animate-cursor">
                    We craft <a className="font-bold text-sky-600 underline decoration-sky-500/30">spaces</a>,
                  </span>
                </span><br />
                <span className="inline-block overflow-hidden whitespace-nowrap animate-typing2">
                  <span className="inline-block border-r-2 border-lime-600 pr-1 animate-cursor">
                    you <a className="font-bold text-lime-600 underline decoration-lime-500/30">plant</a> joy
                  </span>
                </span>
              </p>
            </div>
            <div className="col-span-2 ">
              <h1 className='text-2xl font-hikasami'>🌿 Transparent Wall-Mount Plant Holder</h1><br />
              <p className='font-hikasami'>
                Let your plant take the spotlight. <br /><br />

                Crafted for lovers of clean aesthetics and modern greenery, this transparent wall-mount plant holder creates the illusion that your plant is floating—turning it into living wall art. Whether you&apos;re showcasing a staghorn fern, orchid, or kokedama, the minimal design blends effortlessly into any interior.
              </p></div>
            <div className="col-span-1 ">
              <button className="p-2 text-stone-50 rounded-md bg-lime-950 hover:bg-green-900 ">Shop Now</button></div>
          </div>
          <div className="p-2 ">
            <div className="outline-2 outline-offset-2 outline-dashed">
              <Image width={500}  // Width in pixels
                height={500} // Height in pixels
                className="rounded-md " src="/img/1.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className=" flex justify-end -mt-96 -ml-60">
          <div className="w-1/3 justify-items-center">
            <main>
              <ThreeCanvasWrapper />
            </main>
          </div>
        </div>
      </div>

      {/* //Mobile View */}
      <div className="block sm:hidden bg-[url('/img/backgroundmb.jpg')] bg-cover bg-center bg-fixed h-screen">
        <nav className="flex justify-around fixed top-0 left-0 w-full shadow z-50 bg-gray-100/50 " style={{ padding: '20px' }} >
          <div className="flex justify-start">
            <Image width={40}  // Width in pixels
              height={40} // Height in pixels
              className="mx-auto block h-10 rounded-full sm:mx-0 sm:shrink-0" src="/img/home.jpg" alt="" />
          </div>
          <div className="flex justify-end">
            <a href="/dashboard" className="text-sm font-medium sm:font-xs rounded-lg px-2 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">
              Home
            </a>
            <a href="/team" className="text-sm font-medium rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">
              Product
            </a>
            <a href="/projects" className="text-sm font-medium rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">
              Contact Us
            </a>
            <a href="/reports" className="text-sm font-medium rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">
              About Us
            </a>
          </div>
        </nav>


        <div className="flex justify-start p-8  mt-20">
          <div className="p-4 grid grid-flow-rows grid-rows-1 gap-4 ">
            <div className="col-span-1">
              <p className="text-2xl font-empirez leading-[1.5]">
                <span className="inline-block overflow-hidden whitespace-nowrap animate-typing1">
                  <span className="inline-block border-r-2 border-black pr-1 animate-cursor">
                    We craft <a className="font-bold text-sky-600 underline decoration-sky-500/30">spaces</a>,
                  </span>
                </span><br />
                <span className="inline-block overflow-hidden whitespace-nowrap animate-typing2">
                  <span className="inline-block border-r-2 border-lime-600 pr-1 animate-cursor">
                    you <a className="font-bold text-lime-600 underline decoration-lime-500/30">plant</a> joy
                  </span>
                </span>
              </p>
            </div>
            <div className="p-2 col-span-1 ">
              <div className="outline-2 outline-offset-2 outline-dashed">
                < ZoomImage />
              </div>
            </div>
            <div className="col-span-1">
              <h1 className='font-bold font-bold'>🌿 Transparent Wall-Mount Plant Holder</h1><br />
              <p>
                Let your plant take the spotlight. <br /><br />

                Crafted for lovers of clean aesthetics and modern greenery, this transparent wall-mount plant holder creates the illusion that your plant is floating—turning it into living wall art. Whether you&apos;re showcasing a staghorn fern, orchid, or kokedama, the minimal design blends effortlessly into any interior.
              </p></div>
            <div className="col-span-1 ">
              <button className="p-2 text-stone-50 rounded-md bg-lime-950 hover:bg-green-900 ">Shop Now</button></div>
          </div>

        </div>
        <div className=" flex justify-end -mt-96 ">
          <div className="w-1/4 justify-items-end">
            <main>
              <ThreeCanvasWrapper />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
