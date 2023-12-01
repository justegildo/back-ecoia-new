const db = require("../config/dbConfig");
const utilisateurQueries = require('../queries/utilisateur.queries');
const typeUtilisateurQueries = require('../queries/typeUtilisateur.queries');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');


//afficher tous les utilisateurs
module.exports.getAllUtilisateurs = async (req, res) => {

    const results = await db.query(utilisateurQueries.getAllUtilisateurs)
    //console.log(result.rowCount);

    if (results.rowCount) {
        res.status(200).json(results.rows);

    } else {
        res.status(404).send("Pas de données disponible")
    }
}

// récupérer une utilisateur
module.exports.getUtilisateurById = async (req, res) => {

    const id = parseInt(req.params.id);

    const result = await db.query(utilisateurQueries.getUtilisateurById, [id])
    //console.log(result.rowCount);

    if (result.rowCount) {
        res.status(200).json(result.rows);
    } else {
        res.status(404).send("Cet utilisateur n'existe pas")
    }
}

//ajouter une utilisateur
module.exports.addUtilisateur = async (req, res) => {
    const { nom, prenoms, sexe, email, telephone, password, type_utilisateur, nom_ecole } = req.body;
    //console.log(req.body);

    const result = await db.query(utilisateurQueries.checkEmailExists, [email, telephone]);

    if (result.rows.length) {

        res.status(404).send("Cet email / numéro de téléphone existe déjà !");

    } else {
        try {
            const resultType = await db.query(typeUtilisateurQueries.getTypeUtilisateurById, [type_utilisateur])

            if (resultType.rows[0].libelle === 'RESPONSABLE_ECOLE') {
                // Insert the new user into the database
                var hashPassword = bcrypt.hashSync(password);

                const results = await db.query(utilisateurQueries.addUtilisateur,
                    [nom, prenoms, sexe, email, telephone, hashPassword, type_utilisateur])
                
                let userId = results.rows[0].id
                //console.log(userId);

                const result = await db.query(utilisateurQueries.addEcole, [nom_ecole, userId])

                if (results.command === 'INSERT' && result.command === 'INSERT') {

                    // Send a welcome email to the new user
                    let transporter = nodemailer.createTransport({
                        host: "smtp.gmail.com",
                        port: 587,
                        secure: false,
                        service: 'gmail',
                        auth: {
                            user: process.env.USER_MAIL, // replace with your own email
                            pass: process.env.PASSWORD_USER_MAIL // replace with your own email password
                        },
                        tls: {
                            rejectUnauthorized: false
                        }
                    });

                    //envoie du message à l'utilisateur
                    let mailOptions = {
                        from: process.env.SENDER_MAIL, // sender address
                        to: req.body.email, // list of receivers
                        subject: 'ECOLE', // Subject line
                        text: "Inscription réussie avec succès ! ", // plain text body
                        html: `<p>${prenoms + ' ' + nom} une très chaleureuse bienvenue à vous sur la plateforme de notre école ! C\est agréable de vous avoir parmi nous ! </p><br> `
                    };

                    transporter.sendMail(mailOptions, (error, info) => {
                        if (error) {
                            //res.status(404).send(error);
                        } else {
                            res.status(200).send('Email envoyé: ' + info.response);
                        }
                    });

                    res.status(200).send("Responsable d'école crée avec succès !")

                } else {
                    res.status(404).send("Impossible d'ajouter le responsable d'école");
                }

            } else {

                // Insert the new user into the database
                var hashPassword = bcrypt.hashSync(password);

                const results = await db.query(utilisateurQueries.addUtilisateur,
                    [nom, prenoms, sexe, email, telephone, hashPassword, type_utilisateur])

                if (results.command === 'INSERT') {

                    // Send a welcome email to the new user
                    let transporter = nodemailer.createTransport({
                        host: "smtp.gmail.com",
                        port: 587,
                        secure: false,
                        service: 'gmail',
                        auth: {
                            user: process.env.USER_MAIL, // replace with your own email
                            pass: process.env.PASSWORD_USER_MAIL // replace with your own email password
                        },
                        tls: {
                            rejectUnauthorized: false
                        }
                    });

                    //envoie du message à l'utilisateur
                    let mailOptions = {
                        from: process.env.SENDER_MAIL, // sender address
                        to: req.body.email, // list of receivers
                        subject: 'ECOLE', // Subject line
                        text: "Inscription réussie avec succès ! ", // plain text body
                        html: `<p>${prenoms + ' ' + nom} une très chaleureuse bienvenue à vous sur la plateforme de notre école ! C\est agréable de vous avoir parmi nous ! </p><br> `
                    };

                    transporter.sendMail(mailOptions, (error, info) => {
                        if (error) {
                            //res.status(404).send("Email non envoyé");
                        } else {
                            res.status(200).send('Email envoyé: ' + info.response);
                        }
                    });

                    res.status(200).send("Utilisateur crée avec succès !")

                } else {
                    res.status(404).send("Impossible d'ajouter l'utilisateur");
                }
            }

        } catch (err) {

            res.status(404).json(err.message);

        }
    }
}


//modifier un utilisateur
module.exports.updateUtilisateur = async (req, res) => {
    const id = parseInt(req.params.id);
    const { nom, prenoms, sexe, email, telephone, type_utilisateur, nom_ecole } = req.body;

    const result = await db.query(utilisateurQueries.getUtilisateurById, [id])

    const noUtilisateurFound = !result.rows.length;

    if (noUtilisateurFound) {
        res.send("Cet utilisateur n'existe pas");

    } else {

        try {
            const resultType = await db.query(typeUtilisateurQueries.getTypeUtilisateurById, [type_utilisateur])

            if (resultType.rows[0].libelle === 'RESPONSABLE_ECOLE') {
                // Update the new user into the database

                const results = await db.query(utilisateurQueries.updateUtilisateur,
                    [nom, prenoms, sexe, email, telephone, type_utilisateur, id])

                const result = await db.query(utilisateurQueries.updateEcole, [nom_ecole, id])

                if (results.command === 'UPDATE' && result.command === 'UPDATE') {

                    res.status(200).send("Responsable d'école modifié avec succès !")

                } else {
                    res.status(404).send("Impossible de modifier le responsable d'école");
                }

            } else {
                // Update the new user into the database

                const results = await db.query(utilisateurQueries.updateUtilisateur,
                    [nom, prenoms, sexe, email, telephone, type_utilisateur, id])

                if (results.command === 'UPDATE') {

                    res.status(200).send("Utilisateur modifié avec succès !")

                } else {
                    res.status(404).send("Impossible de modifier l'utilisateur");
                }
            }
        } catch (err) {

            res.status(404).json(err.message);
        }
    }
}



//supprimer un utilisateur
module.exports.deleteUtilisateur = async(req, res) => {
    const id = parseInt(req.params.id);

    const results = await db.query(utilisateurQueries.getUtilisateurById, [id])
    //console.log(results);

    const noNiveauLyceeFound = !results.rows.length;
    if (noNiveauLyceeFound) {
        res.status(404).send("Impossible de supprimer cet utilisateur car il n'existe pas dans la base de données. ");
    } else {
        const result = await db.query(utilisateurQueries.deleteUtilisateur, [id])
        //console.log(result);
        if (result) {
            res.status(200).send("Utilisateur supprimé avec succès");
        } else {
            res.status(404).send("Erreur")
        }
    }
}






