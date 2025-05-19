import React, { useState } from "react";
import { Bell, MessageSquare, AlertCircle } from "lucide-react";

const notifications = [
  {
    id: 1,
    icon: <Bell />,
    text: "You have a new follower.",
  },
  {
    id: 2,
    icon: <MessageSquare />,
    text: "Someone commented on your post.",
  },
  {
    id: 3,
    icon: <AlertCircle />,
    text: "System update available.",
  },
];

const messages = [
  {
    id: 1,
    text: "Hey! How are you?",
    sender: "receiver",
    timestamp: "10:23 AM",
  },
  {
    id: 2,
    text: "I’m good, how about you?",
    sender: "sender",
    timestamp: "10:24 AM",
  },
  {
    id: 3,
    text: "All good here too!",
    sender: "receiver",
    timestamp: "10:25 AM",
  },
];

export default function Flexbox() {
  // const [open, setOpen] = useState(false);

  // const [isOpen, setIsOpen] = useState(false);

  // const messages = [
  //   { id: 1, text: "Hi there!", sender: "receiver" },
  //   { id: 2, text: "Hello! How are you?", sender: "sender" },
  //   { id: 3, text: "I'm good, thanks!", sender: "receiver" },
  //   { id: 4, text: "Great to hear!", sender: "sender" },
  // ];

  const comments = [
    {
      id: 1,
      profilePic: "https://i.pravatar.cc/100?img=1",
      username: "Altaf",
      text: "This is a great post!",
    },
    {
      id: 2,
      profilePic: "https://i.pravatar.cc/100?img=2",
      username: "JohnDoe",
      text: "Thanks for sharing your thoughts.",
    },
    {
      id: 3,
      profilePic: "https://i.pravatar.cc/100?img=3",
      username: "JaneSmith",
      text: "I completely agree with this!",
    },
  ];

  return (
    // <div className="flex justify-center items-center h-screen flex-row gap-2">

    //   <div className="w-24 h-24 bg-amber-400 text-center content-center rounded-md">
    //     box 1
    //   </div>

    //   <div className="w-24 h-24 bg-amber-400 content-center text-center rounded-md">
    //     box 2
    //   </div>

    //   <div className="w-24 h-24 bg-amber-400 content-center text-center rounded-md">
    //     box 3
    //   </div>

    // </div>

    // ===============================
    // <div className="flex justify-center items-center h-[400px] bg-white flex-col sm:flex-row-reverse gap-4">
    //   <div className="bg-green-400 w-20 h-24 rounded-md text-center content-center">
    //     1
    //   </div>
    //   <div className="bg-blue-400 w-20 h-24 rounded-md text-center content-center">
    //     2
    //   </div>
    //   <div className="bg-purple-400 w-20 h-24 rounded-md text-center content-center">
    //     3
    //   </div>
    //   <div className="bg-pink-400 w-20 h-24 rounded-md text-center content-center">
    //     4
    //   </div>
    // </div>

    // <header className="w-full flex justify-between bg-green-500 p-4">
    //   <img
    //     src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png"
    //     width={50}
    //     height={50}
    //     alt=""
    //   />

    //   {/*for mobile */}
    //   <button
    //     className="md:hidden p-2 focus:outline-none"
    //     onClick={() => setOpen(!open)}>
    //     <svg
    //       className="w-6 h-6"
    //       fill="none"
    //       stroke="currentColor"
    //       strokeWidth="2"
    //       viewBox="0 0 24 24">
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         d="M4 6h16M4 12h16M4 18h16"
    //       />
    //     </svg>
    //   </button>

    //   <div
    //     className={`${
    //       open ? "flex" : "hidden"
    //     }  flex-col md:flex md:flex-row gap-4 mt-4 md:mt-0 justify-center items-center`}>
    //     <ul className=" flex gap-4 justify-center items-center">
    //       <li className="bg-white px-2 rounded-sm hover:font-semibold uppercase">
    //         home
    //       </li>
    //       <li className="bg-white px-2 rounded-sm hover:font-semibold uppercase">
    //         about
    //       </li>
    //       <li className="bg-white px-2 rounded-sm hover:font-semibold uppercase">
    //         contact
    //       </li>
    //     </ul>
    //   </div>
    // </header>

    // <nav className="bg-gray-800 text-white p-4">
    //   <div className="flex items-center justify-between right">
    //     <h1 className="text-xl font-bold">MySite</h1>

    //     {/* Hamburger Button - visible only on mobile */}
    //     <button
    //       onClick={() => setIsOpen(!isOpen)}
    //       className="md:hidden p-2 focus:outline-none"
    //     >
    //       <svg
    //         className="w-6 h-6"
    //         fill="none"
    //         stroke="currentColor"
    //         strokeWidth="2"
    //         viewBox="0 0 24 24"
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           d="M4 6h16M4 12h16M4 18h16"
    //         />
    //       </svg>
    //     </button>
    //   </div>

    //   {/* Nav Links */}
    //   <div
    //     className={`${
    //       isOpen ? "flex" : "hidden"
    //     } flex-col md:flex md:flex-row gap-4 mt-4 md:mt-0 justify-end content-center items-start`}
    //   >
    //     <a href="#" className="hover:text-gray-300">
    //       Home
    //     </a>
    //     <a href="#" className="hover:text-gray-300">
    //       About
    //     </a>
    //     <a href="#" className="hover:text-gray-300">
    //       Services
    //     </a>
    //     <a href="#" className="hover:text-gray-300">
    //       Contact
    //     </a>
    //   </div>
    // </nav>

    // <div className="flex justify-center items-stretch gap-4">
    //   <div className="bg-white h-[100px] ">Create 3 columns in a row, with different content inside, but all should have equal height.</div>
    //   <div className="bg-white h-[100px]"> content inside, but all should have equal height.</div>
    //   <div className="bg-white h-[100px]">Create 3 columns in a row, with different .</div>
    // </div>
    // ============================================

    // <div className="max-w-sm mx-auto p-4 bg-gray-200 min-h-screen">
    //   {messages.map((msg) => (
    //     <div
    //       key={msg.id}
    //       className={`flex ${
    //         msg.sender === "sender" ? "justify-end" : "justify-start "
    //       } mb-2`}>
    //       <div
    //         className={`px-4 py-2 rounded-lg max-w-xs ${
    //           msg.sender === "sender"
    //             ? "bg-green-500 text-white rounded-br-none"
    //             : "bg-red-500 text-white rounded-bl-none"
    //         }`}>
    //         {msg.text}
    //       </div>
    //     </div>
    //   ))}
    // </div>

    // <div className="max-w-sm min-h-screen mx-auto  bg-gray-200 pt-4 ">
    //   {messages.map((msg) =>
    //     <div
    //       key={msg.id}
    //       className={`flex m-4 ${
    //         msg.sender === "sender" ? "justify-end" : "justify-start"
    //       } mb-2`}>
    //       <p
    //         className={`px-4 py-2 rounded-lg max-w-xs ${
    //           msg.sender === "sender"
    //             ? "bg-blue-500 text-black"
    //             : "bg-gray-400 text-black"
    //         }`}>
    //         {msg.text}
    //       </p>
    //     </div>
    //   )}
    // </div>

    // <div className="max-w-xl bg-gray-200 mx-auto  space-y-4 ">
    //   {comments.map((com) => (
    //     <div key={com.id} className="flex items-start space-x-4 p-2">
    //       <img
    //         src={com.profilePic}
    //         className="rounded-full w-10 h-10 object-cover"
    //       />
    //       <div>
    //         <div className="font-semibold text-gray-600">{com.username}</div>
    //         <p className="text-gray-700">{com.text}</p>
    //       </div>
    //     </div>
    //   ))}
    // </div>

    <div className="max-w-md mx-auto bg-gray-200 p-4 rounded-lg mt-4">
      <h2 className="uppercase font-semibold text-blue-500">notification</h2>
      <div className="space-y-4">
        {notifications.map((noti) => (
          <div key={noti.id} className="flex space-x-4 items-start">
            <div className="text-green-500">{noti.icon}</div>
            <div>
              <p className="text-gray-700">{noti.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  //   <div class="p-4 space-y-4 max-w-md mx-auto">
  //   <div class="flex justify-end flex-col items-end">
  //     <div class="bg-blue-500 text-white p-3 rounded-lg max-w-xs">
  //       Sure, let's meet at 5 PM.
  //     </div>
  //     <span class="text-xs text-gray-500 mt-1">10:24 AM</span>
  //   </div>
  // </div>
 
  
  );
}
