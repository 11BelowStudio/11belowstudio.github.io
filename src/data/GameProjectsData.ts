import ProjectData from '@/data/ProjectData'

export default [

  new ProjectData(
    "project-0",
    "Committy!",
    "img/projects/committy.png",
    `
    <div class="paragraph">
      <strong>Committy!</strong> is a live service travesty of a card game,
      produced for the <a href="https://itch.io/jam/sbigjam2023" target="_blank"><em>'So Bad It's Good' Jam 2023</em></a>.
      <br/>The theme for the jam this year was <cite>Every Suggestion Combined</cite>,
      so I decided to take the theme in a completely tangental direction,
      by creating a simple card game intended to be the <i>sum of everyone's suggestions</i> in card game form.
      In other words - every single card is a user contribution, and the interactions between them are determined via precedent.
    </div>

    <div class="paragraph">
      <div class="notice">
        Committy! is playable via browser, on <a href="https://committy.glitch.me" target="_blank">glitch.me</a>.
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
      <strong>Committy!</strong> had a mildly eventful development cycle. Due to family reasons (omitted here),
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

    </div>

    `,
    "#2A3C37",
    false,
    false,
    ["node.js","JavaScript","browser","html","game jam"]
  ),

  new ProjectData(
    "project-1", 
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
    "project-2",
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
    "project-3",
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
    "project-4",
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
    "project-5",
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