<template>
    <div class="nav-bar container">
        <div class="list__elements">
            <div class="element">
                ГЛАВНАЯ
            </div>
            <div class="element">
                СВЕДЕНИЯ<br>ОБ ОБРАЗОВАТЕЛЬНОЙ ОРГАНИЗАЦИИ
            </div>
            <div class="element dropdown">
                <div class="el-icon">
                    <img src="../assets/tr.png" alt="" class="icon">
                    <div class="el">
                        УЧАЩИМСЯ
                    </div>
                </div>
                <div class="dropdown-content">
                    <a href="#">Ссылка 1</a>
                    <a href="#">Ссылка 2</a>
                    <a href="#">Ссылка 3</a>
                </div>
            </div>
            <div class="element">
                <div class="el-icon">
                    <img src="../assets/tr.png" alt="" class="icon">
                    <div class="el">
                        РОДИТЕЛЯМ
                    </div>
                </div>
            </div>
            <div class="element">
                <div class="el-icon">
                    <img src="../assets/tr.png" alt="" class="icon">
                    <div class="el">
                        УЧИТЕЛЯ
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

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

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #ddd;}

.element:hover .dropdown-content {display: block;}


</style>