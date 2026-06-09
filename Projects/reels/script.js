const reels = [
  {
    id: 1,
    username: "@aestheticvibes",
    avatar: "https://i.pravatar.cc/80?img=11",
    vedio: "https://www.pexels.com/download/video/5767870/",
    caption: "Golden hour hits different 🌅✨ This view never gets old.",
    hashtags: ["#sunsetvibes", "#aesthetic", "#goldenhour"],
    likes: "42.1K",
    comments: "1.2K",
    song: "Blinding Lights · The Weeknd",

  },
  {
    id: 2,
    username: "@naturelens",
    avatar: "https://i.pravatar.cc/80?img=32",
    vedio: "https://www.pexels.com/download/video/7197861/",
    caption: "Into the wild 🌿🦋 Life is better outside.",
    hashtags: ["#nature", "#explore", "#wildlife"],
    likes: "89.3K",
    comments: "3.4K",
    song: "Wildflowers · Tom Petty",
 
  },
  {
    id: 3,
    username: "@cityframes",
    avatar: "https://i.pravatar.cc/80?img=56",
    vedio: "https://www.pexels.com/download/video/8041944/",
    caption: "Lost in the city lights 🌃💙 Never sleep in a city that never sleeps.",
    hashtags: ["#citylife", "#nighttime", "#urban"],
    likes: "21.7K",
    comments: "987",
    song: "Neon Glow · Lo-Fi Beats",

  },
  {
    id: 4,
    username: "@foodiediaries",
    avatar: "https://i.pravatar.cc/80?img=44",
    vedio: "https://www.pexels.com/download/video/8263445/",
    caption: "This pasta is absolutely 🔥 Made from scratch with love 🍝",
    hashtags: ["#food", "#pasta", "#homecooking"],
    likes: "134K",
    comments: "5.6K",
    song: "That's Amore · Dean Martin",

  },
  {
    id: 5,
    username: "@travelwithme",
    avatar: "https://i.pravatar.cc/80?img=23",
    vedio: "https://www.pexels.com/download/video/7722223/",
    caption: "Paris never disappoints 🗼❤️ Every corner is a postcard.",
    hashtags: ["#paris", "#travel", "#europe"],
    likes: "67.4K",
    comments: "2.1K",
    song: "La Vie En Rose · Édith Piaf",

  }
];


const section = document.querySelector("section");
let sum="";
reels.forEach((reel) => {
  sum    +=  ` <div class="reel">
                    <video src="${reel.vedio}" autoplay loop muted></video>
                <div class="reel-info">
                    <!-- User Row -->
                    <div class="user-row">
                        <div class="avatar">
                            <img src="${reel.avatar}" alt="user" />
                        </div>
                        <span class="username">${reel.username}</span>
                        <button class="follow-btn">Follow</button>
                    </div>

                    <!-- Caption -->
                    <p class="caption">
                        ${reel.caption}
                        <span class="hashtag">#${reel.hashtags[0]}</span>
                        <span class="hashtag">#${reel.hashtags[1]}</span>
                    </p>
                </div>
                <div class="reel-actions">
                    <div class="i"> <i class="ri-poker-hearts-line"></i>${reel.likes}</div>
                    <div class="i"><i class="ri-chat-smile-2-line"></i>${reel.comments}</div>
                    <div class="i"><i class="ri-share-forward-line"></i>120</div>
                    <div class="i"><i class="ri-more-2-line"></i></div>
                </div>
            </div>`;
});
section.innerHTML = sum;