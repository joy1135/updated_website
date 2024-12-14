<template>
    <div class="about-us">
        <div class="about-us__body container">
            <div class="about-us__title">
                ОСНОВНЫЕ СВЕДЕНИЯ
            </div>
            <div class="about-us__list">
                <div class="about-us__item">
                    <div class="about-us__subtitle">
                        Полное наименование ОУ: 
                    </div>
                    <div class="about-us__txt">
                        Муниципальное общеобразовательное учреждение средняя общеобразовательная школа №69
                    </div>
                </div>
                <div class="about-us__item">
                    <div class="about-us__subtitle">
                        Краткое наименование ОУ:
                    </div>
                    <div class="about-us__txt">
                        МОУ СОШ №69
                    </div>
                </div>
                <div class="about-us__item">
                    <div class="about-us__subtitle">
                        Директор школы с 1989 года по 1991 год:
                    </div>
                    <div class="about-us__txt">
                        молодой педагог Елизаров Роман.
                    </div>
                </div>
                <div class="about-us__item">
                    <div class="about-us__subtitle">
                        Действующий директор школы: 
                    </div>
                    <div class="about-us__txt">
                        Шипунова Валентина Сергеевна.
                    </div>
                </div>
                <div class="about-us__item">
                    <div class="about-us__subtitle">
                        Действующие программы:
                    </div>
                    <div class="about-us__txt">
                        "Укрепление здоровья и формирование здорового образа жизни учащихся МОУ СОШ № 69".<br>
                        "Формирование ключевых компетенций средствами школьного туризма и краеведения".<br> 
                        "Одаренные дети".<br>
                        "Система дополнительного образования МОУ СОШ № 69".
                    </div>
                </div>
                <div class="about-us__item">
                    <div class="about-us__subtitle">
                        Достижения: 
                    </div>
                    <div class="about-us__txt">
                        Победитель конкурса общеобразовательных учреждений, внедряющих инновационные образовательные программы в 2008 году.<br>
                        Участник международного движения "Добрые дети мира".<br>
                        Школа занесена в реестр "Всероссийская книга Почёта" - 2008 год. 
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.about-us {
    font-family: Arial, Helvetica, sans-serif;
}

.about-us__body {
    font-size: 1.25rem;
    background-color: rgb(240, 240, 240);
}

.about-us__title {
    padding: 25px 100px;
}

.about-us__list {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.about-us__item {
    display: flex;
    flex-direction: row;
    gap: 10px;
    background-color: rgb(223, 223, 223);
    padding: 13px 10px;
}

.about-us__subtitle {
    font-weight: 700;
    white-space: nowrap;
}

.about-us__txt {
    white-space: wrap;
}

@media screen and (max-width: 1024px) {
    .about-us__list {
        font-size: 1.2rem;
    }
}
@media screen and (max-width: 768px) {
    .about-us__list {
        font-size: 1.1rem;
    }
}
@media screen and (max-width: 576px) {
    .about-us__list {
        font-size: 0.9rem;
    }
    .about-us__item {
        flex-direction: column;
    }
    .about-us__title {
        padding: 20px 10px;
    }
}   
@media screen and (max-width: 320px) {
    .about-us__list {
        font-size: 0.8rem;
    }
}

</style>