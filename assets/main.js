// import { fetch } from "node-fetch";

const API = 'https://youtube-v2.p.rapidapi.com/channel/videos?channel_id=UCa40fkemBOz9KXKlTfbWkYA';

const content = null || document.getElementById('content');

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '54cc9c12d0mshc59b174945728b4p1afbe6jsnae44a7f5954d',
        'X-RapidAPI-Host': 'youtube-v2.p.rapidapi.com'
    }
};


async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
};

(async() => {
        try {
            const dataVideo = await fetchData(API);
            console.log(dataVideo);
            let view = `
            ${dataVideo.videos.map(video=>`
              <div class="group relative">
                <div
                  class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                  <img src="${video.thumbnails[3].url}" alt="${video.published_time}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                  <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.title}
                  </h3>
                </div>
              </div>
            `).slice(0,24).join('')}`
            content.innerHTML=view;

    } catch (error) {
        console.error(error);
    }
})();