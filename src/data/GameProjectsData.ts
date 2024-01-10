import ProjectData from '@/data/ProjectData';
import ProjectDataCollection from '@/data/ProjectDataCollection';

export default new ProjectDataCollection([

  new ProjectData(
    "project-0",
    "Committy",
    "img/projects/committy.png",
    `
    <div class="paragraph">
      <strong>Committy</strong> is a live service travesty of a card game, implemented using Node.js,
      produced for the <a href="https://itch.io/jam/sbigjam2023" target="_blank"><em>'So Bad It's Good' Jam 2023</em></a> (August 2023).
      <br/>The theme for the jam this year was <cite>Every Suggestion Combined</cite>,
      so I decided to take the theme in a completely tangental direction,
      by creating a simple card game intended to be the <i>sum of everyone's suggestions</i> in card game form.
      In other words - every single card is a user contribution, and the interactions between them are determined via precedent,
      whilst going for an overall feeling of being 'designed by committee' (hence the name).
    </div>

    <div class="paragraph">
      <div class="notice notice-container">
        <div class="notice-text-square">
          <cite>Committy</cite> is playable via browser, on <a href="https://committy.glitch.me" target="_blank">glitch.me</a>.<br/>
          Source code is available on <a href="https://github.com/11BelowStudio/sbig2023-committy" target="_blank">GitHub</a>.<br/>
          The jam submission page for <cite>Committy</cite> can be seen <a href="https://itch.io/jam/sbigjam2023/rate/2204456" target="_blank">here</a>.
        </div>
        <div class="notice-itch-square">
          <iframe frameborder="0" src="https://itch.io/embed/2204456?linkback=true&amp;dark=true" width="100%" height="167">
            <a href="https://11belowstudio.itch.io/committy" target="_blank">Committy! by 11BelowStudio</a>
          </iframe>
        </div>
      </div>
    </div>

    <div class="paragraph">
      Main features:
      <ul class="features-list">
        <li>Live service using a persistent database</li>
        <li>Has an API</li>
        <li>Input sanitization and prepared statements to prevent SQL injection attacks etc</li>
      </ul>
    </div>

    <div class="paragraph center">
      <img class="pc-screenshot" src="/img/projects/committy/committy-1.png" alt="The landing page for Committy" />
      <img class="pc-screenshot" src="/img/projects/committy/committy-2.png" alt="Behold! A Card!" />
      <img class="pc-screenshot" style="max-height:300px;max-width:min(100%,400px);width:auto;" src="/img/projects/committy/committy-3.png" alt="The creation process of a new card" />
      <img class="pc-screenshot" src="/img/projects/committy/committy-4.png" alt="An example of a single game of Committy" />
    </div>

    <div class="paragraph">
      <cite>Committy</cite> had a mildly eventful development cycle. Due to family reasons (omitted here),
      I knew that I wouldn't have as much time to work on the game as I would have wanted, so I had to keep the scope
      somewhat restrained (leading to the tangental interpretation of <cite>Every Suggestion Combined</cite>,
      in the form of a game which would appear to have been 'designed by committee' - hence the name).
      <br/>The core ideas of 'user-created cards', 'players must select the objectively superior card',
      and 'a third party must be the ultimate arbitrator of what qualifies as "objectively superior"'
      came rather quickly afterwards.
      <br/>I initially considered trying to make this game as a purely physical card game
      - mostly motivated by time constraints, but also due to the potential physical comedy of an ever-increasing
      physical deck of cards one would have to keep using and adding to - but practicality
      (and the greater potential comedy from having one deck that everyone contributes to) led to the present implementation.
    </div>

    <div class="paragraph">
      Overall, I'm rather unsatisfied with the final state of <cite>Committy</cite>.
      Several planned features (such as online multiplayer) ended up on the cutting room floor (time constraints),
      the intended feeling of being 'designed by committee' was not fully realized,
      and the overall concept was rather mediocre overall.
      Sure, it was my first ever attempt at using Node.js, and it did have a <i>very</i> rushed development cycle,
      so it could have gone worse - but it could have gone much better.
    </div>
    `,
    "#2A3C37",
    false,
    false,
    ["Node.js","JavaScript","browser","HTML","game jam"]
  ),

  new ProjectData(
    "project-1",
    "CrabFight (CLAWS)",
    "img/projects/crabfight-icon.png",
    `
    <div class="paragraph">
      <strong>CrabFight</strong> is a cross-platform online multiplayer crab simulator for Windows, Linux, and Android (developed using Unity).
      Players play as crabs within real photogrammetry environments from the
      <a href="https://www.eastern-ifca.gov.uk/cromer-shoal-chalk-beds-mcz/" target="_blank">Cromer Shoal Chalk Beds Marine Conservation Zone</a>,
      and simply need to survive.
      <br/>
      <cite>CrabFight</cite> was originally developed as my MSc thesis project, but I have been employed to develop it further for Natural England,
      under the title of <strong>CLAWS</strong> - which has been successfully
      demonstrated to the general public at <a href="https://twitter.com/NENorfolkSufflk/status/1626503567224844288" target="_blank">several</a> 
      <a href="https://www.linkedin.com/feed/update/urn:li:activity:7076120167096672256/" target="_blank">public</a> 
      <a href="https://www.linkedin.com/feed/update/urn:li:activity:7114586412238135296/" target="_blank">events</a>.
    </div>

    <div class="paragraph">
      <div class="notice notice-container">
        <div class="notice-text-square">
          <cite>CrabFight</cite> is available on <a href="https://11belowstudio.itch.io/crabfight" target="_blank">itch.io</a>,
          for Windows, Linux, and Android.<br/>
          Peer-to-peer cross-platform multiplayer support.<br/>
          Alternatively, keep an eye on <a href="https://twitter.com/NENorfolkSufflk/status/1705870869996740726" target="_blank">Natural England's social media</a>
          for any future public events where you can play <strong>CLAWS</strong> with other people IRL!
        </div>
        <div class="notice-itch-square">
          <iframe frameborder="0" src="https://itch.io/embed/1626182?dark=true" width="100%" height="167">
          <a href="https://11belowstudio.itch.io/crabfight" target="_blank">CrabFight by 11BelowStudio</a>
          </iframe>
        </div>
      </div>
    </div>

    <div class="paragraph">
      Main features:
      <ul class="features-list">
        <li>Fully-functional cross-platform peer-to-peer multiplayer (usable in a LAN or across the wider internet)</li>
        <li>Uses Unity Gaming Services (Relay, Lobby, Remote Config) for user-friendly matchmaking, update notifications, and hotfix capabilities!</li>
        <li>Can record data about gameplay sessions (whilst avoiding any personal data) for <em>SCIENCE</em> purposes!</li>
      </ul>
    </div>

    <div class="paragraph center">
      <img class="pc-screenshot pc-screenshot-third" src="img/projects/crabfight/crabfight-1.png" alt="" />
      <img class="pc-screenshot pc-screenshot-third" src="img/projects/crabfight/crabfight-2.png" alt="" />
      <img class="pc-screenshot pc-screenshot-third" src="img/projects/crabfight/crabfight-3.png" alt="" />
      <img class="pc-screenshot pc-screenshot-third" src="img/projects/crabfight/crabfight-4.png" alt="" />
      <img class="pc-screenshot pc-screenshot-third" src="img/projects/crabfight/crabfight-5.png" alt="" />
      <img class="pc-screenshot pc-screenshot-third" src="img/projects/crabfight/crabfight-6.png" alt="" />
    </div>

    <div class="paragraph">
      This project was a continuation of an existing partnership between Natural England and the University of Essex regarding ongoing
      conservation efforts in the <a href="https://publications.naturalengland.org.uk/publication/4884193307000832" target="_blank">Cromer Shoal MCZ</a>,
      and as part of that work, some photogrammetry models of the Cromer Shoal sea floor were produced. Then, in late 2021 (during my MSc),
      one of the possible dissertation projects was to create a game (using said models) which can be used to evaluate the impacts of environment complexity
      on marine wildlife - which sounded interesting and doable
      (given my prior <a href="https://11belowstudio.itch.io/inconvenient-space-rocks-2" target="_blank">dabbling into multiplayer development</a>) - 
      which lead to this game being made (simulating the local wildlife in their native habitat).
      <br/>
      <cite>CrabFight</cite> is a fully-functional multiplayer game, and is capable of recording data from gameplay sessions about where players were going,
      the current status of their crabs, what the crabs were doing, etc. within json files (without storing any personal data, for GDPR compliance),
      however, during the timeframe of the MSc thesis project, I didn't have an opportunity to proceed to the 'data analysis' phase.
      In spite of this, the stakeholders were still very pleased with the game (for use as a game),
      hence why they employed me to enhance it for them
      for use at public events, as a means of driving public interest in their wider conservation efforts.<br/>
      They have also been provided with handover documentation, to allow them to run the game at events themselves,
      and I still remain in contact with them for post-launch updates in response to visitor feedback from these events.
    </div>
    `,
    "#DA4A43",
    false,
    false,
    ["Unity","C#","PC","mobile","multiplayer"]
  ),

  new ProjectData(
    "project-2",
    "CrabFind",
    "img/projects/crabfind-icon.png",
    `
    <div class="paragraph">
      <strong>CrabFind</strong> is a cross-platform multiplayer edutainment game for Windows, Linux, and Android (developed in Unity).
      I was contracted to develop this game for Manx National Heritage in June 2023,
      following a prior partnership between them and the University of Essex involving the
      <a href="https://www.bbc.co.uk/news/world-europe-isle-of-man-64075947" target="_blank">digital preservation of the wreckage of the HMS Racehorse</a>.
      I was tasked with adapting <cite>CrabFight</cite> into a more digital archaeology-based experience, for use at a public event,
      with an experience focused on digital archaeology/edutainment - albeit with a very short time window in which to develop it.<br/>
      However, the feedback recieved about the deliverable was <a href="https://twitter.com/manxnature/status/1683552915808563200" target="_blank">positive</a>.
    </div>

    <div class="paragraph">
      Main features:
      <ul class="features-list">
        <li>Designed from the ground up with exhibition usage in mind.</li>
        <li>Has edutainment elements without devolving into mindless tedium.</li>
        <li>Cross-platform multiplayer</li>
      </ul>
    </div>

    <div class="paragraph center">
      <img class="pc-screenshot pc-screenshot-third" src="img/projects/crabfind/CrabFind-1.png" alt="Klutzy says hello to Pinchy" />
      <img class="pc-screenshot pc-screenshot-third" src="img/projects/crabfind/CrabFind-2.png" alt="I wonder what these cryptic clues are talking about..." />
      <img class="pc-screenshot pc-screenshot-third" src="img/projects/crabfind/CrabFind-3.png" alt="Pinchy is approaching something" />
      <img class="pc-screenshot pc-screenshot-third" src="img/projects/crabfind/CrabFind-4.png" alt="And the answer was..." />
      <img class="pc-screenshot pc-screenshot-third" src="img/projects/crabfind/CrabFind-5.png" alt="A screenshot of the between rounds scoreboard" />
      <img class="pc-screenshot pc-screenshot-third" src="img/projects/crabfind/CrabFind-6.png" alt="Klutzy found the answer (different round)" />
    </div>

    <div class="paragraph">
      The high-level gameplay structure of <cite>CrabFind</cite> was somewhat inspired by that of <cite>Jackbox</cite>/<cite>Kahoot</cite>,
      using prompts shown to all players on a host machine to guide gameplay on client machines.
      At an abstract level, players are given three clues (one at a time), displayed on the screen of the host PC,
      and need to find the appropriate artefact (from the HMS Racehorse) in the wreckage. The fewer clues it took for one to find the answer,
      the more points one is awarded upon reaching the answer (with a bonus point for finding it first).
      After time runs out, the answer is shown to all players (followed by the updated scoreboard).
      This repeats for a few rounds, and whichever player has the most points at the end wins.
    </div>

    <div class="paragraph">
      The development process of this game was rather challenging.<br/>
      The <a href="https://sketchfab.com/manxnationalheritage/collections/hms-racehorse-7f30172af79c46f78a55c5de63231e82" target="_blank">models</a>
      <a href="https://sketchfab.com/3d-models/citrine-81d7d6f8a22d4bbd83447e6149a8e4ef" target="_blank">which</a>
      I had to use for the gameplay weren't entirely ideal for creating a game (especially a mobile-playable game) -
      which lead to me learning how to use Blender in order to fill in the holes, optimize the meshes,
      and make them more traversable without completely mangling the meshes beyond all recognition.<br/>
      For the artefacts - I was granted permission to use the
      <a href="https://www.imuseum.im/hms-racehorse/" target="_blank">Isle of Man Museum collection</a> - however,
      these are all 2D photographs. In order to make them work in the 3D environments,
      I opted to improvise by using billboarding - which also helped to make them stand out in the environments.<br/>
      Finally, the overarching development cycle - Whilst I did have <cite>CrabFight</cite>
      as a basis (meaning that I didn't need to rewrite the whole main menu and backend-y multiplayer management components),
      I still had a very limited amount of time in which to design the game (whilst ensuring that the stakeholders
      approved of the design), sort out the assets, and develop the game.
    </div>
    `,
    "#cf142b",
    false,
    false,
    ["Unity","C#","PC","mobile","multiplayer","edutainment"]
  ),

  new ProjectData(
    "project-3",
    "One Unspecified Period Of Time At Kevin's",
    "img/projects/kevin-icon.png",
    `
    <div class="paragraph">
      <strong>One Unspecified Period Of Time At Kevin's Contrived Plot Device Of A Tortoise Sanctuary (Very Scary!)</strong>
      is an immersive survival horror game/fnaf clone, created in Unity, for PC.<br/>
      This Gesamtkunstwerk was made for the <a href="https://itch.io/jam/sbigjam2022" target="_blank"><em>'So Bad It's Good' Jam 2022</em></a> (August 2022)
      - the theme of which being <em>"Shh! The tortoise might hear!"</em> - naturally leading to the development of this masterpiece
      in which you need to save Kevin's pet tortoise from being woken up by the other tortoises in his contrived plot device of a Tortoise Sanctuary.
      Somehow, <a href="https://itch.io/jam/sbigjam2022/rate/1653073" target="_blank">this entry</a> came in 9th place overall, and 1st in the 'modifier' category.
    </div>

    <div class="paragraph">
      <div class="notice notice-container">
        <div class="notice-text-square">
          <cite>One Unspecified Period Of Time At Kevin's</cite> is available on <a href="https://11belowstudio.itch.io/one-unspecified-period-of-time-at-kevins" target="_blank">itch.io</a>.<br/>
          It can be played via browser on PC, or downloaded for Windows.<br/>
          Source code is available on <a href="https://github.com/11BelowStudio/SBIG2022" target="_blank">Github</a>.
        </div>
        <div class="notice-itch-square">
          <iframe frameborder="0" src="https://itch.io/embed/1653073?linkback=true&amp;bg_color=222222&amp;fg_color=eeeeee&amp;border_color=363636" width="100%" height="167">
          <a href="https://11belowstudio.itch.io/one-unspecified-period-of-time-at-kevins" target="_blank">One Unspecified Period Of Time At Kevin's Contrived Plot Device Of A Tortoise Sanctuary (Very Scary!) by 11BelowStudio</a>
          </iframe>
        </div>
      </div>
    </div>

    <div class="paragraph">
      Main features:
      <ul class="features-list">
        <li>Live camera feeds of totally legit tortoises in a totally sensible tortoise-shaped tortoise sanctuary for a totally realistic gameplay experience!</li>
        <li>Cohesive gameplay mechanics, dynamics, and aesthetics to leave the player feeling positively bewildered and panicking - 
        <strong>without</strong> resorting to jumpscares! (not a fan of them myself)</li>
        <li>Uses keyboard and mouse controls for immersive tactile gameplay sensations -
        from the satisfying feeling of slamming the space bar to slam the door in someone's face,
        to blind panic of fumbling around with your mouse to find and hit the mute button on the World's Worst Mixtape before it starts playing.</li>
      </ul>
    </div>

    <div class="paragraph center">
      <img class="pc-screenshot" src="img/projects/kevin-tortoise/kevin-1.png" alt="Looking outside your office, totally nothing wrong here." />
      <img class="pc-screenshot" src="img/projects/kevin-tortoise/kevin-2.png" alt="Oh hello there Tortelvis and Esiotrot, how are you doing?" />
      <img class="pc-screenshot" src="img/projects/kevin-tortoise/kevin-3.png" alt="ok cool you can shut up now percival" />
      <img class="pc-screenshot" src="img/projects/kevin-tortoise/kevin-4.png" alt="There is nothing sinister going on behind the scenes here :)" />
    </div>
    
    <div class="paragraph">
      I had two main design goals in mind for this game. The first was to make the player panic. The second was to make the experience feel
      amusingly scuffed (befitting the <i>So Bad It's Good</i> nature of the game jam).
    </div>
    
    <div class="paragraph">
      The core power/"asleepn'tness" systems of <cite>Kevin's</cite> were heavily inspired by the power/exposure systems of
      <cite>One Night At Flumpty's 2</cite> (instead of the traditional 'fixed amount of power, instant loss when enemy arrives' system
      used in most FNAF-style games). This lose condition felt more in line with the game scenario (not waking up Kevin's pet tortoise),
      and the recharging camera power was easier to balance, whilst demanding near-constant player attention.
    </div>

    <div class="paragraph">
      The first thing I designed was actually the layout of the building - in the shape of a very crudely-drawn tortoise - for the latter design goal.
      I then started thinking about possible routes which enemies could take through the building to the player - culminating in the behaviours of the four main enemies
      (all but one of which being incredibly contrived 'tortoises', for lore reasons).
      Each of the enemies have different paths to the player's location (one takes the same route every time, one has a route that gradually shortens,
      one takes a randomly-selected route, and one has a very short route but can be moved back if stared at enough), and fill up "asleepn'tness" at differing rates,
      requiring the player to prioritize which threats to respond to.<br/>
      Of course, the player could opt to just leave the door to the office closed all the time, and remain safe - which is why there are two mechanics to prevent this.
      The first one is in the form of a recurring character from my previous <i>So Bad It's Good Jam</i> entries, whom decided to be "helpful" by providing
      an auto-playing CD player full of utterly horrible tortoise lullabies, forcing the player to turn around and mute it regularly (leaving the door ajar) before it can disturb the tortoise.
      The second was added later on - in the form of s̷̯̾o̷͚͋m̴͉̿ȩ̵̾t̷̛͇h̸̡̾i̸̢͆n̴̹̓ģ̸͛ utterly unnatural, whom only moves whilst the door is held closed, and tends to aggravate the other tortoises
      (and makes the CD player unmute itself faster) whenever it moves - leading to Consequences for those whom try to cower behind the door all the time.
    </div>

    <div class="paragraph">
      One flaw with the game is that the comedic value of it is mostly derived from the absurd situation the player finds themselves in - which, once the player
      gets over it, immediately becomes mundane. As a game jam game, this arguably isn't a massive problem, but it does severely hinder replayability.
    </div>
    `,
    "#3d6933",
    false,
    false,
    ["Unity","C#","PC","horror","game jam","browser"]
  ),

  new ProjectData(
    "project-4",
    "A Scientific Interpretation of Daily Life in the Space Towing Industry (Circa 3052 CE)",
    "img/projects/spacetow-icon.gif",
    `
    <div class="paragraph">
      <strong>A Scientific Interpretation of Daily Life in the Space Towing Industry (Circa 3052 CE)</strong> is a relatively simple
      <cite>Thrust</cite> clone, written in Java, using my own home-made <strong>CRAPPY</strong>
      <em>(<b>C</b>ool, <b>R</b>ealism-<b>A</b>djacent <b>P</b>hysics <b>P</b>ackage, <b>Y</b>'know?)</em>
      2D physics engine. This game (and engine) was created during winter 2021/22 as my assignment project
      for the <i>Physics-Based Games</i> module during my MSc (earning a mark of 91%).
    </div>

    <div class="paragraph">
      <div class="notice notice-container">
        <div class="notice-text-square">
          <cite>SpaceTow</cite> is available on <a href="https://11belowstudio.itch.io/spacetow" target="_blank">itch.io</a>.<br/>
          Available as an .exe for Windows, or as a .jar (requires Java 8 or later).<br/>
          Source code (including <cite>CRAPPY</cite>) is available on <a href="https://github.com/11BelowStudio/ce812" target="_blank">Github</a>.
        </div>
        <div class="notice-itch-square">
          <iframe frameborder="0" src="https://itch.io/embed/1715087?linkback=true&amp;dark=true" width="100%" height="167">
          <a href="https://11belowstudio.itch.io/spacetow" target="_blank">A Scientific Interpretation of Daily Life in the Space Towing Industry (Circa 3052 CE) by 11BelowStudio</a>
          </iframe>
        </div>
      </div>
    </div>

    <div class="paragraph">
      Main features:
      <ul class="features-list">
        <li>Physics engine using double-precision floating point (instead of single-precision) maths along with configurable gravity and euler substeps for bonus realism-adjacency!</li>
        <li>Circle/line/edge/polygon colliders, rigidbodies of the static/dynamic/kinematic variety, quadtrees, elastic connectors, collision notifications...</li>
        <li>Put yourself at the mercy of the laws of physics as they disagree with your spaceship's comedically-misaligned centre of gravity and towing point!</li>
        <li>Is it just me, or is the gravity thingamajig on the fritz again...</li>
      <ul>
    </div>

    <div class="paragraph center">
      <img class="pc-screenshot" src="/img/projects/spacetow-icon.gif" alt="Ordinary physics moment" />
    </div>

    <div class="paragraph">
      Is <em>CRAPPY</em> a physics engine which one should seriously consider using? To be completely honest - probably not.
      However, creating <em>CRAPPY</em> (along with this game) has helped me to gain a greater understanding of the
      theory and practice behind how physics engines work - along with some practical understanding of some of the mistakes to avoid when making them.
    </div>
    `,
    "#09162A",
    false,
    false,
    ["Java","custom engine","PC"]
  )
/*
  new ProjectData(
    "ex_project-1", 
    "Optimistic Chubby", 
    "img/projects/project-1-icon.png", 
    `
    <div class="paragraph">
    <strong>Optimistic Chubby</strong> is a thing of beauty that I am so proud of. It's available on Android because why not.
    <br/>Image by <a href="https://www.pexels.com/fr-fr/@knownasovan" target="_blank">OVAN</a>.
    </div>
    <div class="paragraph center">
      <iframe class="youtube" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph center">
      <a href="https://play.google.com/store/apps/details?id=some.playstore.thing" target="_blank"><img src="img/projects/play-store-logo.png" alt="Play Store badge" /></a>
    </div>

    <div class="paragraph">
      Main features :
      <ul>
      <li>Some stuff</li>
      <li>Some great stuff</li>
      <li>More awesome stuff</li>
      <li>And then some</li>
      </ul>
    </div>

    <div class="paragraph center">
      <img class="phone-screenshot" src="https://fakeimg.pl/300x534/" alt="Optimistic Chubby Screenshot" />
      <img class="phone-screenshot" src="https://fakeimg.pl/300x534/" alt="Optimistic Chubby Screenshot" />
    </div>
    `,
    "#23bd69",
    true
  ),
  new ProjectData(
    "ex_project-2",
    "Singing Addict",
    "img/projects/project-2-icon.png",
    `
    <div class="paragraph">
      <strong>Optimistic Chubby Blog</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
      <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@adonyi-gabor-604571">Adonyi Gábor</a>.
    </div>
    <div class="paragraph center">
      <iframe class="youtube" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
      Main features :
      <ul>
        <li>Some stuff</li>
        <li>Some great stuff</li>
        <li>More awesome stuff</li>
        <li>And then some</li>
      </ul>
    </div>

    <div class="paragraph">
    <div class="notice">
      Windows build available on <a href="https://some.where/nice" target="_blank">itch.io</a>.
      Source code is available on <a href="https://github.com/yourself" target="_blank">GitHub</a>.
    </div>
    </div>

    <div class="paragraph center">
    <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Singing Addict Screenshot" />
    <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Singing Addict Screenshot" />
    <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Singing Addict Screenshot" />
    <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Singing Addict Screenshot" />
    </div>
    `,
    "#5a78af"
  ),
  new ProjectData(
    "ex_project-3",
    "Drawing Overload",
    "img/projects/project-3-icon.png",
    `
    <div class="paragraph">
      <strong>Drawing Overload</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
      <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@miphotography">Miesha Maiden</a>.
    </div>
    <div class="paragraph center">
      <iframe class="youtube" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
      Main features :
      <ul>
        <li>Some stuff</li>
        <li>Some great stuff</li>
        <li>More awesome stuff</li>
        <li>And then some</li>
      </ul>
    </div>

    <div class="paragraph">
      <div class="notice">
      Playable in the browser (WebGL) on <a href="https://some.where/nice" target="_blank">itch.io</a>.
      Source code is available on <a href="https://github.com/yourself" target="_blank">GitHub</a>.
      </div>
    </div>

    <div class="paragraph center">
      <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drawing Overload Screenshot" />
      <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drawing Overload Screenshot" />
      <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drawing Overload Screenshot" />
      <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drawing Overload Screenshot" />
    </div>
    `,
    "#383838"
  ),
  new ProjectData(
    "ex_project-4",
    "Eugeneable",
    "img/projects/project-4-icon.png",
    `
    <div class="paragraph">
      <strong>Eugeneable</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
      <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@neo8iam">NEOSiAM 2020</a>.
    </div>
    
    <div class="paragraph">
      Main features :
      <ul>
        <li>Some stuff</li>
        <li>Some great stuff</li>
        <li>More awesome stuff</li>
        <li>And then some</li>
      </ul>
    </div>

    <div class="paragraph">
      <div class="notice">
        Windows build available on <a href="https://some.where/nice" target="_blank">itch.io</a>.
      </div>
    </div>

    <div class="paragraph center">
      <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Eugeneable Screenshot" />
      <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Eugeneable Screenshot" />
    </div>
    `,
    "#e80fb7"
    ),
  new ProjectData(
    "ex_project-5",
    "Cloud Drew Land",
    "img/projects/project-5-icon.png",
    `
    <div class="paragraph">
      <strong>Cloud Drew Land</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
      <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@cottonbro">cottonbro</a>.
    </div>
    
    <div class="paragraph">
      Main features :
      <ul>
        <li>Some stuff</li>
        <li>Some great stuff</li>
        <li>More awesome stuff</li>
        <li>And then some</li>
      </ul>
    </div>

    <div class="paragraph">
      <div class="notice">
        Windows build available on <a href="https://some.where/nice" target="_blank">itch.io</a>.
        Source code available on <a href="https://github.com/yourself" target="_blank">GitHub</a>.
      </div>
    </div>

    <div class="paragraph center">
      <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Cloud Drew Land Screenshot" />
      <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Cloud Drew Land Screenshot" />
      <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Cloud Drew Land Screenshot" />
    </div>`
    ,
    "#e48246"
  )
  */
]);