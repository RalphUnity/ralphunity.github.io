/**
 * Your projects. Each project is one { ... } block; copy one to add another.
 * They show on the page in the order listed here.
 *
 *   name        - project title
 *   description - one or two sentences about the project (optional)
 *   tasks       - what you did on the project, one bullet per line
 *   images      - image paths, e.g. "images/projects/my-game-1.png"
 *   videos      - .mp4 paths like "images/projects/demo.mp4",
 *                 or YouTube links like "https://www.youtube.com/watch?v=XXXXXXXXXXX"
 *
 * Put your image and video files in the images/projects/ folder.
 */
window.PROJECTS = [
  {
    name: "Puzzle Panic",
    description: "A 3D arcade puzzle and Match-3 mobile game set in the anime-inspired DigiDaigaku universe, featuring thousands of levels, powerful boosters, explosive combos, collectible trading, and boss battles. Soft-launched in Australia, New Zealand, and Singapore for testing and player feedback.",
    tasks: [
      "Developed game levels using proprietary internal tools and systems.",
      "Developed a tool to automate animation extraction from multiple FBX files, leveraging Claude AI to accelerate development.",
      "Implemented VFX and scene logic using Unity Timeline.",
      "Optimized render textures, VFX, and shaders for mobile performance.",
      "Optimized animation compression to reduce build size while preserving animation quality and minimizing clipping artifacts.",
      "Created graybox levels to validate gameplay structure and design.",
      "Managed JSON level data for stability and content scalability.",
      "Resolved client related UI bugs and integration issues"
    ],
    images: [],
    videos: []
  },
  {
    name: "21-Cats(Renamed to Pharaoh's Fortune 21)",
    description: "A fast-paced, casual card game that puts a playful, feline twist on classic blackjack. Designed with a clean and accessible user experience, the game focuses entirely on the core mechanic of hitting 21 without busting.",
    tasks: [
      "Independently developed and maintained the mobile game, taking ownership of core gameplay systems and functionality.",
      "Developed and implemented a betting system to improve gameplay engagement.",
      "Led the migration from Unity to PhaserJS, including system conversion, asset integration, testing, and troubleshooting.",
      "Managed releases across Google Play, the App Store, and Skillz, including platform-specific builds and testing."
    ],
    images: [],
    videos: []
  },
  {
    name: "Vegas Slots Cherry Master",
    description: "A free-to-play social casino game featuring classic 3-reel fruit machines and modern 5-reel video slots. It offers hourly and daily coin rewards, jigsaw puzzles, and Sun Prizes with free coins to keep players spinning.",
    tasks: [
      "Developed several features and systems using the C#, Go, Unity, PlayFab, Nakama, and AWS.",
      "Developed a responsive UI to ensure compatibility and proper display across different screen devices.",
      "Developed a math validator to ensure accurate calculations within the game.",
      "Developed a daily bonus wheel to reward players upon logging into the game."
    ],
    images: [],
    videos: []
  },
  {
    name: "Tiles of Fortune",
    description: "A mobile blast-and-raid adventure game that combines color-matching puzzles with village building, treasure collecting, and PvP raiding. Features include Auto-Play, reward-granting Game Cards, and shields to protect villages from attacks.",
    tasks: [
      "Assisting technical artists and other developers with integration of existing features, particularly ones that were mentioned in the Animals & Coins Adventure Game project. "
    ],
    images: [],
    videos: []
  },
  {
    name: "Animals & Coins Adventure Game",
    description: "A social mobile game with over 10 million downloads, featuring treasure island building, platform bridging, base raiding, animal card collection, and reward-driven minigames.",
    tasks: [
      "Developed several features and systems using the C#, Go, Unity, PlayFab, Nakama, and AWS.",
      "Developed and maintained a Game Booster system designed to increase user engagement and retention.",
      "Refactored portions of the existing Unity codebase to improve reusability and enable seamless integration across different features and games.",
      "Designed and implemented intuitive UI elements, including in-game menus, HUD, and pop-up notifications.",
      "Migrated the Island Level System from PlayFab to Nakama to support high-value numeric data, including values in the billions, while improving integration flexibility and reliability.",
      "Optimized the game's network system to resolve disconnection issues and implement reliable player reconnection functionality."
    ],
    images: [],
    videos: []
  },
  {
    name: "Scribe",
    description: "A Unity-powered property visualization application for professionals, featuring interactive 2D/3D building layouts, real-time digital twins, automated zoning, and area calculations compliant with international measurement standards.",
    tasks: [
      "Developed several features and system",
      "Implemented a Notes feature allowing users to annotate architectural drawings and sketches.",
      "Developed a Notes Disclaimer system to provide additional documentation when exporting sketches.",
      "Streamlined user settings by removing unnecessary options and improving usability.",
      "Implemented and designed a tooltip system to improve feature discoverability and support future features."
    ],
    images: [],
    videos: []
  }
];
