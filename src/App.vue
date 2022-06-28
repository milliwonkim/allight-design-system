<template>
  <div>
    <AButton @clickHandler="handleAlert"> 테스트입니당 </AButton>
  </div>
</template>
<script lang="ts">
import AButton from 'allight-design-system';
import './test';
export default {
  components: {
    AButton,
  },
  setup() {
    const handleAlert = () => {
      alert('테스트');
    };

    return {
      handleAlert,
    };
  },
};
</script>
<style lang="">
</style>