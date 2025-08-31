<template>
  <div v-if="$device.isDesktopOrTablet">
    <v-footer class="text-center">
      <v-col class="text-center">2023 - {{ new Date().getFullYear() }} | Hyper<span class="text-HyperBlue">OS</span>.fans <span class="text-HyperBlue">镜像</span> | {{ $t('disclaimerlong') }}</v-col>
    </v-footer>
    <!-- PC Disclaimer -->
  </div>
  <div v-else>
    <v-footer class="text-center">
      <v-col class="text-center">2023 - {{ new Date().getFullYear() }} | Hyper<span class="text-HyperBlue">OS</span>.fans <span class="text-HyperBlue">镜像</span> | {{ $t('disclaimer') }}</v-col>
    </v-footer>
    <!-- Mobile Disclaimer -->
  </div>
  <HeadResources></HeadResources>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
    }
  },
}
</script>
<script setup>

const { locale, locales } = useI18n()
</script>
