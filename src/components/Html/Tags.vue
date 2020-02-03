<template>
  <span class="tag">
    <span>{{ name }}&nbsp;&nbsp;</span>
    <a href="#" @click.prevent="$emit('remove')" title="Removing tag">
      <i class="fa fa-times"></i>
    </a>
  </span>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
};
</script>