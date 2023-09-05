<template lang="">
    <div style="display: inline-block; width: 278.8414306640625px" data-ignore="used only for top most containter width">
        <div class="login-container">
            <p class="login-title">Login</p>
        </div>
    </div>
</template>
<script>
export default {
    name:"ButtonComponent"
}
</script>
<style scoped>

.login-container {
   box-sizing: border-box;
   display: flex;
   flex: 0 0 auto;
   flex-direction: column;
   align-items: stretch;
   justify-content: center;
   height: 3.5625rem;
   padding-right: 7.1875rem;
   padding-left: 7.1875rem;
   background: #7da88c;
   border-radius: 0.375rem;
}

.login-title {
   box-sizing: border-box;
   flex: 0 0 auto;
   font: 500 1rem Poppins;
   color: white;
}

</style>