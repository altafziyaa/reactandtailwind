import React from "react";

export default function JustifyContent() {
  return (
    // <div>
    //   <div class="flex justify-start bg-gray-200 p-4">
    //     <div class="bg-blue-500 text-white p-2">Item 1</div>
    //     <div class="bg-green-500 text-white p-2">Item 2</div>
    //   </div>
    //   <div class="flex justify-end bg-gray-200 p-4 mt-2">
    //     <div class="bg-blue-500 text-white p-2">Item 1</div>
    //     <div class="bg-green-500 text-white p-2">Item 2</div>
    //   </div>

    //   <div class="flex justify-center bg-gray-200 p-4 mt-2">
    //     <div class="bg-blue-500 text-white p-2">Item 1</div>
    //     <div class="bg-green-500 text-white p-2">Item 2</div>
    //   </div>

    //   <div class="flex justify-between bg-gray-200 p-4">
    //     <div class="bg-blue-500 text-white p-2">Item 1</div>
    //     <div class="bg-green-500 text-white p-2">Item 2</div>
    //   </div>
    //   <div class="flex justify-around bg-gray-200 p-4 mt-2">
    //     <div class="bg-blue-500 text-white p-2">Item 1</div>
    //     <div class="bg-green-500 text-white p-2">Item 2</div>
    //   </div>

    //   <div class="flex justify-evenly bg-gray-200 p-4 mt-2">
    //     <div class="bg-blue-500 text-white p-2">Item 1</div>
    //     <div class="bg-green-500 text-white p-2">Item 2</div>
    //     <div class="bg-red-500  text-white p-2">Item 3</div>
    //   </div>

    //   <nav className="flex justify-between bg-red-400 text-shadow-gray-100 p-4 mt-2">
    //     <div>logo</div>
    //     <div className="flex gap-4">
    //       <a href="" className="">home</a>
    //       <a href="" className="">about</a>
    //       <a href="" className="">contact</a>
    //     </div>
    //   </nav>
    // </div>

    //     <div>
    //       {/* ✅ justify-items property tab kaam karti hai jab aap CSS Grid ka use karte ho.
    // Ye property ye decide karti hai ki grid ke har item ko horizontal axis (main axis) par kaise align kiya jaye — individually, but controlled via the container.

    // 📌 Yeh sirf display: grid containers par lagti hai, Flexbox me nahi chalta. */}
    //       <div class="grid grid-cols-2 justify-items-auto gap-4 bg-gray-100 p-4">
    //         <div class="bg-blue-500 text-white p-2">Box 1</div>
    //         <div class="bg-green-500 text-white p-2">Box 2</div>
    //       </div>

    //       <div class="grid grid-cols-2 justify-items-start gap-4 bg-gray-100 p-4">
    //         <div class="bg-blue-500 text-white p-2">Box 1</div>
    //         <div class="bg-green-500 text-white p-2">Box 2</div>
    //       </div>

    //       <div class="grid grid-cols-2 justify-items-end gap-4 bg-gray-100 p-4">
    //         <div class="bg-blue-500 text-white p-2">Box 1</div>
    //         <div class="bg-green-500 text-white p-2">Box 2</div>
    //       </div>

    //       <div class="grid grid-cols-2 justify-items-center gap-4 bg-gray-100 p-4">
    //         <div class="bg-blue-500 text-white p-2">Box 1</div>
    //         <div class="bg-green-500 text-white p-2">Box 2</div>
    //       </div>

    //       <div class="grid grid-cols-2 justify-items-stretch gap-4 bg-gray-100 p-4">
    //         <div class="bg-blue-500 text-white text-center">Box 1</div>
    //         <div class="bg-green-500 text-white">Box 2</div>
    //       </div>

    //       {/* <!-- justify-items-start --> */}
    //       <div>
    //         <h2 class="text-xl font-bold mb-2">justify-items-start</h2>
    //         <div class="grid grid-cols-3 justify-items-start gap-4 bg-white p-4 rounded shadow">
    //           <div class="bg-blue-500 text-white p-2 rounded">Box 1</div>
    //           <div class="bg-green-500 text-white p-2 rounded">Box 2</div>
    //           <div class="bg-red-500 text-white p-2 rounded">Box 3</div>
    //         </div>
    //       </div>

    //       {/* <!-- justify-items-center --> */}
    //       <div>
    //         <h2 class="text-xl font-bold mb-2">justify-items-center</h2>
    //         <div class="grid grid-cols-3 justify-items-center gap-4 bg-white p-4 rounded shadow">
    //           <div class="bg-blue-500 text-white p-2 rounded">Box 1</div>
    //           <div class="bg-green-500 text-white p-2 rounded">Box 2</div>
    //           <div class="bg-red-500 text-white p-2 rounded">Box 3</div>
    //         </div>
    //       </div>

    //       {/* <!-- justify-items-end --> */}
    //       <div>
    //         <h2 class="text-xl font-bold mb-2">justify-items-end</h2>
    //         <div class="grid grid-cols-3 justify-items-end gap-4 bg-white p-4 rounded shadow">
    //           <div class="bg-blue-500 text-white p-2 rounded">Box 1</div>
    //           <div class="bg-green-500 text-white p-2 rounded">Box 2</div>
    //           <div class="bg-red-500 text-white p-2 rounded">Box 3</div>
    //         </div>
    //       </div>

    //       {/* <!-- justify-items-stretch --> */}
    //       <div>
    //         <h2 class="text-xl font-bold mb-2">justify-items-stretch</h2>
    //         <div class="grid grid-cols-3 justify-items-stretch gap-4 bg-white p-4 rounded shadow">
    //           <div class="bg-blue-500 text-white rounded">Box 1</div>
    //           <div class="bg-green-500 text-white rounded">Box 2</div>
    //           <div class="bg-red-500 text-white rounded">Box 3</div>
    //         </div>
    //       </div>
    //     </div>

    // <div>
    //    <!-- justify-self-auto -->
    //   <div>
    //     <h2 class="text-xl font-bold mb-2">justify-self-auto</h2>
    //     <div class="grid grid-cols-3 gap-4 bg-white p-4 rounded shadow">
    //       <div class="bg-blue-500 text-white p-2 rounded justify-self-auto">Auto</div>
    //     </div>
    //   </div>

    //   <!-- justify-self-start -->
    //   <div>
    //     <h2 class="text-xl font-bold mb-2">justify-self-start</h2>
    //     <div class="grid grid-cols-3 gap-4 bg-white p-4 rounded shadow">
    //       <div class="bg-green-500 text-white p-2 rounded justify-self-start">Start</div>
    //     </div>
    //   </div>

    //   <!-- justify-self-center -->
    //   <div>
    //     <h2 class="text-xl font-bold mb-2">justify-self-center</h2>
    //     <div class="grid grid-cols-3 gap-4 bg-white p-4 rounded shadow">
    //       <div class="bg-yellow-500 text-white p-2 rounded justify-self-center">Center</div>
    //     </div>
    //   </div>

    //   <!-- justify-self-end -->
    //   <div>
    //     <h2 class="text-xl font-bold mb-2">justify-self-end</h2>
    //     <div class="grid grid-cols-3 gap-4 bg-white p-4 rounded shadow">
    //       <div class="bg-purple-500 text-white p-2 rounded justify-self-end">End</div>
    //     </div>
    //   </div>

    //   <!-- justify-self-stretch -->
    //   <div>
    //     <h2 class="text-xl font-bold mb-2">justify-self-stretch</h2>
    //     <div class="grid grid-cols-3 gap-4 bg-white p-4 rounded shadow">
    //       <div class="bg-red-500 text-white rounded justify-self-stretch">Stretch (Full Width)</div>
    //     </div>
    //   </div>
    // </div>

    // <div>
    //   <div>
    //     <h2 class="text-xl font-bold mb-2">content-center</h2>
    //     <div class="grid grid-rows-3 content-center h-64 bg-white p-4 rounded shadow">
    //       <div class="bg-blue-500 text-white p-2 rounded">Row 1</div>
    //       <div class="bg-green-500 text-white p-2 rounded">Row 2</div>
    //       <div class="bg-yellow-500 text-white p-2 rounded">Row 3</div>
    //     </div>
    //   </div>

    //   <div>
    //     <h2 class="text-xl font-bold mb-2">content-start</h2>
    //     <div class="grid grid-rows-3 content-start h-64 bg-white p-4 rounded shadow">
    //       <div class="bg-blue-500 text-white p-2 rounded">Row 1</div>
    //       <div class="bg-green-500 text-white p-2 rounded">Row 2</div>
    //       <div class="bg-yellow-500 text-white p-2 rounded">Row 3</div>
    //     </div>
    //   </div>

    //   <div>
    //     <h2 class="text-xl font-bold mb-2">content-end</h2>
    //     <div class="grid grid-rows-3 content-end h-64 bg-white p-4 rounded shadow">
    //       <div class="bg-blue-500 text-white p-2 rounded">Row 1</div>
    //       <div class="bg-green-500 text-white p-2 rounded">Row 2</div>
    //       <div class="bg-yellow-500 text-white p-2 rounded">Row 3</div>
    //     </div>
    //   </div>

    //   <div>
    //     <h2 class="text-xl font-bold mb-2">content-between</h2>
    //     <div class="grid grid-rows-3 content-between h-64 bg-white p-4 rounded shadow">
    //       <div class="bg-blue-500 text-white p-2 rounded">Row 1</div>
    //       <div class="bg-green-500 text-white p-2 rounded">Row 2</div>
    //       <div class="bg-yellow-500 text-white p-2 rounded">Row 3</div>
    //     </div>
    //   </div>

    //   <div>
    //     <h2 class="text-xl font-bold mb-2">content-around</h2>
    //     <div class="grid grid-rows-3 content-around h-64 bg-white p-4 rounded shadow">
    //       <div class="bg-blue-500 text-white p-2 rounded">Row 1</div>
    //       <div class="bg-green-500 text-white p-2 rounded">Row 2</div>
    //       <div class="bg-yellow-500 text-white p-2 rounded">Row 3</div>
    //     </div>
    //   </div>

    //   <div>
    //     <h2 class="text-xl font-bold mb-2">content-evenly</h2>
    //     <div class="grid grid-rows-3 content-evenly h-64 bg-white p-4 rounded shadow">
    //       <div class="bg-blue-500 text-white p-2 rounded">Row 1</div>
    //       <div class="bg-green-500 text-white p-2 rounded">Row 2</div>
    //       <div class="bg-yellow-500 text-white p-2 rounded">Row 3</div>
    //     </div>
    //   </div>
    // </div>

    // <div>
    //   {/* <div class="grid grid-cols-3 content-start h-64 border-red-600 border-2 bg-gray-100">
    //     <div class="bg-blue-500 text-white p-2">Row 1</div>
    //     <div class="bg-green-500 text-white p-2">Row 2</div>
    //     <div class="bg-yellow-500 text-white p-2">Row 3</div>
    //   </div>
    //   <div class="grid grid-cols-3 content-end h-64 border-red-600 border-2 bg-gray-100 mt-2">
    //     <div class="bg-blue-500 text-white p-2">Row 1</div>
    //     <div class="bg-green-500 text-white p-2">Row 2</div>
    //     <div class="bg-yellow-500 text-white p-2">Row 3</div>
    //   </div>
    //   <div class="grid grid-cols-3 content-center  h-64 border-red-600 border-2 bg-gray-100 mt-2">
    //     <div class="bg-blue-500 text-white p-2">Row 1</div>
    //     <div class="bg-green-500 text-white p-2">Row 2</div>
    //     <div class="bg-yellow-500 text-white p-2">Row 3</div>
    //   </div>
    //   <div class="grid grid-cols-3 content-between  h-64 border-red-600 border-2 bg-gray-100 mt-2">
    //     <div class="bg-blue-500 text-white p-2">Row 1</div>
    //     <div class="bg-green-500 text-white p-2">Row 2</div>
    //     <div class="bg-yellow-500 text-white p-2">Row 3</div>
    //   </div>{" "}
    //   <div class="grid grid-cols-3 content-around  h-64 border-red-600 border-2 bg-gray-100 mt-2">
    //     <div class="bg-blue-500 text-white p-2">Row 1</div>
    //     <div class="bg-green-500 text-white p-2">Row 2</div>
    //     <div class="bg-yellow-500 text-white p-2">Row 3</div>
    //   </div>
    //   <div class="grid grid-rows-3 place-content-evenly  h-64 border-red-600 border-2 bg-gray-100 mt-2">
    //     <div class="bg-blue-500 text-white p-2">Row 1</div>
    //     <div class="bg-green-500 text-white p-2">Row 2</div>
    //     <div class="bg-yellow-500 text-white p-2">Row 3</div>
    //   </div> */}

    //   {/* <div class="flex flex-wrap content-start h-48 bg-gray-200 mt-2">
    //     <div class="w-1/3 h-12 bg-blue-400">Box 1</div>
    //     <div class="w-1/3 h-12 bg-green-400">Box 2</div>
    //     <div class="w-1/3 h-12 bg-red-400">Box 3</div>
    //   </div>

    //   <div class="grid grid-cols-2 content-start h-48 bg-gray-200 mt-2">
    //     <div class="h-12 bg-blue-400">Box 1</div>
    //     <div class="h-12 bg-green-400">Box 2</div>
    //     <div class="h-12 bg-red-400">Box 3</div>
    //   </div>

    //   <div class="flex flex-wrap content-center h-48 bg-gray-200 mt-2">
    //     <div class="w-1/3 h-12 bg-blue-400">Box 1</div>
    //     <div class="w-1/3 h-12 bg-green-400">Box 2</div>
    //     <div class="w-1/3 h-12 bg-red-400">Box 3</div>
    //   </div>

    //   <div class="grid grid-cols-2 content-center h-48 bg-gray-200 mt-2">
    //     <div class="h-12 bg-blue-400">Box 1</div>
    //     <div class="h-12 bg-green-400">Box 2</div>
    //     <div class="h-12 bg-red-400">Box 3</div>
    //   </div>

    //   <div class="flex flex-wrap content-end h-48 bg-gray-200 mt-2">
    //     <div class="w-1/3 h-12 bg-blue-400">Box 1</div>
    //     <div class="w-1/3 h-12 bg-green-400">Box 2</div>
    //     <div class="w-1/3 h-12 bg-red-400">Box 3</div>
    //   </div>

    //   <div class="grid grid-cols-2 content-end h-48 bg-gray-200 mt-2">
    //     <div class="h-12 bg-blue-400">Box 1</div>
    //     <div class="h-12 bg-green-400">Box 2</div>
    //     <div class="h-12 bg-red-400">Box 3</div>
    //   </div>

    //   <div class="flex flex-wrap content-between h-48 bg-gray-200 mt-2">
    //     <div class="w-1/3 h-12 bg-blue-400">Box 1</div>
    //     <div class="w-1/3 h-12 bg-green-400">Box 2</div>
    //     <div class="w-1/3 h-12 bg-red-400">Box 3</div>
    //   </div>
    //   <div class="grid grid-cols-2 content-between h-48 bg-gray-200 mt-3">
    //     <div class="h-12 bg-blue-400">Box 1</div>
    //     <div class="h-12 bg-green-400">Box 2</div>
    //     <div class="h-12 bg-red-400">Box 3</div>
    //   </div>

    //   <div class="flex flex-wrap content-around h-48 bg-gray-200 mt-2">
    //     <div class="w-1/3 h-12 bg-blue-400">Box 1</div>
    //     <div class="w-1/3 h-12 bg-green-400">Box 2</div>
    //     <div class="w-1/3 h-12 bg-red-400">Box 3</div>
    //   </div>

    //   <div class="grid grid-cols-2 content-around h-48 bg-gray-200 mt-2 ">
    //     <div class="h-12 bg-blue-400">Box 1</div>
    //     <div class="h-12 bg-green-400">Box 2</div>
    //     <div class="h-12 bg-red-400">Box 3</div>
    //   </div>

    //   <div class="flex flex-wrap content-evenly h-48 bg-gray-200 mt-2">
    //     <div class="w-1/3 h-12 bg-blue-400">Box 1</div>
    //     <div class="w-1/3 h-12 bg-green-400">Box 2</div>
    //     <div class="w-1/3 h-12 bg-red-400">Box 3</div>
    //   </div>

    //   <div class="grid grid-cols-1 content-evenly h-48 bg-gray-200 mt-3">
    //     <div class="h-12 bg-blue-400">Box 1</div>
    //     <div class="h-12 bg-green-400">Box 2</div>
    //     <div class="h-12 bg-red-400">Box 3</div>
    //   </div> */}
    // </div>

    // <div>
    //   <div class="flex items-start h-32 bg-gray-200 space-x-4">
    //     <div class="w-16 h-8 bg-blue-500">Box 1</div>
    //     <div class="w-16 h-12 bg-green-500">Box 2</div>
    //     <div class="w-16 h-20 bg-red-500">Box 3</div>
    //   </div>
    //   <div class="grid grid-cols-3 items-start h-32 bg-gray-200 mt-2">
    //     <div class="bg-blue-500 h-8">Box 1</div>
    //     <div class="bg-green-500 h-12">Box 2</div>
    //     <div class="bg-red-500 h-20">Box 3</div>
    //   </div>

    //   <div class="flex items-end h-32 bg-gray-200 space-x-4 mt-2">
    //     <div class="w-16 h-8 bg-blue-500">Box 1</div>
    //     <div class="w-16 h-12 bg-green-500">Box 2</div>
    //     <div class="w-16 h-20 bg-red-500">Box 3</div>
    //   </div>
    //   <div class="grid grid-cols-3 items-end h-32 bg-gray-200 mt-2">
    //     <div class="bg-blue-500 h-8">Box 1</div>
    //     <div class="bg-green-500 h-12">Box 2</div>
    //     <div class="bg-red-500 h-20">Box 3</div>
    //   </div>

    //   <div class="flex items-center h-32 bg-gray-200 space-x-4 mt-2">
    //     <div class="w-16 h-8 bg-blue-500">Box 1</div>
    //     <div class="w-16 h-12 bg-green-500">Box 2</div>
    //     <div class="w-16 h-20 bg-red-500">Box 3</div>
    //   </div>
    //   <div class="grid grid-cols-3 items-center h-32 bg-gray-200 mt-2">
    //     <div class="bg-blue-500 h-8">Box 1</div>
    //     <div class="bg-green-500 h-12">Box 2</div>
    //     <div class="bg-red-500 h-20">Box 3</div>
    //   </div>

    //   <div class="flex items-baseline bg-gray-200 space-x-4 mt-2">
    //     <div class="text-sm bg-blue-500">Box 1</div>
    //     <div class="text-xl bg-green-500">Box 2</div>
    //     <div class="text-3xl bg-red-500">Box 3</div>
    //   </div>
    //   <div class="grid grid-cols-3 items-baseline bg-gray-200 mt-2">
    //     <div class="text-sm bg-blue-500">Box 1</div>
    //     <div class="text-xl bg-green-500">Box 2</div>
    //     <div class="text-3xl bg-red-500">Box 3</div>
    //   </div>

    //   <div class="flex items-stretch h-32 bg-gray-200 space-x-4 mt-2">
    //     <div class="w-16 bg-blue-500">Box 1</div>
    //     <div class="w-16 bg-green-500">Box 2</div>
    //     <div class="w-16 bg-red-500">Box 3</div>
    //   </div>
    //   <div class="grid grid-cols-3 items-stretch h-32 bg-gray-200 mt-2">
    //     <div class="bg-blue-500">Box 1</div>
    //     <div class="bg-green-500">Box 2</div>
    //     <div class="bg-red-500">Box 3</div>
    //   </div>
    // </div>

    // <div>
    //   <div class="flex h-32 bg-gray-100 space-x-4 items-center">
    //     <div class="w-16 h-8 bg-blue-500">A</div>
    //     <div class="w-16 h-8 bg-green-500 self-start">B</div>
    //     <div class="w-16 h-8 bg-red-500 self-end">C</div>
    //     <div class="w-16 h-8 bg-yellow-500 self-center">D</div>
    //     <div class="w-16 h-8 bg-purple-500 self-stretch">E</div>
    //   </div>

    //   <div class="grid grid-cols-5 h-32 bg-gray-100 gap-4 items-end mt-2">
    //     <div class="bg-blue-500 h-8 self-start">A</div>
    //     <div class="bg-green-500 h-8 self-end">B</div>
    //     <div class="bg-red-500 h-8 self-center">C</div>
    //     <div class="bg-yellow-500 self-stretch">D</div>
    //     <div class="bg-purple-500 h-8 self-auto">E</div>
    //   </div>
    // </div>
    // <div className="text-black">
    //   <div class="h-64 w-full grid grid-rows-2 grid-cols-2 bg-gray-100 place-content-center gap-2">
    //     <div class="bg-blue-400 w-12 h-12">1</div>
    //     <div class="bg-green-400 w-12 h-12">2</div>
    //     <div class="bg-red-400 w-12 h-12">3</div>
    //     <div class="bg-yellow-400 w-12 h-12">4</div>
    //   </div>
    //   <div class="h-64 w-full mt-2 grid grid-rows-2 grid-cols-2 bg-gray-100 place-content-start gap-2">
    //     <div class="bg-blue-400 w-12 h-12">1</div>
    //     <div class="bg-green-400 w-12 h-12">2</div>
    //     <div class="bg-red-400 w-12 h-12">3</div>
    //     <div class="bg-yellow-400 w-12 h-12">4</div>
    //   </div>{" "}
    //   <div class="h-64 w-full mt-2 grid grid-rows-2 grid-cols-2 bg-gray-100 place-content-evenly gap-2">
    //     <div class="bg-blue-400 w-12 h-12">1</div>
    //     <div class="bg-green-400 w-12 h-12">2</div>
    //     <div class="bg-red-400 w-12 h-12">3</div>
    //     <div class="bg-yellow-400 w-12 h-12">4</div>
    //   </div>
    //   <div class="min-h-screen grid grid-cols-3 grid-rows-2 gap-6 place-content-evenly p-10 bg-gray-50">
    //     <div class="bg-white p-4 shadow">Post 1</div>
    //     <div class="bg-white p-4 shadow">Post 2</div>
    //     <div class="bg-white p-4 shadow">Post 3</div>
    //     <div class="bg-white p-4 shadow">Post 4</div>
    //     <div class="bg-white p-4 shadow">Post 5</div>
    //   </div>
    //   <div class="h-screen grid grid-cols-1 place-content-start p-6 bg-white">
    //     <div class="text-2xl font-bold">INVOICE</div>
    //     <div>Customer Name: John Doe</div>
    //     <div>Total: ₹ 1500</div>
    //   </div>
    //   <div class="grid grid-cols-4 grid-rows-2 place-content-between gap-8 p-6 bg-gray-100">
    //     <div class="bg-white p-4 shadow">Product 1</div>
    //     <div class="bg-white p-4 shadow">Product 2</div>
    //     <div class="bg-white p-4 shadow">Product 3</div>
    //     <div class="bg-white p-4 shadow">Product 4</div>
    //   </div>
    // </div>

    //     <div>
    //       {/* <div class="grid grid-cols-2 h-screen place-items-start gap-4 p-4 bg-gray-100">
    //         <div class="bg-white p-6 shadow">Widget 1</div>
    //         <div class="bg-white p-6 shadow">Widget 2</div>
    //       </div> */}

    //       {/* <div class="grid grid-cols-2 h-screen place-items-end gap-4 p-4 bg-gray-100">
    //         <div class="bg-black p-6 shadow">Widget 1</div>
    //         <div class="bg-white p-6 shadow">Widget 2</div>
    //       </div> */}

    //       <div class="grid grid-cols-2 h-full place-items-end gap-4 p-4 bg-gray-100">
    //         <div class="bg-white p-6 shadow">Widget 1</div>
    //         <div class="bg-white p-6 shadow">Widget 2</div>
    //       </div>
    //       <div class="grid h-screen place-items-center bg-blue-100">
    //         <div class="bg-white p-8 shadow-lg text-xl">Welcome to My App</div>
    //       </div>
    //       <div class="grid grid-cols-2 grid-rows-2 h-screen place-items-stretch gap-4 p-4 bg-gray-50">
    //   <div class="bg-white p-6 shadow">Stretch 1</div>
    //   <div class="bg-white p-6 shadow">Stretch 2</div>
    //   <div class="bg-white p-6 shadow">Stretch 3</div>
    //   <div class="bg-white p-6 shadow">Stretch 4</div>
    // </div>
    // <div class="grid grid-cols-2 place-items-auto gap-4">
    //   <div class="bg-white p-6">Default 1</div>
    //   <div class="bg-white p-6">Default 2</div>
    // </div>

    //     </div>

    <div className="text-black">
      <div class="grid grid-cols-2 h-48 gap-4 bg-gray-100">
        <div class="bg-white p-4 place-self-auto">Default</div>
        <div class="bg-blue-200 p-4">Box 2</div>
      </div>

      <div class="mt-2 grid grid-cols-2 h-48 gap-4 bg-gray-100">
        <div class="bg-white p-4 place-self-start">Header Box</div>
        <div class="bg-blue-200 p-4">Another Box</div>
      </div>
      <div class="grid grid-cols-2 h-48 gap-4 bg-gray-100 mt-2">
        <div class="bg-white p-4 place-self-end">Save</div>
        <div class="bg-blue-200 p-4">Form</div>
      </div>

      <div class="grid grid-cols-2 h-48 gap-4 bg-gray-100 mt-2">
        <div class="bg-white p-4 place-self-center">LOGO</div>
        <div class="bg-blue-200 p-4">Description</div>
      </div>

      <div class="grid mt-2 grid-cols-2 h-48 gap-4 bg-gray-100">
        <div class="bg-white p-4 place-self-stretch">Full Fit</div>
        <div class="bg-blue-200 p-4">Static</div>
      </div>
    </div>
  );
}
