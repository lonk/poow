<template>
    <div class="mdl-grid">
        <div class="mdl-layout-spacer"></div>
        <div class="mdl-cell mdl-cell--4-col">
            <div class="mdl-card mdl-shadow--6dp">
                <div class="mdl-card__title mdl-color--primary mdl-color-text--white">
                    <h2 class="mdl-card__title-text">Inscription</h2>
                </div>
                <form action="#">
                    <fieldset>
                        <div class="mdl-card__supporting-text">
                                <div class="mdl-textfield mdl-js-textfield">
                                    <input class="mdl-textfield__input" type="text" id="username" />
                                    <label class="mdl-textfield__label" for="username">Pseudo</label>
                                </div>
                                <div class="mdl-textfield mdl-js-textfield">
                                    <input class="mdl-textfield__input" type="password" id="userpass" />
                                    <label class="mdl-textfield__label" for="userpass">Mot de passe</label>
                                </div>
                                <div class="mdl-textfield mdl-js-textfield">
                                    <input class="mdl-textfield__input" type="password" id="conf" />
                                    <label class="mdl-textfield__label" for="conf">Confirmation</label>
                                </div>
                                <div class="mdl-textfield mdl-js-textfield">
                                    <input class="mdl-textfield__input" type="text" id="mail" />
                                    <label class="mdl-textfield__label" for="mail">Adresse mail</label>
                                </div>
                                <div class="mdl-textfield mdl-js-textfield">
                                    <input class="mdl-textfield__input" type="text" id="bio" />
                                    <label class="mdl-textfield__label" for="bio">Mini-bio</label>
                                </div>
                        </div>
                        <div class="mdl-card__actions mdl-card--border">
                            <button class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Inscription</button>
                        </div>
                    </form>
                </fieldset>
            </div>
        </div>
        <div class="mdl-layout-spacer"></div>
    </div>
</template>