<template>
    <div>
        <button @click="send()">쏘기</button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  methods: {
    send () {
      let fd = new FormData()
      fd.append('image', null)
      let url = this.$store.state.apiUrl + 'bbti'

      var list = []
      var type = {}
      type['DODO'] = 0
      type['INSSA'] = 0
      type['AGYO'] = 0
      type['SUNDING'] = 0
      // answers 만들기
      for (var i1 = 0; i1 < 2; i1++) {
        list.push(i1)
        for (var i2 = 0; i2 < 2; i2++) {
          list.push(i2)
          for (var i3 = 0; i3 < 2; i3++) {
            list.push(i3)
            for (var i4 = 0; i4 < 2; i4++) {
              list.push(i4)
              for (var i5 = 0; i5 < 2; i5++) {
                list.push(i5)
                for (var i6 = 0; i6 < 2; i6++) {
                  list.push(i6)
                  for (var i7 = 0; i7 < 2; i7++) {
                    list.push(i7)
                    for (var i8 = 0; i8 < 2; i8++) {
                      list.push(i8)
                      for (var i9 = 0; i9 < 2; i9++) {
                        list.push(i9)
                        for (var i10 = 0; i10 < 2; i10++) {
                          list.push(i10)
                          // console.log(list)

                          fd.append('answers', list)
                          axios.post(url, fd)
                            .then(resp => {
                              type[resp.data.bbti]++
                              fd.delete('answers')
                              console.log(type)
                            })
                            .catch(() => {
                              console.log(list)
                              fd.delete('answers')
                              console.log(type)
                            })
                          // cnt++

                          list.pop()
                        }
                        list.pop()
                      }
                      list.pop()
                    }
                    list.pop()
                  }
                  list.pop()
                }
                list.pop()
              }
              list.pop()
            }
            list.pop()
          }
          list.pop()
        }
        list.pop()
      }
    }
  }
}
</script>
