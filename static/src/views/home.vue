<template>
    <div class="mdl-grid content-grid">
        <div class="mdl-cell poow-cell mdl-cell--4-col">
            <h3>News</h3>
            Dernière actu...
        </div>
        <div class="mdl-cell poow-cell mdl-cell--4-col">
            <h3>Classement</h3>
            Tableau
        </div>
        <div class="mdl-cell mdl-cell--4-col">
            <div class="mdl-card mdl-shadow--6dp">
                <div class="mdl-card__title mdl-color--primary mdl-color-text--white">
                    <h2 class="mdl-card__title-text">Connexion</h2>
                </div>
                <form v-on:submit.prevent="login">
                    <fieldset>
                        <div class="mdl-card__supporting-text">
                                <div class="mdl-textfield mdl-js-textfield">
                                    <input class="mdl-textfield__input" type="text" id="username" v-model="username" />
                                    <label class="mdl-textfield__label" for="username">Pseudo</label>
                                </div>
                                <div class="mdl-textfield mdl-js-textfield">
                                    <input class="mdl-textfield__input" type="password" id="userpass" v-model="userpass" />
                                    <label class="mdl-textfield__label" for="userpass">Mot de passe</label>
                                </div>
                        </div>
                        <div class="mdl-card__actions mdl-card--border">
                            <input type="submit" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" value="Connexion" />
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</template>
<script src="../controllers/home.js" />