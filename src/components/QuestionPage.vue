<template>
  <div class="container">
    안녕
    <h4>{{questions[questionIndex].question}}</h4>
    <div v-for="answer in questions[questionIndex].answers" :key="answer.value">
      <input type="radio" name="answer" :value="answer.value" v-model="questions[questionIndex].selectedAnswer" @change="answerChange"/>
      {{answer.label}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuestionPage',
  data () {
    return {
      questions: [
        {
          question: 'Q1. 질문1',
          answers: [
            {value: 1, label: '질문1 선택지1'},
            {value: 2, label: '질문1 선택지2'}
          ],
          selectedAnswer: ''
        },
        {
          question: 'Q2. 질문2',
          answers: [
            {value: 1, label: '질문2 선택지1'},
            {value: 2, label: '질문2 선택지2'}
          ],
          selectedAnswer: ''
        },
        {
          question: 'Q3. 질문3',
          answers: [
            {value: 1, label: '질문3 선택지1'},
            {value: 2, label: '질문3 선택지2'}
          ],
          selectedAnswer: ''
        }
      ],
      questionIndex: 0
    }
  },
  methods: {
    answerChange (event) {
      event.target.checked = false
      this.questionIndex++
      if (this.questionIndex > this.questions.length) {
        this.$router.push('/result')
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
