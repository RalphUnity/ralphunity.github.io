/**
 * Your projects. Each project is one { ... } block; copy one to add another.
 * They show on the page in the order listed here.
 *
 *   name        - project title
 *   company     - the company you made it at, shown under the title (optional)
 *   description - one or two sentences about the project (optional)
 *   responsibilities - what you did on the project, one bullet per line
 *   skills      - tools and skills used, shown as tags, e.g. ["Unity", "C#", "PlayFab"]
 *   images      - image paths, e.g. "images/projects/my-game-1.png"
 *   videos      - .mp4 paths like "images/projects/demo.mp4",
 *                 or YouTube links like "https://www.youtube.com/watch?v=XXXXXXXXXXX"
 *   links       - buttons to the store page, website, etc. Each one has a label and a url:
 *                 links: [
 *                   { label: "Google Play", url: "https://play.google.com/store/apps/details?id=..." },
 *                   { label: "App Store", url: "https://apps.apple.com/app/..." },
 *                   { label: "Website", url: "https://..." }
 *                 ]
 *
 * Put your image and video files in the images/projects/ folder.
 */
window.PROJECTS = [
  {
    name: "Puzzle Panic",
    company: "Limit Break",
    description: "A 3D arcade puzzle and Match-3 mobile game set in the anime-inspired DigiDaigaku universe, featuring thousands of levels, powerful boosters, explosive combos, collectible trading, and boss battles. Soft-launched in Australia, New Zealand, and Singapore for testing and player feedback.",
    responsibilities: [
      "Developed game levels using proprietary internal tools and systems.",
      "Developed a tool to automate animation extraction from multiple FBX files, leveraging Claude AI to accelerate development.",
      "Implemented VFX and scene logic using Unity Timeline.",
      "Optimized render textures, VFX, and shaders for mobile performance.",
      "Optimized animation compression to reduce build size while preserving animation quality and minimizing clipping artifacts.",
      "Created graybox levels to validate gameplay structure and design.",
      "Managed JSON level data for stability and content scalability.",
      "Resolved client related UI bugs and integration issues"
    ],
    skills: [ "Unity", "C#", "Docker", "Claude AI" ],
    images: ["images/projects/panic1.png", "images/projects/panic2.png"],
    videos: [],
    links: [
      { label: "App Store", url: "https://apps.apple.com/au/app/puzzle-panic/id6737629725" }
    ]
  },
  {
    name: "21-Cats(Changed to Pharaoh's Fortune 21)",
    company: "TinyRex Games",
    description: "A fast-paced, casual card game that puts a playful, feline twist on classic blackjack. Designed with a clean and accessible user experience, the game focuses entirely on the core mechanic of hitting 21 without busting.",
    responsibilities: [
      "Independently developed and maintained the mobile game, taking ownership of core gameplay systems and functionality.",
      "Developed and implemented a betting system to improve gameplay engagement.",
      "Led the migration from Unity to PhaserJS, including system conversion, asset integration, testing, and troubleshooting.",
      "Managed releases across Google Play, the App Store, and Skillz, including platform-specific builds and testing."
    ],
    skills: [ "Unity", "C#", "PhaserJS", "JavaScript", "TypeScript", "Skillz" ],
    images: ["images/projects/cats1.png"],
    videos: [],
    links: [
      { label: "Website", url: "https://www.tinyrexgames.com/pharaohs-fortune-1" } 
    ]
  },
  {
    name: "Vegas Slots Cherry Master",
    company: "Tapslots",
    description: "A free-to-play social casino game featuring classic 3-reel fruit machines and modern 5-reel video slots. It offers hourly and daily coin rewards, jigsaw puzzles, and Sun Prizes with free coins to keep players spinning.",
    responsibilities: [
      "Developed several features and systems using the C#, Go, Unity, PlayFab, Nakama, and AWS.",
      "Developed a responsive UI to ensure compatibility and proper display across different screen devices.",
      "Developed a math validator to ensure accurate calculations within the game.",
      "Developed a daily bonus wheel to reward players upon logging into the game."
    ],
    skills: [ "Unity", "C#", , "Go", "Nakama", "Docker", "Jenkins" ],
    images: ["images/projects/vegas1.png"],
    videos: [],
    links: [
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.tapslots.sevenkings&hl=en&gl=US" },
      { label: "App Store", url: "https://apps.apple.com/us/app/vegas-cherry-slots/id1216578109" }
    ]
  },
  {
    name: "Tiles of Fortune (Legacy Project)",
    company: "Innplay Labs",
    description: "A mobile blast-and-raid adventure game that combines color-matching puzzles with village building, treasure collecting, and PvP raiding. Features include Auto-Play, reward-granting Game Cards, and shields to protect villages from attacks.",
    responsibilities: [
      "Assisting technical artists and other developers with integration of existing features, particularly ones that were mentioned in the Animals & Coins Adventure Game project. "
    ],
    skills: [ "Unity", "C#", "Go", "PlayFab", "Nakama", "Docker", "AWS", "Unity Cloud Build" ],
    images: ["images/projects/tiles1.png", "images/projects/tiles2.png"],
    videos: [],
     links: [
      { label: "youtube", url: "https://www.youtube.com/watch?v=bwuSFdTDCpA" }
    ]
  },
  {
    name: "Animals & Coins Adventure Game",
    company: "Innplay Labs",
    description: "A social mobile game with over 10 million downloads, featuring treasure island building, platform bridging, base raiding, animal card collection, and reward-driven minigames.",
    responsibilities: [
      "Developed several features and systems using the C#, Go, Unity, PlayFab, Nakama, and AWS.",
      "Developed and maintained a Game Booster system designed to increase user engagement and retention.",
      "Refactored portions of the existing Unity codebase to improve reusability and enable seamless integration across different features and games.",
      "Designed and implemented intuitive UI elements, including in-game menus, HUD, and pop-up notifications.",
      "Migrated the Island Level System from PlayFab to Nakama to support high-value numeric data, including values in the billions, while improving integration flexibility and reliability.",
      "Optimized the game's network system to resolve disconnection issues and implement reliable player reconnection functionality."
    ],
    skills: [ "Unity", "C#", "Go", "PlayFab", "Nakama", "Docker", "AWS", "Unity Cloud Build" ],
    images: ["images/projects/animals1.png", "images/projects/animals2.png"],
    videos: [],
    links: [
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.innplaylabs.animalkingdomraid&hl=en" },
      { label: "App Store", url: "https://apps.apple.com/il/app/animals-coins-adventure-game/id1492722342" }
    ]
  },
  {
    name: "Scribe",
    company: "Apex Mobiletech",
    description: "A Unity-powered property visualization application for professionals, featuring interactive 2D/3D building layouts, real-time digital twins, automated zoning, and area calculations compliant with international measurement standards.",
    responsibilities: [
      "Developed and maintained various features and systems for the architectural visualization software, enhancing functionality, usability, and overall application performance.",
      "Implemented a Notes feature allowing users to annotate architectural drawings and sketches.",
      "Developed a Notes Disclaimer system to provide additional documentation when exporting sketches.",
      "Streamlined user settings by removing unnecessary options and improving usability.",
      "Implemented and designed a tooltip system to improve feature discoverability and support future features."
    ],
    skills: [ "Unity", "C#" ],
    images: ["images/projects/scribe1.png", "images/projects/scribe2.png"],
    videos: [],
    links: [
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.apex.Scribe&hl=en_US" },
      { label: "App Store", url: "https://apps.apple.com/ph/app/scribe-sketch/id15121136072" }
    ]
  },
  {
    name: "Immortal Ranker(Cancelled game project)",
    company: "Game Revolution Technologies",
    description: "A 3D mobile fighting game",
    responsibilities: [
      "Developed core gameplay systems for a fighting game.",
      "Developed and maintained PvP networking systems using Unity and Mirror.",
      "Optimized player controls and input handling to improve responsiveness and overall gameplay feel."
    ],
    skills: [ "Unity", "C#", "Unity Cloud Build" ],
    images: [],
    videos: [],
    links: []
  },
  {
    name: "Untitled Game Projects",
    company: "Freelance",
    description: "Contributed to the development of multiple game projects under non-disclosure agreements.",
    responsibilities: [
      "Developed custom gameplay features across multiple Unity projects.",
      "Implemented multiplayer systems using Nakama and PlayFab.",
      "Built backend services, APIs, and server-side functionality with AWS and Go.",
      "Integrated and adapted systems to meet project-specific requirements."
    ],
    skills: [ "Unity", "C#", "Go", "PlayFab", "Nakama", "Docker", "AWS", "Unity Cloud Build" ],
    images: [],
    videos: [],
    links: []
  }
];
