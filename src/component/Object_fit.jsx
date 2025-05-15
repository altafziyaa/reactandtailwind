import React from "react";

function Object_fit() {
  return (
    <div className="mt-5 w-full h-full text-center ">
      {/* <img
        src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/IMG_Academy_Logo.svg/1200px-IMG_Academy_Logo.svg.png"
        className="w-full object-scale-down h-50"
      /> */}

      {/* // Tailwind CSS Object Position */}

      {/* The Tailwind CSS Object Position class accepts more than one value. All the properties are covered as in class form. It is the alternative to the CSS object-position property. This class is used to specify, how an image or video element is positioned with x/y coordinates within its content box. It also controls the replacement of the element's content positioning within its container.
       */}

      {/* //Tailwind CSS Overflow */}

      {/* This overflow is for controlling how an element content is handled that is too large for the container. It tells whether to clip content or add scroll bars. This class accepts more than one value in Tailwind CSS. It is the alternative to the CSS Overflow property.

There is a separate property in CSS for CSS Overflow-x and CSS Overflow-y,  */}
      {/* Overflow Classes
overflow-auto 
overflow-hidden 
overflow-visible 
overflow-scroll 
overflow-x-auto 
overflow-y-auto 
overflow-x-hidden 
overflow-y-hidden 
overflow-x-visible 
overflow-y-visible 
overflow-x-scroll 
overflow-y-scroll  */}

      {/* <div
        className="
      text-blue-300
      overflow-auto
       bg-slate-500
       p-4 
       mx-16 
       h-26
       text-justify
        ">
        How many times were you frustrated while looking out for a good
        collection of programming/algorithm/interview questions? What did you
        expect and what did you get? This portal has been created to provide
        well written, well thought and well explained solutions for selected
        questions. An IIT Roorkee alumnus and founder of GeeksforGeeks. He loves
        to solve programming problems in most efficient ways. Apart from
        GeeksforGeeks, he has worked with DE Shaw and Co. as a software
        developer and JIIT Noida as an assistant professor. It is a good
        platform to learn programming. It is an educational website. Prepare for
        the Recruitment drive of product based companies like Microsoft, Amazon,
        Adobe etc with a free online placement preparation course
      </div> */}

      {/* This class accepts more than one value in tailwind CSS. It is the alternative to the CSS Overscroll-behavior property. This class is used to set the behavior of the browser when the boundary of a scrolling area is reached. This property can be used to prevent unwanted scrolling in pages where there are multiple scroll areas. 

There is separate property in CSS for CSS Overscroll-behavior-x and CSS Overflow-behavior-y, but we will cover it in this single article. */}

      {/* Overscroll Behavior class:

overscroll-auto
overscroll-contain
overscroll-none
overscroll-y-auto
overscroll-y-contain
overscroll-y-none
overscroll-x-auto
overscroll-x-contain
overscroll-x-none */}

      <div className="flex">
        <div
          class="overscroll-contain bg-green-800 p-4 
                mx-24 w-1/3 text-justify">
          This portal has been created to provide well written, well thought and
          well explained solutions for selected questions. An IIT Roorkee
          alumnus and founder of GeeksforGeeks. He loves to solve programming
          problems in most efficient ways. Apart from GeeksforGeeks, he has
          worked with DE Shaw and Co. as a software developer and JIIT Noida as
          an assistant professor.
        </div>

        <div
          class="overscroll-auto overflow-y-scroll 
                bg-green-400 p-2 w-1/4 h-24">
          This is a smaller element that is also scrollable. The overscroll
          behavior can be used to control if the main content behind would
          scroll when this element's vertical boundary is reached.
        </div>
      </div>
    </div>
  );
}

export default Object_fit;
