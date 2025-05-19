import React from "react";

export default function TemplateCol() {
  return (
    <div>
      <div class="grid grid-cols-1 gap-4">
        <div class="bg-red-400 p-4">Box 1</div>
        <div class="bg-blue-400 p-4">Box 2</div>
        <div class="bg-green-400 p-4">Box 3</div>
      </div>

      <div class="grid grid-cols-2 gap-4 mt-2">
        <div class="bg-red-400 p-4">A</div>
        <div class="bg-blue-400 p-4">B</div>
        <div class="bg-green-400 p-4">C</div>
        <div class="bg-yellow-400 p-4">D</div>
      </div>

      <div class="grid grid-cols-3 gap-4 mt-2">
        <div class="bg-red-400 p-4">1</div>
        <div class="bg-blue-400 p-4">2</div>
        <div class="bg-green-400 p-4">3</div>
        <div class="bg-yellow-400 p-4">4</div>
      </div>

      <div class="grid grid-cols-6 gap-2 mt-2">
        <div class="bg-pink-400">1</div>
        <div class="bg-purple-400">2</div>
        <div class="bg-yellow-400">3</div>
        <div class="bg-green-400">4</div>
        <div class="bg-blue-400">5</div>
        <div class="bg-red-400">6</div>
      </div>

      <div class="grid grid-cols-12 gap-1 mt-2">
        <div class="col-span-3 bg-red-200">Side Menu</div>
        <div class="col-span-9 bg-green-200">Main Content</div>
      </div>

      <div class="grid grid-cols-none mt-2">
        <div class="bg-red-200">1</div>
        <div class="bg-blue-200">2</div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">

          <div class="bg-pink-400">1</div>
        <div class="bg-purple-400">2</div>
        <div class="bg-yellow-400">3</div>
        <div class="bg-green-400">4</div>
        <div class="bg-blue-400">5</div>
        <div class="bg-red-400">6</div>
      </div>
    </div>
  );
}
