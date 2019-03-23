<template>
    <div class="dashBoard">
        <h1>{{msg}}</h1>
    </div>
</template>
<script>
export default {
    name:'DashBoardFile',
    data(){
        return {
            msg:'DashBoardReturn result'
        } 
    }
}
</script>
<style scopedApp>
#app img {
  width:30px;
  height:30px;
}
#app{
    width:30px;
    margin-top: 10px;
}
</style>

