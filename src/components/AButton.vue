<template>
  <button :type="type || 'button'" @click="handleClick" class="default">
    <div class="button-label-box">
      <slot />
    </div>
  </button>
</template>

<script>
export default {
  name: "a-button",
  props: ["type"],
  setup(_, context) {
    function handleClick() {
      context.emit("clickHandler");
    }

    return { handleClick };
  },
};
</script>

<style lang="scss">
.default {
  display: flex;
  justify-content: center;
  align-content: center;
  box-sizing: border-box;
  padding: 8px 16px;
  background-color: #ffffff;
  border: 1px solid transparent;
  font-size: 16px;

  &:hover,
  &:active {
    background-color: #000000;
    color: #ffffff;
    border-radius: $default-border-radius;
    cursor: pointer;
  }
}

.button-label-box {
  margin-top: 3px;
}
</style>
