<template>
<div class="news container">
    <div class="info-bar">
        Новости
    </div>
    <div class="main">
        <div class="title">
            С ДНЕМ НАРОДНОГО ЕДИНСТВА!
        </div>
        <img src="../assets/news.png" alt="" class="news__img">
    </div>
    <div class="footer">

    </div>
</div>
</template>

<style scoped>

.news {
    font-family: Arial, Helvetica, sans-serif;
}

.info-bar {
    font-size: 1.25rem;
    background-color: rgb(223, 223, 223);
    padding: 25px 100px;
}

.main {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: rgb(240, 240, 240);
    padding-bottom: 27px;
}

.title {
    font-size: 1.5rem;
    padding: 22px 0px;
}

.footer {
    background-color: rgb(223, 223, 223);
    height: 45px;
}

.news__img {
    height: 513px;
}

@media screen and (max-width: 1024px) {
    .news__img {
        height: 450px;
    }
    .title {
        font-size: 1.5rem;
    }
}
@media screen and (max-width: 768px) {
    .news__img {
        height: 350px;
    }   
}
@media screen and (max-width: 576px) {
    .news__img {
        height: 259px;
    }
    .title {
        font-size: 1.25rem;
    }
    .info-bar {
        font-size: 1.05rem;
        padding: 25px 50px;
    }
}
@media screen and (max-width: 320px) {
    .news__img {
        height: 210px;
    }
    .title {
        font-size: 1.05rem;
    }
    .info-bar {
        font-size: 1rem;
    }
}

</style>