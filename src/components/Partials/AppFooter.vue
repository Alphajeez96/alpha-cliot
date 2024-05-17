<template>
  <footer class="app-container">
    <div class="row justify-between">
      <div class="col-md-3">
        <img src="~/assets/svg/logo-2.svg" alt="logo" />
        <p class="logo-text" style="padding-top: 0.875rem">
          우리는 국가의 장벽을 넘어 최고의 인재를 매 <br />
          칭해드립니다.
        </p>

        <div style="padding-top: 1.5rem">
          <a href="tel:010-0000-0000" class="footer-text">010-0000-0000</a>
          <a
            href="mailto:aaaaa@naver.com"
            class="footer-text"
            style="padding-top: 6px"
            >aaaaa@naver.com</a
          >
        </div>
      </div>

      <div class="col-12 col-md-8 row footer-card-holder">
        <div
          class="footer-card col-5 col-md"
          v-for="item in cardItems"
          :key="item.id"
        >
          <img :src="getImageUrl(`${item.id}-icon.svg`)" :alt="item.id" />
          <p class="caption">{{ item.caption }}</p>

          <p class="text">
            {{ item.text }}
            <span>
              <img src="~/assets/svg/outline-arrow.svg" alt="arrow" />
            </span>
          </p>
        </div>
      </div>
    </div>

    <div class="row justify-between" style="padding-top: 3.5rem">
      <div class="col-md-3 row">
        <div class="col-8">
          <p class="footer-text small">상호명</p>
          <p class="footer-text small" style="padding: 0.5rem 0">
            하이퍼하이어
          </p>
          <p class="footer-text small">Hyperhire India Private Limited</p>
        </div>

        <div class="col-4">
          <p class="footer-text small">대표 CEO</p>
          <p class="footer-text small" style="padding: 0.5rem 0">김주현</p>
          <p class="footer-text small">Juhyun Kim</p>
        </div>
      </div>

      <div class="col-12 col-md-8 row">
        <div class="col-12 col-md-3 padded">
          <p class="logo-text small">사업자등록번호 CIN</p>
          <p class="logo-text small" style="padding: 0.5rem 0">427-86-01187</p>
          <p class="logo-text small">U74110DL2016PTC290812</p>
        </div>

        <div class="col-12 col-md-6 padded">
          <p class="logo-text small">주소 ADDRESS</p>
          <p class="logo-text small" style="padding: 0.5rem 0">
            서울특별시 강남대로 479, 지하 1층 238호
          </p>
          <p class="logo-text small">
            D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi,
            110053 India
          </p>
        </div>
      </div>
    </div>

    <p class="footer-text" style="padding-top: 2rem; font-size: 13px">
      ⓒ 2023 Hyperhire
    </p>
  </footer>
</template>

<script setup lang="ts">
defineOptions({
  name: 'AppHeader',
});

interface Card {
  id: string;
  caption: string;
  text: string;
}

const cardItems: Card[] = [
  {
    id: 'code',
    caption: '해외 개발자 원격 채용',
    text: '바로가기',
  },

  {
    id: 'avatar',
    caption: '외국인 원격 채용 (비개발)',
    text: '바로가기',
  },

  {
    id: 'kor',
    caption: '한국어 가능 외국인 채용',
    text: '바로가기',
  },

  {
    id: 'gear',
    caption: '해외 개발자 활용 서비스',
    text: '바로가기',
  },
];

const getImageUrl = (url: string) => {
  return new URL(`../../assets/svg/${url}`, import.meta.url).href;
};
</script>

<style lang="scss" scoped>
footer {
  padding-top: 6rem;
  padding-bottom: 6rem;

  @media only screen and (max-width: 768px) {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  .logo-text {
    font-weight: 900;
    color: rgba(52, 55, 65, 1);

    &.small {
      font-size: 0.75rem;
    }
  }

  .footer-text {
    display: block;
    font-weight: 900;
    text-decoration: none;
    color: rgba(94, 98, 111, 1);

    &.small {
      font-size: 0.75rem;
    }
  }

  .footer-card-holder {
    gap: 16px;

    @media only screen and (max-width: 768px) {
      margin-top: 2rem;
      gap: 8px;
    }

    .footer-card {
      height: 142px;
      padding: 1rem;
      border-radius: 12px;
      background: rgba(255, 255, 255, 1);

      @media only screen and (max-width: 768px) {
        height: auto;
        width: unset;
      }

      .caption {
        color: rgba(52, 55, 65, 1);
        font-size: 0, 875rem;
        font-weight: 900;
        padding-top: 6px;
      }

      .text {
        display: flex;
        align-items: center;
        gap: 4px;
        color: rgba(94, 98, 111, 1);
        font-size: 0.875rem;
        font-weight: 900;
        padding-top: 0.75rem;

        span {
          padding-top: 2px;
        }
      }
    }
  }

  .padded {
    padding-top: 0;
    @media only screen and (max-width: 768px) {
      padding-top: 2rem;
    }
  }
}
</style>
