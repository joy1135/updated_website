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

</style>