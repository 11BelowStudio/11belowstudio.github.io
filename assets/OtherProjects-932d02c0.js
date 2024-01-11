import{P as s,a as o,b as n}from"./ProjectData-9fb2dc66.js";import{f as r,_ as d,r as l,c,d as h,a as e,b as t,o as p}from"./index-228ebd07.js";const u=new s([new o("project-HECC-IT","HECC-IT (Hypertext Editing and Creation Code Integrated Toolkit)","img/projects/hecc-it.png",`
      <div class="paragraph">
        <strong>HECC-IT</strong> <i>(Hypertext Editing and Creation Code Integrated Toolkit)</i> is a hypertext game authoring tool
        for desktop, implemented in Java, producing browser-playable hypertext games (HTML/JS).
        This tool was developed between summer 2020 and spring 2021 for my undergraduate dissertation project.<br/>
        <strong>HECC-IT</strong> promotes flexible workflows by allowing users the freedom to choose between editing their works
        via the <i>OH-HECC</i> GUI, or directly editing their .hecc files in their text editor of choice.
      </div>

      <div class="paragraph">
        <div class="notice notice-container">
          <div class="notice-text-square">
            <i>HECC-IT</i> can be downloaded for PC from <a href="https://11belowstudio.itch.io/hecc-it" target="_blank">itch.io</a> (requires Java).<br/>
            Source code is available on <a href="https://github.com/11BelowStudio/HECC-IT" target="_blank">GitHub</a><br/>
            A selection of games developed with HECC-IT can be played via browser (PC and mobile) on <a href="https://itch.io/c/2711735/hecc-it" target="_blank">itch.io</a>
          </div>
          <div class="notice-itch-square">
            <iframe frameborder="0" src="https://itch.io/embed/999401?linkback=true&amp;dark=true" width="100%" height="167">
            <a href="https://11belowstudio.itch.io/hecc-it" target="_blank">HECC-IT! by 11BelowStudio</a></iframe>
            </iframe>
          </div>
        </div>
      </div>

      <div class="paragraph">
        Main features:
        <ul class="features-list">
          <li>
            Uses an intermediate declarative language (<b>HECC</b> <i>(Hypertext Editing and Creation Code)</i> 
            - specified in the <i>HECC-SPECC</i>) to store WIP games -
            and can be easily edited in a text editor of your choice, or via the included <b>OH-HECC</b> <i>(Optional Help for HECC)</i> GUI.
          </li>
          <li>
            Uses the <b>HECC-UP</b> (<i>HECC Ultra Parser</i>) utility (GUI or command line) to convert the .hecc file
            into a browser-playable <b>HECCIN' Game</b> <i>(HECC-Infused <span class="reveal">Nice<span class="opposite-hide">*</span> <span class="hide">[in
            the sense of 'oh nice you used HECC to make this' - this does not reflect the quality of the game nor does it indicate endorsement of it]</span></span>
            Game)</i>.
          </li>
          <li>
            Supports markdown, conditional statements (based on visited nodes), a back button, the ability to disable the back button, and more!
          </li>
        </ul>
      </div>

      <div class="paragraph center">
          <img class="pc-screenshot" src="/img/projects/hecc-it/oh-hecc.png" alt="A screenshot of the OH-HECC GUI" />
          <img class="pc-screenshot" src="/img/projects/hecc-it/hecc-up.png" alt="A screenshot of the HECC-UP GUI" />
          <img class="pc-screenshot" src="/img/projects/hecc-it/menu.png" alt="The main menu of HECC-IT" /> 
      </div>

      <div class="paragraph">
        The key selling point of <cite>HECC-IT</cite> is the flexibility it offers between using a GUI and a plain text editor when writing your games,
        due to both methods using the same intermediate .HECC format
        - completely avoiding the chicanery of converting between intermediate formats or constant exports/imports
        in order to use the other editing method.
        Compare this to the amount of faffing around needed to swap between using <cite>Twine</cite> (GUI) and <cite>twee</cite> (text),
        or between <cite>Inklewriter</cite> (GUI) and <cite>.ink</cite> (text) - <cite>HECC-IT</cite>
        ultimately provides a much better user experience in this regard.
      </div>

      <div class="paragraph">
        Granted, compared to the more established tools, <cite>HECC-IT</cite> doesn't offer a similar breadth or depth of functionality,
        and, in hindsight, the status of <cite>HECC-IT</cite> as a desktop-only Java application requiring a download
        (without any sort of browser version of the <cite>HECC-IT</cite> toolkit)
        probably doesn't lend itself towards encouraging people to casually try out the tool.
      </div>
    `,"#E97600",!1,!1,["Java","HTML","JavaScript"]),new o("project-pd","Payday 2 mods etc","img/projects/pd2-icon.png",`
    <div class="paragraph">
      I have developed and contributed to a few mods for Payday 2, and contributed to pd2builder (a build planning tool),
      so I've lumped some of them (the ones worth talking about) together here, for ease of organization.
    </div>
    
    <h2>pd2builder</h2>

    <div class="paragraph">
      I have contributed to <a href="https://pd2builder.netlify.app" target="_blank"><strong>pd2builder</strong></a>;
      specifically, fully implementing the multi-choice functionality of the copycat perk deck.
      I started from the GUI mock-up produced by one of the other contributors, before proceeding to work out how to
      store the current state of the chosen options, encoding these options in the URL (like everything else) and
      decoding said encoding, and working out how to unlock/lock the special perk-deck throwables which the copycat
      perk deck also has the ability to unlock.
    </div>

    <h2>Wow, Rude!</h2>

    <div class="paragraph">
      <strong>Wow, Rude!</strong> is a simple lua mod for Payday 2 which I created as a stupid solution to an equally stupid problem.<br/>
      Some builds require the player to take an enemy hostage and then convert said enemy in order for certain skills to activate.
      However, many other builds instead focus solely on dealing damage/getting kills constantly in order to activate other skills.
      The problem arises when player 1 is attempting to take an enemy hostage (and the enemy is in the surrendering process) but then
      player 2 charges in, dual-wielding SMGs, kills that surrendering enemy, refuses to elaborate, and runs off.
      Thus, player 1 naturally complains about it in chat, but gets swarmed by enemies and dies whilst typing their message.<br/>
      <i>Wow, Rude!</i> solves this problem by automating the complaining process
      - leaving a complaint in chat automatically when someone kills a hostage or a surrendering enemy.
    </div>

    <div class="paragraph">
      <div class="notice">
        <i>Wow, Rude!</i> is can be downloaded from <a href="https://modworkshop.net/mod/37044" target="_blank">Modworkshop.net</a>
        (requires <a href="https://superblt.znix.xyz/" target="_blank">SuperBLT</a> and <a href="https://modworkshop.net/mod/21431" target="_blank">HopLib</a>).<br/>
        Source code is available on <a href="https://github.com/11BelowStudio/wow-rude" target="_blank">GitHub</a>
      </div>
    </div>

    <div class="paragraph">
      <strong>Wow, Rude!</strong> evolved over time in response to user feedback - going from a very simple means of making general complaints,
      to a rather configurable and toggleable means of making potentially targeted complaints (to name and shame the individuals who clearly
      do not possess any self-control). These options include:
      <ul class="features-list">
        <li>Can enable/disable it (or set it to only work whilst hosting a game) whenever you want!</li>
        <li>Can toggle what stage of the intimidation process it should start caring about (from hands up? from when they are a hostage? what if it's still stealth?)</li>
        <li>Contains two user-editable text files containing the lists of complaints used by the mod (one for 'name and shame mode', one for general mode)</li>
      </ul>

      The latter of which leads nicely onto...
    </div>

    <h2>A github actions workflow for SuperBLT mod automatic updates using a mod version number</h2>

    <div class="paragraph">
      During the development of <i>Wow, Rude!</i>, I
      found <a href="https://github.com/morerokk/PD2AutoUpdateExample" target="_blank">a Github Actions workflow for automatic mod updates</a>,
      so I opted to use that for distributing updates for <i>Wow, Rude!</i>. However, upon implementing the configurable text files for <i>Wow, Rude!</i>,
      I ran into a minor problem. This workflow used a hash of the mod contents as a means of checking if an update was available
      (any mismatch in local files = prompted to update). However, if an end-user edited the complaint files of <i>Wow, Rude!</i>,
      that would cause a mismatch, prompting the user to install an update for the mod - which would then eradicate their customization options.
      As you can probably imagine, this was less than ideal. 
    </div>

    <div class="paragraph">
      After looking at the SuperBLT documentation about automatic updates, I found out that it was possible to use a version number instead
      of a hash (and that the version number is the suggested identifier to use anyway).
      This prompted me to <a href="https://github.com/11BelowStudio/PD2AutoUpdateExample" target="_blank">produce a fork of this workflow</a>
      - this time, using version numbers instead of an automatic hash - and update <i>Wow, Rude!</i> to use this workflow instead.
      This solved the problem with users having their customizations undone by an overzealous automatic updater - instead only getting notified
      about <i>actual</i> updates. 
    </div>

    <div>
      This updated github actions workflow is also used by <a href="https://modworkshop.net/mod/40647" target="_blank">Rich Presence Definitive</a>
    </div>
    `,"#0060DF",!1,!1,["Lua","HTML","JavaScript"])]),m=r({name:"OtherProjects",components:{ProjectsList:n},data:function(){return{projects:u}}}),g=e("h1",null,"Other projects",-1),f=e("div",{style:{"margin-bottom":"30px"}},[t(" Here are some of the other, non-game projects I've worked on."),e("br"),t(" I have more of these on "),e("a",{target:"_blank",href:"https://github.com/11BelowStudio"},"github"),t(", but these are the most interesting ones. ")],-1);function b(a,w,v,y,k,C){const i=l("ProjectsList");return p(),c("div",null,[g,f,h(i,{projects:a.projects},null,8,["projects"])])}const E=d(m,[["render",b]]);export{E as default};
