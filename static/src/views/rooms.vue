<template>
    <div class="mdl-grid">
        <div class="mdl-layout-spacer"></div>
        <div class="mdl-cell mdl-cell--4-col">
            <table class="rooms-table mdl-data-table mdl-js-data-table mdl-shadow--2dp">
                <thead>
                    <tr>
                        <th class="mdl-data-table__cell--non-numeric">Nom de la salle</th>
                        <th>Joueurs</th>
                        <th class="mdl-data-table__cell--non-numeric">Privée</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="mdl-data-table__cell--non-numeric">Lonkerie</td>
                        <td>3/4</td>
                        <td class="mdl-data-table__cell--non-numeric">Oui</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="mdl-layout-spacer"></div>
    </div>
</template>
<script src="../controllers/rooms.js" />