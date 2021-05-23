<template>
  <div class="container" style="padding: 0px !important">
    <img :src="getImgUrl()" style="displat: block; width: 100%;"/>

    <div style="margin: 0 5%; border-radius: 5px; background-color: #111">
      <v-alert
          border="top"
          style="background-color: rgb(255 255 255 / 90%)"
          class="fontNexonRegular lhWide"
          v-html="resultText[resultId-1]"
        >
      </v-alert>
    </div>

    <div class="bottomBbti" style="height: 15vh;">
      <div class="btnWrapper fontNexonBold">
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
import {send} from '@/components/SlackBot.js'

export default {
  name: 'ResultPage',
  data () {
    return {
      resultId: this.$route.params.resultId,
      resultTitle: ['경계심 가득한 도도한', '누가 뭐래도 나는<br>이구역 인싸!', '함께해서 행복한<br>애교쟁이', '순딩이 울애기'],
      resultText: [
        '￮ 야생성을 간직하고 있는 고양이 같은 토끼!<br>￮ 예민한 곳을 만지는 건 허용하지 않아요<br>￮ 조금씩 마음을 열어줄 때 집사 맘은 더 사르르 녹아요<br>￮ 산책은 좋아하지 않을 확률이 높답니다<br>￮ 익숙한 공간인 집 안에서만 지내도 행복해요<br>￮ 자신의 공간이라고 느낄 수 있는 은신처를 만들어주는 걸 추천해요!',
        '￮ 일반적인 토끼의 규칙은 내 토끼에게 적용되지 않아요.<br>￮ 가끔 얘가 토끼인지 강아지인지 모르겠어요.<br>￮ 그동안 먹여주고 입혀주고(?) 재워준 건 난데 집사고 뭐고 간식이라도 가진 사람이 있으면 난리남!<br>￮ 조금은 내멋대로인 활달한 성격을 가졌어요',
        '￮ 사람을 좋아하는 토끼! 집사 껌딱지!<br>￮ 애교가 많아서 하루하루 나를 행복하게 만들어줘요<br>￮ 이런 토끼와 함께 사는 집사는 로또 맞은 격! 가장 적은 성격 유형이랍니다',
        '￮ 너무 순딩순딩한 인형 같은 토끼!<br>￮ 다른 토끼들은 허락하지 않는 곳까지 만질 수 있게 해줘요<br>￮ 집사와 교감이 잘 되는 유형!'
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
      // return (this.envHost + this.getImgUrl()).replace('.png', '_kakao.png')
      return (this.envHost + this.getImgUrl())
    },

    shareKakao () {
      console.log(this.getImgWebUrl())

      try {
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
      } catch (err) {
        send('error', '카톡 공유에 실패했어요!')
      }
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

<style>
#app {
  height: none !important;
  background-color: white !important;
  background-image: none !important;
}

body {
  background-color: white !important;
}

#app2{
  height: none !important;
  top: 0px !important;
  margin: 0 0 !important;
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
