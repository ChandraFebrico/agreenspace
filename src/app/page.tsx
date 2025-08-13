import Image from 'next/image';
import LoadingScreen from "@/components/LoadingScreen";
// pages/index.tsx
// import ThreeCanvasWrapper from '../components/ThreeCanvasWrapper'
// import ZoomImage from '../components/ZoomableImage'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMouse } from '@fortawesome/free-solid-svg-icons/faMouse';
import MovableScenery from '@/components/MovableScenery';
import MovableSceneryMobile from '@/components/MovableSceneryMobile';
import TextFadeOnScroll from "@/components/TextFadeOnScroll";
import FirstDisplayMobile from "@/components/FirstDisplayMobile";
import { faArrowRight, faTree } from '@fortawesome/free-solid-svg-icons';

export default function Home() {

  return (
    <LoadingScreen>
      {/* //Website View */}
      <div className="hidden sm:block ">
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
        {/* Navigation end */}

        {/* First Grid */}
        <TextFadeOnScroll />

        <div className='p-8 flex justify-center font-hikasami'>
          <div className='w-3/4 bg-[#FAF9EE] rounded-md flex justify-center'>
            <div className='p-8 '>
              <div className='flex justify-start'>
                <FontAwesomeIcon icon={faTree} className="text-[#57564F] " size="1x" /><br />
                <div className='text-xs font-thin'>
                  Catalog - Plant
                </div>
              </div>
              <br />
              <h1 className='text-4xl '>Transparent Wall-Mount Plant Holder</h1><br />
              <p>
                Let your plant take the spotlight. <br /><br />

                Crafted for lovers of clean aesthetics and modern greenery, this transparent wall-mount plant holder creates the illusion that your plant is floating—turning it into living wall art.
              </p>
              <br />
              <div className='flex justify-start'>
                <button className="w-36 text-xs text-white bg-[#57564F] hover:bg-lime-700 rounded-full  ">Start Explore </button> <br />
                <FontAwesomeIcon icon={faArrowRight} className="bg-[#57564F] hover:bg-lime-700 rounded-full p-2 " size="1x" color='white' />
              </div>
            </div>
            <Image width={450}  // Width in pixels
              height={450} // Height in pixels
              className="rounded-md" src="/img/1.jpg" alt="" />
          </div>
        </div>



        {/* <div className='w-full font-hikasami text-white mt-24' >
          <div className='grid grid-cols-3 gap-4 '>
            <div className='bg-slate-800/50 rounded-md w-80 h-48 place-self-end'>
              <div className='place-items-center -mt-32 p-2'>
                <Image width={150}  // Width in pixels
                  height={150} // Height in pixels
                  className="rounded-md " src="/img/plant.png" alt="" />
                <h1>🌿 Aloe Vera – Natural Skin Healer</h1>
                <p className='text-sm mt-4 text-justify'>Nurtured in organic farms, our Aloe Vera plants are rich in antioxidants and hydration.</p>
              </div>
            </div>
            <div className='bg-slate-800/50 rounded-md w-80 h-48 place-self-center'>
              <div className='place-items-center -mt-32 p-2'>
                <Image width={150}  // Width in pixels
                  height={150} // Height in pixels
                  className="rounded-md " src="/img/plant.png" alt="" />
                <h1>🌱 Snake Plant – Air-Purifying</h1>
                <p className='text-sm mt-4 text-justify'>Stylish, sturdy, and nearly indestructible. The Snake Plant not only elevates your decor but also purifies your air.</p>
              </div>
            </div>
            <div className='bg-slate-800/50 rounded-md w-80 h-48 place-self-start'>
              <div className='place-items-center -mt-32 p-2'>
                <Image width={150}  // Width in pixels
                  height={150} // Height in pixels
                  className="rounded-md " src="/img/plant.png" alt="" />
                <h1>🌸 Lavender – Calming Aromatherapy</h1>
                <p className='text-sm mt-4 text-justify'>Bring relaxation home with our fragrant Lavender plants. Known for their soothing scent and beautiful purple blooms.</p>
              </div>
            </div>
          </div>
        </div> */}
        <div>
          <main>
            <MovableScenery />
          </main>
        </div>
      </div>

      <div>
        {/* //Mobile View */}
        <div className="block sm:hidden ">
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
          {/* Navigation end */}

          {/* First Grid */}
          <FirstDisplayMobile />

          <div className='p-8 flex justify-center font-hikasami'>
            <div className='w-3/4 bg-[#FAF9EE] rounded-md flex justify-center'>
              <div className='p-8 '>
                <div className='flex justify-start'>
                  <FontAwesomeIcon icon={faTree} className="text-[#57564F] " size="1x" /><br />
                  <div className='text-xs font-thin'>
                    Catalog - Plant
                  </div>
                </div>
                <br />
                <h1 className='text-4xl '>Transparent Wall-Mount Plant Holder</h1><br />
                <p>
                  Let your plant take the spotlight. <br /><br />

                  Crafted for lovers of clean aesthetics and modern greenery, this transparent wall-mount plant holder creates the illusion that your plant is floating—turning it into living wall art.
                </p>
                <br />
                <div className='flex justify-start'>
                  <button className="w-36 text-xs text-white bg-[#57564F] hover:bg-lime-700 rounded-full  ">Start Explore </button> <br />
                  <FontAwesomeIcon icon={faArrowRight} className="bg-[#57564F] hover:bg-lime-700 rounded-full p-2 " size="1x" color='white' />
                </div>
              </div>
              <Image width={450}  // Width in pixels
                height={450} // Height in pixels
                className="rounded-md" src="/img/1.jpg" alt="" />
            </div>
          </div>



          {/* <div className='w-full font-hikasami text-white mt-24' >
          <div className='grid grid-cols-3 gap-4 '>
            <div className='bg-slate-800/50 rounded-md w-80 h-48 place-self-end'>
              <div className='place-items-center -mt-32 p-2'>
                <Image width={150}  // Width in pixels
                  height={150} // Height in pixels
                  className="rounded-md " src="/img/plant.png" alt="" />
                <h1>🌿 Aloe Vera – Natural Skin Healer</h1>
                <p className='text-sm mt-4 text-justify'>Nurtured in organic farms, our Aloe Vera plants are rich in antioxidants and hydration.</p>
              </div>
            </div>
            <div className='bg-slate-800/50 rounded-md w-80 h-48 place-self-center'>
              <div className='place-items-center -mt-32 p-2'>
                <Image width={150}  // Width in pixels
                  height={150} // Height in pixels
                  className="rounded-md " src="/img/plant.png" alt="" />
                <h1>🌱 Snake Plant – Air-Purifying</h1>
                <p className='text-sm mt-4 text-justify'>Stylish, sturdy, and nearly indestructible. The Snake Plant not only elevates your decor but also purifies your air.</p>
              </div>
            </div>
            <div className='bg-slate-800/50 rounded-md w-80 h-48 place-self-start'>
              <div className='place-items-center -mt-32 p-2'>
                <Image width={150}  // Width in pixels
                  height={150} // Height in pixels
                  className="rounded-md " src="/img/plant.png" alt="" />
                <h1>🌸 Lavender – Calming Aromatherapy</h1>
                <p className='text-sm mt-4 text-justify'>Bring relaxation home with our fragrant Lavender plants. Known for their soothing scent and beautiful purple blooms.</p>
              </div>
            </div>
          </div>
        </div> */}
          <div>
            <main>
              <MovableSceneryMobile />
            </main>
          </div>
        </div>
      </div>
    </LoadingScreen>
  );
}
