<template>
  <div id="app">
    <div id="app2">
      <div class="container"  v-if="questionIndex<10">

        <div class="topBbti fontNexonRegular">
          <div style="line-height: 5vh; text-align: center">
            <span><b>{{ questionIndex + 1 }} / {{ questions.length }}</b> </span><br/>
          </div>
        </div>

        <div class="mainBbti" style="text-align: center">
          <h2 style="word-break: keep-all;">{{ questions[questionIndex] }}</h2>
          <div id="imgWrapper">
            <img :src="getImgUrl()" style="max-height: 100%; max-width: 100%;"/>
          </div>
          <!-- <img :src="blah" > -->
        </div>

        <div class="bottomBbti">
          <div class="btnWrapper fontNexonBold">
            <div>
              <v-btn v-for="(item, index) in selections[questionIndex]" :key="index" depressed rounded x-large color="#dff3e3" class="btnMain" @click="selectAnswer(index)">
                {{item}}
              </v-btn>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'QuestionPage',
  data () {
    return {
      questions: [
        '내 토끼를 부르면 내게 온다',
        '처음 보는 사람들에게 내 토끼는?',
        '안겼을 때 내 토끼의 반응은?',
        '집사가 집을 비웠을 때 내 토끼의 반응은?',
        '다른 토끼와 만났을 때 내 토끼는?',
        '주변 사람들이 내 토끼에 대해 하는 말은?',
        '케이지 청소를 할 때 내 토끼의 반응은?',
        '화났을 때 내 토끼는?',
        '내 토끼는 쓰담쓰담을 좋아한다',
        '내 토끼는 편식을 한다'
      ],
      selections: [
        ['맞아요', '아니에요'],
        ['무서워!! 경계한다', '간식주세요~ 반갑게 맞이한다'],
        ['가만히 있는다', '벗어나려 애쓴다'],
        ['잠잔다zzz', '지금이 기회! 여기저기 탐험한다'],
        ['어울리지 않고 혼자 있는다', '호기심을 보이며 같이 논다'],
        ['개구쟁이네!', '시크하네!'],
        ['내 영역이야! 화를 낸다', '별로 상관 없어! 무반응'],
        ['폭풍 스텀핑!!', '스텀핑은 하지 않는다'],
        ['맞아요', '아니에요'],
        ['맞아요', '아니에요']
      ],
      selectedAnswer: [],
      questionIndex: 0,
      img: null,
      resultDict: {'DODO': 1, 'INSSA': 2, 'AGYO': 3, 'SUNDING': 4}
      // blah: null
    }
  },
  methods: {
    selectAnswer (index) {
      this.selectedAnswer.push(index)
      this.questionIndex++

      if (this.questionIndex + 1 > this.questions.length) {
        let fd = new FormData()
        fd.append('answers', this.selectedAnswer)

        if (localStorage.getItem('uploadImage')) {
          // 업로드 이미지 가져오기
          this.img = localStorage.getItem('uploadImage')
          var file = this.dataURLtoFile(this.img, 'image.png')

          fd.append('image', file)
        } else {
          fd.append('image', null)
        }

        let url = this.$store.state.apiUrl + 'bbti'

        axios.post(url, fd)
          .then(resp => {
            localStorage.removeItem('uploadImage')

            let resultId = this.resultDict[resp.data.bbti]
            this.$router.push({ name: 'ResultPage', params: { resultId: resultId } })
          })
          .catch(() => {
            // send('error', '결과를 얻는 데 실패했어요! 오류메시지=> ' + error)

            // 임시로 랜덤으로 결과 출력
            var resultId = Math.floor(Math.random() * 10) % 4 + 1
            this.$router.push({ name: 'ResultPage', params: { resultId: resultId } })
          })
      }
    },

    dataURLtoFile (dataurl, filename) {
      let arr = dataurl.split(',')
      let mime = arr[0].match(/:(.*?);/)[1]
      let bstr = atob(arr[1])
      let n = bstr.length
      let u8arr = new Uint8Array(n)

      while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
      }

      return new File([u8arr], filename, {type: mime})
    },

    getImgUrl () {
      // 로컬스토리지 이미지 파일 확인용
      // this.img = localStorage.getItem('uploadImage')
      // var file = this.dataURLtoFile(this.img,'image.png');
      // this.blah = URL.createObjectURL(file)

      return '/static/images/question_' + (this.questionIndex + 1) + '.png'
    }
  }
}
</script>

<style scoped>
  #app {
    position: relative;
    height: 100%;
    overflow: hidden;
  }

  @media screen and (max-width: 550px) {
    #app {
      background-image: url("/static/images/pattern/leaves.png");
      background-position: center;
      background-repeat: repeat;
    }
  }

  @media screen and (min-width: 551px) {
    #app {
      max-width: 550px !important;
      margin: 0 auto !important;
      background-image: url("/static/images/pattern/leaves.png");
      background-position: center;
      background-repeat: repeat;
    }
  }

  @media screen and (max-height: 600px) {
    #app2 {
      height: 100%;
      min-height: 600px;
    }
  }

  @media screen and (min-height: 601px) {
    #app2 {
      position: relative;
      top: 50%;
      margin-top: -300px;
      height: 600px !important;
    }
  }
</style>
