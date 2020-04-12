<template>
  <split-panel left-title="左侧标题" right-title="右侧标题">
    <template slot="actions">
      <q-btn label="actions" color="primary" />
    </template>

    <template slot="left-actions">
      <q-btn icon="refresh" flat color="primary" />
    </template>
    <template slot="left">
      LEFT
    </template>

    <template slot="right-actions">
      <q-btn label="Right Action" color="primary" />
    </template>
    <template slot="right">
      RIGHT
    </template>
  </split-panel>
</template>
