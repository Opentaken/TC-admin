<template>
 <div>
     <quillEditor ref="myTextEditor"></quillEditor>
 </div>
</template>
 
<script>
 import { quillEditor } from 'vue-quill-editor' //调用编辑器
 export default {
  data() {
   return {}
  },    
  components: {
//使用编辑器
   quillEditor
  }
 }
</script>