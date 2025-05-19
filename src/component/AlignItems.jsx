export default function AlignItems() {
  return (
    <div>
      <div className="flex items-start h-30 bg-amber-100 gap-4">
        <div class="bg-red-400 p-2">Short</div>
        <div class="bg-green-400 p-6">Tall</div>
      </div>

      <div className="flex items-end  h-30 mt-2 bg-amber-100 gap-4">
        <div class="bg-red-400 p-2">Short</div>
        <div class="bg-green-400 p-6">Tall</div>
      </div>
      <div class="flex items-center mt-2 h-30 bg-gray-100 gap-4">
        <div class="bg-red-400 p-2">Short</div>
        <div class="bg-green-400 p-6">Tall</div>
      </div>
      <div class="flex items-baseline h-30 mt-2 bg-gray-100 gap-4">
        <div class="bg-red-400 text-sm p-2">Text 1</div>
        <div class="bg-green-400 text-3xl p-2">Text 2</div>
      </div>
      <div class="flex items-stretch h-30 mt-2 bg-gray-100 gap-4">
        <div class="bg-red-400 w-1/3">Box 1</div>
        <div class="bg-green-400 w-1/3">Box 2</div>
      </div>

      <div class="flex flex-col items-center justify-center h-36 bg-gray-200 gap-2">
        <div class="bg-blue-400 p-4">Centered Column Item</div>
        <div class="bg-blue-400 p-4">Centered Column Item</div>
      </div>
    </div>
  );
}
