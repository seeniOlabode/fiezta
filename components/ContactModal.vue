<template>
  <Teleport to="body">
    <div class="contact-modal">
      <div class="content"></div>
    </div>
  </Teleport>
</template>

<script>
export default {};
</script>

<style lang="pcss" scoped>
.contact-modal {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
}
</style>