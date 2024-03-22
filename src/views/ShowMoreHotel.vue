<template lang="">
    <div class="body">
        <div class="hotel-appbar">
            <img  class="hotel-logo" src="../assets/img/barratour2.png" alt="BarraTourLogo">
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
        <div class="hotel-inf-wrapper">

            <div class="container-hotel-inf">
                <div class="inf-left">
                    <div> Tipo do lugar e localização <br>
                    Quantidade de comodos
                    </div>
                    <hr/>
                        <div class="avaliacao-section">
                            <div class="stars-avaliation">Estrelinhas Avalização</div>
                            <hr>
                            <div class="comentari-section">Comentários</div>
                        </div>
                </div>

                <div class="inf-right">
                    <div class="hortel-inf-card">
                        <div class="preço-hotel">Preço</div>
                        <button class="btn-reservar">Entrar em Contato</button>
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

    @media only screen and (max-width: 768px) {
    
    
        .container-hotel-inf {
    display: flex;
    width: 400px !important;
    flex-wrap: wrap; /* Permitir que os elementos se movam para a próxima linha quando não couberem mais */
}

.hotel-logo {
    margin-left: 180px !important; /* Centralizar o logotipo e adicionar um pequeno espaçamento nas laterais */
    height: 50px;
}
.hotel-content-left{
    height: 240px !important;
}

.hotel-inf-card {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 10px;
    width: 100%; /* Ocupar toda a largura disponível */
    padding: 20px;
    margin-top: 20px;
}

.btn-reservar {
    background-color: #FF385C;
    border: none;
    color: white;
    padding: 14px 24px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin-top: 10px;
    cursor: pointer;
    border-radius: 8px;
}

.inf-left {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 10px;
    border-radius: 10px;
    width: 100%; /* Ocupar toda a largura disponível */
    margin-bottom: 20px;
}

.inf-right {
    width: 100%; /* Ocupar toda a largura disponível */
    text-align: center;
}

.hotel-images-wrapper {
    display: flex;
    margin-top: 40px !important;
    flex-wrap: wrap; /* Permitir que as imagens se movam para a próxima linha quando não couberem mais */
    justify-content: space-around; /* Espaçamento uniforme entre as imagens */
    margin: 20px auto; /* Centralizar e adicionar espaçamento nas laterais */
}

.hotel-content {
    width: 45%; /* Definir a largura para ocupar 45% da largura do contêiner pai */
    margin-bottom: 20px;
}

.image-content {
    border-radius: 10px;
    width: 100%; /* Ocupar toda a largura disponível */
    height: auto; /* Altura automática para manter a proporção da imagem */
    object-fit: cover;
}

.text-suport {
    font-size: 24px; /* Reduzir o tamanho da fonte para melhor adaptação em dispositivos móveis */
}

  body {
        width: 100%;
        min-height: 100vh;
        margin: 0;
        padding: 0;
    }

    }


    .comentari-section{
        display: flex;
        justify-content: center;
        margin-top: 300px;
        height: 100px;
    }

    .container-hotel-inf{
        height: 90vh;
        width: 120vh;
        display: flex;
    }
    .hotel-logo{
        margin-left: 900px;
        margin-top: 10px;
        height: 50px;
        object-fit: cover;

    }
    .hortel-inf-card{
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        border-radius: 10px;
        width: 30vh;
        height: 20vh;
        border: 1px solid #c3c3c385;
        display: flex;
        flex-direction: column;
        padding-top: 50px;
        align-items: center;
    }
    .btn-reservar {
            background-color: #FF385C;
            border: none;
            color: white;
            padding: 14px 24px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
            border-radius: 8px;
            }
            
    .inf-right {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 40vh;
    }
    .inf-left{
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        padding: 10px;
        border-radius: 10px;
        width: 80vh;
    }
    .hotel-inf-wrapper{
    display: flex;
    justify-content: center;
    height: 120vh;
    }
    .image-content-right,
    .image-content-left {
        border-radius: 10px;
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
    }
    .hotel-appbar {
        height: 80px;
        border-bottom: 1px solid rgba(128, 128, 128, 0.308);
    }

    .hotel-images-wrapper {
        border-radius: 10px;
        margin: 10px;
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