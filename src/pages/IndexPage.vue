<template>
  <q-page class="hero-region">
    <div class="app-container">
      <AppHeader />

      <!-- Hero Region Here -->
      <section class="content-holder row wrap justify-between">
        <span class="absolute popover" data-aos="zoom-in" :data-aos-delay="300">
          <PopoverTip position="left">
            <p class="popover-text">풀타임, 파트타임</p>
          </PopoverTip>
        </span>

        <div class="col-12 col-md-6">
          <h1 data-aos="fade-up" :data-aos-duration="500">
            최고의 실력을 가진 <br />
            외국인 인재를 찾고 계신가요?
          </h1>

          <h2 data-aos="fade-up" :data-aos-duration="500">
            법률 및 인사관리 부담없이 <br />
            1주일 이내에 원격으로 채용해보세요.
          </h2>
          <p class="question">개발자가 필요하신가요?</p>

          <div
            class="sub-content-holder row gap-2 justify-between"
            data-aos="zoom-in"
            :data-aos-duration="500"
          >
            <div class="sub-content col">
              <div class="divider"></div>
              <p class="header">평균 월 120만원</p>
              <p class="text">임금을 해당 국가를 기준으로 계산합니다.</p>
            </div>

            <div class="sub-content col">
              <div class="divider"></div>
              <p class="header">최대 3회 인력교체</p>
              <p class="text">막상 채용해보니 맞지 않아도 걱정하지 마세요.</p>
            </div>

            <div class="sub-content col">
              <div class="divider"></div>
              <p class="header">평균 3일, 최대 10일</p>
              <p class="text">
                급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.
              </p>
            </div>
          </div>
        </div>

        <div
          class="col-12 col-md-6 relative"
          style="left: 34px"
          data-aos="zoom-in"
          :data-aos-duration="500"
        >
          <!-- Tooltip -->
          <span class="tooltip absolute">
            <PopoverTip position="center">
              <p class="tip row">
                <img src="~/assets/svg/usd.svg" alt="usd" />
                월 100만원
              </p>
            </PopoverTip>
          </span>

          <el-carousel
            :interval="5000"
            type="card"
            arrow="always"
            autoplay
            indicator-position="none"
          >
            <el-carousel-item v-for="i in 3" :key="i">
              <div class="carousel-card">
                <q-avatar rounded size="120px" class="relative">
                  <img src="~/assets/images/gupta.png" alt="avatar" />

                  <span class="absolute flag">
                    <img src="~/assets/svg/flag.svg" alt="flag" />
                  </span>
                </q-avatar>

                <p class="name">Abhishek Gupta</p>
                <p class="portfolio">마케팅 · 2y+</p>

                <div class="button-region">
                  <button>마케팅 콘텐츠 제작</button>
                  <button>인스타그램 관리</button>

                  <div class="row justify-center" style="gap: 2px">
                    <button>트위터 관리</button>
                    <button>블로그 글 작성</button>
                  </div>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>

          <div class="mobile-subcontent">
            <div class="row" style="gap: 0 1rem; width: 75%">
              <q-checkbox :model-value="true" label="한국어 능력" />
              <q-checkbox :model-value="true" label="한국어 능력" />

              <q-checkbox :model-value="true" label="한국어 능력" />
              <q-checkbox :model-value="true" label="한국어 능력" />
            </div>
            <p class="question-mobile">개발자가 필요하신가요?</p>
          </div>
        </div>
      </section>

      <section
        class="slides-region"
        data-aos="zoom-in"
        :data-aos-duration="500"
      >
        <Splide :options="options" aria-label="My Favorite Images">
          <SplideSlide v-for="slide in slides" :key="slide.id">
            <div class="slide-holder">
              <img :src="getImageUrl(`${slide.id}-icon.svg`)" :alt="slide.id" />
              <p class="text">{{ slide.text }}</p>
            </div>
          </SplideSlide>
        </Splide>
      </section>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import AOS from 'aos';
import 'aos/dist/aos.css';

import '@splidejs/vue-splide/css';
import { ElCarousel, ElCarouselItem } from 'element-plus';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { type Slide, type SlideOptions } from 'src/components/models';

import PopoverTip from 'src/components/PopoverTip.vue';
import AppHeader from 'src/components/Partials/AppHeader.vue';

defineOptions({
  name: 'IndexPage',
});

const options: SlideOptions = {
  autoplay: true,
  interval: 5000,
  rewind: true,
  perPage: 2,
  perMove: 1,
  pagination: false,
  arrows: false,
  width: '100%',
  autoWidth: true,
  gap: '10px',
};

