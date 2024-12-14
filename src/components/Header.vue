<template>
    <div class="header">
        <div class="header__body container">
            <div class="header__title">
                <div class="header__name-2">
                    МОУ СОШ №69
                </div>
            </div>
            <div class="header__main">
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
    </div>
</template>

<style scoped>

.header {
    background-color: #00ABE1;
    width: 100%;
    font-family: Montserrat;
}

.header__name-2 {
    display: none;
    font-size: 3rem;
    font-weight: 500;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.header__logo {
    height: 160px;
}

.header__body {
    color: white;
}

.header__main {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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

@media screen and (max-width: 1024px) {
    .header__name {
        font-size: 2.8rem;
    }   
}
@media screen and (max-width: 768px) {
    .header__logo {
        height: 140px;
    }
    .header__name {
        display: none;
    }

    .header__name-2 {
        display: contents;
        font-size: 2.6rem;
    }

    .header__body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-top: 15px;
    }

    .header__title {
        display: flex;
        justify-content: center;
    }

    .header__info {
        font-size: 1rem;
    }
}
@media screen and (max-width: 576px) {
    .header__name-2 {
        font-size: 2.4rem;
    } 
    .header__info {
        font-size: 0.8rem;
    }
    .header__logo {
        height: 120px;
    }
}
@media screen and (max-width: 320px) {
    .header__logo {
        height: 100px;
    }
    .header__name-2 {
        font-size: 2.25rem;
    } 
    .header__info {
        font-size: 0.6875rem;
    }
}

</style>