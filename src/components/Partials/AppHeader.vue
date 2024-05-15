<template>
  <header class="row justify-between pt-4">
    <img src="~/assets//logo.svg" alt="logo" />

    <div class="item-holder">
      <p class="nav-item">
        채용

        <q-menu transition-show="jump-down" transition-hide="jump-up">
          <q-list class="drop-down" style="min-width: 240px">
            <div v-for="(item, i) in items" :key="i">
              <q-item clickable>
                <q-item-section class="dropdown-item" :class="{ bold: i === 0 }"
                  >{{ item }}
                </q-item-section>
              </q-item>
              <q-separator v-if="i === 2" />
            </div>
          </q-list>
        </q-menu>

        <span>
          <img src="~/assets/caret-down.svg" alt="caret-down" />
        </span>
      </p>

      <p class="nav-item">해외 개발자 활용 서비스</p>
    </div>

    <button class="button">문의하기</button>
  </header>
</template>

<script setup lang="ts">
const items: string[] = [
  '채용',
  '해외 개발자 원격 채용',
  '외국인 원격 채용 (비개발 직군)',
  '한국어 가능 외국인 채용',
];

defineOptions({
  name: 'AppHeader',
});
</script>

<style lang="scss" scoped>
header {
  padding-top: 1.5rem;
  color: white;

  .button {
    color: #4a77ff;
    padding: 0 24px;
    height: 36px;
    background: white;
    border-radius: 8px;
    border: none;
    outline: 0;
    font-weight: 900;
    font-size: 1rem;
    cursor: pointer;
    transition-duration: 300ms;

    &:hover {
      opacity: 0.75;
    }

    &:active {
      opacity: 0.6;
    }

    &:disabled {
      opacity: 0.5;
    }
  }

  .item-holder {
    display: inline-flex;
    gap: 60px;

    .nav-item {
      font-size: 1rem;
      display: flex;
      gap: 8px;
      align-items: center;
      font-weight: 900;
      cursor: pointer;
      margin-bottom: 0 !important;

      img {
        padding-top: 6px;
      }
    }
  }
}
</style>
