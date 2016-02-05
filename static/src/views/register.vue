<template>
    <div class="mdl-grid">
        <div class="mdl-layout-spacer"></div>
        <div class="mdl-cell mdl-cell--4-col">
            <div class="mdl-card mdl-shadow--6dp">
                <div class="mdl-card__title mdl-color--primary mdl-color-text--white">
                    <h2 class="mdl-card__title-text">Inscription</h2>
                </div>
                <form method="post" v-on:submit.prevent="register">
                    <fieldset>
                        <div class="mdl-card__supporting-text">
                                <div class="mdl-textfield mdl-js-textfield">
                                    <input class="mdl-textfield__input" type="text" id="username" v-model="username"/>
                                    <label class="mdl-textfield__label" for="username">Pseudo</label>
                                </div>
                                <div class="mdl-textfield mdl-js-textfield">
                                    <input class="mdl-textfield__input" type="password" id="userpass" v-model="userpass"/>
                                    <label class="mdl-textfield__label" for="userpass">Mot de passe</label>
                                </div>
                                <div class="mdl-textfield mdl-js-textfield">
                                    <input class="mdl-textfield__input" type="password" id="userconf" v-model="userconf"/>
                                    <label class="mdl-textfield__label" for="conf">Confirmation</label>
                                </div>
                                <div class="mdl-textfield mdl-js-textfield">
                                    <input class="mdl-textfield__input" type="text" id="usermail" v-model="usermail"/>
                                    <label class="mdl-textfield__label" for="mail">Adresse mail</label>
                                </div>
                                <div class="mdl-textfield mdl-js-textfield">
                                    <input class="mdl-textfield__input" type="text" id="userbio" v-model="userbio"/>
                                    <label class="mdl-textfield__label" for="bio">Mini-bio</label>
                                </div>
                        </div>
                        <div class="mdl-card__actions mdl-card--border">
                            <input type="submit" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" value="Inscription" />
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
        <div class="mdl-layout-spacer"></div>
    </div>
</template>
<script src="../controllers/register.js" />