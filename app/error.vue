<template>{{ error.statusCode }}</template>
<script setup>
const error = useError()
let url = useRequestURL()
const route = useRoute()
let domain = url.hostname
if (domain == "https://www.hyperos.pen-net.cn") {
  url = 'https://hyperos.pen-net.cn' + route.path
  await navigateTo(url, { external: true })
}
</script>
