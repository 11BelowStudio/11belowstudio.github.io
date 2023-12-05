<template>
  <div>
    <h1>Games</h1>

    <div style="margin-bottom: 20px;">
      Here are some of the games I've developed.<br/>
      I have even more of them on <a target="_blank" href="https://11BelowStudio.itch.io">my itch.io page</a>,
      but these ones are most likely to be of interest to you.
    </div>

    <ProjectsList v-bind:projects="projects" />

    <!--div style="margin-top: 20px;">
      I have even more games (which you can play for yourself) on <a target="_blank" href="https://11BelowStudio.itch.io">my itch.io page</a>
    </div-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import gameProjectsData from "@/data/GameProjectsData";

export default defineComponent({
  name: "GameProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: gameProjectsData,
    };
  },
});
</script>
