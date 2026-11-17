# PERSONAL SYSTEM — THE FUTURE DATA MASTER

Application personnelle mobile-first, sans compte ni API obligatoire. Les données sont stockées localement dans le navigateur.

## Lancer l'application

**Recommandé (PWA et hors-ligne) :** servir le dossier par un serveur HTTP local ou un hébergement HTTPS statique. Ouvrir `index.html` directement (`file://`) permet un aperçu, mais les Service Workers/PWA et certaines notifications ne fonctionneront pas.

Avec Python installé :
```bash
python -m http.server 8000
```
Puis ouvrir `http://localhost:8000`.

Sur Android, ouvrir l'URL HTTPS dans Chrome ou un navigateur compatible, puis utiliser **Installer l'application** ou **Ajouter à l'écran d'accueil**.

## Données et sauvegardes

- IndexedDB est utilisé en priorité ; LocalStorage sert de repli.
- Settings → Exporter JSON pour sauvegarder.
- Settings → Importer une sauvegarde pour restaurer (remplace les données actuelles).
- Les données restent sur cet appareil et dans ce navigateur. Effacer les données du site peut les supprimer : exporter régulièrement.
- Pas de synchronisation cloud ni de connexion bancaire.

## Fonctionnalités incluses

- Dashboard et résumé quotidien.
- Missions CRUD, catégories, validation anti-double XP, historique et minuteur focus.
- Agenda avec vue hebdomadaire responsive, navigation entre les semaines, ajout rapide par jour, création, modification, suppression et contrôle des chevauchements.
- Learning Center : parcours Excel, SQL, Python, Power BI, Data Science et anglais avec chapitres, objectifs, exercices pratiques, notes personnelles, validation des leçons et progression calculée.
- Journal des sessions d'étude : durée, date, sujet et temps total cumulé par le Learning Center.
- Huit habitudes, historique et aperçu sur sept jours.
- Finance avancée : revenus/dépenses manuels, catégories, notes, filtres mensuels, budgets distincts par mois, alertes à 80 % et en cas de dépassement, objectif d’épargne, flux de trésorerie sur six mois et répartition des dépenses par catégorie.
- XP, niveaux, rangs et historique.
- Demande d'autorisation et test des notifications navigateur, rappel interne quand l'application est ouverte.
- Profil, horaires, import/export et réinitialisation avec confirmations.
- Cache PWA de base pour le fonctionnement hors connexion.

## Limites connues de cette version actuelle

- Les événements ne sont pas encore récurrents et les rappels ne sont pas garantis lorsque l’application est fermée.
- Pas encore de récurrence automatique des événements, de notifications planifiées fiables lorsque l'application est fermée, ni de synchronisation entre appareils.
- Le chronomètre est une session focus de 25 minutes, non associée à une mission précise.
- Les contenus pédagogiques intégrés sont des bases de travail : ils ne remplacent pas une formation complète ni la correction automatique des exercices. Les réponses sont conservées localement et doivent être vérifiées par l’apprenant ou un formateur.
- Les statistiques d'habitudes sont locales et ne calculent pas encore les séries (streaks) avancées.
- Les transactions restent manuelles : aucune connexion bancaire, import automatique de relevés, conversion de devises ni conseil financier. Les graphiques reflètent uniquement les opérations saisies.
- La police web peut ne pas se charger hors ligne ; le système utilise des polices de repli.


## Finance — mode d’emploi

1. Ouvre **Finance** puis **+ Transaction**.
2. Choisis revenu ou dépense, une catégorie, le montant, la date et une note facultative.
3. Sélectionne le mois à analyser pour voir ses totaux, son budget, les dépenses par catégorie et la comparaison des six derniers mois.
4. Définis un budget pour chaque mois ; une alerte apparaît au-delà de 80 % et une autre si le budget est dépassé.
5. Définis un objectif d’épargne. La progression est calculée à partir des revenus et dépenses enregistrés depuis le début : ce n’est pas un solde bancaire réel.

**Important :** conserve une seule devise de référence pour les comparaisons. Si tu saisis des montants en GNF et EUR dans le même registre, les totaux seront mathématiquement additionnés sans conversion.

## Confidentialité

Aucune donnée n'est envoyée à un serveur par le code de l'application. La police Google Fonts peut toutefois contacter Google lorsque la connexion est disponible ; elle est facultative et un fallback local est prévu.
