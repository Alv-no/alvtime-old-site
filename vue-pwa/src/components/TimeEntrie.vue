<template>
  <div class="grid">
    <div class="text">
      <p class="customerText">{{ timeEntrie.customer }}</p>
      <p class="activityNameText">{{ timeEntrie.activityName }}</p>
    </div>
    <input type="number" />
  </div>
</template>

<script>
export default {
  props: ["timeEntrie"]
};
</script>

<style>
.grid {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  color: #000;
  padding: 0 1rem;
}

.textfield {
  width: 3.5rem;
}

.input {
  appearance: none;
  margin: 0;
}

.text {
  line-height: 0.3rem;
}

.customer_text {
  font-size: 0.85rem;
}
</style>
