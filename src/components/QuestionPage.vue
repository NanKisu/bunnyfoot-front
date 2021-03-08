<template>
  <div class="container fontCookierun">
    <h4>{{ questionIndex + 1 }} / {{ questions.length }} </h4>
    <span>{{ questions[questionIndex] }}</span>

    <div style="height: 50vh; text-align: center">
      <img :src="getImgUrl()" style="max-height: 100%; max-width: 100%;"/>
    </div>
    <img :src="blah" >

    <div v-for="(item, index) in selections[questionIndex]" :key="index">
      <v-btn depressed rounded x-large class="btnMain" @click="selectAnswer(index)">
        {{item}}
      </v-btn>
    </div>
    <!-- <div v-for="answer in questions[questionIndex].answers" :key="answer.value">
      <input type="radio" name="answer" :value="answer.value" v-model="questions[questionIndex].selectedAnswer" @change="answerChange"/>
      {{answer.label}}
    </div> -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'QuestionPage',
  data () {
    return {
      questions: [
        '내 토끼를 부르면 바로 돌아오거나 뛰어온다',
        '처음 보는 사람들에게 내 토끼는?',
        '안겼을 때 내 토끼의 반응은?',
        '집사가 집을 비웠을 때 내 토끼의 반응은?',
        '다른 토끼와 만났을 때 내 토끼는?',
        '주변 사람들이 내 토끼에 대해 하는 말은?',
        '케이지 청소를 할 때 내 토끼의 반응은?',
        '화났을 때 내 토끼는?',
        '내 토끼의 머리를 쓰다듬으면 고개를 바로 숙인다'
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
        ['맞아요', '아니에요']
      ],
      selectedAnswer: [],
      // questions: [
      //   {
      //     question: '내 토끼를 부르면 바로 돌아오거나 뛰어온다',
      //     answers: [
      //       {value: 1, label: 'Yes'},
      //       {value: 2, label: 'No'}
      //     ],
      //     selectedAnswer: ''
      //   },
      // ],
      questionIndex: 0,
      img: null,
      blah: null
    }
  },
  methods: {
    // answerChange (event) {
    //   event.target.checked = false
    //   this.questionIndex++
    //   if (this.questionIndex > this.questions.length) {
    //     this.$router.push('/result')
    //   }
    // },

    selectAnswer (index) {
      this.selectedAnswer.push(index)
      this.questionIndex++
      if (this.questionIndex + 1 > this.questions.length) {

        // 업로드 이미지 가져오기
        this.img = localStorage.getItem('uploadImage')
        var file = this.dataURLtoFile(this.img,'image.png');
        
        var object = {};
        let fd = new FormData()
        fd.append('image', file)
        fd.append('answers', this.selectedAnswer)

        axios.post('http://localhost:8080/server/bbti', fd)
        .then(resp => {
          console.log(resp)
          // this.imagePath = resp.data.path
          // this.$router.push({ name: 'ResultPage', params: { resultId: 1 } })
        })

        
      }
    },

    dataURLtoFile(dataurl, filename) {
 
        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), 
            n = bstr.length, 
            u8arr = new Uint8Array(n);
            
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        
        return new File([u8arr], filename, {type:mime});
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
body {
  background-color: white !important;
}

</style>
