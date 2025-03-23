import React from "react";

function Card({channel}) {
    // console.log("props",props);
    console.log(channel);
    
    return (
    <div class=" mb-2 bg-amber-300 flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
        <img
        class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0"
        src="https://static.vecteezy.com/system/resources/thumbnails/038/974/578/small/ai-generated-professional-portrait-of-a-competent-woman-free-photo.jpg"
        alt=""
        />
        <div class="space-y-2 text-center sm:text-left">
        <div class="space-y-0.5">
            <p class="text-lg font-semibold text-black">{channel}</p>
            <p class="font-medium text-gray-500">Product Engineer</p>
        </div>
        <button class="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
            Message
        </button>
        </div>
    </div>
    );
}

export default Card;
