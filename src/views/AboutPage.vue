<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Rachel</strong>, a prize-winning Computer Games MSc graduate,
        currently looking to apply my skills and experience to the games industry in a design or development role.<br/>
        I have experience designing and developing single-player and multi-player games, for desktop and mobile,
        both individually and as part of a team, using Unity and other platforms.
        I have recently been employed to develop bespoke video games for Natural England and Manx National Heritage.
      </div>

      <div style="margin-top: 20px;">To see my CV, <router-link to="/cv">click here</router-link>.</div>

      <div style="margin-top: 20px;">To see some of the games I've produced, <router-link to="/game-projects">click here</router-link>.</div>

      <div style="margin-top: 20px;">To see some of the other projects I've worked on, <router-link to="/other-projects">click here</router-link>.</div>

      <div style="margin-top: 40px;">I'm <strong>currently looking for a job</strong> - ideally either as a game programmer or a game designer. You can reach me <!--at <a href="mailto:johnmatrix@deltaforce.us">johnmatrix@deltaforce.us</a> or --><router-link to="/contact">through here</router-link>.</div>
    </div>

    <div class="photo">
      <img :src="`/img/avatar.png`" alt="11BelowStudio logo" /> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
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
    padding: 10px;
    padding-left: 80px;
  }
}

</style>