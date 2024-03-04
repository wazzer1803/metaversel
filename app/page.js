import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World,The_Wall } from '../sections';

const Page = () => (
  <div className="bg-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className='relative'>
    <About />
    <div className='gradient-03 z-0'/>
    <div className='gradient-02 z-0'/>
    <Explore />
    <div className='gradient-03 z-0'/>
    </div>
    <div className='relative'>
    <div className='gradient-04 z-0'/>
    <GetStarted />
    <div className='gradient-04 z-0'/>
    <WhatsNew />
    </div>
    <World />
    <div className='gradient-02 z-0'/>
    <div className='relative'>
    <div className='gradient-01 z-0'/>
    <Insights />
    <div className='gradient-05 z-0'/>
    <Feedback />
    </div>
    
    <Footer />
  </div>
);

export default Page;
