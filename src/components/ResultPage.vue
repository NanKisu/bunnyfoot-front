<template>
  <div class="container">

    <div class="topBbti">
      <h1 style="line-height: 5vh;" class="fontKotraBold font2em msgMt3vh"><span id="bunny" v-html="resultTitle[resultId-1]"></span></h1>
    </div>

    <div class="mainBbti">
      <img :src="getImgUrl()" style="display: block; margin: auto; height: 160px; vertical-align: top !important"/>
      <img :src="imgCaptured">

      <v-alert
        border="top"
        style="background-color: rgb(240 240 240 / 100%); font-site: 14px;"
        class="fontNexonRegular lhWide"
        v-html="resultText[resultId-1]"
      >
      </v-alert>

    </div>

    <div class="bottomBbti" style="height: 10vh;">
      <div class="btnWrapper fontNexonBold" style="margin-top: 100px;">
        <button id="btnKakao" data-html2canvas-ignore="true">
          <img class="btnImg" src="/static/icons/kakao-talk-basic.png" />
        </button>
        <button @click="captureImage" data-html2canvas-ignore="true">
          <img class="btnImg" src="/static/icons/Download-green.png" />
        </button>
        <button @click="redo" data-html2canvas-ignore="true">
          <img class="btnImg" src="/static/icons/redo-yellow.png" />
        </button>
      </div>
    </div>

  </div>
</template>

<script>
import html2canvas from 'html2canvas'

export default {
  name: 'ResultPage',
  data () {
    return {
      resultId: this.$route.params.resultId,
      resultTitle: ['경계심 가득한 도도한', '누가 뭐래도 나는<br>이구역 인싸!', '함께해서 행복한<br>애교쟁이', '순딩이 울애기'],
      resultText: [
        '- 야생성을 간직하고 있어요<br>- 예민한 곳을 만지는 건 허용하지 않아요<br>- 먹이사슬의 최하층에 있는 게 토끼니까 경계심 많고 겁 많은 건 이해돼요<br>- 가끔은 애교있는 다른 토끼들 이야기를 들으면 조금은 섭섭하긴 해요<br>- 하지만 여전히 예쁜 내 토끼에요',
        '- 일반적인 토끼의 규칙은 내 토끼에게 적용되지 않아요.<br>- 가끔 얘가 토끼인지 사람인지 모르겠어요.<br>- 그동안 먹여주고 입혀주고(?) 재워준 건 난데 집사고 뭐고 사람을 좋아하는 편이에요.<br>- 간식이라도 가지고 있으면 난리남!',
        '- 사람을 좋아하는 토끼! 집사 껌딱지!<br>- 애교가 많아서 하루하루 나를 행복하게 만들어줘요<br>- 집사에게 긍정적인 기운을 뿜뿜 뿜어준답니다!',
        '- 너무 순딩순딩한 인형 같은 토끼!<br>- 다른 토끼들은 허락하지 않는 곳까지 만질 수 있게 해줘요<br>'
      ],
      imgCaptured: null,
      envHost: ''
    }
  },
  methods: {
    getImgUrl () {
      return '/static/images/result_type_' + this.resultId + '.png'
    },

    getImgWebUrl () {
      // return (location.protocol + '//' + location.host + this.getImgUrl()).replace(".png", "_kakao.png")
      return (this.envHost + this.getImgUrl()).replace('.png', '_kakao.png')
    },

    shareKakao () {
      console.log(this.getImgWebUrl())
      let Kakao = {}
      Kakao.Link.createDefaultButton({
        container: '#btnKakao',
        objectType: 'feed',
        content: {
          title: '내 토끼는 무슨 유형?',
          description: this.resultTitle[this.resultId - 1].replace('<br>', ' '),
          imageUrl: this.getImgWebUrl(),
          link: {
            webUrl: this.envHost,
            mobileWebUrl: this.envHost
          }
        },
        buttons: [
          {
            title: '결과 보기',
            link: {
              webUrl: this.envHost + '/#/result/' + this.resultId,
              mobileWebUrl: this.envHost + '/#/result/' + this.resultId
            }
          },
          {
            title: '나도 해보기',
            link: {
              webUrl: this.envHost,
              mobileWebUrl: this.envHost
            }
          }
        ]
      })
    },

    captureImage (selector = 'body') {
      window.html2canvas = html2canvas

      html2canvas(document.body)
        .then(
          function (canvas) {
          // console.log(canvas.toDataURL('image/png'))

          // 캡쳐한 이미지 png로 다운로드
            var link = document.createElement('a')
            if (typeof link.download === 'string') {
              link.href = canvas.toDataURL('image/png')

              let today = new Date()
              link.download = 'bbti-' + today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate() + '.png'

              document.body.appendChild(link)
              link.click()
              document.body.removeChild(link)
            } else {
              window.open(canvas.toDataURL('image/png'))
            }
          }
        )
        .catch(function (err) {
          console.log(err)
        })

      // html2canvas(ele, {
        // onrendered: function(canvas) {
        //   let position = 0
        //   const imgData = canvas.toDataURL('image/png')

        //   console.log(imgData)
        // }
      // })
    },

    redo () {
      this.$router.push('/guide')
    }
  },

  mounted () {
    this.envHost = this.$store.state.envHost
    this.shareKakao()
    // console.log(this.envHost)
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
