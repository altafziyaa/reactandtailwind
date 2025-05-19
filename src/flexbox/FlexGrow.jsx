export default function FlexGrow() {
  return (
    <div>
      {/* <div class="flex gap-4 bg-gray-100 p-4">
        <div class="bg-blue-400 text-white p-4">Item 1</div>
        <div class="bg-green-400 text-white p-4">Item 2</div>
      </div>

      <div class="flex gap-4 bg-gray-100 p-4 mt-2">
        <div class="bg-blue-400 text-white p-4 grow">Item 1 (Grow)</div>
        <div class="bg-green-400 text-white p-4">Item 2</div>
      </div>

      <div class="flex gap-4 bg-gray-100 p-4 mt-2">
        <div class="bg-blue-400 text-white p-4 grow">Item 1</div>
        <div class="bg-green-400 text-white p-4 grow-0">Item 2 (No Grow)</div>
      </div>
      <div className="flex gap-4 bg-gray-200 p-4">
        <input type="text" className="grow p-2 rounded  border-2 border-blue-500 text-green-600" placeholder="search..."/>
        <button class="bg-blue-500 text-white px-4 py-2 rounded">Search</button>
      </div> */}

      <div class="flex gap-4 bg-gray-200 p-4 w-[300px] overflow-hidden">
        <div class="bg-blue-500 text-white p-4 shrink">
          Very very very long text
        </div>
        <div class="bg-green-500 text-white p-4">Box</div>
      </div>

      <div class="flex gap-4 bg-gray-200 p-4 w-[300px] overflow-hidden">
        <div class="bg-blue-500 text-white p-4 shrink-0">
          Very very very long text
        </div>
        <div class="bg-green-500 text-white p-4">Box</div>
      </div>
      
      <div class="flex gap-4 bg-gray-100 p-4 w-[300px]">
        <button class="shrink-0 bg-blue-500 text-white px-6 py-2 rounded">
          Fixed
        </button>
        <input
          type="text"
          class="grow p-2 rounded"
          placeholder="Type here..."
        />
      </div>
    </div>
  );
}
