<template>
  <h1> {{message}} </h1>
  <Button @click="reverseMessage" class="p-button-warning" >Reverse Message</Button>
  <Button @click="message += '!'" class="p-button-help">Append "!"</Button>
  <a href="https://vuejs.org" @click.prevent="notify">
  A link with e.preventDefault()</a>
  <p>
    <span :title="message">
      Hover your Mouse over me for a few seconds to see me dynamically bound title!
    </span>
  </p>
  
  <p :class="{red : isRed }" @click="toggleRed"> This should be red... but click me to toggle it</p>

  <p :style="{color}" @click="toggleColor">This should be green, and should toggle between green and blue on click</p>

  <!-- <button @click="show = !show">Toggle List</button>

  <button @click="list.push(list.length + 1)">Push Number</button>

  <button @click="list.pop()">Pop Number</button>

  <button @click="list.reverse()">Reversing the List</button>

  <ul v-if="show && list.length">
    <li v-for="item in list"> <h1>{{ item }}</h1>
     </li>
  </ul>
  <p v-else-if="list.length">List is not empty, but hidden</p>
  <p v-else>List is empty</p> -->

  <!--List conditional renderings and loops-->

  <Button @click="show = !show" class="p-button-secondary">Toggle List</Button>
  <Button @click="list.push(list.length + 1)" class="p-button-danger">Push Number</Button>
  <Button @click="list.pop()" class="p-button-info" >Popping Number</Button>
  <Button @click="list.reverse()" class="p-button-success" >Reversing list</Button>
  <ul v-if="list.length && show">
    <li v-for="items in list">
      <h1>
          {{items}}
      </h1>
    </li>
  </ul>

  <p v-else-if="list.length">Not Empty but hidden</p>
  <p v-else>List is Empty</p>

  <h2>Text Input</h2>
  <InputText type="text" v-model="text"/>
  <h1> {{text}} </h1>

  <h2>Checkbox</h2>
  <Checkbox v-model="checked" :binary="true" />
  <label for="checkbox">Checked: {{ checked }}</label>

  <h2>Multiple checkBoxes</h2>
  <Checkbox  id="priya" value="Priya" v-model="checkedNames"/>
  <label for="priya">Priya</label>

  <Checkbox  value="Vaishu" id='vaishu' v-model="checkedNames"/>
  <label for="vaishu">Vaishu</label>

  <Checkbox  id="abi" value="Abi" v-model="checkedNames"/>
  <label for="abi">Abi</label>

 <p>Checked Names: <pre>{{checkedNames}}</pre> </p>

    <h2>Radio</h2>
    <label for="one">One</label>
    <RadioButton type="radio" id="one" value="one" v-model="picked"/>
    <br/>
    <label for="two">Two</label>
    <RadioButton type="radio" id="two" value="two" v-model="picked"/><br/>
    <label for="five">Five</label>
    <RadioButton type="radio" id="five" value="Five" v-model="picked"/><br/>
    <span>Picked: {{picked}}</span>
    
    <Dropdown v-model="selected" :options="student" optionLabel="name" placeholder="Select a student" />
    <span style="margin-bottom:30px">Selected:{{selected}}</span>
    <br/>

    <h2>Mutli select</h2>
    <MultiSelect v-model="multiSelected" :options="student" optionLabel="name" placeholder="Select Multiple"/>
    <p>Selected:{{multiSelected}}</p>



</template>

<script>


export default {
  name: 'App',
  data(){
    return{
      message:'Hello World!',
      isRed:true,
      color:'purple',
      show:true,
      list:[1,2,3],
      text: 'Edit Me',
      checked: true,
      checkedNames:['Priya'],
      picked:'one',
      multiSelected:['Arvind'],
      selected:'priya',
      student:[
        {name:'Priya',value:'Priya'},
        {name:'Arvind', value:'Arvind'},
        {name:'Aakash',value:'Aakash'}
      ]
    }
  }, 
  methods:{
    reverseMessage(){
      this.message = this.message.split('').reverse('').join('')
    },
    notify(){
      alert('Navigation was Prevented')
    },
    toggleRed(){
      this.isRed = !this.isRed
    },
    toggleColor(){
      this.color = this.color === "purple" ? "blue" : "purple"
    }
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.red{
  color:red;
}
li{
  list-style-type:none;
}
Button{
  margin:10px !important;
}
</style>
