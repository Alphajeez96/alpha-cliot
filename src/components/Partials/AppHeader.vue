<template>
  <header class="row justify-between pt-4">
    <img src="~/assets/svg/logo.svg" alt="logo" />

    <!-- Hamburger menu -->
    <div class="hamburger" @click="toggleMenu">
      <span></span>
    </div>

    <!-- Nav Items -->
    <div class="item-holder" :class="{ 'show-menu': showMenu }">
      <div class="nav-item">
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
          <img src="~/assets/svg/caret-down.svg" alt="caret-down" />
        </span>
      </div>

      <p class="nav-item">해외 개발자 활용 서비스</p>
    </div>

    <button class="button" :class="{ 'show-menu': showMenu }">문의하기</button>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
defineOptions({
  name: 'AppHeader',
});

const items: string[] = [
  '채용',
  '해외 개발자 원격 채용',
  '외국인 원격 채용 (비개발 직군)',
  '한국어 가능 외국인 채용',
];

const showMenu = ref(false);

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};
</script>

<style lang="scss" scoped>
header {
  top: 0;
  color: white;
  z-index: 99999;
  position: sticky;
  padding-top: 1.5rem;

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

  .hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
    z-index: 100;

    span {
      width: 14px;
      height: 3px;
      background-color: rgba(255, 255, 255, 1);
    }
  }

  @media (max-width: 768px) {
    .hamburger {
      display: flex;
    }

    .item-holder {
      flex-direction: column;
      gap: 20px;
      position: fixed;
      top: 0;
      right: 0;
      background-color: black;
      padding: 20px;
      width: 50%;
      height: 100vh;
      z-index: 50;
      box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
      overflow-y: auto;
      transition: transform 0.3s ease-in-out;
      transform: translateX(100%);
    }

    .item-holder.show-menu {
      transform: translateX(0);
    }

    .nav-item {
      font-size: 1.5rem;
    }

    .button {
      display: none;
    }
  }
}
</style>
