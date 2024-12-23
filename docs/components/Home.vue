<template>
  <VPHero name="融合通信中台JS-API" text="" :image="image" :actions="actions" />
  <VPFeatures :features="homePages" />
</template>

<script setup lang="ts">
import VPHero from 'vitepress/dist/client/theme-default/components/VPHero.vue'
import VPFeatures from 'vitepress/dist/client/theme-default/components/VPFeatures.vue'
import { data as pages } from '../.vitepress/create.data'

const image = { light: '/images/pic1.svg', dark: '/images/pic2.svg' }
const actions = [
  {
    text: '开始',
    link: 'document/概述/前言.html',
  },
]
const homePages: any = [
  {
    title: 'start',
    link: 'document/概述/start.html',
    details: '融合通信中台JS-API，start'
  }, {
    title: 'update-log',
    link: 'document/概述/update-log.html',
    details: '版本update-log'
  }, {
    title: '状态码',
    link: 'document/其它/状态码.html',
    details: '返回值说明'
  }
]

function randomPage(): string {
  const length = pages.length - 1
  return pages[Math.floor(Math.random() * length)]!.link!
}


</script>

<style>
.details {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all;
}

.vp-doc h2 {
  margin: 0;
  border: none;
  padding: 0;
}
</style>
