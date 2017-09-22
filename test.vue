

<div id='root'>
  <ul>
    <li v-for='name in listOfNames'> {{name}} </li>
  </ul>
</div>


<script>
new Vue({
  el:'#root',
  data: {
    listOfNames: ['Kevin', 'John', 'Sarah', 'Alice']
  }
})
</script>
