// import Image from 'next/image';
// import Link from 'next/link';

// const Navbar = () => {
//   return (
//     <div className="flex justify-between font-bold m-10 text-lg font-martian animate-fadeInGrow">
//       <Image className="text-white" src="/assets/logo.png" alt="Logo" width={72} height={16} />
//       <ul className="flex gap-10">
//         <Link href="/">
//           <div className='hover:underline relative before:content-[""] before:block before:absolute before:w-0/100 before:h-[2px] before:bg-black before:bottom-0 before:left-0 hover:before:w-100/100 transition-width duration-300'>Home</div>
//         </Link>
//         <Link href="/Work">
//           <div className='hover:underline relative before:content-[""] before:block before:absolute before:w-0/100 before:h-[2px] before:bg-black before:bottom-0 before:left-0 hover:before:w-100/100 transition-width duration-300'>Work</div>
//         </Link>
//         <Link href="/contact">
//           <div className='hover:underline relative before:content-[""] before:block before:absolute before:w-0/100 before:h-[2px] before:bg-black before:bottom-0 before:left-0 hover:before:w-100/100 transition-width duration-300'>Contact</div>
//         </Link>
//       </ul>
//     </div>
//   )
// }

// export default Navbar;
import Image from 'next/image';

const Navbar = () => {
  return (
    <div id='home' className="flex text-main_text_color justify-between font-bold m-10 text-lg font-martian animate-fadeInGrow">
      <Image className="text-white" src="/assets/logo.png" alt="Logo" width={72} height={16} />
      <ul className="flex gap-10">
        <li>
          <a href="#home" className='hover:underline relative before:content-[""] before:block before:absolute before:w-0/100 before:h-[2px] before:bg-black before:bottom-0 before:left-0 hover:before:w-100/100 transition-width duration-300'>Home</a>
        </li>
        <li>
          <a href="#experience" className='hover:underline relative before:content-[""] before:block before:absolute before:w-0/100 before:h-[2px] before:bg-black before:bottom-0 before:left-0 hover:before:w-100/100 transition-width duration-300'>Experience</a>
        </li>
        <li>
          <a href="#projects" className='hover:underline relative before:content-[""] before:block before:absolute before:w-0/100 before:h-[2px] before:bg-black before:bottom-0 before:left-0 hover:before:w-100/100 transition-width duration-300'>Projects</a>
        </li>
        <li>
          <a href="#contact" className='hover:underline relative before:content-[""] before:block before:absolute before:w-0/100 before:h-[2px] before:bg-black before:bottom-0 before:left-0 hover:before:w-100/100 transition-width duration-300'>Contact</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;
