<template lang="">
    <div class="body">
        <div class="hotel-appbar">
            <img src="" alt="BarraTourLogo">
        </div>
        <div class="text-hotel-wrapper">
            <div class="text-suport">
                Nome do Hotel
            </div>
        </div>
        <div class="hotel-images-wrapper">
            <div class="hotel-content-left">
                <div class="image-left">
                    <img class="image-content-left" src="../assets/img/casa-exemplo.jpg" alt="a">
                </div>
            </div>
            <div class="hotel-content-right">
                <div class="image-right">
                    <img class="image-content-right" src="" alt="a">
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
    export default {
    }
</script>
<style lang="scss" scoped>
    .hotel-appbar {
        height: 80px;
        border-bottom: 1px solid grey;
    }

    .hotel-images-wrapper{
        display: flex;
        justify-content: center;
    }
    .text-suport {
        font-family: 'Libre Bodoni', Georgia, "Times New Roman", serif;
        font-size: 50px;
        color: #2b2d42 !important;
        line-height: 1.2em;
        text-align: center;
    }
    .body {
        width: 100%;
        min-height: 100vh;
    }
    .hotel-content-left{
        align-items: center;
        background-color: red;
        justify-content: center;
        height: 70vh;
        width: 60vh;
    }
    .image-content-left{
        height: 100px;
        width: 100px;
    }
    .hotel-content-right{
        align-items: center;
        background-color: rgb(38, 0, 255);
        justify-content: center;
        height: 70vh;
        width: 60vh;
    }
</style>