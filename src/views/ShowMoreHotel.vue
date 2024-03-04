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
                    <div class="f1">
                        <img class="f1" src="../assets/img/casa-exemplo2.jpg" alt="a">
                    </div>
                    <div class="f2">
                        <img class="f2" src="../assets/img/casa-exemplo3.jpg" alt="a">
                    </div>
                </div>


                <div class="second-collum" >
                    <div class="f3">
                        <img  class="f3" src="../assets/img/casa-exemplo3.jpg" alt="a">
                    </div>
                    <div class="f4">
                        <img  class="f4" src="../assets/img/casa-exemplo3.jpg" alt="a">
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
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    gap: 10px;
    height: 563px;
    width: 503px;
}

.f1{
    margin-left: 10px;
    gap: 10px;
    height: 272px;
    width: 243px;

}
.f2{
    margin-left: 10px;
    gap: 10px;
    height: 272px;
    width: 243px;

}
.f3{
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    margin-left: 10px;
    gap: 10px;
    height: 272px;
    width: 243px;

}
.f4{
    border-bottom-right-radius: 20px;
    margin-left: 10px;
    gap: 10px;
    height: 272px;
    width: 243px;
}




.hotel-content{
    display: flex;
    justify-content: center;
}
.image1a1-wraper{
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