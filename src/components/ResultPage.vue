<template>
  <div class="container">

    
    <div class="topBbti">
      <h1 class="fontKotraBold font2em msgMt3vh"><span id="bunny" v-html="resultTitle[resultId-1]"></span></h1>
    </div>

    <div class="mainBbti">
      <div style="height: 45vh; text-align: center">
        <img :src="getImgUrl()" style="max-height: 100%; max-width: 100%;"/>
        <img :src="imgCaptured">
      </div>

      <v-alert
        border="top"
        style="background-color: rgb(225 225 225 / 45%)"
        class="fontNexonRegular lhWide"
        v-html="resultText[resultId-1]"
      >
      </v-alert>
    

      <div class="btnWrapper fontNexonBold btnFlex">
        <button id="btnKakao">
          <img class="btnImg" src="/static/icons/kakao-talk_black.png" />
        </button>
        <button @click="captureImage">
          <img class="btnImg" src="/static/icons/download_black.png" />
        </button>
        <button @click="redo">
          <img class="btnImg" src="/static/icons/redo_black.png" />
        </button>
      </div>
    </div>

    <div class="bottomBbti" style="height: 10vh;">
      <!-- d -->
    </div>

    
  </div>
</template>

<script>

export default {
  name: 'ResultPage',
  data () {
    return {
      resultId: this.$route.params.resultId,
      resultTitle: ['경계심 가득한 도도한', '누가 뭐래도 나는<br>이구역 인싸!', '함께해서 행복한<br>애교쟁이', '순딩이 울애기'],
      resultText: [
        '야생성을 간직하고 있어요<br>예민한 곳을 만지는 건 허용하지 않아요<br>먹이사슬의 최하층에 있는 게 토끼니까<br>경계심 많고 겁 많은 건 이해돼요<br>가끔은 애교있는 다른 토끼들 이야기를<br>들으면 조금은 섭섭하긴 해요<br>하지만 여전히 예쁜 내 토끼에요',
        '일반적인 토끼의 규칙은<br>내 토끼에게 적용되지 않아요.<br>가끔 얘가 토끼인지 사람인지 모르겠어요.<br>그동안 먹여주고 입혀주고(?)<br>재워준 건 난데<br>집사고 뭐고 사람을 좋아하는 편이에요.<br>간식이라도 가지고 있으면 난리남!',
        '사람을 좋아하는 토끼!<br>집사 껌딱지!<br>애교가 많아서 하루하루<br>나를 행복하게 만들어줘요<br>집사에게 긍정적인 기운을<br>뿜뿜 뿜어준답니다!',
        '너무 순딩순딩한 인형 같은 토끼!<br>다른 토끼들은 허락하지 않는 곳까지<br>만질 수 있게 해줘요<br>'
      ],
      imgCaptured: null
    }
  },
  methods: {
    getImgUrl () {
      return '/static/images/result_type_' + this.resultId + '.png'
    },

    getImgWebUrl () {
      return (location.protocol + '//' + location.host + this.getImgUrl()).replace(".png", "_kakao.png")
    },

    shareKakao() {
      console.log(this.getImgWebUrl())

      Kakao.Link.createDefaultButton({
        container: "#btnKakao",
        objectType: "feed",
        content: {
          title: "내 토끼는 무슨 유형?",
          description: this.resultTitle[this.resultId-1].replace("<br>"," "),
          imageUrl: this.getImgWebUrl(),
          // imageUrl: 'https://cdn.gjdream.com/news/photo/old/news/contents/UPFILE/2019/20190707497381.jpg',
          link: {
            mobileWebUrl: "https://bbti.site",
          }
        },
        buttons: [
          {
            title: '결과 보기',
            link: {
              mobileWebUrl: "https://naver.com"
            }
          },
          {
            title: '나도 해보기',
            link: {
              mobileWebUrl: "https://daum.net"
            }
          }
        ]
      })
    },

    captureImage () {

    },

    redo () {
      this.$router.push('/guide')
    }
  },

  mounted() {
    this.shareKakao()
  }
}
</script>

<style scoped>
body {
  background-color: white !important;
}

.typeImage {
  /* position: relative; */
  margin-top: 13vh;
  left: 50%;
  margin-left: -50%;
  height: 45vh;
  width: 100%;
  /* background-image: url("/static/images/result_type_3.png"); */
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}


</style>
