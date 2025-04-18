import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-gray-900">
          <div className="container m-auto text-xl px-6 text-emerald-500 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12 ">
                      <img
                            className='ml-5 rounded-xl shadow-lg shadow-gray-950/40'
                          src="http://2.bp.blogspot.com/-MhqFVXPvcc0/VZaHeXGs2II/AAAAAAAAKXM/9Xeu0E-WMYs/s1600/Windows-10-desktop-wallpaper-hd-07.jpg"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-5xl text-white font-bold md:text-5xl">
                          React development is carried out by passionate developers
                      </h2>
                      <p className="mt-6 text-xl text-emerald-500">
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                          accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                          aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                      </p>
                      <p className="mt-4 text-gray-600">
                          Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                          Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}