import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-white rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-5xl font-bold sm:text-7xl">
                            Chai aur Code -- Router --
                            <span className="hidden sm:block text-xl mt-5 text-emerald-500">Lorem Ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum doloremque numquam fugit id suscipit magni vero. Totam explicabo ratione repellat consequuntur deserunt omnis nobis natus! Fuga perferendis adipisci aliquid quidem.</span>
                        </h2>

                        <Link
                            className="inline-flex text-white items-center px-4 py-3 text-xl font-medium bg-blue-500 rounded-xl hover:bg-blue-700 duration-700"
                            to="/"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; Download now
                        </Link>
                    </div>
                </div>

                <div className="absolute top-32 inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96 rounded-xl shadow-lg shadow-gray-950/40" src="https://www.slrlounge.com/wp-content/uploads/2017/03/small-family-photo-pose.gif" alt="image1" />
                </div>
            </aside>

            <div className="flex  justify-between gap-20 place-items-center mb-20">
            <h1 className="  text-xl sm:text-xl text-slate-500 w-[50%] font-medium">Lorem Ipsum Yojo Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, accusantium quas a, blanditiis quo, ex commodi itaque aliquam voluptate modi nulla ullam. Cumque totam aspernatur facilis architecto eligendi, distinctio officiis!</h1>
                <img className="sm:w-96 w-48 rounded-xl shadow-lg shadow-gray-950/40" src="https://e3.365dm.com/22/09/2048x1152/skynews-denmark-royal-family_5913899.jpg?20220929101803" alt="image2" />
            </div>

            
        </div>
    );
}