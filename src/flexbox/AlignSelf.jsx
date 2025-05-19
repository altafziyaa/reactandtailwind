function AlignSelf() {
  return (
    <div>
      <div class="flex items-center justify-center h-40 bg-gray-100 gap-4">
        <div class="bg-red-400 p-2 self-end ">Start</div>
        <div class="bg-green-400 p-6">Center</div>
      </div>
      <div class="flex items-center h-40 mt-2 bg-gray-100 gap-4">
        <div class="bg-red-400 p-2">Center</div>
        <div class="bg-green-400 p-6 self-end">End</div>
      </div>
      <div class="flex items-start h-40 mt-2 bg-gray-100 gap-4">
        <div class="bg-red-400 p-2">Top</div>
        <div class="bg-green-400 p-6 self-center">Center</div>
      </div>

      <div class="flex items-start h-40 mt-2 bg-gray-100 gap-4">
        <div class="bg-red-400 p-2 self-stretch">Stretch</div>
        <div class="bg-green-400 p-6">Normal</div>
      </div>
    </div>
  );
}

export default AlignSelf;
