export default function FlexDirection() {
  return (
    <div className="flex flex-col">
     
      <div class="flex flex-col justify-start bg-gray-100 p-4 gap-4">
        <div className="bg-red-500 p-4">item 1</div>
        <div className="bg-green-500 p-4">item 2</div>
        <div className="bg-amber-500 p-4">item 3</div>
        <div className="bg-blue-500 p-4">item 4</div>
        <div className="bg-pink-500 p-4">item 5</div>
        <div className="bg-indigo-500 p-4">item 6</div>
      </div>

      <div class="flex flex-col justify-end bg-gray-100 p-4 gap-4">
        <div className="bg-red-500 p-4">item 1</div>
        <div className="bg-green-500 p-4">item 2</div>
        <div className="bg-amber-500 p-4">item 3</div>
        <div className="bg-blue-500 p-4">item 4</div>
        <div className="bg-pink-500 p-4">item 5</div>
        <div className="bg-indigo-500 p-4">item 6</div>
      </div>
      <div class="flex flex-col justify-center bg-gray-100 p-4 gap-4">
        <div className="bg-red-500 p-4">item 1</div>
        <div className="bg-green-500 p-4">item 2</div>
        <div className="bg-amber-500 p-4">item 3</div>
        <div className="bg-blue-500 p-4">item 4</div>
        <div className="bg-pink-500 p-4">item 5</div>
        <div className="bg-indigo-500 p-4">item 6</div>
      </div>

      <div class="flex justify-between bg-gray-100 p-4 gap-4">
        <div className="bg-red-500 p-4">item 1</div>
        <div className="bg-green-500 p-4">item 2</div>
        <div className="bg-amber-500 p-4">item 3</div>
        <div className="bg-blue-500 p-4">item 4</div>
        <div className="bg-pink-500 p-4">item 5</div>
        <div className="bg-indigo-500 p-4">item 6</div>
      </div>

      <div class="flex justify-around bg-gray-100 p-4 gap-4">
        <div className="bg-red-500 p-4">item 1</div>
        <div className="bg-green-500 p-4">item 2</div>
        <div className="bg-amber-500 p-4">item 3</div>
        <div className="bg-blue-500 p-4">item 4</div>
        <div className="bg-pink-500 p-4">item 5</div>
        <div className="bg-indigo-500 p-4">item 6</div>
      </div>

      <div class="flex justify-evenly bg-gray-100 p-4 gap-4">
        <div className="bg-red-500 p-4">item 1</div>
        <div className="bg-green-500 p-4">item 2</div>
        <div className="bg-amber-500 p-4">item 3</div>
        <div className="bg-blue-500 p-4">item 4</div>
        <div className="bg-pink-500 p-4">item 5</div>
        <div className="bg-indigo-500 p-4">item 6</div>
      </div>
    </div>
  );
}
