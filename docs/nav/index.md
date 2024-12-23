---
layout: doc
layoutClass: m-nav-layout
sidebar: false
---
<style src="/.vitepress/theme/style/nav.css"></style>
<script setup>
import { NAV_DATA } from '/.vitepress/theme/utils/data'
</script>
# 我的导航

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>
