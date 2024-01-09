import BorderdLinks from "../BorderdLinks";
import icon from "../../assets/icon.png";

function Nav() {
  return (
    <nav className='flex py-7'>
      <div className='w-1/4 flex items-center justify-center'>
        <img src={icon} alt='' className='w-7' />
      </div>
      <div className='w-2/3'>
        <ul className='flex gap-8'>
          <li className='text'>
            <a href=''>Home</a>
          </li>
          <li className='text'>
            <a href=''>Service</a>
          </li>
          <li className='text'>
            <a href=''>Portfolio</a>
          </li>
          <li className='text'>
            <a href=''>Blog</a>
          </li>
          <li className='text'>
            <a href=''>Contact</a>
          </li>
        </ul>
      </div>
      <div className='w-1/3'>
        <BorderdLinks size={"md"}>Get in Touch</BorderdLinks>
      </div>
    </nav>
  );
}

export default Nav;
