<template lang="">
    <div class="inf-warapper">
        <div class="inf-left-image"></div>
        <div class="inf-right-image"></div>
       
    </div>
</template>
<script>
export default {
    name: 'ContainerImage'
}
</script>
<style lang="scss">
    

.inf-warapper{
    background-color: white;
    min-height: 500px;
    position: relative;
    justify-content: flex-end;
border-radius: 30px;

}
.inf-left-image{
    position: absolute;
    left: 0%;
    top: 6%;
    right: auto;
    bottom: 0%;
    width: 30%;
    height: 0px;
    min-height: 440px;
    border-radius: 5px;
    background-image: url(../assets/img/mulher-praia.jpg);
    background-position: 69% 80%;
    background-size: 270%;
}
.inf-right-image{
    display: flex;
    height: 410px;
    padding: 45px;
    justify-content: flex-end;
    border-radius: 20px;
    color: #f9f9f9;
}




</style>