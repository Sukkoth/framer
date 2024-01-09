function Footer() {
  return (
    <footer className='flex flex-row justify-between px-10 py-3'>
      <div className='flex flex-col justify-between'>
        <p className='w-2/3'>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
          facilis doloremque alias officia.
        </p>
        <p className='text-stone-500'>
          @Amaliza Sanches. All rights reserved {new Date().getFullYear()}
        </p>
      </div>
      <div>
        <ul className='flex flex-col list-none gap-3'>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>LinkedIn</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
