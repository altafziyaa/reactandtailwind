import React from "react";

function Position() {
  return (
    <div className="bg-amber-700 text-center text-cyan-700">
      {/* This class accepts more than one value in tailwind CSS. It is the alternative to the CSS Position property. This class is used for controlling how an element is positioned in the DOM. */}

      {/*  Position classes:
    static
    fixed
    absolute
    relative
    sticky
    */}
      {/* <div className="static bg-gray-600 p-4"> i am static</div> */}

      {/* <div className="relative bg-amber-600 p-4 left-4">
        {" "}
        i am 1rem down and right
      </div> */}

      {/* <div className="relative h-40 bg-blue-700">
        <img 
        className="absolute right-2 bottom-2" 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/768px-WhatsApp.svg.png?20220228223904" 
        width={60}/>
        
      </div> */}

      {/* <div className="fixed top-0 left-0 w-full bg-green-900 p-4"> im fixed at the top</div> */}

      {/* <div className="h-100 overflow-auto">
        <div className="sticky top-0 bg-amber-400 p-4"> sticky header</div>
        <div className="h-200 bg-gray-500
        "> scroll me to see sticky</div>
      </div> */}
      {/* <div class="relative">
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-300 p-4">
          Centered Box
        </div>
      </div> */}

      {/* <div className="relative overflow-hidden h-72 bg-gray-400 ">
        <div className="absolute left-10 top-10 w-40 h-40 bg-blue-400 z-10"></div>

        <div className="absolute left-20 top-20 w-40 h-40 bg-red-400 z-20"></div>

        <div className="absolute left-30 top-30 w-40 h-40 bg-yellow-400 z-30"></div>

        <div class="absolute z-auto bg-yellow-600 p-4">
          Auto z-index (based on HTML flow)
        </div>
      </div> */}

      {/* <div class="relative ">
        <div class="absolute inset-0 bg-blue-200 z-20">Background Box</div>
        <p class="relative -z-20">Text Above</p>
      </div> */}

{/* <div class="fixed inset-0 bg-black bg-opacity-50 z-40"></div>

<div class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 p-6 rounded shadow-lg z-50">
  Modal Content
</div> */}
    </div>
  );
}

export default Position;
