<template>
    <div class="scheldue">
        <div class="scheldue__body container">
            <div class="scheldue__title">
                Расписание
            </div>
            <div class="scheldue__class">
                <div class="scheldue__txt">
                    ВЫБОР КЛАССА
                </div>
                <div class="scheldue__menu">
                    <div class="scheldue__word">
                        8М
                    </div>
                    <img src="../assets/arr.png" alt="" class="scheldue__arr">
                </div>
            </div>
            <div class="scheldue__cards">
                <CardScheldue v-for="(lesons, key) in schedule" :name='key' :lesons="lesons"></CardScheldue>
            </div>
            
        </div>
    </div>
</template>

<script setup>
import CardScheldue from './CardScheldue.vue';

const schedule = {
    "Понедельник": {
        1: "Разговоры о важном",
        2: "География",
        3: "Алгебра",
        4: "Биология",
        5: "Физика",
        6: "Русский язык",
        7: "Литература",
        
    },
    "Вторник": {
        1: "Алгебра",
        2: "Геометрия",
        3: "История",
        4: "ОБЗР",
        5: "Иностранный язык",
        6: "Литература",
        7: "Физическая культура"
    },
    "Среда": {
        2: "Химия",
        3: "Русский язык",
        4: "Физика",
        5: "Алгебра",
        6: "История",
        7: "Иностранный язык"
    },
    "ЧЕТВЕРГ": {
        1: "Профориентация",
        2: "Химия",
        3: "Биология",
        4: "Русский язык",
        5: "Алгебра",
        6: "Обществознание",
        7: "Физическая культура"
    },
    "ПЯТНИЦА": {
        2: "География",
        3: "Информатика",
        4: "Геометрия",
        5: "Музыка",
        6: "Литература",
        7: "Технология"
    },
    "СУББОТА(дистант)": {
        1: "Вероятность и статистика",
        2: "Русский язык",
        3: "История",
    },
    
};
</script>

<style scoped>

.scheldue {
    font-family: Arial, Helvetica, sans-serif;
}

.scheldue__cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin: 30px 60px;
}

.scheldue__title {
    font-size: 1.5rem;
    padding: 20px 10px;
}

.scheldue__class {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    margin-left: 90px;
}


.scheldue__menu {
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid black;
}

.scheldue__txt {
    font-size: 0.75rem;
    color: rgba(0, 0, 0, 0.61);
}

.scheldue__word {
    padding: 0px 24px;
}

@media screen and (max-width: 1024px) {
  
}
@media screen and (max-width: 768px) {
  
}
@media screen and (max-width: 576px) {
  
}
@media screen and (max-width: 320px) {
    .scheldue__class {
        margin-left: 60px;
    }
}

</style>