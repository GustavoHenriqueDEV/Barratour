<!-- GlobalNavbar.vue -->
<template>
    <nav>
        <div class="nav">
        </div>

        <div class="appbar">
            <div class="menu">
                <img src="../assets/img/barratour2.png" alt="">
                <div class="link-menu">
                    <a  href="">Home</a>
                    <a href="">About</a>
                    <a href="">Comerce</a>
                    <a href="">Donate</a>  
                    <a href="">Contact</a>
                </div>
            </div>
        </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'GlobalNavbar'
  };
  </script>
  
  <style scoped>
  
 .appbar{
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: #eb5757;
 }
.nav{
    display: block;
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: #222;
    color: #f9f9f9;
    font-size: 18px;
    text-decoration: none
}
.icon{
    margin-bottom: 20px;
    width: 50px;
    height: 50px;
}
.icon-container{
    margin-left: 60px;
    display: flex;
    ;
}
.name{
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}

.menu{
    display: flex;
    justify-content: space-between;
    margin-right: 10rem;
    align-items:center;
}
a{
  
    font-family: Sen, sans-serif;
    color: #f9f9f9;
    text-decoration: none;
}

.link-menu {
    display: flex;
    gap: 45px;
  }

img{
    margin-left: 70px;
    width: 120px;
}

.carroselHome{
    min-height: 550px;
    background-image: -webkit-gradient(linear, left bottom, left top, from(#222), to(rgba(34, 34, 34, 0))), url(https://assets.website-files.com/5e7ff3e…/5e83f98…_wu-jianxiong-UniC8xhlzaE-unsplash.jpg);
    background-image: linear-gradient(360deg, #222, rgba(34, 34, 34, 0)), url(https://assets.website-files.com/5e7ff3e…/5e83f98…_wu-jianxiong-UniC8xhlzaE-unsplash.jpg);
    background-position: 0px 0px, 50% 50%;
    background-size: auto, cover;
}

  </style>
  