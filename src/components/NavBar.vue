<template>
    <div class="nav-bar container">
        <div class="list__elements"> 
            <router-link to="/" class="element">
                ГЛАВНАЯ
            </router-link>
            <router-link to="/about" class="element">
                СВЕДЕНИЯ<br>ОБ ОБРАЗОВАТЕЛЬНОЙ ОРГАНИЗАЦИИ
            </router-link>
            <div class="element dropdown">
                <div class="el-icon">
                    <img src="../assets/tr.png" alt="" class="icon">
                    <div class="el">
                        УЧАЩИМСЯ
                    </div>
                </div>
                <div class="dropdown-content">
                    <a href="#">Электронный дневник</a>
                    <a href="#">Олимпиады</a>
                    <router-link to="/schedule"> Расписание </router-link> 
                    <a href="#">Детские объединения</a>
                </div>
            </div>
            <div class="element dropdown">
                <div class="el-icon">
                    <img src="../assets/tr.png" alt="" class="icon">
                    <div class="el">
                        РОДИТЕЛЯМ
                    </div>
                    <div class="dropdown-content">
                        <a href="#">Прием в школу</a>
                        <a href="#">График работы администрации</a>
                    </div>
                </div>
            </div>
            <div class="element dropdown">
                <div class="el-icon">
                    <img src="../assets/tr.png" alt="" class="icon">
                    <div class="el">
                        УЧИТЕЛЯ
                    </div>
                    <div class="dropdown-content dc_last">
                        <a href="#">МО учителей начальной школы</a>
                        <a href="#">МО учителей физкультуры и ОБЖ</a>
                        <a href="#">МО учителей русского языка и литературы</a>
                        <a href="#">МО учителей технологии и искусства</a>
                        <a href="#">МО учителей истории, биологии, химии и географии</a>
                        <a href="#">МО учителей иностранного языка</a>
                        <a href="#">МО учителей математики, физики и информатики</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { RouterLink} from 'vue-router'


</script>


<style scoped>

.nav-bar {
    margin-top: 20px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.125rem;
}

.icon {
    height: 20px;
    width: 20px;
}

.element {
    background-color: #00ABE1;
    color: white;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 12px 16px;
    flex: 1;
    cursor: pointer;
}

.element:nth-child(2) {
    flex: 2;
}

.element:hover {
    background-color: #01A1D4;
}

.el-icon {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    text-align: center;
}

.list__elements {
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: stretch;
}

.dropdown {
    position: relative; /* Позиционируем родительский элемент */
}

.dropdown-content {
    display: none;
    position: absolute; /* Абсолютное позиционирование относительно .dropdown */
    top: 100%; /* Смещаем выпадающее меню вниз */
    left: 0; /* Выравниваем по левому краю родителя */
    background-color: #00ABE1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
}

.dropdown-content a {
  color: white;
  padding: 24px 43px;
  text-decoration: none;
  display: block;
}

.dc_last a {
    padding: 13px 12px;
}

.dropdown-content a:hover {background-color: #01A1D4;}

.element:hover .dropdown-content {display: block;}

@media screen and (max-width: 1024px) {
    .nav-bar {
        font-size: 1rem;
    }
}
@media screen and (max-width: 768px) {
    .list__elements {
        display: flex;
        flex-wrap: wrap; 
        justify-content: space-between;
    }
    
}

@media screen and (max-width: 576px) {
    .nav-bar {
        font-size: 0.8rem;
    }
    
}

@media screen and (max-width: 320px) {

}
</style>