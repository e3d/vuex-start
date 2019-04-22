<template>
  <div> Counter: {{ count }}   
    <button @click='increment()'>+</button> | 
    <button @click='decrement()'>-</button> 
  </div>
</template>

<script>
export default {
  name: 'Counter',
  props: {
    // count: Number
  },
  computed: {
    count() {
      return this.$store.state.count
    }
  },
  methods: {
    increment() { this.$store.commit('increment')},
    decrement() { this.$store.commit('decrement')}
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
