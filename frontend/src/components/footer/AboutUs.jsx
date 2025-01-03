import React from 'react'

const AboutUs = () => {
  return (
    <div>
      <footer className="border-2 border-orange-500 shadow-orange-500 shadow-lg mb-6 rounded-xl mg-20 mx-7">
        <div className="mx-auto  p-4 py-6 ">
          <div className="md:flex md:justify-between">
            <div className=" md:mb-0 ">
              <a href="" className="flex items-center">
                <img src="/leonardo.png" className="h-8 me-3" alt="Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap">Event_Manager</span>
              </a>
            </div>
            <div className="grid grid-cols-2  sm:gap-6 sm:grid-cols-3 mt-3" >
              <div>
                <h2 className="mb-2 text-sm font-semibold uppercase">Follow us</h2>
                <ul className=" font-medium">
                  <li className="mb-1">
                    <a href="https://github.com/themesberg/flowbite" className="hover:underline">Instagram </a>
                  </li>
                  <li className="mb-1">
                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Telegram</a>
                  </li>

                  <li className="mb-1">
                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Facebook</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase">Legal</h2>
                <ul className=" font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase">Contact_Us</h2>
                <ul className=" font-medium">
                  <li className="mb-4">
                  <span>Mail_ID:</span>
                    <a href="#" className="hover:underline"> events@bitsathy.ac.in</a>
                  </li>
                  <li>
                    <span>Phone:</span>
                    <a href="#" className="hover:underline">+912342423423</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm  sm:text-center">© 2024 <a href="" className="hover:underline">BIT</a>. All Rights Reserved.</span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" className=" hover:text-gray-100 ms-5">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                  <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className=" hover:text-gray-100 ms-5">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                  <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                </svg>
                <span className="sr-only">Discord community</span>
              </a>
              <a href="#" className=" hover:text-gray-100 ms-5">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                  <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd"/>
                </svg>
                <span className="sr-only">Twitter page</span>
              </a>
              <a href="#" className=" hover:text-gray-100 ms-5">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0a10 10 0 1 0 10 10A10 10 0 0 0 10 0Zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8ZM5.573 8.463l.965-1.73A2.379 2.379 0 0 1 7.658 5.5a2.309 2.309 0 0 1 2.573 2.378v.006a2.309 2.309 0 0 1-2.573 2.379 2.379 2.379 0 0 1-1.12-.267l-.965 1.729h-1.236Zm8.81-.31a1.9 1.9 0 0 0-.242-1.059A2.35 2.35 0 0 0 12.759 7a1.916 1.916 0 0 0-1.773 1.236h-1.234c-.074-.141-.17-.27-.284-.38-.564-.551-1.47-.731-2.285-.505.031.248.073.493.126.737a1.964 1.964 0 0 0 .457.769l.966 1.731h1.235Zm1.24 3.843a2.462 2.462 0 0 1-1.195.361c-1.191 0-2.117-.91-2.117-2.036a2.048 2.048 0 0 1 2.117-2.05c.45 0 .853.155 1.186.385a1.845 1.845 0 0 1 .793 1.56c0 1.136-.972 2.034-2.099 2.034a2.542 2.542 0 0 1-1.12-.279l.693-1.263c.248.146.527.248.81.248.514 0 .957-.453.957-.952 0-.511-.443-.956-.957-.956-.43 0-.794.313-.93.726l-.604 1.096h-1.236l.969-1.731a2.057 2.057 0 0 0 1.27-.536Zm3.5 1.646a2.306 2.306 0 0 1-2.553-2.325 2.307 2.307 0 0 1 2.553-2.326 2.306 2.306 0 0 1 2.554 2.326 2.306 2.306 0 0 1-2.554 2.325Zm-.184-2.158a.77.77 0 1 0 .77-.77.77.77 0 0 0-.77.77Zm.347-2.693c-.448 0-.876.16-1.211.451a1.68 1.68 0 0 0-.45 1.227v.222h2.122v-.213c0-.502-.188-.97-.527-1.313a1.67 1.67 0 0 0-1.233-.48Zm2.184 4.732h1.01v-3.325h-1.01v.663a2.43 2.43 0 0 0-1.348-.447c-.975 0-1.786.794-1.786 1.764v1.207h-1.01v3.325h1.01v-1.854a1.63 1.63 0 0 1 1.53-1.847c.842 0 1.451.65 1.451 1.67v1.97Z" clipRule="evenodd"/>
                </svg>
                <span className="sr-only">Github page</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default AboutUs
