<template>
  <div>
    <h1>Other projects</h1>

    <div style="margin-bottom: 30px;">
      Here are some of the other, non-game projects I've worked on.<br/>
      I have more of these on <a target="_blank" href="https://github.com/11BelowStudio">github</a>, but these are the most interesting ones.
    </div>
    <ProjectsList v-bind:projects="projects" />
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import otherProjectsData from "@/data/OtherProjectsData";

export default defineComponent({
  name: "OtherProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: otherProjectsData,
    };
  },
});
</script>
