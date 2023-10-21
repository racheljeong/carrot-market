import type { NextPage } from "next";

const Studying: NextPage = () => {
  return (
    
    // <div>
    // <div className="relative rounded-3xl bg-yellow-400 shadow-lg">
    //     <div className="py-28"></div>
    //     <span className="mx-5 mb-1 text-start font-serif font-medium"> Select Destination </span>
    //     <div className="mx-5 border-t-2">
    //     <div className="flex-relative flex flex-col items-start py-4">
    //         <div className="text-lg font-semibold hover:text-white">✨Vancouver</div>
    //         <div className="text-lg font-semibold hover:text-white">✨Seattle</div>
    //         <div className="text-lg font-semibold hover:text-white">✨Portland</div>
    //         <div className="text-lg font-semibold hover:text-white">✨Seattle</div>
    //         <div className="text-lg font-semibold hover:text-white">✨San Francisco</div>
    //         <div className="text-lg font-semibold hover:text-white">✨Los Angeles</div>
    //         <div className="text-lg font-semibold hover:text-white">✨San Diego</div>
    //     </div>
    //     </div>
    // </div>
    // </div>


  //   <div className="min-h-screen place-content-center bg-slate-900 px-20 py-20">
  //   <div className="container relative min-h-screen rounded-3xl bg-white px-16 pt-1">
  //     <div className="ml-3 mt-20 text-left font-mono font-bold">March 2021 ✅</div>
  //     <div className="mb-7 border-t-2 py-5 text-center">
  //       <p>Hello, Bruno!</p>
  //       <p>Your medicines for today</p>
  //     </div>
  //     <div className="m-5 grid grid-cols-6 gap-2">
  //       <div className="m-2 justify-center space-y-3 py-2">
  //         <p className="text-2xl font-semibold">16</p>
  //         <p className="text-xs">Mon</p>
  //       </div>
  //       <div className="m-2 justify-center space-y-3 py-2">
  //         <p className="text-2xl font-semibold">17</p>
  //         <p className="text-xs">Tue</p>
  //       </div>
  //       <div className="m-2 justify-center space-y-3 rounded-3xl bg-blue-300 py-2 pl-1.5">
  //         <p className="text-2xl font-semibold">18</p>
  //         <p className="text-xs">Wed</p>
  //       </div>
  //       <div className="m-2 justify-center space-y-3 py-2">
  //         <p className="text-2xl font-semibold">19</p>
  //         <p className="text-xs">Thu</p>
  //       </div>
  //       <div className="m-2 justify-center space-y-3 py-2">
  //         <p className="text-2xl font-semibold">20</p>
  //         <p className="text-xs">Fri</p>
  //       </div>
  //       <div className="m-2 justify-center space-y-3 py-2">
  //         <p className="text-2xl font-semibold">21</p>
  //         <p className="text-xs">Sat</p>
  //       </div>
  //     </div>
  //     <div className="bottom container pb-7">
  //       <div className="items relative ml-2 flex">
  //         <div className="relative -right-1 m-4 rounded-lg bg-yellow-100 p-5 px-11">
  //           <p className="text-3xl font-semibold">Nora - BE</p>
  //           <p className="pb-20 text-sm">Norenthindrone - 0.35mg</p>
  //           <p className="flow-root text-base">7h30Am</p>
  //         </div>
  //         <div className="absolute right-3 m-5 rounded-lg bg-blue-100 p-2 px-20">
  //           <div className="pb-20 pt-20">∨</div>
  //         </div>
  //       </div>
  //       <div className="relative mx-7 rounded-lg bg-lime-200 p-3">
  //         <p className="text-3xl font-semibold">Feosol</p>
  //         <p className="pb-20 align-text-bottom text-sm">Ferrous sulfate - 600mg</p>
  //       </div>
  //     </div>
  //   </div>
  // </div>

  <div className="flex h-screen w-full items-center justify-center bg-orange-500 bg-opacity-90">
  <div className="w-full max-w-sm rounded-xl bg-gray-50 px-5 py-5">
    <div className="mb-5 border-b-2 border-gray-300 pb-2">
      <span className="text-xs">March 2022 &darr;</span>
    </div>
    <div className="mb-10 flex flex-col items-center text-sm font-medium">
      <span>Hello, Bruno!</span>
      <span>Your medicines for today</span>
    </div>
    <div className="mb-20 flex items-center justify-between">
      <div className="flex flex-col items-center">
        <span className="text-lg font-medium">16</span>
        <span className="text-xs">Mon</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-lg font-medium">17</span>
        <span className="text-xs">Tue</span>
      </div>
      <div className="flex flex-col items-center rounded-2xl bg-blue-400 p-2 text-black">
        <span className="text-lg font-medium">18</span>
        <span className="text-xs">Wed</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-lg font-medium">19</span>
        <span className="text-xs">Thu</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-lg font-medium">20</span>
        <span className="text-xs">Fri</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-lg font-medium">21</span>
        <span className="text-xs">Sat</span>
      </div>
    </div>
    <div>
      <div className="relative flex mb-2">
        <div className="z-10 w-[90%] rounded-lg bg-amber-200 p-3">
          <div className="flex flex-col font-medium">
            <span>Nora - BE</span>
            <span className="text-xs">Norenthindone - 0.35mg</span>
          </div>
          <span className="mt-24 block text-xs font-medium">7h30AM</span>
        </div>
        <div className="absolute right-0 flex h-full w-[12%] rounded-tr-lg rounded-br-lg bg-blue-400 justify-end pr-2">
          <svg fill="none" className="w-5" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
          </svg>
        </div>
      </div>
      <div className="relative flex">
        <div className="z-10 w-full rounded-lg bg-emerald-300 p-3">
          <div className="flex flex-col font-medium">
            <span>Feosol</span>
            <span className="text-xs">Ferrous Sulfate - 600mg</span>
          </div>
          <span className="mt-24 block text-xs font-medium">7h30AM</span>
        </div>
      </div>
    </div>
  </div>
</div>
  );

}

export default Studying;