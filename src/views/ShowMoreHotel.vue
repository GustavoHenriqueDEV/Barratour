<template lang="">
    <div class="body">
        <div class="hotel-appbar">
            <img src="" alt="BarraTourLogo">
        </div>
        <div class="text-hotel-wrapper">
            <div class="text-suport">
                Nome do Hotel
            </div>
        </div >

        <div class="hotel-content">
            <div class="container-hotel">
                <div class="image1a1-wraper">
                    <img class="imagem1a1" src="../assets/img/casa-exemplo.jpg" alt="Uma imagem">
                </div>
                <div class="second-collum" >

                    <div class="image1a2">
                        <img class="image1a2" src="../assets/img/casa-exemplo2.jpg" alt="a">
                    </div>
                    <div class="image2a2">
                        <img class="image2a2" src="../assets/img/casa-exemplo3.jpg" alt="a">
                    </div>
                </div>
                <div class="second-collum" >


                    <div class="image1a2">
                        <img  class="image1a2" src="../assets/img/casa-exemplo3.jpg" alt="a">
                    </div>
                    <div class="image2a2">
                        <img  class="image1a2" src="../assets/img/casa-exemplo3.jpg" alt="a">
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
<style lang="scss" scoped>

.hotel-appbar{
    height: 80px;
    border-bottom: 1px solid grey;
    padding-left: 700px;
}

.second-collum{
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}
.imagem1a1{
    margin-left: 10px;

    gap: 10px;
    height: 560px;
    width: 503px;

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

.image2a2{
    margin-left: 10px;

    gap: 10px;
    height: 272px;
    width: 243px;
}


.image1a2{
    margin-left: 10px;
    gap: 10px;
    height: 272px;
    width: 243px;
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
    justify-content: center;
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