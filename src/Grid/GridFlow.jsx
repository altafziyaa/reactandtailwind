import React from "react";

export default function GridFlow() {
  return (
    <div>
      {/* <div class="grid grid-cols-3 grid-flow-row gap-4">
        <div class="bg-red-400">1</div>
        <div class="bg-blue-400">2</div>
        <div class="bg-green-400">3</div>
        <div class="bg-yellow-400">4</div>
      </div>

      <div class="grid grid-rows-3 grid-flow-col gap-4 h-48 mt-2">
        <div class="bg-red-400">1</div>
        <div class="bg-blue-400">2</div>
        <div class="bg-green-400">3</div>
        <div class="bg-yellow-400">4</div>
      </div>

      <div class="grid grid-cols-4 grid-flow-row-dense gap-2 mt-2">
        <div class="bg-red-500 col-span-2">1</div>
        <div class="bg-blue-500">2</div>
        <div class="bg-green-500 col-span-2">3</div>
        <div class="bg-yellow-500">4</div>
      </div>

      <div class="grid grid-rows-3 grid-flow-col-dense gap-2 h-60 mt-2">
        <div class="bg-red-500 row-span-2">A</div>
        <div class="bg-blue-500">B</div>
        <div class="bg-green-500 row-span-2">C</div>
        <div class="bg-yellow-500">D</div>
      </div> */}

      <div class="grid grid-flow-col auto-cols-auto gap-4">
        <div class="bg-pink-300">Short</div>
        <div class="bg-yellow-300">A very long column item</div>
      </div>

      <div class="grid grid-flow-col auto-cols-min gap-4">
        <div class="bg-blue-400">One</div>
        <div class="bg-green-400">This text will wrap</div>
      </div>

      <div class="grid grid-flow-col auto-cols-max gap-4">
        <div class="bg-blue-400">Short</div>
        <div class="bg-green-400">
          This is very very very long and will not wrap
        </div>
      </div>

      <div class="grid grid-flow-col auto-cols-fr gap-4">
        <div class="bg-red-400">1</div>
        <div class="bg-green-400">2</div>
        <div class="bg-yellow-400">3</div>
      </div>

      <div class="grid grid-flow-col auto-cols-fr gap-4 bg-gray-200 p-4">
        <div class="bg-red-500 text-white p-2">A</div>
        <div class="bg-blue-500 text-white p-2">B content is larger</div>
        <div class="bg-green-500 text-white p-2">C</div>
      </div>
    </div>
  );
}
