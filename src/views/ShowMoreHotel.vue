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
                    <img class="image-content-right" src="../assets/img/casa-exemplo3.jpg" alt="a">
                </div>
                <div class="image-right">
                    <img class="image-content-right" src="../assets/img/casa-exemplo3.jpg" alt="a">
                </div>
            </div>
            <div class="hotel-content-right">
                <div class="image-right">
                    <img class="image-content-right" src="../assets/img/casa-exemplo3.jpg" alt="a">
                </div>
                <div class="image-right">
                    <img class="image-content-right" src="../assets/img/casa-exemplo3.jpg" alt="a">
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
    .image-content-right,
    .image-content-left {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .image-right{
        margin-top:5px;
        gap: 10px;
    }

    .image-content-right {
        margin-bottom: 10px;
        gap: 10px;
        height: 100%;
        /* Ajusta a altura para 100% */
    }
    .hotel-appbar {
        height: 80px;
        border-bottom: 1px solid grey;
    }

    .hotel-images-wrapper {
        display: flex;
        justify-content: center;
        gap: 10px;
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
    .hotel-content-left {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 90vh;
        width: 60vh;
    }
    .hotel-content-right {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 50vh;
    }
</style>