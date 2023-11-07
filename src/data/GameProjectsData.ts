import ProjectData from '@/data/ProjectData'

export default [

  new ProjectData(
    "project-0",
    "Committy",
    "img/projects/committy.png",
    `
    <div class="paragraph">
      <strong>Committy</strong> is a live service travesty of a card game,
      produced for the <a href="https://itch.io/jam/sbigjam2023" target="_blank"><em>'So Bad It's Good' Jam 2023</em></a>.
      <br/>The theme for the jam this year was <cite>Every Suggestion Combined</cite>,
      so I decided to take the theme in a completely tangental direction,
      by creating a simple card game intended to be the <i>sum of everyone's suggestions</i> in card game form.
      In other words - every single card is a user contribution, and the interactions between them are determined via precedent.
    </div>

    <div class="paragraph">
      <div class="notice">
        <cite>Committy</cite> is playable via browser, on <a href="https://committy.glitch.me" target="_blank">glitch.me</a>.
        Source code is available on <a href="https://github.com/11BelowStudio/sbig2023-committy" target="_blank">GitHub</a>.
      </div>
    </div>

    <div class="paragraph">
      Main features:
      <ul>
        <li>Live service using a persistent database!</li>
        <li>Has an API!</li>
        <li>Input sanitization and prepared statements to prevent SQL injection attacks etc</li>
      </ul>
    </div>

    <div class="paragraph">
      <cite>Committy</cite> had a mildly eventful development cycle. Due to family reasons (omitted here),
      I knew that I wouldn't have as much time to work on the game as I would have wanted, so I had to keep the scope
      somewhat restrained (leading to the tangental interpretation of <cite>Every Suggestion Combined</cite>,
      in the form of a game which would appear to have been 'designed by committee' - hence the name).
      <br/>The core ideas of 'user-created cards', 'players must select the objectively superior card',
      and 'a third party must be the ultimate arbitrator of what qualifies as "objectively superior"'
      came rather quickly afterwards.
      <br/>I initially considered trying to make this game as a purely physical game
      - mostly motivated by time constraints, but also due to the potential physical comedy of an ever-increasing
      physical deck of cards one would have to keep using and adding to - but practicality
      (and the greater potential comedy from having one deck that everyone contributes to) led to the present implementation.
    </div>

    <div class="paragraph">
      Whilst I'm overall unsatisfied with the final state of <cite>Committy</cite>
      (with plenty of features ending up on the cutting room floor),
      I think that it certainly could have gone worse,
      especially considering that it was my first attempt at using Node.js for anything,
      and I was developing it during a somewhat turbulent time.
    </div>
    `,
    "#2A3C37",
    false,
    false,
    ["node.js","JavaScript","browser","html","game jam"]
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
      and simply need to survive..
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
          <a href="https://11belowstudio.itch.io/crabfight" target="_blank">CrabFight by 11BelowStudio</a></iframe>
        </div>
      </div>
    </div>

    <div class="paragraph">
      Main features:
      <ul>
        <li>Fully-functional cross-platform peer-to-peer multiplayer (usable in a LAN or across the wider internet)</li>
        <li>Uses Unity Gaming Services (Relay, Lobby, Remote Config) for user-friendly matchmaking, update notifications, and hotfix capabilities!</li>
        <li>Can record data about gameplay sessions (whilst avoiding any personal data) for <em>SCIENCE</em> purposes!</li>
      </ul>
    </div>

    <div class="paragraph">
      Now, you may be asking 'why does this game exist and why was Natural England involved?'. Simple.<br/>
      Back in 2019/20, there was some work done by Natural England and the University of Essex regarding ongoing
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
    true,
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
      with an experience focused on digital archaeology/edutainment - albeit with a rather short time window in which to develop it.<br/>
      However, the feedback recieved about the deliverable was <a href="https://twitter.com/manxnature/status/1683552915808563200" target="_blank">positive</a>.
    </div>

    <div class="paragraph">
      Main features:
      <ul>
        <li>Designed from the ground up with exhibition usage in mind.</li>
        <li>Has edutainment elements without devolving into mindless tedium.</li>
        <li>Cross-platform multiplayer</li>
      </ul>
    </div>

    <div class="paragraph">
      The gameplay of <cite>CrabFind</cite> was somewhat inspired by that of <cite>Jackbox</cite>/<cite>Kahoot</cite>,
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
];