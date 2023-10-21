// import Image from 'next/image'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
    {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
      <div key={i}>
        <div>
          <div />
          <div>
            <h3>New iPhone 14</h3>
            <span>Black</span>
            <span>$95</span>
          </div>
        </div>
        <div>
          <div>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
            <span>1</span>
          </div>
          <div>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              ></path>
            </svg>
            <span>1</span>
          </div>
        </div>
      </div>
    ))}
    <button>
      <svg
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
    </button>
  </div>
  
    // <div className="bg-slate-400 bg-[url('/vercel.svg')] xl:place-content-center py-20 px-20 grid gap-10 lg:grid-cols-2 xl:grid-cols-3 min-h-screen">
    // <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-xl">
    //   <span className="font-semibold text-3xl">Select Item</span>
    //   <div className="flex justify-between my-2">
    //     <span className="text-gray-500">Grey Chair</span>
    //     <span className="font-semibold">$19</span>
    //   </div>
    //   <div className="flex justify-between">
    //     <span className="text-gray-500">Grey Chair</span>
    //     <span className="font-semibold">$19</span>
    //   </div>
    //   <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
    //     <span>Total</span>
    //     <span className="font-semibold">$10</span>
    //   </div>
    //   <button
    //     className="block mt-5 bg-blue-500 text-white p-3
    //     text-center rounded-xl w-2/4 mx-auto
    //     text-center rounded-xl w-3/4 mx-auto 
    //     hover:bg-teal-500 hover:text-black
    //     active:bg-yellow-500 focus:bg-red-500
    //    "
    //   >
    //     Checkout
    //   </button>
    // </div>
    // <div className="bg-white overflow-hidden rounded-3xl shadow-xl group">
    //   <div className="portrait:bg-emerald-950 landscape:bg-violet-700 p-6 pb-14">
    //     <span className="text-white text-2xl">Profile</span>
    //   </div>
    //   <div className="rounded-3xl p-6 bg-white relative -top-5">
    //     <div className="flex relative -top-16 items-end justify-between">
    //       <div className="flex flex-col items-center">
    //         <span className="text-sm text-gray-500">Orders</span>
    //         <span className="font-medium">340</span>
    //       </div>
    //       <div className="h-24 w-24 bg-red-400 rounded-full group-hover:bg-yellow-100" />
    //       <div className="flex flex-col items-center">
    //         <span className="text-sm text-gray-500">Spent</span>
    //         <span className="font-medium">$340</span>
    //       </div>
    //     </div>
    //     <div className="relative  flex flex-col items-center -mt-10 -mb-5">
    //       <span className="text-lg font-medium">Tony Molloy</span>
    //       <span className="text-sm text-gray-500">미국</span>
    //     </div>
    //   </div>
    // </div>
    // <div className="bg-white p-6 rounded-3xl shadow-xl lg:col-span-2 xl:col-span-1">
    //     <div className="flex mb-5 justify-between items-center">
    //       <span>⬅️</span>
    //       <div className="space-x-3">
    //         <span>⭐️ 4.9</span>
    //         <span className="shadow-xl p-2 rounded-md">💖</span>
    //       </div>
    //     </div>
    //     <div className="bg-zinc-300 h-72 mb-5" />
    //     <div className="flex flex-col">
    //       <span className="font-medium text-xl">Swoon Lounge</span>
    //       <span className="text-xs text-gray-500">Chair</span>
    //       <div className="mt-3 mb-5 flex justify-between items-center">
    //       <div className="space-x-2">
    //           <button className="w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-300 transition" />
    //           <button className="w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-2 ring-indigo-300 transition" />
    //           <button className="w-5 h-5 rounded-full bg-red-500 focus:ring-2 ring-offset-2 ring-red-300 transition" />
    //         </div>
    //         <div className="flex items-center space-x-5">
    //           <button className=" rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">
    //             -
    //           </button>
    //           <span>1</span>
    //           <button className=" rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">
    //             +
    //           </button>
    //         </div>
    //       </div>
    //       <div className="flex justify-between items-center">
    //         <span className="font-medium text-2xl">$450</span>
    //         <button className="bg-blue-500 py-2 px-8 text-center text-xs text-white rounded-lg">
    //           Add to cart
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    
  );
}

export default Home;