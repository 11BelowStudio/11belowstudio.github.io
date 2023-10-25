<template>
  <div>
    <h1>Résumé</h1>

    <div class="paragraph">

      I'm <strong>John Matrix</strong>, a former Delta Force operative with lots of experience, lots of training and huge muscles.
      <br />After graduating from kindergarten, I've been enrolled in the army for 25 years, where I learned to destroy things in an amazing number of ways.
      <br />I joined the Delta Force because I thought it was Greek lessons, but I quickly adapted to this unexpected environment and became a key element.
      <br />I love teamwork, but I can also go in solo depending on the mission requirements.
      <br />
      <br />Right now I'm trying to find inner peace after I've read some personal development books. I'm looking for a monk job so if you have any opportunity feel free to 
      <router-link to="/contact">contact me</router-link>.
      <br />
      <br />Besides war, I'm passionate about firearms, martial arts, explosions, push-ups and flowers.

      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="d/resume-en.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF 🇬🇧</a>
        <a class="download-link" href="d/cv-fr.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Télécharger en PDF 🇫🇷</a>
        <div style="clear:both"></div>
      </div>
    </div>
    <div class="photo">
      <img :src="`/img/resume-photo.png`" alt="Rachel" />
      <p>caption caption caption</p>
    </div>

    <div style="clear:both"></div>

    <div><a href="#Work">Work experience</a> * <a href="#Skills">Skills</a> * <a href="#Education">Education</a> * <a href="#Volunteering">Volunteering</a> * <a href="#Other">Other things</a></div>

    <div class="full-content">

      <h2 id="Work">Work experience</h2>

      <h3>Research Officer (Contract) - University of Essex<small><br><i>(Graduate game developer)</i></small></h3>
      <h4>June 2023 - July 2023</h4>

      <div>
        <p>
          Employed to design and implement a variant of <cite>CrabFight</cite>, focused towards more of an
          edutainment/digital archaeology-oriented experience, for the Isle of Man Museum - under
          the title of <cite>CrabFind</cite>.
          This game was successfully demonstrated at the Isle of Man Festival of the Sea,
          to positive feedback (see <a href="https://twitter.com/manxnature/status/1683552915808563200" target="_blank">[1]</a>
            <a href="https://twitter.com/MorrisLeigh/status/1679987276678397956" target="_blank">[2]</a>).
        </p>
        <p>
          - Cross-platform multiplayer game development (PC & Android).<br/>
          - Designing a game from the ground up explicitly for use at events, whilst satisfying other stakeholder requirements.<br/>
          - Successful implementation of the game within a very limited timeframe.
        </p>
      </div>

      <div class="tech-stack">Unity, C#, git, blender, multiplayer, multi-platform</div>

      <h3>Research Officer (Contract) - University of Essex<small><br><i>(Graduate game developer)</i></small></h3>
      <h4>March 2023 - April 2023</h4>

      <div>
        <p>
          Employed to continue working on <cite>CrabFight</cite> (the game I made for my MSc dissertation)
          for use by Natural England.
          The game, now rebranded as <cite>CLAWS</cite>, has successfully been demonstrated at
          several public events (see <a href="https://twitter.com/NENorfolkSufflk/status/1626503567224844288" target="_blank">[1]</a>
          <a href="https://www.gov.uk/government/news/lincolnshire-summer-fun-to-celebrate-kings-england-coast-path" target="_blank">[2]</a>
          <a href="https://www.linkedin.com/feed/update/urn:li:activity:7076120167096672256/" target="_blank">[3]</a>
          <a href="https://www.linkedin.com/feed/update/urn:li:activity:7114586412238135296/" target="_blank">[4]</a>).
        </p>
        <p>
          - Cross-platform multiplayer game development (PC & Android).<br/>
          - Autonomous working environment; handling project management, game design, and implementation by myself.<br/>
          - Active stakeholder engagement, ensuring that the deliverable met requirements.<br/>
          - Post-launch updates in response to guest feedback after events.<br/>
          - Successfully produced handover documentation, enabling stakeholders to use the game at events by themselves.
        </p>
      </div>

      <div class="tech-stack">Unity, C#, git, multiplayer, multi-platform</div>

      <!--
      <h2>Work experience</h2>

      <h3>Operation Classified - Delta Force</h3>
      <h4>2018-2019</h4>

      <div>It's classified so I can't speak about it.</div>

      <div class="tech-stack">Firearms, knives, grenades, Hummer vehicle, parachute,...</div>

      <h3>Operation Classified - Delta Force</h3>
      <h4>2015-2017</h4>

      <div>It's classified so I can't speak about it.</div>

      <div class="tech-stack">Even more Firearms, knives, grenades, Hummer vehicle, parachute,...</div>

      <h3>Operation Classified - Delta Force</h3>
      <h4>2012-2015</h4>

      <div>It's classified so I can't speak about it.</div>

      <div class="tech-stack">Firearms, knives, grenades, Hummer vehicle, parachute,...</div>
      -->

      <h2 id="Skills">Skills</h2>

      <div class="skill-set">
        <h3>Languages</h3>
        <div class="skill">C#</div>
        <div class="skill">Java</div>
      </div>

      <div class="skill-set">
        <h3>Game Development</h3>
        <div class="skill">Unity</div>
        <div class="skill">Audacity</div>
        <div class="skill">Blender</div>
      </div>

      <div class="skill-set">
        <h3>Tools</h3>
        <div class="skill">Git</div>
        <div class="skill">Visual Studio</div>
        <div class="skill">VS Code</div>
        <div class="skill">JetBrains IDEs</div>
      </div>

      <!--
      <div class="skill-set">
        <h3>Others</h3>
        <div class="skill">C#</div>
      </div>
      -->

      <!-- template placeholder moment
      <div class="skill-set">
        <h3>Lethal</h3>
        <SkillRate name="Handguns" :rate="5" />
        <SkillRate name="Rifles" :rate="5" />
        <SkillRate name="Shotguns" :rate="5" />
        <SkillRate name="Machineguns" :rate="5" />
        <SkillRate name="Missile launchers" :rate="5" />
        <SkillRate name="Knives" :rate="5" />
        <SkillRate name="Hand to hand combat" :rate="5" />
      </div>

      <div class="skill-set">
        <h3>Non-lethal</h3>
        <SkillRate name="Sneaking" :rate="1" />
        <SkillRate name="Negotiation" :rate="1" />
        <SkillRate name="Seduction" :rate="1" />
        <SkillRate name="Sense of humor" :rate="2" />
      </div>
      -->

      <div style="clear:both"> </div>

      <h2 id="Education">Education</h2>

      <h3>University of Essex - MSc Computer Games</h3>
      <h4>2021 - 2022</h4>
      <div>
        <p>
          Overall result: 84%. <b>Distinction.</b>
        </p>
        <div class="tech-stack">Game Artificial Intelligence (92%),
          Physics-Based Games (96%),
          Game Design (85%),
          Group Project (Incorporating a Game Jam) (81%),
          Mobile and Social Application Programming (76%),
          Professional Practice and Research Methodology (84%),
          Machine Learning (93%),
          Data Science and Decision Making (76%),
          MSc Project and Dissertation (82%).</div>
      </div>

      <h3>University of Essex - BSc Computer Games</h3>
      <h4>2018-2021</h4>
      <div>
        <p>
          Overall result: 89%. <b>First.</b><br/>
          - 3rd year result: 88%. Awarded the PlayLabz Prize and The British Computer Society Prize.<br/>
          - 2nd year result: 91%. Awarded the KF Bowden Memorial Prize, included on the Dean's List.<br/>
          - 1st year result: 87%. Awarded the O'Reilly Academic Prize, included on the Dean's List.
        </p>
      </div>

      <h2 id="Volunteering">Volunteering</h2>
      
      <h3>Digital Buddy - Staines Library</h3>
      <h4>January 2023 - present</h4>
      <div>
        <p>
          I provide weekly drop-in support sessions at my local library,
          helping people who are in need of assistance with computers to do
          whatever it is they're trying to do. This ranges from simple tasks
          (such as scanning/printing documents or browsing the internet) to
          some more complex tasks (such as navigating kafkaesque online bureaucracy,
          or recovering logins to seldom-used emails), and the occasional
          completely unexpected curveball.<br/>
          When solving these problems, I work through the solution with
          whoever it is I'm helping; this involvement not only ensures
          that I'm solving the specific issue they needed solving,
          but also teaches them how to solve the problem themselves - enhancing
          their digital skills, improving their confidence with technology,
          and empowering them with this knowledge.
        </p>
      </div>

      <h3>Student Representative - University of Essex</h3>
      <h4>January 2020 - September 2022</h4>

      <div>
         - Liasing between students and faculty, communicating concerns raised by students about the course.<br/>
         - Identifying root causes of problems, proposing solutions to said problems.<br/>
         - Negotiating in order to achieve the best possible resolution to situations.
      </div>

      <h3>Treasurer - University of Essex Game Development Society</h3>
      <h4>November 2019 - June 2020</h4>

      <div>
        - Working with other society executives to plan and run society events.<br/>
        - Responsibly managing the society budget, approving funds for events as necessary.<br/>
        - Successfully ran a couple of society game jam events.<br/>
      </div>

      <h2 id="Other">And another thing...</h2>

      <!-- template placeholder moment
      <h2>Languages</h2>

      <h3>American</h3>
      <div>Basic knowledge but I know lots of one-liners</div>

      <h3>That's it</h3>
      <div>Who needs another language when you speak American?</div>
      
      <h2>Besides...</h2>
      -->

      
      <div>
        <h3>I ❤️ Games</h3>
        <div>I have always enjoyed playing games (and have spent a pretty large amount of time playing them).<br/>
        Currently, I'd say my favourite games are <cite>GTFO</cite> and <cite>Deep Rock Galactic</cite> -
        I could go into an excessive amount of detail about which games I enjoy playing, but I'll spare you the infodump.<br/>
        I've also dabbled in creating custom maps for <cite>Counter-Strike</cite>, making mods for <cite>Payday 2</cite>,
        making charts for <cite>Trombone Champ</cite>, and contributing to several videogame wikis.
        </div>

        <h3>I 🧡 Games as an art form</h3>
        <div>Yes, I know, <i>toootally</i> controversial take, but I consider games as an art form,
        and I have a passion for designing and creating games as works of art.<br/>
      </div>

        <h3>I 💛 Politics</h3>
        <div>I hope I can have a career here someday but I might have temper issues.</div>

        <h3>I 💚 Flowers</h3>
        <div>Especially the big ones, with the trunk and leaves.</div>

        <h3>I 💙 placeholder</h3>

        <h3>I 💜 placeholder</h3>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SkillRate from "@/components/SkillRate.vue";


export default defineComponent({
  name: "ResumePage",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    SkillRate,
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.skill {
	float: left;
	border: 1px solid hsla(0,0%,86.3%,.44);
	padding: 2px 10px;
	margin: 5px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }
}
</style>