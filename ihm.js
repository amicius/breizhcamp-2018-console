var service = require('./service');
var readline = require('readline');
var lg = console.log;

exports.start = function () {
    menu();
};

function menu() {

    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('*************************\n1. Rafraichir les données\n2. Lister les sessions\n99. Quitter\n\n', function (saisie) {

        rl.close();
        return choice(saisie);
    });
};

function choice(saisie) {
    switch (saisie) {
        case '1':
            service.init(function () {
                lg('... Données mises à jour');
            });
            menu();
            break;
        case '2':
            service.listerSessions(function (val) {
                console.log(val.name," (",val.speakers,")")
            });
            menu();
            break;
        case '99':
            lg('Kénavo');
            break;
        default:
            lg('Veuillez saisir 1, 2 ou 99');
            menu();
            break;
    };
};