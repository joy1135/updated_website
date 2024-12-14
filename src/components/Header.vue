<template>
    <div class="header">
        <div class="header__body container">
            <img src="../assets/logo.png" alt="Логотип Школы" class="header__logo">
            <div class="header__name">
                МОУ СОШ №69
            </div>
            <div class="header__info">
                <div class="header__adres">
                    Свердловская область,<br> 
                    г. Нижний Тагил,<br>Октябрьский проспект, 16а
                </div>
                <div class="header__phone">
                    +7 (3435) 32-70-12
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.header {
    background-color: #00ABE1;
    height: 160px;
    width: 100%;
    font-family: Montserrat;
}

.header__body {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: white;
}

.header__name {
    font-size: 3rem;
    font-weight: 500;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.header__info {
    font-size: 1.125rem;
}
.header__adres {
    text-align: left;
    padding-bottom: 11px;
    display: flex;
    align-items: center;
}

</style>