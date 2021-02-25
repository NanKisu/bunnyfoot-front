<template>
  <div class="container">
    <h4>{{ questionIndex + 1 }} / {{ questions.length }} </h4>
    <span>{{ questions[questionIndex] }}</span>

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
      questionIndex: 0
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
        // axios 호출
        this.$router.push({ name: 'ResultPage', params: { resultId: 1 } })
      }
    }
  }
}
</script>

<style scoped>
body {
  background-color: white !important;
}

</style>