const slides: Slide[] = [
  { id: 'marketing', text: '해외 마케팅' },
  { id: 'image', text: '퍼블리셔' },
  { id: 'box', text: '캐드원(제도사)' },
  { id: 'target', text: '해외 세일즈' },
  { id: 'call', text: '해외 세일즈' },
];

const getImageUrl = (url: string) => {
  return new URL(`../assets/svg/${url}`, import.meta.url).href;
};

AOS.init();
</script>

<style lang="scss" scoped>
.hero-region {
  background: linear-gradient(to bottom right, #00a9ba, #35a3cb, #2358d9 115%);
  .content-holder {
    margin-top: 11rem;
    color: white;
    position: relative;

    @media only screen and (max-width: 768px) {
      margin-top: 8.5rem;
    }

    .popover {
      top: -58px;
      .popover-text {
        color: rgba(64, 226, 232, 1);
        font-size: 1.125rem;
        font-weight: 900;
      }
    }

    h1 {
      font-size: 3rem;
      font-weight: 900;
      line-height: 62.4px;

      @media only screen and (max-width: 768px) {
        font-size: 2.25rem;
        line-height: 46.8px;
      }
    }

    h2 {
      font-size: 1.5rem;
      font-weight: 900;
      padding-top: 1.125rem;
      line-height: 34px;

      @media only screen and (max-width: 768px) {
        font-size: 1.125rem;
        line-height: 27px;
      }
    }

    .question {
      font-weight: 900;
      font-size: 1.125rem;
      padding-top: 1.5rem;
      text-decoration: underline;

      @media only screen and (max-width: 768px) {
        display: none;
      }
    }

    .sub-content-holder {
      margin-top: 3.5rem;
      gap: 4rem;

      @media only screen and (max-width: 768px) {
        display: none;
      }

      .sub-content {
        color: white;

        .divider {
          width: 80%;
          border-top: 1px solid white;
        }

        .header {
          font-weight: 900;
          font-size: 1.125rem;
          padding-top: 0.75rem;
        }

        .text {
          font-weight: 900;
          font-size: 1rem;
          padding-top: 0.875rem;
        }
      }
    }

    .mobile-subcontent {
      display: none;

      @media only screen and (max-width: 768px) {
        margin-bottom: 1.5rem;
        display: block;

        .question-mobile {
          padding-top: 12px;
          font-size: 1rem;
          font-weight: 900;
          text-decoration: underline;
          color: rgba(251, 255, 35, 1);
        }
      }
    }
  }

  .slides-region {
    margin-top: 3.5rem;
    display: flex;
    gap: 10px;

    @media only screen and (max-width: 768px) {
      display: none;
    }

    .slide-holder {
      height: 88px;
      padding: 1rem;
      border-radius: 12px;
      width: 332px;
      display: flex;
      align-items: center;
      gap: 20px;
      background-color: rgba(255, 255, 255, 0.2);

      .text {
        font-size: 1.5rem;
        color: rgba(255, 255, 255, 1);
      }
    }
  }
}

.carousel-card {
  height: 408px;
  width: 292px;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  @media only screen and (max-width: 768px) {
    padding: 12px;
    width: 100%;
    height: 350px;

    .q-avatar {
      height: 64px;
      width: 64px;
    }

    .name {
      font-size: 1.125rem !important;
      text-align: center;
      line-height: 27px;
    }

    .portfolio {
      font-size: 0.875rem !important;
      padding-top: 4px;
    }

    .button-region {
      margin-top: 1rem !important;

      button {
        font-size: 0.875rem !important;
      }
    }
  }

  .flag {
    right: 6px;
    bottom: 3px;

    @media only screen and (max-width: 768px) {
      right: -8px;
      bottom: 1px;
    }
  }

  .name {
    font-size: 1.5rem;
    font-weight: 900;
    color: rgba(36, 37, 47, 1);
    padding-top: 14px;
  }

  .portfolio {
    font-weight: 900;
    font-size: 1rem;
    color: rgba(74, 119, 255, 1);
  }

  .button-region {
    margin-top: 2.5rem;
    display: flex;
    align-items: center;
    flex-direction: column;

    button {
      height: 32px;
      border-radius: 6px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid rgba(193, 197, 207, 1);
      background: inherit;
      font-size: 1rem;
      font-weight: 900;
      color: rgba(94, 98, 111, 1);
      margin-bottom: 4px;
      padding: 0 12px;
    }
  }
}

.tooltip {
  width: 100%;
  top: -78px;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    top: 60px;
  }

  .tip {
    color: rgba(0, 198, 150, 1);
    font-weight: 900;
    gap: 10px;
    font-size: 1.125rem;
    align-items: center;
  }
}
</style>
