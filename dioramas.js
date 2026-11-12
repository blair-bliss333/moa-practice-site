/* The Victorian Diorama: one entry per seasonal installation, newest first.
   The main page (victorian-diorama.html) and every installation page (diorama.html?s=<id>)
   are built from this list. To add next season: copy an entry, put it at the top,
   give it a new id, and move `current:true` onto it.
   Text and photos come from moaonline.org/victorian-diorama/ and its installation pages. */

const DIORAMAS = [
  {
    id: "spring-summer-2026",
    current: true,
    season: "Spring / Summer 2026",
    title: "Echoes of Spring",
    year: "2026",
    credits: [["Design", "Lively Productions"], ["Medium", "Mixed media installation, lighting"]],
    img: "2020/09/IMG_2227-1000x750.jpg",
    imgAlt: "The Victorian Diorama, a former bus shelter with glass windows, outside Marjorie Park",
    about: [
      "This art installation encapsulates the essence of spring and rebirth, showcasing a whimsical interior scene overtaken by the resurgence of nature.",
      "Moss, mushrooms, and lush spring blooms intermingle with picturesque home furnishings, creating a fantasy reading nook alive with both the newness of spring and the ancient spirit of enduring nature. Maypoles turn festively, reminding us that the turn of the season is cause for celebration. Stroll by during the day for a burst of color, or swing through after dark to see the installation beautifully illuminated.",
      "Big thanks to our creative friends Lively Productions for making this magical scene possible!"
    ]
  },
  {
    id: "winter-2025-26",
    season: "Winter 2025–26",
    title: "A Winter Wonderland",
    year: "2025",
    dates: "December 5, 2025 to February 13, 2026",
    credits: [["Artist", "Scott Hildebrandt, “Mister Christmas”"], ["Medium", "Mixed media, lighting and audio"]],
    img: "2025/12/Screenshot-2025-12-18-at-10.57.08-AM-993x800.png",
    imgAlt: "A Winter Wonderland: a snowy miniature scene with trains, gondolas and a snowman",
    video: "https://www.youtube.com/watch?v=CXWb0mTkXeU",
    about: [
      "A Winter Wonderland by Mister Christmas is a richly detailed diorama that brings a whimsical winter scene to life through movement, craft, and imagination. Featuring gently moving gondolas, trains, and miniature airplanes, the installation unfolds within a snowy landscape of trees, playful architecture, and a charming rocket motel, all watched over by a friendly snowman. Created using upcycled vintage technology, Mister Christmas transforms found materials into a magical, kinetic environment that celebrates nostalgia, ingenuity, and the quiet wonder of winter.",
      "The installation came to life every day between 3:00 and 10:30pm."
    ],
    bio: ["Scott Hildebrandt is a miniatures artist with a studio based in Englewood, CO."],
    statement: ["My love of miniatures goes back to my childhood when I spent hours with my grandfather, who was a model train enthusiast. Affectionately nicknamed “Mister Christmas,” I have combined my passion for miniatures with my love for holidays, the outdoors and all things repurposed. Each scene is a one-of-a-kind view of everyday life, whether it is a snapshot of nature or a glimpse of a bustling city. You might notice that I don’t include people in my art. I want to evoke your mind to imagine that you are there in the diorama. Most pieces are lit using small LED lights and some include motorized movement. Each work by “Mister Christmas” is made at my studio in Englewood, Colorado."]
  },
  {
    id: "fall-2025",
    season: "Fall 2025",
    title: "No Rest for the Wicked",
    year: "2025",
    dates: "September 24 to November 13, 2025",
    credits: [["Design", "Mark Lively and Lively Productions"], ["Medium", "Mixed media, lighting and audio"]],
    img: "2025/09/IMG_0003-1000x750.jpeg",
    imgAlt: "No Rest for the Wicked: the Wicked Witch of the West above a field of poppies",
    about: [
      "This spooky season, step into a world where imagination, music, and movie magic collide. Created by the incredibly talented Mark Lively of Lively Productions and his team, this diorama installation brings to life the phenomenon known as “Dark Side of the Rainbow.”",
      "The scene unfolds under the watchful gaze of the man in the moon, who looks down on the Wicked Witch of the West as she towers above a field of poppies. At her side hovers a menacing flying monkey, capturing the eerie charm and timeless allure of The Wizard of Oz.",
      "The installation was a playful homage to MOA’s Fall Movie Night, which paired Pink Floyd’s Dark Side of the Moon album with the 1939 film The Wizard of Oz."
    ]
  },
  {
    id: "winter-2024-25",
    season: "Winter 2024–25",
    title: "A Winter Scene",
    year: "2024",
    dates: "December 6, 2024 to February 28, 2025",
    credits: [["Artist", "Scott Hildebrandt, “Mister Christmas”"], ["Medium", "Mixed media, lighting and audio"]],
    img: "2024/11/IMG_5913-1000x750.jpeg",
    imgAlt: "A Winter Scene: a lit miniature winter village inside the diorama",
    video: "https://www.youtube.com/watch?v=CXWb0mTkXeU",
    bio: ["Scott Hildebrandt is a miniatures artist with a studio based in Englewood, CO."],
    statement: ["My love of miniatures goes back to my childhood when I spent hours with my grandfather, who was a model train enthusiast. Affectionately nicknamed “Mister Christmas,” I have combined my passion for miniatures with my love for holidays, the outdoors and all things repurposed. Each scene is a one-of-a-kind view of everyday life, whether it is a snapshot of nature or a glimpse of a bustling city. You might notice that I don’t include people in my art. I want to evoke your mind to imagine that you are there in the diorama. Most pieces are lit using small LED lights and some include motorized movement. Each work by “Mister Christmas” is made at my studio in Englewood, Colorado."]
  },
  {
    id: "fall-2024-inversion",
    season: "Summer / Fall 2024",
    title: "Inversion",
    year: "2024",
    dates: "August 3 to November 1, 2024",
    credits: [["Artists", "Design and Build 2024 emerging artists"], ["Medium", "Local soil, mixed media"]],
    img: "2024/08/DSC06100-1000x667.jpg",
    imgAlt: "Inversion: earthen beads lit inside the diorama",
    about: [
      "Through an “Inversion”, we contemplate the weight of human life.",
      "As we navigate our daily lives, we often overlook the subtle, yet significant, effects our actions impart on the world around us. Remarkably, it only takes six individuals traversing a similar route to irrevocably alter the composition of the ground beneath. How can we become aware of this inevitability?",
      "This installation illuminates a human effect on our shadowed subterranean landscape. Motion sensors track human movement to illuminate earthen Colorado beads, gently reminding us of this unseen, yet familiar, world. When dormant, shadows dance through deliberate fissures, crafting an ever-evolving landscape.",
      "Inversion was part of Design and Build 2024: Exploring the Luminous Shadow. Eight emerging artist interns came together over the summer, through MOA’s annual Design and Build Summer Internship Program, to collaboratively create several unique, site-specific installations for Marjorie Park in only 8 weeks. The theme given to the artists in 2024 was “light and shadow.”",
      "Emerging artists: Isabel Angulo, Josephine Clark, Oliver Cruz, Michael Earle, Zavier Gierisch, Katie Knudsen, August Ostrow and Christian Smith. They worked under the direction of 2024 Artist Fellow Charles Levesque and Resource Artist Walter Ware, with additional assistance by Reece Bailey and Patrick Stolper. Documentation photos by August Ostrow.",
      "The 2024 projects were generously supported through a facilities partnership with the University of Colorado Denver, College of Arts and Media and Metropolitan State University of Denver. Artworks were created within the sculpture fabrication studios on the Auraria campus."
    ]
  },
  {
    id: "spring-2024",
    season: "Spring 2024",
    title: "The Making of the Cabinet of Curiosities and Impossibilities",
    year: "2024",
    dates: "March 22 to July 19, 2024",
    credits: [["Artist", "Lonnie Hanzon and Hanzon Studios"]],
    img: "2024/02/IMG_1505-1000x750.jpeg",
    imgAlt: "Lonnie Hanzon's spring 2024 diorama inside the Victorian shelter",
    about: [
      "This spring diorama was created by Lonnie Hanzon and the magic makers at Hanzon Studios.",
      "Hanzon told the story of the making of his latest creation within Marjorie Park, the Cabinet of Curiosities and Impossibilities. It was MOA’s first ever progressive diorama installation: it changed from week to week, peaking the week of May 20th."
    ]
  },
  {
    id: "winter-2023-24",
    season: "Winter 2023–24",
    title: "Winter Woodland Hollow",
    year: "2023",
    dates: "Through March 1, 2024",
    credits: [["Artist", "Tiffany Matheson"], ["Medium", "Mixed media, lighting and audio"]],
    img: "2023/11/IMG_0200-1000x750.jpeg",
    imgAlt: "Winter Woodland Hollow: a snowy evergreen night scene with a hidden dwelling",
    bio: ["Tiffany Matheson is a mixed and multimedia artist native to and working in Denver, CO who specializes in sculpture, installation, performance and public art. She holds a bachelor’s degree in Biology with Studies in Sculpture from CU Denver, and has experience with mold making and casting, woodworking, welding, textiles, acrylic manipulation, electronics, music, written word, and more. While her work varies greatly, she is inspired by light, texture, sound, color, nature, the botanical world, and outer space. She often includes elements of exploration, play, discovery, mathematics, hidden elements, and puzzles in her art, and places emphasis on precision and attention to detail."],
    statement: [
      "Step into a whimsical world where the magic of the holidays comes alive! This captivating diorama features a snowy landscape adorned with lush evergreens, creating a picturesque night scene straight out of a winter wonderland.",
      "The air is filled with the scent of pine, evoking the essence of a crisp forest evening. Amidst the glistening snowdrifts, discover a hidden dwelling nestled among the trees in a secret place where woodland creatures gather to celebrate the joy of the season."
    ]
  },
  {
    id: "summer-2023",
    season: "Summer 2023",
    title: "The Cat’s Den",
    year: "2023",
    dates: "Through August 2023",
    credits: [["Artists", "Waveform.exp, Adden J. and John Leger, with support from Harmonic Media"], ["Medium", "Mixed media, lighting and audio"]],
    img: "2023/05/Cheshire_Cat_MOA_waveform_exp_installation_Green_edit-1000x750.jpg",
    imgAlt: "The Cat's Den: the Cheshire Cat projected inside the diorama",
    video: "https://vimeo.com/847466254",
    bio: [
      "WAVEFORM.exp is the collective efforts of Sam Moritz and Pat Higgins, two passionate digital projection artists who bonded over their love for the creative freedom allowed by this medium and how impactful it can be on a monumental scale.",
      "With a focus on original audio/visual digital content, 3D projection mapping, and interactive installations, their work activates and illuminates objects and surfaces to distort reality with illusory animations that create depth and motion across normal, everyday surfaces."
    ],
    statement: ["With the intention to completely transform the 19th-century European transit stop, our concept was to turn it into a whimsical portal to Lewis Carroll’s enchanting realm of Alice in Wonderland. This fusion of history, fantasy, and modern technology captures the essence of Wonderland, taking viewers on a mesmerizing journey into the den of the Cheshire Cat. Best viewed after dusk, it smiles and purrs as it welcomes visitors to explore the many summer events at Marjorie Park and Fiddler’s Green."]
  },
  {
    id: "winter-2022-23",
    season: "Winter 2022–23",
    title: "The Frost King, or the Power of Love",
    year: "2022",
    dates: "December 1, 2022 to March 2023",
    credits: [["Artist", "Lonnie Hanzon and Hanzon Studios"]],
    img: "2022/12/IMG_4495-1000x750.jpg",
    imgAlt: "The Frost King: fairy-tale vignettes seen through the diorama's window cutouts",
    about: [
      "Created by Lonnie Hanzon and the magic makers at Hanzon Studios, this diorama told the story of the seasons as the Frost King proclaims the whole year shall be winter. The Queen Fairy sends the smallest of fairies, Violet, to convince the Frost King to change his heart.",
      "Visitors peered through cutouts in the windows to see vignettes of the story come to life.",
      "Story adapted from “The Frost King: or, The Power of Love” by Louisa May Alcott."
    ]
  },
  {
    id: "fall-winter-2021",
    season: "Fall / Winter 2021",
    title: "Future-Proof",
    year: "2021",
    dates: "November 1, 2021 to April 17, 2022",
    credits: [["Artist", "Jodi Stuart"], ["Medium", "3D pen-formed plastic, flex-foam, pigment, acrylic, digital print, nylon filament, steel wire, powder coat"]],
    img: "2021/10/Diorama-J.Stuart-11.16.21-050-scaled-e1637181037493-1000x605.jpg",
    imgAlt: "Future-Proof: colorful woven biomorphic forms by Jodi Stuart",
    statement: ["My work explores the ‘super synthetic’ look of the digital technologies that saturate our lives, in relation to tactile and sensory experience. I aim to subvert the materials and tools of high-tech culture by using laborious and tactile processes. The forms in this diorama are influenced by animated computer models of microscopic processes in cells, created by Harvard Medical School’s ‘Biovisions’ program in the early 2000s. My sculptural forms are made using the plastic filaments intended for 3d digital printing. By using a ‘3dpen’ I have replaced the computer with the human hand in a kind of nostalgic gesture. Through this combination of materials and forms I want to create an uneasy optical space where craft traditions such as weaving, knitting, basket making are juxtaposed with abstracted virtual space and biomorphic forms."],
    bio: ["Jodi Stuart was born in 1971 and grew up in a small town on the East Coast of New Zealand. She attained a Bachelor of Visual Arts from Manukau Institute of Technology, Auckland in 1999, and an MFA from Auckland University in 2001. Jodi moved to the United States with her family in 2010 and lives in Denver, where she completed a summer artist residency at the Museum of Outdoor Arts. As well as exhibiting in her home country of New Zealand, Jodi has exhibited in California, Colorado, Michigan, Maryland, Texas, Washington and Wyoming."]
  },
  {
    id: "spring-summer-2021",
    season: "Spring / Summer 2021",
    title: "Psychedelic Tea Party",
    year: "2021",
    dates: "April 13, 2021 through summer",
    credits: [["Artwork", "Mr. Melty (Kevin Vigil)"], ["Design", "Kelly Jones"], ["Film", "Heather A. Longway"], ["Graphics", "Harmonic Media"]],
    img: "2021/04/MP-Diorama-05.22.21-024-1000x667.jpg",
    imgAlt: "Psychedelic Tea Party: kaleidoscopic Alice in Wonderland artwork in the diorama",
    about: [
      "Inspired by the work and imagery of Lewis Carroll’s Alice’s Adventures in Wonderland mixed with the kaleidoscopic imagery of the 1960s and ’70s music posters."
    ]
  },
  {
    id: "winter-2020",
    season: "Winter 2020",
    title: "Andorra, Queen of the Fairies",
    year: "2020",
    dates: "December 9, 2020 through winter",
    credits: [["Design", "Scott M. Soffa, SMS Studios, and Cris Woessner"]],
    img: "2020/12/2-1000x750.jpeg",
    imgAlt: "Andorra, Queen of the Fairies: a fairy queen and elves in a frosty forest",
    about: [
      "Queen Andorra is greeted by three magic elves to spread warmth and beauty, celebrating the Winter Solstice season in the frosty cold by trimming the trees of the forest."
    ]
  },
  {
    id: "fall-2020",
    season: "Fall 2020",
    title: "Camp Wasawa",
    year: "2020",
    dates: "September 12 to November 28, 2020",
    credits: [["Design", "Scott M. Soffa, SMS Studios, and Cris Woessner"], ["Installation", "Ben Pound"], ["Soundtrack", "The Color of Sound, commissioned by MOA"]],
    img: "2020/09/Diorama-09.22.20-004-1000x667.jpg",
    imgAlt: "Camp Wasawa: woodland fairies among autumn leaves",
    about: [
      "On a walk in the forest you have come upon the woodland fairies enjoying the last days of summer at magical Camp Wasawa. Autumn has returned, camp is ending, so it is time to begin preparing for the cold months of winter. Can you spot the 11 fairies among the falling leaves?",
      "Wasawa is the Native American Algonquian / Abnaki word for pumpkin."
    ]
  }
];

const DIORAMA_CURRENT = DIORAMAS.find(d => d.current);
const DIORAMA_PAST = DIORAMAS.filter(d => !d.current);
