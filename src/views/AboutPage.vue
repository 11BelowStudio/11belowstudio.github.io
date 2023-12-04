<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Rachel</strong>, a Computer Games graduate who makes games (designing and implementating them) and solves problems.<br/>
        Nowadays I'm mostly preoccupied with navigating the job market, whilst doing some volunteering in the community.
      </div>

      <div style="margin-top: 20px;">I've <router-link to="/game-projects">made games</router-link>, dabbled in <router-link to="/other-projects">non-games</router-link>, and you can see <router-link to="/cv">my CV</router-link> as well.</div>

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