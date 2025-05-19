export default function FlexProperty() {
  return (
    <div>
      <div class="flex gap-4">
        <div class="bg-blue-400 text-white p-4">Box 1</div>
        <div class="bg-green-400 text-white p-4">Box 2</div>
      </div>

      <div class="flex gap-4 mt-2">
        <div class="flex-1 bg-blue-400 text-white p-4">Box 1</div>
        <div class="flex-1 bg-green-400 text-white p-4">Box 2</div>
      </div>

      <div class="flex gap-4 mt-2">
        <div class="flex-auto bg-blue-400 text-white p-4">Short</div>
        <div class="flex-auto bg-green-400 text-white p-4">
          Very Very Long Text in Second Box
        </div>
      </div>

      <div class="flex gap-4 mt-2">
        <div class="flex-initial bg-blue-400 text-white p-4">Short</div>
        <div class="flex-initial bg-green-400 text-white p-4">
          Very Very Long Text
        </div>
      </div>
      <div class="flex gap-4 mt-2">
        <div class="flex-none bg-blue-400 text-white p-4 w-48">Fixed Width</div>
        <div class="bg-green-400 text-white p-4">Flexible</div>
      </div>
    </div>
  );
}
