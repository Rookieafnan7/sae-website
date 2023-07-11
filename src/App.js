// import logo from './logo.svg';
import './App.css';
import Components from './components/Components';
import Footer from './components/Footer';
import Header from './components/Header';
import Swiper from './components/Swiper';
function App() {
  return (
    <>
      <Header/>
      <Swiper/>
      <div className='lg:px-[7.5rem] lg:py-[9rem] md:px-[5rem] md:py-[6rem] py-[4rem] px-[3rem]'>
        <div className='text-[1.75rem]'>About Us</div>
        <div className='grid md:grid-cols-2 lg:gap-x-[6.5rem] md:gap-x-[3rem] mt-8'>
          <div className='bg-[#D9D9D9] h-[18rem]' >

          </div>
          <div className='md:h-[18rem]  md:flex md:align-middle md:justify-center md:mt-0 mt-6'>
            <div className='inline-block self-center'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#D9D9D9] lg:px-32 md:px-20 lg:py-20 py-10 flex justify-center  align-middle'>
          <div className='bg-transparent flex flex-col'>
            <div className='rounded-[100%] md:w-[7.6875rem] md:h-[7.6875rem] w-[6rem] h-[6rem] bg-white align-middle inline-block self-center'></div>
            <span className='block text-xl mt-4 text-center md:w-[7.6875rem] w-[6rem]'>Years Of Experience</span>
          </div>
          <div className='bg-transparent flex flex-col lg:ml-28 md:ml-14 ml-4'>
            <div className='rounded-[100%] md:w-[7.6875rem] md:h-[7.6875rem] w-[6rem] h-[6rem] bg-white align-middle inline-block self-center'></div>
            <span className='block text-xl mt-4 text-center md:w-[7.6875rem] w-[6rem]'>Rank 1</span>
          </div>
          <div className='bg-transparent flex flex-col lg:ml-28 md:ml-14 ml-4'>
            <div className='rounded-[100%] md:w-[7.6875rem] md:h-[7.6875rem] w-[6rem] h-[6rem] bg-white align-middle inline-block self-center'></div>
            <span className='block text-xl mt-4 text-center md:w-[7.6875rem] w-[6rem] '>Rank 2</span>
          </div>
          <div className='bg-transparent flex flex-col lg:ml-28 md:ml-14 ml-4'>
            <div className='rounded-[100%] md:w-[7.6875rem] md:h-[7.6875rem] w-[6rem] h-[6rem] bg-white align-middle inline-block self-center'></div>
            <span className='block text-xl mt-4 text-center md:w-[7.6875rem] w-[6rem] '>Rank 3</span>
          </div>
      </div>
      <div>

      </div>
      <Components/>
      <Footer/>
    </>
  );
}

export default App;
