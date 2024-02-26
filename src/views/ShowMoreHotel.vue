<template lang="">
    <div class="body">
        <div class="text-hotel-wrapper">
            <div class="text-suport">
                Nome do Hotel
            </div>
        </div >

        <div class="hotel-content">
            <div class="container-hotel">
                <div class="image1a1-wraper">
                    <img class="imagem1a1" src="" alt="Uma imagem">
                </div>
                <div class="second-collum" >

                    <div class="image1a2">
                        <img src="" alt="a">
                    </div>
                    <div class="image2a2">
                        <img src="" alt="a">
                    </div>
                </div>
                <div class="second-collum" >


                    <div class="image1a2">
                        <img src="" alt="a">
                    </div>
                    <div class="image2a2">
                        <img src="" alt="a">
                    </div>
                </div>
               

            </div>
        </div>


        
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
.second-collum{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.hotel-content{
    display: flex;
    justify-content: center;
}
.image1a1-wraper{
    background-color: rebeccapurple;
    height: 560px;
    width: 503px;
}

.text-hotel-wrapper{
    display: flex;
    justify-content: center;
    padding-top: 10rem;
}
.text-suport{
    font-family: 'Libre Bodoni', Georgia, "Times New Roman", serif;
    font-size: 50px;
    color: #2b2d42 !important;
    line-height: 1.2em;
    text-align: center;
}
.container-hotel{
    display: flex;
    width: 1903px;
    height: 570px;
    background-color: antiquewhite;
}

.body{
    width: 100%;
    height: 1300vh;
}

</style>