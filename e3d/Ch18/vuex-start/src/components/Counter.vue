<template>
  <div> Counter: {{ count }}   
    <button @click='increment()'>+</button> | 
    <button @click='decrement()'>-</button> 
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('counter')

export default {
  name: 'Counter',  
  computed: {
    /* count() {      
      console.log(`store: ${this.$store}`)
      return this.$store.state.counter.count
    } */
    ...mapState(
      { count: `count` }  // syntax 1
      // [ `count` ]      // syntax 2
    )
  },
  methods: {
    /* increment() { this.$store.dispatch('counter/increment')},
    decrement() { this.$store.dispatch('counter/decrement')} */
    ...mapActions([
      'increment',
      'decrement'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
